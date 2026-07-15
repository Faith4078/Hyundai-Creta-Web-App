import { auth } from '@/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTopEntries, getUserRank } from '@/lib/leaderboard';
import LeaderboardClient from './leaderboard-client';

export const dynamic = 'force-dynamic';

export default async function LeaderboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect('/sign-in');
  }

  const [entries, me] = await Promise.all([
    getTopEntries(100),
    getUserRank(session.user.id),
  ]);

  return (
    <LeaderboardClient
      initialEntries={entries}
      initialMe={me}
      currentUserId={session.user.id}
    />
  );
}
