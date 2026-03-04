"use client";

import { useState } from "react";
import clsx from "clsx";
import Sidebar from "./admindashboard/components/Sidebar";
import Header from "./admindashboard/components/Header";
import Footer from "./admindashboard/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b0f1a] text-white">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div
        className={clsx(
          "flex-1 flex flex-col transition-all duration-300",
          "lg:mr-80"
        )}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6 flex-1">{children}</main>
        <Footer/>
      </div>
    </div>
  );
}
