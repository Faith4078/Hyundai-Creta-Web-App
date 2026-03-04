"use client";

import StatCard from "./components/StatCard";
import QuickActions from "./components/QuickActions";
import RecentUsers from "./components/RecentUsers";
import GameManagement from "./components/GameManagement";
import PuzzleCompletionChart from "./components/PuzzleCompletionChart";
import UserActivityChart from "./components/UserActivityChart";
import { Clock, CheckCircle, Trophy, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        <StatCard
          title="متوسط الوقت"
          value="18m"
          subtitle="Avg. Time"
          percentage="3%"
          gradient="from-orange-500 to-orange-600"
          icon={Clock}
        />
        <StatCard
          title="ألعاب مكتملة"
          value="456"
          subtitle="Games Completed"
          percentage="15%"
          gradient="from-purple-500 to-purple-600"
          icon={Trophy}
        />
        <StatCard
          title="ألغاز محلولة"
          value="1,523"
          subtitle="Clues Solved"
          percentage="8%"
          gradient="from-green-500 to-green-600"
          icon={CheckCircle}
        />
        <StatCard
          title="إجمالي المستخدمين"
          value="2,847"
          subtitle="Total Users"
          percentage="12%"
          gradient="from-blue-500 to-blue-600"
          icon={Users}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full overflow-x-auto">
          <PuzzleCompletionChart />
        </div>
        <div className="w-full overflow-x-auto">
          <UserActivityChart />
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
          <RecentUsers />
        </div>
      </div>

      {/* Game Management */}
      <div className="mt-8 px-4 sm:px-6 lg:px-8 w-full">
        <GameManagement />
      </div>
    </div>
  );
}
