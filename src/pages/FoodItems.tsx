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

export default function FoodItems() {
  const [items] = useState([
    { id: 1, donor: "Green Valley", name: "Canned Beans", quantity: 100, unit: "cans", expiry: "2025-12-31", donated: "2025-01-15" },
    { id: 2, donor: "John Smith", name: "Rice", quantity: 50, unit: "kg", expiry: "2026-06-30", donated: "2025-01-16" },
    { id: 3, donor: "Fresh Foods", name: "Bread", quantity: 200, unit: "loaves", expiry: "2025-01-25", donated: "2025-01-18" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Food Items</h2>
          <p className="text-muted-foreground">Track donated food inventory</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Food Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Donor</TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Donated Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium">{item.donor}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell>{item.donated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
