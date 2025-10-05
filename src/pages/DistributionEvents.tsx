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
    { event_id: 1, location_name: "Community Center", date_stored: "2025-01-20", notes: "Regular weekly distribution" },
    { event_id: 2, location_name: "Church Hall", date_stored: "2025-01-22", notes: "Special holiday distribution" },
    { event_id: 3, location_name: "School Gymnasium", date_stored: "2025-01-25", notes: "Family support program" },
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
                <TableHead>Location Name</TableHead>
                <TableHead>Date Stored</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.event_id}>
                  <TableCell>{event.event_id}</TableCell>
                  <TableCell className="font-medium">{event.location_name}</TableCell>
                  <TableCell>{event.date_stored}</TableCell>
                  <TableCell>{event.notes}</TableCell>
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
