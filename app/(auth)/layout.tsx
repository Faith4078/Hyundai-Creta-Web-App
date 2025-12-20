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
      <div className="bg-gradient-to-r from-[#0F1520] via-[#0F172A] to-[#000001] h-[113px] flex items-center justify-center">
        <p className="text-center font-cairo text-white font-normal text-[0.849rem] leading-[1.16813rem] lg:text-[1.25rem] lg:leading-8.25">
          © 2025 هيونداي البحرين – جميع الحقوق محفوظة
        </p>
      </div>
    </>
  );
}
