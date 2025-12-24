import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const _cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic'],
});
const _inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

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
    <html lang="ar" suppressHydrationWarning>
      <body className={`${_cairo.variable} ${_inter.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
