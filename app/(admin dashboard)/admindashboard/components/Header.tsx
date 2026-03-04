"use client";

import { Menu } from "lucide-react";

export default function Header({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-2 sm:gap-4 flex-wrap">

        {/* Action Button */}
        <button className="bg-blue-600 hover:bg-blue-700 transition px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base text-white font-semibold shrink-0">
          تحديث البيانات
        </button>

        {/* Title + Menu */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 justify-end">
          <div className="flex flex-col text-right truncate">
            <h1 className="text-base sm:text-lg font-semibold text-white truncate">
              لوحة الإحصائيات والتحليلات
            </h1>
            <p className="text-xs sm:text-sm text-white/70 truncate">
              Analytics Dashboard - Real-time Game Statistics
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded hover:bg-white/10 transition shrink-0"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
