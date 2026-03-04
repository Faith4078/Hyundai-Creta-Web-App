import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  gradient: string; // e.g., "bg-[#f36d21]" or "bg-orange-500"
  icon: LucideIcon;
  percentage: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  gradient,
  icon: Icon,
  percentage,
}: StatCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl sm:rounded-[2.5rem] text-white shadow-2xl bg-linear-to-br ${gradient} h-auto sm:h-[180px] w-full`}
    >
      {/* Top Row: Percentage and Icon */}
      <div className="flex justify-between items-start">
        <span className="text-[12px] sm:text-[15px] font-medium opacity-80 mt-1">
          {percentage}
        </span>
        <div className="p-2 rounded-2xl sm:p-2.5 bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon size={20} strokeWidth={2.5} />
        </div>
      </div>

      {/* Bottom Row: Value and Titles aligned right */}
      <div className="flex flex-col items-end text-right mt-2 sm:mt-0">
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight leading-none mb-1">
          {value}
        </h3>
        <p className="text-[11px] sm:text-[13px] font-bold opacity-90 leading-tight">
          {title}
        </p>
        {subtitle && (
          <p className="text-[9px] sm:text-[10px] opacity-70 mt-0.5 font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
