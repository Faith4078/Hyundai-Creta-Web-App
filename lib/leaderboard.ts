import 'server-only';
import Redis from 'ioredis';
import { inArray } from 'drizzle-orm';
import { db } from '@/db';
import { users } from '@/db/schema/app-schema';

const LEADERBOARD_KEY = 'leaderboard:campaign';
const AWARDED_KEY_PREFIX = 'leaderboard:awarded:';

/** Points granted for completing one daily challenge. */
export const CHALLENGE_POINTS = 15;

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  score: number;
}

export interface UserRank {
  rank: number;
  score: number;
}

// Reuse one connection across hot reloads in dev and across invocations
// that land on a warm serverless instance in production.
const globalForRedis = globalThis as unknown as { redis?: Redis };

function getRedis(): Redis | null {
  if (!process.env.REDIS_URL) return null;
  if (!globalForRedis.redis) {
    const client = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 2,
      connectTimeout: 5000,
    });
    client.on('error', (error) => {
      console.error('[leaderboard] Redis error:', error.message);
    });
    globalForRedis.redis = client;
  }
  return globalForRedis.redis;
}

/**
 * Award points to a user. Call this wherever a challenge is completed
 * (e.g. the QR scan success path). Returns the user's new total score,
 * or null when Redis is not configured.
 */
export async function addPoints(
  userId: string,
  points: number
): Promise<number | null> {
  const redis = getRedis();
  if (!redis) return null;
  const newScore = await redis.zincrby(LEADERBOARD_KEY, points, userId);
  return Number(newScore);
}

/**
 * Award the fixed challenge reward for a given day, at most once per
 * (user, day) — a resubmitted or replayed request cannot double-award.
 * Returns the user's new total, the unchanged total when the day was
 * already awarded, or null when Redis is not configured.
 */
export async function awardChallengePoints(
  userId: string,
  day: number
): Promise<{ score: number; awarded: boolean } | null> {
  const redis = getRedis();
  if (!redis) return null;
  try {
    const firstAward = await redis.sadd(`${AWARDED_KEY_PREFIX}${userId}`, day);
    if (firstAward === 0) {
      const score = await redis.zscore(LEADERBOARD_KEY, userId);
      return { score: Number(score ?? 0), awarded: false };
    }
    const newScore = await redis.zincrby(
      LEADERBOARD_KEY,
      CHALLENGE_POINTS,
      userId
    );
    return { score: Number(newScore), awarded: true };
  } catch (error) {
    console.error('[leaderboard] Failed to award points:', error);
    return null;
  }
}

/**
 * Top N entries, highest score first, with display names joined from Postgres.
 */
export async function getTopEntries(limit = 100): Promise<LeaderboardEntry[]> {
  const redis = getRedis();
  if (!redis) return [];
  try {
    const flat = await redis.zrevrange(
      LEADERBOARD_KEY,
      0,
      limit - 1,
      'WITHSCORES'
    );
    if (flat.length === 0) return [];

    const ids: string[] = [];
    const scores: number[] = [];
    for (let i = 0; i < flat.length; i += 2) {
      ids.push(flat[i]);
      scores.push(Number(flat[i + 1]));
    }

    const rows = await db
      .select({
        id: users.id,
        displayUsername: users.displayUsername,
        username: users.username,
        full_name: users.full_name,
      })
      .from(users)
      .where(inArray(users.id, ids));
    const nameById = new Map(
      rows.map((row) => [
        row.id,
        row.displayUsername || row.username || row.full_name,
      ])
    );

    return ids.map((userId, i) => ({
      rank: i + 1,
      userId,
      name: nameById.get(userId) ?? 'مشارك',
      score: scores[i],
    }));
  } catch (error) {
    console.error('[leaderboard] Failed to read leaderboard:', error);
    return [];
  }
}

/**
 * The given user's rank (1-based) and score, or null if they have no score yet.
 */
export async function getUserRank(userId: string): Promise<UserRank | null> {
  const redis = getRedis();
  if (!redis) return null;
  try {
    const [rank, score] = await Promise.all([
      redis.zrevrank(LEADERBOARD_KEY, userId),
      redis.zscore(LEADERBOARD_KEY, userId),
    ]);
    if (rank === null || score === null) return null;
    return { rank: rank + 1, score: Number(score) };
  } catch (error) {
    console.error('[leaderboard] Failed to read user rank:', error);
    return null;
  }
}
