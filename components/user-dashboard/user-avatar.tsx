'use client';

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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { authClient } from '@/lib/better-auth/auth-client';
import { Button } from '../ui/button';
import { toast } from 'sonner';
export function UserAvatar() {
  return (
    <Avatar className="hover:cursor-pointer">
      <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
      <AvatarFallback className="hidden lg:block">
        <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
      </AvatarFallback>
      <AvatarFallback className="block lg:hidden">
        <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
      </AvatarFallback>
    </Avatar>
  );
}
export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="ml-[16px] mr-[29px] hover:cursor-pointer">
          <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
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
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black hover:cursor-pointer mt-1 border-none hover:bg-black! overflow-clip h-full! w-[188px]  p-0!"
      >
        <DropdownMenuItem className=" w-full hover:cursor-pointer rounded-[10px] border-0 outline-0 hover:bg-black! h-full! p-0!">
          <Button
            type="button"
            onClick={() => {
              authClient.signOut();
              toast.success('Logout Sucessful');
            }}
            className="h-[44px] w-full flex items-center gap-x-4 justify-center rounded-[10px] bg-[#0A0A0A] text-white font-normal font-cairo text-base leading-24 hover:cursor-pointer"
          >
            تسجيل الخروج
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
