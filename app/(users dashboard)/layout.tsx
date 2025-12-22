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
    <>
      <UserDashboardHeader children={<AvatarBadge />} />

      {children}

      <Footer />
    </>
  );
}
