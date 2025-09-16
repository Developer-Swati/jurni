import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InterestsStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

const interestOptions = [
  "Heritage",
  "Nightlife", 
  "Adventure",
  "Beaches",
  "Mountains",
  "Food & Dining",
  "Shopping",
  "Museums"
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
          <Label className="text-base font-medium mb-3 block">Travel Interests</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {interestOptions.map((interest) => (
              <div key={interest} className="flex items-center space-x-2 p-3 border border-input rounded-lg hover:bg-muted/30">
                <Checkbox
                  id={interest}
                  checked={data.interests?.includes(interest) || false}
                  onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                  data-testid={`checkbox-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                />
                <Label htmlFor={interest} className="text-sm cursor-pointer">{interest}</Label>
              </div>
            ))}
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
