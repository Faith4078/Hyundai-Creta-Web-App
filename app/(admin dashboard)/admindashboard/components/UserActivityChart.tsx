"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ActivityPoint {
  name: string;
  users: number;
}

export default function UserActivityChart({ data }: { data: ActivityPoint[] }) {
  return (
    <div className="bg-[#1e2235] rounded-4xl p-4 sm:p-6 flex flex-col shadow-xl w-full h-[300px] sm:h-[380px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 px-2">
        <span className="text-gray-500 text-base sm:text-xl font-bold">📈</span>
        <div className="text-right mt-2 sm:mt-0">
          <h3 className="text-white text-lg sm:text-xl font-bold">نشاط المستخدمين</h3>
          <p className="text-gray-500 text-xs sm:text-sm">
            User Activity - Last 7 Days
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#2d334d" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            reversed
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            allowDecimals={false}
          />
          <Tooltip />
          <Line
            type="linear"
            dataKey="users"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 3, fill: "#3b82f6", strokeWidth: 2, stroke: "#1e2235" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
