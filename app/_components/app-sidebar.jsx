"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Compass, GalleryHorizontalEnd, LogIn, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const path = usePathname();
  const MenuOption = [
    {
      title: "Home",
      icon: Search,
      path: "/",
    },
    {
      title: "Discover",
      icon: Compass,
      path: "/discover",
    },
    {
      title: "Library",
      icon: GalleryHorizontalEnd,
      path: "/library",
    },
    {
      title: "Sign In",
      icon: LogIn,
      path: "/signin",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="bg-orange-50" />
      <Image
        src="/logo1.png"
        alt="logo"
        width={150}
        height={150}
        className="bg-orange-50 w-full md:px-7"
      />
      <SidebarContent className="bg-orange-50">
        <SidebarGroup>
          <SidebarMenu className={"mt-4"}>
            {MenuOption.map((menu, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  asChild
                  className={`flex items-center gap-2 w-full hover:bg-transparent hover:font-bold ${
                    path?.includes(menu.path) && "font-bold"
                  }`}
                >
                  <Link href={menu.path} className="p-5 py-5">
                    <menu.icon className="w-8 h-8" />
                    <span className="text-lg">{menu.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <Button className={"rounded-full mx-4 mt-4 p-5 cursor-pointer"}>
            Sign Up
          </Button>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
