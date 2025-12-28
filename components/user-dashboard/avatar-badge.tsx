'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { authClient } from '@/lib/better-auth/auth-client';
import { DropdownMenuDemo } from './user-avatar';

export default function AvatarBadge() {
  const { data: session, isPending, error } = authClient.useSession();

  if (session?.user) {
    const userName = session.user.username;
    const userImage = session.user.image || '/assets/user-avatar.svg';

    return (
      <div className="flex items-center cursor-pointer group">
        <div className="flex flex-col gap-y-1 lg:gap-y-2 items-end">
          <h5 className="text-white font-cairo font-bold text-center text-[0.7rem]  lg:text-[1.25rem] leading-[1rem] transition-colors duration-300 group-hover:text-blue-400">
            {userName}
          </h5>
          <p className="font-cairo text-white text-center font-normal text-[0.5rem]  lg:text-[0.875rem] leading-[0.8rem] transition-colors duration-300 group-hover:text-blue-300">
            المستكشف المستوى 3
          </p>
        </div>
        {/* <Avatar className="ml-[16px] mr-[29px]">
          <AvatarImage
            src={'/assets/user-avatar.svg'}
            width={106}
            height={106}
          />
          <AvatarFallback className="hidden lg:block">
            <AvatarImage
              src="/assets/user-avatar.svg"
              width={106}
              height={106}
              className="hidden lg:block"
            />
          </AvatarFallback>
          <AvatarFallback className="block lg:hidden">
            <AvatarImage
              src="/assets/user-avatar.svg"
              width={106}
              height={106}
              className="hidden lg:block"
            />
          </AvatarFallback>
        </Avatar> */}
        <DropdownMenuDemo />
        {/* notifications icon */}
        <Image
          src={'/assets/bell.svg'}
          width={36}
          height={36}
          className="hidden lg:block cursor-pointer transition-transform duration-300 hover:scale-110"
          alt="notifications icon"
        />
        <Image
          src={'/assets/bell.svg'}
          width={20}
          height={20}
          className="block lg:hidden cursor-pointer transition-transform duration-300 hover:scale-110"
          alt="notifications icon"
        />
      </div>
    );
  }
  return (
    // <div className="flex items-center">
    //   <div className="flex flex-col gap-y-[11px] justify-center">
    //     <h5 className="text-white font-cairo font-bold text-center text-[0.7rem] leading-[3.4rem] lg:text-[1.25rem] lg:leading-[6rem]">
    //       أحمد ك.
    //     </h5>
    //     <p className="font-cairo text-white text-center font-normal text-[0.5rem] leading-[3.473rem] lg:text-[0.875rem] leading-[6rem]">
    //       المستكشف المستوى 3
    //     </p>
    //   </div>

    // </div>
    <div className="flex items-center cursor-pointer group">
      <div className="flex flex-col gap-y-1 lg:gap-y-2 items-end">
        <h5 className="text-white font-cairo font-bold text-center text-[0.7rem]  lg:text-[1.25rem] leading-[1rem] transition-colors duration-300 group-hover:text-blue-400">
          أحمد ك.
        </h5>
        <p className="font-cairo text-white text-center font-normal text-[0.5rem]  lg:text-[0.875rem] leading-[0.8rem] transition-colors duration-300 group-hover:text-blue-300">
          المستكشف المستوى 3
        </p>
      </div>
      <Avatar className="ml-[16px] mr-[29px]">
        <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
        <AvatarFallback className="hidden lg:block">
          <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
        </AvatarFallback>
        <AvatarFallback className="block lg:hidden">
          <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
        </AvatarFallback>
      </Avatar>
      {/* notifications icon */}
      <Image
        src={'/assets/bell.svg'}
        width={36}
        height={36}
        className="hidden lg:block cursor-pointer transition-transform duration-300 hover:scale-110"
        alt="notifications icon"
      />
      <Image
        src={'/assets/bell.svg'}
        width={20}
        height={20}
        className="block lg:hidden cursor-pointer transition-transform duration-300 hover:scale-110"
        alt="notifications icon"
      />
    </div>
  );
}
