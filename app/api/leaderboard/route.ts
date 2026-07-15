import { NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/auth';
import {
  awardChallengePoints,
  getTopEntries,
  getUserRank,
} from '@/lib/leaderboard';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [entries, me] = await Promise.all([
    getTopEntries(100),
    getUserRank(session.user.id),
  ]);

  return NextResponse.json({ entries, me });
}

const awardSchema = z.object({
  day: z.number().int().min(1).max(10),
});

// The reward amount is fixed server-side (CHALLENGE_POINTS) and awarded at
// most once per (user, day) — the client only reports which day it finished.
export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = awardSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid day' }, { status: 400 });
  }

  const result = await awardChallengePoints(session.user.id, parsed.data.day);
  if (!result) {
    return NextResponse.json(
      { error: 'Leaderboard unavailable' },
      { status: 503 }
    );
  }

  return NextResponse.json(result, { status: result.awarded ? 201 : 200 });
}
