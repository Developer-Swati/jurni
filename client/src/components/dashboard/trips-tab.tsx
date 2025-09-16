import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockTrips } from "@/lib/mock-data";
import { Plus, MapPin, Users, DollarSign } from "lucide-react";

export default function TripsTab() {
  const [, setLocation] = useLocation();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground" data-testid="text-trips-title">My Trips</h2>
        <Button 
          onClick={() => setLocation('/trip-planner')}
          data-testid="button-create-trip"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Trip
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTrips.map((trip) => (
          <Card key={trip.id} className="trip-card p-6 cursor-pointer hover:shadow-lg transition-all" data-testid={`card-trip-${trip.id}`}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground" data-testid={`text-trip-${trip.id}-title`}>
                {trip.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-trip-${trip.id}-dates`}>
                {trip.dates}
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span data-testid={`text-trip-${trip.id}-destination`}>{trip.destination}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span data-testid={`text-trip-${trip.id}-travelers`}>{trip.travelers}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                <span data-testid={`text-trip-${trip.id}-budget`}>{trip.budget}</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setLocation('/itinerary')}
              data-testid={`button-view-trip-${trip.id}`}
            >
              View
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
