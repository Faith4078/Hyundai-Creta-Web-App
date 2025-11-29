import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
export default function AvatarBadge() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-y-[11px] justify-center">
        <h5 className="text-white font-cairo font-bold text-center text-[0.7rem] leading-[3.4rem] lg:text-[1.25rem] lg:leading-[6rem]">
          أحمد ك.
        </h5>
        <p className="font-cairo text-white text-center font-normal text-[0.5rem] leading-[3.473rem] lg:text-[0.875rem] leading-[6rem]">
          المستكشف المستوى 3
        </p>
      </div>
      <Avatar className="ml-[16px] mr-[29px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          <Image
            src={'/assets/avatar.svg'}
            width={66}
            height={66}
            alt="user image"
            className="hidden lg:block"
          />
        </AvatarFallback>
        <AvatarFallback>
          <Image
            src={'/assets/avatar.svg'}
            width={32}
            height={32}
            className="block lg:hidden"
            alt="user image"
          />
        </AvatarFallback>
      </Avatar>
      {/* notifications icon */}

      <Image
        src={'/assets/bell.svg'}
        width={36}
        height={36}
        className="hidden lg:block"
        alt="notifications icon"
      />
      <Image
        src={'/assets/bell.svg'}
        width={20}
        height={20}
        className="block lg:hidden"
        alt="notifications icon"
      />
    </div>
  );
}
