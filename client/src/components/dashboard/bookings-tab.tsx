import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarCheck, Plus } from "lucide-react";

export default function BookingsTab() {
  const [, setLocation] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-8" data-testid="text-bookings-title">Bookings</h2>
      <Card className="p-8">
        <div className="text-center py-12">
          <CalendarCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-no-bookings">
            No Bookings Yet
          </h3>
          <p className="text-muted-foreground mb-6" data-testid="text-bookings-description">
            Your confirmed bookings will appear here once you start booking trips.
          </p>
          <Button 
            onClick={() => setLocation('/trip-planner')}
            data-testid="button-plan-first-trip"
          >
            <Plus className="mr-2 h-4 w-4" />
            Plan Your First Trip
          </Button>
        </div>
      </Card>
    </div>
  );
}
