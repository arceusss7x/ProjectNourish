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

export default function DistributionDetails() {
  const [details] = useState([
    { event_id: 1, item_id: 1, event_name: "Community Center", item_name: "Canned Beans", distributed_quantity: 15 },
    { event_id: 1, item_id: 2, event_name: "Community Center", item_name: "Rice", distributed_quantity: 20 },
    { event_id: 2, item_id: 3, event_name: "Church Hall", item_name: "Pasta", distributed_quantity: 15 },
    { event_id: 3, item_id: 4, event_name: "School Gymnasium", item_name: "Fresh Apples", distributed_quantity: 50 },
    { event_id: 4, item_id: 1, event_name: "Downtown Park", item_name: "Canned Beans", distributed_quantity: 10 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Distribution Details</h2>
          <p className="text-muted-foreground">Track items distributed per event</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Detail
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Distribution Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event ID</TableHead>
                <TableHead>Item ID</TableHead>
                <TableHead>Event Name</TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Distributed Quantity</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.map((detail, index) => (
                <TableRow key={`${detail.event_id}-${detail.item_id}-${index}`}>
                  <TableCell>{detail.event_id}</TableCell>
                  <TableCell>{detail.item_id}</TableCell>
                  <TableCell className="font-medium">{detail.event_name}</TableCell>
                  <TableCell>{detail.item_name}</TableCell>
                  <TableCell>{detail.distributed_quantity}</TableCell>
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
