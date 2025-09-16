import { TripFormData } from "@/types/trip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Car, Plane, Train, Bus, CheckCircle } from "lucide-react";
import { useState } from "react";

interface RecommendationsStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: string;
  location: string;
  amenities: string[];
  image: string;
  type: string;
}

interface Transport {
  id: string;
  type: string;
  provider: string;
  price: string;
  duration: string;
  features: string[];
  icon: React.ComponentType<any>;
}

export default function RecommendationsStep({ data, updateData }: RecommendationsStepProps) {
  const [selectedHotel, setSelectedHotel] = useState<string>("");
  const [selectedTransport, setSelectedTransport] = useState<string>("");

  // Mock hotel recommendations based on accommodation type
  const hotels: Hotel[] = [
    {
      id: "hotel-1",
      name: "Grand Palace Hotel",
      rating: 4.5,
      price: "$120",
      location: "City Center",
      amenities: ["Free WiFi", "Pool", "Gym", "Restaurant"],
      image: "/api/placeholder/300/200",
      type: "Hotel"
    },
    {
      id: "hotel-2", 
      name: "Cozy Downtown Inn",
      rating: 4.2,
      price: "$85",
      location: "Downtown",
      amenities: ["Free WiFi", "Breakfast", "Pet Friendly"],
      image: "/api/placeholder/300/200",
      type: "Hotel"
    },
    {
      id: "hotel-3",
      name: "Luxury Resort & Spa",
      rating: 4.8,
      price: "$250",
      location: "Beachfront",
      amenities: ["Free WiFi", "Spa", "Beach Access", "Multiple Restaurants"],
      image: "/api/placeholder/300/200",
      type: "Resort"
    }
  ];

  // Mock transport recommendations based on transport preference
  const transports: Transport[] = [
    {
      id: "flight-1",
      type: "Flight",
      provider: "SkyWings Airlines",
      price: "$350",
      duration: "2h 30m",
      features: ["Direct", "Meals Included", "WiFi"],
      icon: Plane
    },
    {
      id: "flight-2",
      type: "Flight", 
      provider: "Budget Air",
      price: "$180",
      duration: "4h 15m",
      features: ["1 Stop", "Carry-on Included"],
      icon: Plane
    },
    {
      id: "train-1",
      type: "Train",
      provider: "Express Rail",
      price: "$120",
      duration: "6h 45m", 
      features: ["Scenic Route", "WiFi", "Food Car"],
      icon: Train
    }
  ];

  const getTransportIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'flight': return Plane;
      case 'train': return Train;
      case 'bus': return Bus;
      case 'car': return Car;
      default: return Plane;
    }
  };

  const filteredHotels = hotels.filter(hotel => 
    hotel.type.toLowerCase() === data.accommodationType.toLowerCase()
  );

  const filteredTransports = transports.filter(transport =>
    transport.type.toLowerCase() === data.transportPreference.toLowerCase().replace('s', '')
  );

  const handleHotelSelect = (hotelId: string) => {
    setSelectedHotel(hotelId);
    updateData({ selectedHotel: hotelId });
  };

  const handleTransportSelect = (transportId: string) => {
    setSelectedTransport(transportId);
    updateData({ selectedTransport: transportId });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-recommendations-title">
        Recommended Hotels & Transport
      </h2>
      
      {/* Hotel Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          {data.accommodationType} Recommendations
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHotels.map((hotel) => (
            <Card 
              key={hotel.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedHotel === hotel.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
              }`}
              onClick={() => handleHotelSelect(hotel.id)}
              data-testid={`card-hotel-${hotel.id}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{hotel.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {hotel.location}
                    </CardDescription>
                  </div>
                  {selectedHotel === hotel.id && (
                    <CheckCircle className="h-5 w-5 text-green-500" data-testid={`icon-selected-${hotel.id}`} />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{hotel.price}/night</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {hotel.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Transport Recommendations */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          {data.transportPreference} Options
        </h3>
        <div className="space-y-3">
          {filteredTransports.map((transport) => {
            const IconComponent = transport.icon;
            return (
              <Card 
                key={transport.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedTransport === transport.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
                }`}
                onClick={() => handleTransportSelect(transport.id)}
                data-testid={`card-transport-${transport.id}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{transport.provider}</h4>
                        <p className="text-sm text-muted-foreground">{transport.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-wrap gap-1">
                        {transport.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">{transport.price}</p>
                        <p className="text-sm text-muted-foreground">per person</p>
                      </div>
                      {selectedTransport === transport.id && (
                        <CheckCircle className="h-5 w-5 text-green-500" data-testid={`icon-selected-${transport.id}`} />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {(!selectedHotel || !selectedTransport) && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            Please select both accommodation and transport options to continue.
          </p>
        </div>
      )}
    </div>
  );
}