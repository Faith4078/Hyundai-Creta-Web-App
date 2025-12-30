import type { Metadata } from 'next';

import '../globals.css';
import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import UserDashboardHeader from '@/components/user-dashboard/user-dashboard-header';
import AvatarBadge from '@/components/user-dashboard/avatar-badge';

import { AppSidebar } from '@/components/app-sidebar';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'Creta | Dashboard',
  description:
    'Welcome to the official Hyundai Creta Treasure Hunt Campaign website ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false} className="no-sidebar-gap">
      <AppSidebar side="right" className="bg-[#0b1323] text-white" />

      <SidebarInset className="bg-black min-h-screen">
        <UserDashboardHeader
          children={
            <div className="flex items-center gap-2">
              <AvatarBadge />
            </div>
          }
        />        

        {children}

        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
