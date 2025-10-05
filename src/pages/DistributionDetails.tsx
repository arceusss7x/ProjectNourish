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
    { id: 1, eventId: 1, eventName: "Community Center Event", foodItem: "Canned Beans", quantity: 50 },
    { id: 2, eventId: 1, eventName: "Community Center Event", foodItem: "Rice", quantity: 30 },
    { id: 3, eventId: 2, eventName: "Church Hall Event", foodItem: "Bread", quantity: 100 },
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
                <TableHead>Detail ID</TableHead>
                <TableHead>Event ID</TableHead>
                <TableHead>Event Name</TableHead>
                <TableHead>Food Item</TableHead>
                <TableHead>Quantity Distributed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.map((detail) => (
                <TableRow key={detail.id}>
                  <TableCell>{detail.id}</TableCell>
                  <TableCell>{detail.eventId}</TableCell>
                  <TableCell className="font-medium">{detail.eventName}</TableCell>
                  <TableCell>{detail.foodItem}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
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
