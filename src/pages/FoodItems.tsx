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
    { item_id: 1, item_id_aid: 1, donor: "Green Valley", item_name: "Canned Beans", category: "Canned Goods", quantity_initial: 100, quantity_available: 85, unit_of_measure: "cans", expiration_date: "2025-12-31", date_received: "2025-01-15" },
    { item_id: 2, item_id_aid: 2, donor: "John Smith", item_name: "Rice", category: "Grains", quantity_initial: 50, quantity_available: 30, unit_of_measure: "kg", expiration_date: "2026-06-30", date_received: "2025-01-16" },
    { item_id: 3, item_id_aid: 3, donor: "Fresh Foods", item_name: "Bread", category: "Bakery", quantity_initial: 200, quantity_available: 150, unit_of_measure: "loaves", expiration_date: "2025-01-25", date_received: "2025-01-18" },
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
                <TableHead>Item ID</TableHead>
                <TableHead>Donor</TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Qty Initial</TableHead>
                <TableHead>Qty Available</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Date Received</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.item_id}>
                  <TableCell>{item.item_id}</TableCell>
                  <TableCell className="font-medium">{item.donor}</TableCell>
                  <TableCell>{item.item_name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.quantity_initial}</TableCell>
                  <TableCell>{item.quantity_available}</TableCell>
                  <TableCell>{item.unit_of_measure}</TableCell>
                  <TableCell>{item.expiration_date}</TableCell>
                  <TableCell>{item.date_received}</TableCell>
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
