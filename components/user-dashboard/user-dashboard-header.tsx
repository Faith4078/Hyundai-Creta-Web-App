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

export default function UserDashboardHeader() {
  return (
    <nav className="px-4 bg-black ">
      <div className="max-w-[1286px] w-full mx-auto h-[79px] lg:h-[113px] flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-col gap-y-1 lg:gap-y-2 items-end">
            <h5 className="text-white font-cairo font-bold text-center text-[0.7rem]  lg:text-[1.25rem] leading-[1rem]">
              أحمد ك.
            </h5>
            <p className="font-cairo text-white text-center font-normal text-[0.5rem]  lg:text-[0.875rem] leading-[0.8rem]">
              المستكشف المستوى 3
            </p>
          </div>
          <Avatar className="ml-[16px] mr-[29px]">
            <AvatarImage
              src="/assets/user-avatar.svg"
              width={106}
              height={106}
            />
            <AvatarFallback className="hidden lg:block">
              <AvatarImage
                src="/assets/user-avatar.svg"
                width={106}
                height={106}
              />
            </AvatarFallback>
            <AvatarFallback className="block lg:hidden">
              <AvatarImage
                src="/assets/user-avatar.svg"
                width={106}
                height={106}
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
        {/* logo */}
        <Link href={'/'} className="hidden lg:block">
          <Image
            src={'/assets/hyundai-logo.png'}
            width={282}
            height={28}
            className="hidden lg:block"
            alt="notifications icon"
          />
        </Link>
        <Link href={'/'} className="block lg:hidden">
          <Image
            src={'/assets/hyundai-logo.png'}
            width={113}
            height={16}
            className="block lg:hidden"
            alt="notifications icon"
          />
        </Link>
      </div>
    </nav>
  );
}
