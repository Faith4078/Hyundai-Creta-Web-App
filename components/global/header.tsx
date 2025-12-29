'use client';
import { navLinks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileMenuSidebar from './mobile-menu-trigger';
import { authClient } from '@/lib/better-auth/auth-client';
import { DropdownMenuDemo, UserAvatar } from '../user-dashboard/user-avatar';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function Header() {
  const { data: session, isPending, error } = authClient.useSession();

  if (session?.user) {
    const userName = session.user.username;
    const userImage = session.user.image || '/assets/user-avatar.svg';
    return (
      <header className=" w-full h-[103px] flex flex-col justify-center bg-black backdrop-blur-md border-b border-white/10 shadow-lg">
        <nav className="max-w-[1296px] w-full mx-auto px-4 flex justify-between items-center">
          <MobileMenuSidebar />
          <div
            id="sign-up-button-group"
            className="hidden lg:flex gap-x-[15px]"
          >
            <div className="w-[151px] h-[49px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]">
              <Button
                suppressHydrationWarning
                type="button"
                onClick={() => {
                  authClient.signOut();
                  toast.success('Logout Sucessful');
                }}
                className="w-full h-full flex items-center gap-x-4 justify-center rounded-[10px] bg-[#0A0A0A] text-white font-normal font-cairo text-base leading-24 hover:cursor-pointer"
              >
                تسجيل الخروج
              </Button>
            </div>
          </div>
          {/* navlinks */}
          <div className="hidden lg:flex items-center gap-x-[50px]">
            {navLinks.map(({ link }, index) => (
              <Link
                href={'#'}
                className="text-white font-cairo text-center text-[1.25rem] leading-[6rem] font-normal"
                key={index}
              >
                {link}
              </Link>
            ))}
          </div>
          {/* Site logo */}
          <div className="flex gap-x-3">
            {/* <DropdownMenuDemo /> */}
            <UserAvatar />
            <Link href={'/'}>
              <Image
                src={'/assets/hyundai-logo.png'}
                width={199}
                height={28}
                style={{ width: 'auto', height: 'auto' }}
                alt="hyundai logo"
              />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
  if (isPending)
    return (
      <header className=" w-full h-[103px] flex flex-col justify-center bg-black backdrop-blur-md border-b border-white/10 shadow-lg">
        <nav className="max-w-[1296px] w-full mx-auto px-4 flex justify-between items-center">
          <MobileMenuSidebar />
          <div
            id="sign-up-button-group"
            className="hidden lg:flex gap-x-[15px]"
          >
            <div className="w-[151px] h-[49px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]">
              <Button
                suppressHydrationWarning
                type="button"
                onClick={() => {
                  authClient.signOut();
                  toast.success('Logout Sucessful');
                }}
                className="w-full h-full flex items-center gap-x-4 justify-center rounded-[10px] bg-[#0A0A0A] text-white font-normal font-cairo text-base leading-24 hover:cursor-pointer"
              >
                تسجيل الخروج
              </Button>
            </div>
          </div>
          {/* navlinks */}
          <div className="hidden lg:flex items-center gap-x-[50px]">
            {navLinks.map(({ link }, index) => (
              <Link
                href={'#'}
                className="text-white font-cairo text-center text-[1.25rem] leading-[6rem] font-normal"
                key={index}
              >
                {link}
              </Link>
            ))}
          </div>
          {/* Site logo */}
          <div className="flex gap-x-3">
            {/* <DropdownMenuDemo /> */}
            <UserAvatar />
            <Link href={'/'}>
              <Image
                src={'/assets/hyundai-logo.png'}
                width={199}
                height={28}
                style={{ width: 'auto', height: 'auto' }}
                alt="hyundai logo"
              />
            </Link>
          </div>
        </nav>
      </header>
    );
  if (error)
    return (
      <header className=" w-full h-[103px] flex flex-col justify-center bg-black backdrop-blur-md border-b border-white/10 shadow-lg">
        <nav className="max-w-[1296px] w-full mx-auto px-4 flex justify-between items-center">
          <MobileMenuSidebar />
          <div
            id="sign-up-button-group"
            className="hidden lg:flex gap-x-[15px]"
          >
            <Link
              href={'/sign-up'}
              className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-[134px] h-[49px] rounded-[10px] text-[#0F172A] text-center flex items-center justify-center text-[1.25rem] font-black leading-[6rem] hover:cursor-pointer"
            >
              سجل الآن
            </Link>
            <div className="w-[151px] h-[49px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]">
              <Link
                href={'/sign-in'}
                className="w-full h-full flex items-center gap-x-4 justify-center rounded-[10px] bg-[#0A0A0A] text-white font-normal font-cairo text-base leading-24 hover:cursor-pointer"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
          {/* navlinks */}
          <div className="hidden lg:flex items-center gap-x-[50px]">
            {navLinks.map(({ link }, index) => (
              <Link
                href={'#'}
                className="text-white font-cairo text-center text-[1.25rem] leading-[6rem] font-normal"
                key={index}
              >
                {link}
              </Link>
            ))}
          </div>
          {/* Site logo */}
          <Link href={'/'}>
            <Image
              src={'/assets/hyundai-logo.png'}
              width={199}
              height={28}
              style={{ width: 'auto', height: 'auto' }}
              alt="hyundai logo"
            />
          </Link>
        </nav>
      </header>
    );
  return (
    <header className=" w-full h-[103px] flex flex-col justify-center bg-black backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="max-w-[1296px] w-full mx-auto px-4 flex justify-between items-center">
        <MobileMenuSidebar />
        <div id="sign-up-button-group" className="hidden lg:flex gap-x-[15px]">
          <Link
            href={'/sign-up'}
            className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-[134px] h-[49px] rounded-[10px] text-[#0F172A] text-center flex items-center justify-center text-[1.25rem] font-black leading-[6rem] hover:cursor-pointer"
          >
            سجل الآن
          </Link>
          <div className="w-[151px] h-[49px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]">
            <Link
              href={'/sign-in'}
              className="w-full h-full flex items-center gap-x-4 justify-center rounded-[10px] bg-[#0A0A0A] text-white font-normal font-cairo text-base leading-24 hover:cursor-pointer"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
        {/* navlinks */}
        <div className="hidden lg:flex items-center gap-x-[50px]">
          {navLinks.map(({ link }, index) => (
            <Link
              href={'#'}
              className="text-white font-cairo text-center text-[1.25rem] leading-[6rem] font-normal"
              key={index}
            >
              {link}
            </Link>
          ))}
        </div>
        {/* Site logo */}
        <Link href={'/'}>
          <Image
            src={'/assets/hyundai-logo.png'}
            width={199}
            height={28}
            style={{ width: 'auto', height: 'auto' }}
            alt="hyundai logo"
          />
        </Link>
      </nav>
    </header>
  );
}
