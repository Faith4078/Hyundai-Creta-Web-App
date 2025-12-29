import DashboardClient from './dashboard-client';
import { auth } from '@/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import nameTranslation from '@/lib/name-translation';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect('/sign-in');
  }
  const userName = session?.user?.username;
  const welcomeMessage = await nameTranslation(userName || '');
  return <DashboardClient welcomeMessage={welcomeMessage} />;
}
