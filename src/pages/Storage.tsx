import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Storage() {
  const [storages] = useState([
    { id: 1, location: "Main Warehouse - Building A", capacity: 5000, currentStock: 3750 },
    { id: 2, location: "Community Center Storage", capacity: 2000, currentStock: 1500 },
    { id: 3, location: "Cold Storage Unit 1", capacity: 1000, currentStock: 800 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Storage</h2>
          <p className="text-muted-foreground">Manage storage facilities</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Storage
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Storage Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Utilization</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {storages.map((storage) => {
                const utilization = ((storage.currentStock / storage.capacity) * 100).toFixed(0);
                return (
                  <TableRow key={storage.id}>
                    <TableCell>{storage.id}</TableCell>
                    <TableCell className="font-medium">{storage.location}</TableCell>
                    <TableCell>{storage.capacity}</TableCell>
                    <TableCell>{storage.currentStock}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full">
                          <div
                            className="h-2 bg-primary rounded-full"
                            style={{ width: `${utilization}%` }}
                          />
                        </div>
                        <span className="text-sm">{utilization}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
