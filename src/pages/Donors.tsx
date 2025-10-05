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
    { id: 1, name: "Green Valley Restaurant", type: "Restaurant", contact: "+1234567890", email: "contact@greenvalley.com" },
    { id: 2, name: "John Smith", type: "Individual", contact: "+1234567891", email: "john@email.com" },
    { id: 3, name: "Fresh Foods Corp", type: "Company", contact: "+1234567892", email: "info@freshfoods.com" },
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
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donors.map((donor) => (
                <TableRow key={donor.id}>
                  <TableCell>{donor.id}</TableCell>
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>{donor.type}</TableCell>
                  <TableCell>{donor.contact}</TableCell>
                  <TableCell>{donor.email}</TableCell>
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
