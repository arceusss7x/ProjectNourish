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

export default function Donors() {
  const [donors] = useState([
    { donor_id: 1, name: "Green Valley Restaurant", contact_phone: "+1234567890", contact_email: "contact@greenvalley.com" },
    { donor_id: 2, name: "John Smith", contact_phone: "+1234567891", contact_email: "john@email.com" },
    { donor_id: 3, name: "Fresh Foods Corp", contact_phone: "+1234567892", contact_email: "info@freshfoods.com" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Donors</h2>
          <p className="text-muted-foreground">Manage food donors</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Donor
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Donors</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact Phone</TableHead>
                <TableHead>Contact Email</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donors.map((donor) => (
                <TableRow key={donor.donor_id}>
                  <TableCell>{donor.donor_id}</TableCell>
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>{donor.contact_phone}</TableCell>
                  <TableCell>{donor.contact_email}</TableCell>
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
