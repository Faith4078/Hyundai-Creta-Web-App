'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { authClient } from '@/lib/better-auth/auth-client';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function UserAvatar({ size = 106 }: { size?: number }) {
  const { data: session } = authClient.useSession();
  const userImage = session?.user?.image || '/assets/user-avatar.svg';

  return (
    <Avatar className="hover:cursor-pointer">
      <AvatarImage src={userImage} width={size} height={size} />
      <AvatarFallback>
        <AvatarImage src="/assets/user-avatar.svg" width={size} height={size} />
      </AvatarFallback>
    </Avatar>
  );
}

export function DropdownMenuDemo() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const userImage = session?.user?.image || '/assets/user-avatar.svg';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="ml-[16px] mr-[29px] hover:cursor-pointer">
          <AvatarImage src={userImage} width={106} height={106} />
          <AvatarFallback>
            <AvatarImage src="/assets/user-avatar.svg" width={106} height={106} />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black mt-1 border-none w-[188px] p-0"
      >
        <DropdownMenuItem className="w-full p-0">
          <Button
            type="button"
            onClick={() => {
              authClient.signOut();
              toast.success('Logout Successful');
              router.push('/');
            }}
            className="h-[44px] w-full flex items-center justify-center rounded-[10px] bg-[#0A0A0A] text-white font-normal text-base"
          >
            تسجيل الخروج
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
