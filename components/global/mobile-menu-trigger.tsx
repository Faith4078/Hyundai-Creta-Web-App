'use client';

import { sidebarNavlinks } from '@/lib/data';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Drawer } from 'vaul';

export default function MobileMenuSidebar() {
  return (
    // <Drawer.Root direction="right">
    //   <Drawer.Trigger className=" relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden   text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white lg:hidden">
    //     <Image
    //       src={'/assets/hambuger-icon.svg'}
    //       width={36}
    //       height={36}
    //       alt="hyundai logo"
    //     />
    //   </Drawer.Trigger>
    //   <Drawer.Portal>
    //     <Drawer.Overlay className="fixed inset-0 bg-black/70" />
    //     <Drawer.Content
    //       className="right-2 top-2 bottom-2 px-[18px] fixed z-10 outline-none max-w-[310px] w-full flex"
    //       // The gap between the edge of the screen and the drawer is 8px in this case.
    //       style={
    //         { '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties
    //       }
    //     >
    //       <div className="bg-[#0E1629] h-full w-full grow p-5 flex flex-col ">
    //         <div className=" w-full ">
    //           <Drawer.Title className="flex! justify-between! items-center! w-full! gap-x-[90px]">
    //             {/* Site logo */}

    //             <Drawer.Close asChild>
    //               <PlusIcon
    //                 className="text-white rotate-45 size-[36px]"
    //                 color="#fff"
    //                 width={36}
    //                 height={36}
    //               />
    //             </Drawer.Close>
    //             <Drawer.Close asChild>
    //               <Link href={'/'}>
    //                 <Image
    //                   src={'/assets/hyundai-logo.png'}
    //                   width={119}
    //                   height={16}
    //                   alt="hyundai logo"
    //                 />
    //               </Link>
    //             </Drawer.Close>
    //           </Drawer.Title>
    //           <div className="flex flex-col gap-y-[39px]">
    //             <Drawer.Close>
    //               <Link href={'/'}>test</Link>
    //             </Drawer.Close>
    //           </div>
    //         </div>
    //       </div>
    //     </Drawer.Content>
    //   </Drawer.Portal>
    // </Drawer.Root>
    <Drawer.Root direction="right">
      <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white lg:hidden">
        <Image
          src={'/assets/hambuger-icon.svg'}
          width={36}
          height={36}
          alt="hyundai logo"
        />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/70" />
        <Drawer.Content
          className="right-0 top-0 bottom-0 fixed z-10 outline-none w-full max-w-[295px] h-full flex"
          style={
            { '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties
          }
        >
          <div className="bg-[#0E1629] h-full w-full flex flex-col">
            {/* Fixed header - won't scroll */}
            <div className="p-5 flex-shrink-0">
              <Drawer.Title className="!flex !justify-between !items-center w-full">
                {/* Site logo */}
                <Drawer.Close asChild>
                  <button
                    type="button"
                    className="p-0 border-0 bg-transparent cursor-pointer"
                  >
                    <PlusIcon
                      className="text-white rotate-45 size-[36px]"
                      color="#fff"
                      width={36}
                      height={36}
                    />
                  </button>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <Link href={'/'}>
                    <Image
                      src={'/assets/hyundai-logo.png'}
                      width={119}
                      height={16}
                      alt="hyundai logo"
                    />
                  </Link>
                </Drawer.Close>
              </Drawer.Title>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 pb-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex flex-col gap-y-[39px] pt-[39px]">
                {sidebarNavlinks.map(({ link }, index) => (
                  <Drawer.Close asChild key={index}>
                    <Link
                      href={'/'}
                      dir="rtl"
                      className="text-white font-cairo font-normal text-[1.25rem] pb-[39px] border-white/25 border-b leading-[6rem]"
                    >
                      {link}
                    </Link>
                  </Drawer.Close>
                ))}
              </div>
              {/* auth buttons */}
              <div
                id-="sign-up-button-group"
                className="my-[39px] flex justify-between"
              >
                <Link
                  href={'/sign-up'}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-[106px] h-[38px] rounded-[7px] text-[#0F172A] text-center flex items-center justify-center text-[0.99rem] font-black leading-[4.76rem] hover:cursor-pointer"
                >
                  سجل الآن
                </Link>
                <div className="w-[119px] h-[38px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[7px] p-[1.5px] ">
                  <Link
                    href={'/sign-in'}
                    className="w-full h-full flex items-center gap-x-4 justify-center rounded-[7px] bg-[#0A0A0A] text-white font-normal font-cairo text-[0.99rem] leading-[4.76rem] hover:cursor-pointer"
                  >
                    تسجيل الدخول
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
