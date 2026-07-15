import 'server-only';
import { count, desc, gte, sql } from 'drizzle-orm';
import { db } from '@/db';
import { leads, users } from '@/db/schema/app-schema';

const TOTAL_DAYS = 10;
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

const ARABIC_WEEKDAYS = [
  'الأحد',
  'الإثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت',
];

const STAGE_COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444'];

export interface AdminStats {
  totalUsers: number;
  newThisWeek: number;
  cluesSolved: number;
  gamesCompleted: number;
  leadsCaptured: number;
  leadsSynced: number;
}

export interface ActivityPoint {
  name: string;
  users: number;
}

export interface CompletionPoint {
  name: string;
  value: number;
  color: string;
}

export interface RecentUserRow {
  name: string;
  email: string;
  progress: number;
  status: string;
  statusColor: string;
  time: string;
  avatar: string;
}

export interface AdminDashboardData {
  stats: AdminStats;
  activity: ActivityPoint[];
  completion: CompletionPoint[];
  recentUsers: RecentUserRow[];
}

async function safe<T>(query: Promise<T>, fallback: T): Promise<T> {
  try {
    return await query;
  } catch (error) {
    console.error('[admin-stats] Query failed:', error);
    return fallback;
  }
}

function relativeTimeArabic(from: Date): string {
  const diffMinutes = Math.max(
    0,
    Math.floor((Date.now() - from.getTime()) / 60_000)
  );
  if (diffMinutes < 60) return `منذ ${diffMinutes} دقيقة`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `منذ ${diffHours} ساعة`;
  return `منذ ${Math.floor(diffHours / 24)} يوم`;
}

function statusFor(days: number): { status: string; statusColor: string } {
  if (days >= TOTAL_DAYS)
    return { status: 'مكتمل', statusColor: 'bg-purple-500/20 text-purple-500' };
  if (days >= 1)
    return { status: 'نشط', statusColor: 'bg-emerald-500/20 text-emerald-500' };
  return {
    status: 'قيد التقدم',
    statusColor: 'bg-orange-500/20 text-orange-500',
  };
}

export async function getAdminDashboardData(): Promise<AdminDashboardData> {
  const weekAgo = new Date(Date.now() - WEEK_MS);

  const [totalsRow] = await safe(
    db
      .select({
        total: count(),
        newWeek: sql<number>`count(*) filter (where ${users.createdAt} >= ${weekAgo})::int`,
        clues: sql<number>`coalesce(sum(${users.days}), 0)::int`,
        completed: sql<number>`count(*) filter (where ${users.days} >= ${TOTAL_DAYS})::int`,
        stage1: sql<number>`count(*) filter (where ${users.days} >= 1)::int`,
        stage2: sql<number>`count(*) filter (where ${users.days} >= 2)::int`,
        stage3: sql<number>`count(*) filter (where ${users.days} >= 3)::int`,
        stage4: sql<number>`count(*) filter (where ${users.days} >= 4)::int`,
        stage5: sql<number>`count(*) filter (where ${users.days} >= 5)::int`,
      })
      .from(users),
    [
      {
        total: 0,
        newWeek: 0,
        clues: 0,
        completed: 0,
        stage1: 0,
        stage2: 0,
        stage3: 0,
        stage4: 0,
        stage5: 0,
      },
    ]
  );

  // The leads table only exists once its migration has run — degrade to zeros.
  const [leadsRow] = await safe(
    db
      .select({
        total: count(),
        synced: sql<number>`count(*) filter (where ${leads.sync_status} = 'synced')::int`,
      })
      .from(leads),
    [{ total: 0, synced: 0 }]
  );

  const registrationRows = await safe(
    db
      .select({
        day: sql<string>`to_char(${users.createdAt}, 'YYYY-MM-DD')`,
        registrations: count(),
      })
      .from(users)
      .where(gte(users.createdAt, weekAgo))
      .groupBy(sql`to_char(${users.createdAt}, 'YYYY-MM-DD')`),
    []
  );
  const countByDay = new Map(
    registrationRows.map((row) => [row.day, Number(row.registrations)])
  );
  const activity: ActivityPoint[] = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000);
    const key = date.toISOString().slice(0, 10);
    return {
      name: ARABIC_WEEKDAYS[date.getDay()],
      users: countByDay.get(key) ?? 0,
    };
  });

  // Share of participants who have reached each of the first five clues.
  const stageCounts = [
    totalsRow.stage1,
    totalsRow.stage2,
    totalsRow.stage3,
    totalsRow.stage4,
    totalsRow.stage5,
  ];
  const completion: CompletionPoint[] = stageCounts.map((reached, i) => ({
    name: `اللغز ${i + 1}`,
    value:
      totalsRow.total > 0 ? Math.round((reached / totalsRow.total) * 100) : 0,
    color: STAGE_COLORS[i],
  }));

  const recentRows = await safe(
    db
      .select({
        name: users.full_name,
        email: users.email_address,
        image: users.user_image,
        createdAt: users.createdAt,
        days: users.days,
      })
      .from(users)
      .orderBy(desc(users.createdAt))
      .limit(6),
    []
  );
  const recentUsers: RecentUserRow[] = recentRows.map((row) => {
    const days = row.days ?? 0;
    return {
      name: row.name,
      email: row.email,
      progress: Math.min(days * 10, 100),
      ...statusFor(days),
      time: relativeTimeArabic(row.createdAt),
      avatar:
        row.image ?? `https://i.pravatar.cc/150?u=${encodeURIComponent(row.email)}`,
    };
  });

  return {
    stats: {
      totalUsers: totalsRow.total,
      newThisWeek: totalsRow.newWeek,
      cluesSolved: totalsRow.clues,
      gamesCompleted: totalsRow.completed,
      leadsCaptured: leadsRow.total,
      leadsSynced: leadsRow.synced,
    },
    activity,
    completion,
    recentUsers,
  };
}
