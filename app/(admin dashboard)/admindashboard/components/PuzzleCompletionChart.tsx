"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface CompletionPoint {
  name: string;
  value: number;
  color: string;
}

export default function PuzzleCompletionChart({
  data,
}: {
  data: CompletionPoint[];
}) {
  return (
    <div className="bg-[#1e2235] rounded-4xl p-4 sm:p-6 flex flex-col shadow-xl w-full h-[300px] sm:h-[380px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 px-2">
        <span className="text-gray-500 text-base sm:text-xl font-bold">📊</span>
        <div className="text-right mt-2 sm:mt-0">
          <h3 className="text-white text-lg sm:text-xl font-bold">معدل حل الألغاز</h3>
          <p className="text-gray-500 text-xs sm:text-sm">Clue Completion Rate</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#2d334d" strokeDasharray="0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            reversed
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 10 }} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={30}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
