"use client";
import "@/app/Style/anite/global.css";
import { Search, ShoppingBag, Bell, Plus, User } from "lucide-react";
import Image from "next/image";
import { AppSidebar } from '../../components/layout/sidebar/app-sidebar';
import { Button, LinkButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";


// Create a separate component for the authenticated content
function AuthenticatedContent({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const username = session?.user?.name || "Seller";
  const router = useRouter();


  const handleProfileClick = () => {
    router.push("/seller/settings");
  };

  console.log("AuthenticatedContent rendering");
  
  return (
    <SidebarProvider>
      {/* Sidebar - Fixed */}
      <AppSidebar />

      {/* Main Content Wrapper */}
      <SidebarInset className="bg-white flex flex-col h-screen w-full">
        {/* Top Bar - Fixed */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-100 px-4 w-full">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-gray-500 hover:bg-gray-50 hover:text-gray-700" />
            {/* <div className="relative w-64">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search" className="pl-8 w-full border-gray-200 focus-visible:ring-red-500" />
            </div> */}
          </div>
          <div className="flex items-center gap-4">
            <LinkButton href="/seller/productForm" variant="default" className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="h-4 w-4" /> Add Product
            </LinkButton>
            <div onClick={handleProfileClick}
              className="flex items-center gap-2 cursor-pointer">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center bg-gray-100">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="w-5 h-5 text-gray-800" />
                )}
              </div>

              <span className="text-sm font-medium text-gray-800">{username}</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthenticatedContent>
        {children}
      </AuthenticatedContent>
    </SessionProvider>
  );
}