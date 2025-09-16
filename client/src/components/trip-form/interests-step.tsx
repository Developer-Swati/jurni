import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2, 
  Moon, 
  Mountain, 
  Utensils, 
  Palette, 
  TreePine, 
  Waves, 
  Camera, 
  Music, 
  Heart, 
  ShoppingBag, 
  Gamepad2 
} from "lucide-react";

interface InterestsStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

const interestOptions = [
  { name: "Heritage", icon: Building2, color: "bg-gradient-to-br from-blue-500 to-teal-400" },
  { name: "Nightlife", icon: Moon, color: "bg-gradient-to-br from-purple-500 to-pink-400" },
  { name: "Adventure", icon: Mountain, color: "bg-gradient-to-br from-green-500 to-emerald-400" },
  { name: "Food & Cuisine", icon: Utensils, color: "bg-gradient-to-br from-red-500 to-orange-400" },
  { name: "Culture & Arts", icon: Palette, color: "bg-gradient-to-br from-blue-500 to-teal-400" },
  { name: "Nature", icon: TreePine, color: "bg-gradient-to-br from-green-500 to-emerald-400" },
  { name: "Beach & Water", icon: Waves, color: "bg-gradient-to-br from-blue-500 to-cyan-400" },
  { name: "Photography", icon: Camera, color: "bg-gradient-to-br from-purple-500 to-blue-400" },
  { name: "Music & Events", icon: Music, color: "bg-gradient-to-br from-pink-500 to-purple-400" },
  { name: "Wellness & Spa", icon: Heart, color: "bg-gradient-to-br from-pink-500 to-red-400" },
  { name: "Shopping", icon: ShoppingBag, color: "bg-gradient-to-br from-orange-500 to-yellow-400" },
  { name: "Entertainment", icon: Gamepad2, color: "bg-gradient-to-br from-indigo-500 to-purple-400" }
];

export default function InterestsStep({ data, updateData }: InterestsStepProps) {
  const handleInterestChange = (interest: string, checked: boolean) => {
    const currentInterests = data.interests || [];
    const updatedInterests = checked
      ? [...currentInterests, interest]
      : currentInterests.filter(i => i !== interest);
    updateData({ interests: updatedInterests });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-interests-title">Interests & Preferences</h2>
      <div className="space-y-6">
        <div>
          <Label className="text-base font-medium mb-4 block">Help us understand your travel style</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interestOptions.map((interest) => {
              const IconComponent = interest.icon;
              const isSelected = data.interests?.includes(interest.name) || false;
              return (
                <div 
                  key={interest.name} 
                  className={`relative cursor-pointer rounded-xl transition-all duration-200 ${
                    isSelected 
                      ? `${interest.color} text-white shadow-lg scale-105` 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => handleInterestChange(interest.name, !isSelected)}
                  data-testid={`card-${interest.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="p-6 text-center">
                    <IconComponent 
                      className={`h-8 w-8 mx-auto mb-3 ${
                        isSelected ? 'text-white' : 'text-gray-600'
                      }`} 
                    />
                    <h3 className={`font-medium text-sm ${
                      isSelected ? 'text-white' : 'text-gray-800'
                    }`}>
                      {interest.name}
                    </h3>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-white rounded-full p-1">
                        <Checkbox
                          checked={true}
                          readOnly
                          className="h-4 w-4"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>Accommodation Type</Label>
            <Select value={data.accommodationType} onValueChange={(value) => updateData({ accommodationType: value })}>
              <SelectTrigger data-testid="select-accommodation">
                <SelectValue placeholder="Select accommodation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hotel">Hotel</SelectItem>
                <SelectItem value="Airbnb">Airbnb</SelectItem>
                <SelectItem value="Hostel">Hostel</SelectItem>
                <SelectItem value="Resort">Resort</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Transport Preference</Label>
            <Select value={data.transportPreference} onValueChange={(value) => updateData({ transportPreference: value })}>
              <SelectTrigger data-testid="select-transport">
                <SelectValue placeholder="Select transport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Flights">Flights</SelectItem>
                <SelectItem value="Train">Train</SelectItem>
                <SelectItem value="Rental Car">Rental Car</SelectItem>
                <SelectItem value="Public Transit">Public Transit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
