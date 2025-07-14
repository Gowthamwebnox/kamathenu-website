"use client"

import type * as React from "react"
import { BarChart3, ClipboardList, FolderUp, Settings, ShoppingCart, Store, Truck, Wallet, HeartHandshake, LogOut, MapPinned } from "lucide-react"
import Image from "next/image"
// import "./app-sidebar.css"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"




import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"

const navItems = [
  {
    title: "Ecommerce",
    icon: Store,
    url: "/seller",
  },
  // {
  //   title: "Analysis",
  //   icon: BarChart3,
  //   url: "/seller/analysis",
  //   isActive:true
  // },
  {
    title: "Products",
    icon: ShoppingCart,
    url: "/seller/products",
    isActive: true
  },
  {
    title: "Orders",
    icon: ClipboardList,
    url: "/seller/orders",
    isActive: true
  },
  {
    title: "Payments",
    icon: Wallet,
    url: "/seller/payments",
    isActive: true
  },

  {
    title: "Settings",
    icon: Settings,
    url: "/seller/settings",
    isActive: true
  },
  {
    title: "Bulk Upload",
    icon: FolderUp,
    url: "/seller/upload",
    isActive: true
  },
  {
    title: "Helpers",
    icon: HeartHandshake,
    url: "/seller/helpers",
    isActive: true
  },
  {
    title: "Pickup Locations",
    icon: MapPinned ,
    url: "/seller/pickup",
    isActive: true
  },
  {
    title: "Shipments",
    icon: Truck ,
    url: "/seller/shipments",
    isActive: true
  }, 

]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter()
  const { isMobile, state } = useSidebar();

  console.log("AppSidebar rendering, pathname:", pathname);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
  }
  return (
    <Sidebar collapsible="icon" className="border-r border-gray-200 bg-white" {...props}>
      <SidebarHeader className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
            <div className=" h-5 flex gap-2 items-center justify-center">
              <div className="w-10 h-5 flex  items-center justify-center">
                <Image src="/assets/kamathenu Images/kamathenuLogo.png" alt="Make Easy" width={100} height={40} className="h-[2rem] w-auto" />
              </div>
              {/* Hide h1 on mobile when collapsed */}
              {(!isMobile || state === "expanded") && (
                <h1 className="text-sm font-semibold">Kamathenu</h1>
              )}
          </div>
        
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={item.url}>
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarMenu className="mt-auto">
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            Logout
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </Sidebar>
  )
}

