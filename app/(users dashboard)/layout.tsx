import type { Metadata } from 'next';

import '../globals.css';
import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import UserDashboardHeader from '@/components/user-dashboard/user-dashboard-header';

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
      <UserDashboardHeader />
      {children}
      <Footer />
    </>
  );
}
