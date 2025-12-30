'use client';

import * as React from "react"
import { Home, Settings, Trophy, Info, Phone, LogOut, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { authClient } from "@/lib/better-auth/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "الرئيسية",
    url: "/dashboard",
    icon: Home,
    isActive: true,
  },
  {
    title: "تحدي",
    url: "/dashboard/final-page",
    icon: Settings,
  },
  {
    title: "التعليمات",
    url: "/terms-and-conditions",
    icon: Info,
  },
  {
    title: "اتصال",
    url: "/contact-us",
    icon: Phone,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = authClient.useSession()
  
  const userName = session?.user?.username || "أحمد ك."
  const userImage = session?.user?.image || "/assets/user-avatar.svg"

  const handleLogout = () => {
    authClient.signOut()
    toast.success('Logout Successful')
    router.push('/')
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-col items-center justify-center px-4 py-6 border-b border-white/10">
        <Link href="/" className="flex justify-center">
          <Image
            src="/assets/hyundai-logo.png"
            width={113}
            height={16}
            className="w-auto h-auto"
            alt="HYUNDAI logo"
          />
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarMenu className="space-y-2" dir="rtl">
        {menuItems.map((item) => {
  const Icon = item.icon
  // Only active if exact match
  const isActive = pathname === item.url

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        className={`
          w-full h-12 px-4 rounded-lg border transition-all duration-300
          ${isActive 
            ? "bg-gradient-to-r from-blue-600 to-cyan-400 border-transparent text-white shadow-lg" 
            : "bg-transparent border-blue-500/30 text-white hover:bg-white/5 hover:border-blue-500/50"
          }
        `}
      >
        <Link href={item.url} className="flex items-center justify-between w-full flex-row-reverse">
          <span className="font-cairo text-base">{item.title}</span>
          <Icon className="w-5 h-5 flex-shrink-0" />
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
})}

        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-4 py-6 border-t border-white/10 space-y-4" dir="rtl">
        {/* User Profile Section */}
        <div className="flex items-center gap-3 px-2 flex-row-reverse">
          <div className="flex flex-col gap-1 flex-1 text-right">
            <h5 className="text-white font-cairo font-bold text-sm leading-tight">
              {userName}
            </h5>
            <p className="text-white/80 font-cairo text-xs leading-tight">
              المستكشف المستوى 3
            </p>
          </div>
          <Avatar className="w-12 h-12 flex-shrink-0">
            <AvatarImage src={userImage} alt={userName} />
            <AvatarFallback>
              <Image
                src="/assets/user-avatar.svg"
                width={48}
                height={48}
                alt="User avatar"
              />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          className="w-full h-12 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-cairo text-base font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-between flex-row-reverse cursor-pointer"
        >
          <span>تسجيل الخروج</span>
          <div className="w-5 h-5 flex items-center justify-center border border-white/20 rounded">
            <ArrowLeft className="w-3 h-3" />
          </div>
        </Button>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
