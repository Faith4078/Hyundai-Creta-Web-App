'use client';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarTrigger } from '../ui/sidebar';

export default function UserDashboardHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <nav className="px-4 bg-black">
      <div className="max-w-[1286px] w-full mx-auto h-[79px] lg:h-[113px] flex items-center justify-between">
        {/* Children always on the left */}
        <div>{children}</div>

        {/* Desktop: logo + sidebar */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href={'/'}>
            <Image
              src={'/assets/hyundai-logo.png'}
              width={282}
              height={28}
              className="hover:opacity-80 transition-opacity duration-300"
              alt="logo"
            />
          </Link>
          <SidebarTrigger className="text-white border border-white/10 hover:bg-white/10 cursor-pointer size-10" />
        </div>

        {/* Mobile: logo + sidebar */}
        <div className="flex lg:hidden items-center gap-2">
          <Link href={'/'}>
            <Image
              src={'/assets/hyundai-logo.png'}
              width={113}
              height={16}
              className="hover:opacity-80 transition-opacity duration-300"
              alt="logo"
            />
          </Link>
          <SidebarTrigger className="text-white border border-white/10 hover:bg-white/10 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
