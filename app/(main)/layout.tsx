import type { Metadata } from 'next';

import '../globals.css';
import Footer from '@/components/global/footer';
import Header from '@/components/global/header';

export const metadata: Metadata = {
  title: 'Creta',
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
