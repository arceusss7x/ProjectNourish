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

export default function DistributionEvents() {
  const [events] = useState([
    { id: 1, date: "2025-01-20", location: "Community Center", organizedBy: "Food Bank Team A" },
    { id: 2, date: "2025-01-22", location: "Church Hall", organizedBy: "Volunteers Group B" },
    { id: 3, date: "2025-01-25", location: "School Gymnasium", organizedBy: "Local NGO" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Distribution Events</h2>
          <p className="text-muted-foreground">Schedule and manage distribution events</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming & Past Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Organized By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell className="font-medium">{event.date}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.organizedBy}</TableCell>
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
