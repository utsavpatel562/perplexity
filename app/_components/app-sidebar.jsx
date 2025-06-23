import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-orange-50" />
      <Image
        src={"/logo1.png"}
        alt="logo"
        width={150}
        height={150}
        className="bg-orange-50 w-full md:pr-7 md:pl-7"
      />
      <SidebarContent className="bg-orange-50">
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
