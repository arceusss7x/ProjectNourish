import { Home, Users, Package, Warehouse, Calendar, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Donors", url: "/donors", icon: Users },
  { title: "Food Items", url: "/food-items", icon: Package },
  { title: "Storage", url: "/storage", icon: Warehouse },
  { title: "Distribution Events", url: "/distribution-events", icon: Calendar },
  { title: "Distribution Details", url: "/distribution-details", icon: FileText },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h2 className="text-lg font-bold text-sidebar-foreground">Food Bank</h2>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
