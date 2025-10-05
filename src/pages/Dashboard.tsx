import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, Warehouse, Calendar } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Donors", value: "156", icon: Users, color: "text-blue-600" },
    { title: "Food Items", value: "1,234", icon: Package, color: "text-green-600" },
    { title: "Storage Locations", value: "8", icon: Warehouse, color: "text-orange-600" },
    { title: "Distribution Events", value: "45", icon: Calendar, color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Overview of food bank operations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New donation received</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Distribution event completed</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New donor registered</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Storage Capacity</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: "75%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Items Expiring Soon</span>
                  <span className="font-medium">23 items</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-destructive rounded-full" style={{ width: "30%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
