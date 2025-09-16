import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MapPin, Plane } from "lucide-react";

interface TripInfoStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

export default function TripInfoStep({ data, updateData }: TripInfoStepProps) {
  const handleStartDateChange = (value: string) => {
    const newStartDate = new Date(value);
    const updates: Partial<TripFormData> = { startDate: newStartDate };
    
    // If end date is before the new start date, update it to match start date
    if (data.endDate && data.endDate < newStartDate) {
      updates.endDate = newStartDate;
    }
    
    updateData(updates);
  };

  const getMinEndDate = () => {
    if (data.startDate) {
      return data.startDate.toISOString().split('T')[0];
    }
    return new Date().toISOString().split('T')[0];
  };

  const getMinStartDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-trip-info-title">Trip Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="departureCity">Departure City</Label>
          <div className="relative">
            <Input
              id="departureCity"
              placeholder="Where are you traveling from?"
              value={data.departureCity}
              onChange={(e) => updateData({ departureCity: e.target.value })}
              className="pr-10"
              data-testid="input-departure-city"
            />
            <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div>
          <Label htmlFor="destination">Destination City</Label>
          <div className="relative">
            <Input
              id="destination"
              placeholder="Where do you want to go?"
              value={data.destination}
              onChange={(e) => updateData({ destination: e.target.value })}
              className="pr-10"
              data-testid="input-destination"
            />
            <Plane className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            min={getMinStartDate()}
            value={data.startDate ? data.startDate.toISOString().split('T')[0] : ''}
            onChange={(e) => handleStartDateChange(e.target.value)}
            data-testid="input-start-date"
          />
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            min={getMinEndDate()}
            value={data.endDate ? data.endDate.toISOString().split('T')[0] : ''}
            onChange={(e) => updateData({ endDate: new Date(e.target.value) })}
            data-testid="input-end-date"
            placeholder="Pick end date"
          />
        </div>
      </div>
    </div>
  );
}
