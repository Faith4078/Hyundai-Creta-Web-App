'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function UserDashboardHeader({
  children,
}: {
  children: ReactNode;
}) {
  /*
  Note: this component is client component importing a server component and to avoid
  converting th server component to client accidentally which happen if i import the server component directly,
  I am passing it as a prop which will make sure the serer component I want in this component retain its status as 
  a server component

  */
  return (
    <nav className="px-4 bg-black ">
      <div className="max-w-[1286px] w-full mx-auto h-[79px] lg:h-[113px] flex items-center justify-between">
        {children}
        {/* logo */}
        <Link href={'/'} className="hidden lg:block">
          <Image
            src={'/assets/hyundai-logo.png'}
            width={282}
            height={28}
            className="hidden lg:block hover:opacity-80 transition-opacity duration-300"
            alt="notifications icon"
          />
        </Link>
        <Link href={'/'} className="block lg:hidden">
          <Image
            src={'/assets/hyundai-logo.png'}
            width={113}
            height={16}
            className="block lg:hidden hover:opacity-80 transition-opacity duration-300"
            alt="notifications icon"
          />
        </Link>
      </div>
    </nav>
  );
}
