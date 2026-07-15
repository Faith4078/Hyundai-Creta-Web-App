import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminDashboardData } from "@/lib/admin-stats";
import StatCard from "./components/StatCard";
import QuickActions from "./components/QuickActions";
import RecentUsers from "./components/RecentUsers";
import GameManagement from "./components/GameManagement";
import PuzzleCompletionChart from "./components/PuzzleCompletionChart";
import UserActivityChart from "./components/UserActivityChart";
import { CheckCircle, Trophy, UserPlus, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  const { stats, activity, completion, recentUsers } =
    await getAdminDashboardData();

  const pct = (part: number, whole: number) =>
    whole > 0 ? `${Math.round((part / whole) * 100)}%` : "0%";

  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        <StatCard
          title="العملاء المحتملون"
          value={stats.leadsCaptured.toLocaleString()}
          subtitle="Leads Captured"
          percentage={pct(stats.leadsSynced, stats.leadsCaptured)}
          gradient="from-orange-500 to-orange-600"
          icon={UserPlus}
        />
        <StatCard
          title="ألعاب مكتملة"
          value={stats.gamesCompleted.toLocaleString()}
          subtitle="Games Completed"
          percentage={pct(stats.gamesCompleted, stats.totalUsers)}
          gradient="from-purple-500 to-purple-600"
          icon={Trophy}
        />
        <StatCard
          title="ألغاز محلولة"
          value={stats.cluesSolved.toLocaleString()}
          subtitle="Clues Solved"
          percentage={pct(stats.cluesSolved, stats.totalUsers * 10)}
          gradient="from-green-500 to-green-600"
          icon={CheckCircle}
        />
        <StatCard
          title="إجمالي المستخدمين"
          value={stats.totalUsers.toLocaleString()}
          subtitle="Total Users"
          percentage={pct(stats.newThisWeek, stats.totalUsers)}
          gradient="from-blue-500 to-blue-600"
          icon={Users}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full overflow-x-auto">
          <PuzzleCompletionChart data={completion} />
        </div>
        <div className="w-full overflow-x-auto">
          <UserActivityChart data={activity} />
        </div>
      </div>

      {/* Quick Actions & Recent Users */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8 px-4 sm:px-6 lg:px-8">
        {/* QuickActions */}
        <div className="xl:col-span-1">
          <QuickActions />
        </div>

        {/* RecentUsers */}
        <div className="xl:col-span-2 w-full">
          <RecentUsers users={recentUsers} />
        </div>
      </div>

      {/* Game Management */}
      <div className="mt-8 px-4 sm:px-6 lg:px-8 w-full">
        <GameManagement />
      </div>
    </div>
  );
}
