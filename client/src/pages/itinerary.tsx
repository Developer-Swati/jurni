import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/navbar";
import AuthModal from "@/components/auth-modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { generateMockItinerary } from "@/lib/mock-data";
import { GeneratedItinerary, User } from "@/types/trip";
import { Heart, Edit, X, Download, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Itinerary() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [itinerary] = useState<GeneratedItinerary>(generateMockItinerary("Paris"));
  const { toast } = useToast();

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  const handleSaveTrip = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    
    toast({
      title: "Trip Saved!",
      description: "Your itinerary has been saved to your dashboard.",
    });
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
    handleSaveTrip();
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <div className="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground" data-testid="text-itinerary-title">
                Your AI-Generated Itinerary
              </h1>
              <p className="text-muted-foreground mt-2" data-testid="text-itinerary-subtitle">
                {itinerary.destination}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleSaveTrip}
                className="bg-primary hover:bg-primary/90"
                data-testid="button-save-trip"
              >
                <Heart className="mr-2 h-4 w-4" />
                Save Trip
              </Button>
              <Button 
                variant="outline"
                onClick={() => setLocation('/trip-planner')}
                data-testid="button-edit-trip"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setLocation('/')}
                data-testid="button-close-itinerary"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 text-center bg-muted/30 border-none">
              <div className="text-2xl font-bold text-primary" data-testid="text-total-cost">
                {itinerary.cost.total}
              </div>
              <div className="text-sm text-muted-foreground">Total Cost</div>
            </Card>
            <Card className="p-4 text-center bg-muted/30 border-none">
              <div className="text-2xl font-bold text-foreground" data-testid="text-accommodation-cost">
                {itinerary.cost.accommodation}
              </div>
              <div className="text-sm text-muted-foreground">Accommodation</div>
            </Card>
            <Card className="p-4 text-center bg-muted/30 border-none">
              <div className="text-2xl font-bold text-foreground" data-testid="text-transport-cost">
                {itinerary.cost.transport}
              </div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </Card>
            <Card className="p-4 text-center bg-muted/30 border-none">
              <div className="text-2xl font-bold text-foreground" data-testid="text-activities-cost">
                {itinerary.cost.activities}
              </div>
              <div className="text-sm text-muted-foreground">Activities & Food</div>
            </Card>
          </div>

          {/* Day-by-day Itinerary */}
          <div className="space-y-6">
            {itinerary.days.map((day, dayIndex) => (
              <Card key={dayIndex} className="p-6 bg-muted/20 border-none">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`text-day-${dayIndex + 1}-title`}>
                    {day.title}
                  </h3>
                  <span className="text-sm text-muted-foreground" data-testid={`text-day-${dayIndex + 1}-date`}>
                    {day.date}
                  </span>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    {day.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          {activity.time}
                        </div>
                        <div>
                          <h4 className="font-semibold" data-testid={`text-activity-${dayIndex}-${activityIndex}-name`}>
                            {activity.name}
                          </h4>
                          <p className="text-sm text-muted-foreground" data-testid={`text-activity-${dayIndex}-${activityIndex}-description`}>
                            {activity.description}
                          </p>
                          <p className="text-sm text-primary mt-1" data-testid={`text-activity-${dayIndex}-${activityIndex}-details`}>
                            Duration: {activity.duration} • Cost: {activity.cost}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {day.restaurant && (
                      <Card className="p-4 border">
                        <h4 className="font-semibold mb-2">Recommended Restaurant</h4>
                        <p className="text-sm text-muted-foreground" data-testid={`text-restaurant-${dayIndex}-name`}>
                          {day.restaurant.name}
                        </p>
                        <p className="text-sm text-primary" data-testid={`text-restaurant-${dayIndex}-rating`}>
                          Rating: {day.restaurant.rating}
                        </p>
                      </Card>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Booking Section */}
          <Card className="mt-8 p-6 bg-secondary/10 border-secondary/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="text-booking-title">
                Ready to book your trip?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-booking-description">
                Sign up to save your itinerary and start booking accommodations and activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {!user ? (
                  <Button 
                    onClick={() => setShowAuthModal(true)}
                    className="bg-secondary hover:bg-secondary/90"
                    data-testid="button-signup-to-book"
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up to Book
                  </Button>
                ) : (
                  <Button 
                    className="bg-secondary hover:bg-secondary/90"
                    data-testid="button-start-booking"
                  >
                    Start Booking
                  </Button>
                )}
                <Button variant="outline" data-testid="button-download-pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </Card>
        </Card>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type="signup"
        onTypeChange={() => {}}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
