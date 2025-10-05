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
    { donor_id: 1, contact_phone: "+1234567890", date_stored: "2025-01-15", notes: "Main warehouse facility for dry goods" },
    { donor_id: 2, contact_phone: "+1234567891", date_stored: "2025-01-16", notes: "Community center storage for quick distribution" },
    { donor_id: 3, contact_phone: "+1234567892", date_stored: "2025-01-18", notes: "Cold storage unit for perishable items" },
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
                <TableHead>Donor ID</TableHead>
                <TableHead>Contact Phone</TableHead>
                <TableHead>Date Stored</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {storages.map((storage) => (
                <TableRow key={storage.donor_id}>
                  <TableCell>{storage.donor_id}</TableCell>
                  <TableCell className="font-medium">{storage.contact_phone}</TableCell>
                  <TableCell>{storage.date_stored}</TableCell>
                  <TableCell>{storage.notes}</TableCell>
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
