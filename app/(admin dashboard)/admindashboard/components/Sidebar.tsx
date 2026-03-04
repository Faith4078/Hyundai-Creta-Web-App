"use client";

import clsx from "clsx";
import Image from "next/image";
import { Home, Puzzle, Users, Gamepad, Settings } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  const navItems = [
    { label: "لوحة الإحصائيات", icon: <Home size={20} /> },
    { label: "إدارة الألغاز", icon: <Puzzle size={20} /> },
    { label: "سجلات المستخدمين", icon: <Users size={20} /> },
    { label: "إدارة اللعبة", icon: <Gamepad size={20} /> },
    { label: "الإعدادات", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={clsx(
          "fixed top-0 right-0 z-50 h-screen flex flex-col justify-between transition-transform duration-300 ease-in-out",
          "bg-linear-to-b from-blue-900 to-blue-800 p-4 sm:p-6 lg:p-8",
          "w-64 sm:w-72 lg:w-80",
          {
            "translate-x-0": open,
            "translate-x-full lg:translate-x-0": !open,
          }
        )}
      >
        {/* Header / Logo */}
        <div className="text-right">
          <Image
            src="/assets/hyundai-logo.png"
            width={200}
            height={50}
            className="w-auto h-auto mb-4 sm:mb-5"
            alt="HYUNDAI logo"
          />

          <p className="text-white text-base sm:text-lg font-semibold mb-1 leading-snug">
            لوحة تحكم دله / هيونداي
          </p>
          <p className="text-white text-sm sm:text-base font-medium mb-4 leading-snug">
            DALLAH / Hyundai Admin
          </p>

          {/* Divider */}
          <div className="border-t border-white/20 mb-4 sm:mb-6" />

          {/* Navigation */}
          <nav className="space-y-2 sm:space-y-4 text-sm sm:text-base">
            {navItems.map(({ label, icon }) => (
              <button
                key={label}
                className="w-full flex items-center justify-end px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-white/10 text-white cursor-pointer transition"
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  <span>{label}</span>
                  {icon}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer / Profile */}
        <div className="mt-4 sm:mt-6 flex items-center justify-end gap-2 sm:gap-3">
          <div className="text-right">
            <span className="text-white font-semibold text-sm sm:text-lg block">
              مدير النظام
            </span>
            <span className="text-gray-300 text-[10px] sm:text-sm block">
              admin@dallah.com
            </span>
          </div>

          <Image
            src="/assets/avatar.svg"
            alt="Profile"
            width={40} // smaller on mobile
            height={40}
            className="sm:w-14 sm:h-14 rounded-full object-cover"
          />
        </div>
      </aside>
    </>
  );
}
