import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TravelersStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

export default function TravelersStep({ data, updateData }: TravelersStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-travelers-title">Travelers</h2>
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label>Adults</Label>
            <Select value={data.adults.toString()} onValueChange={(value) => updateData({ adults: parseInt(value) })}>
              <SelectTrigger data-testid="select-adults">
                <SelectValue placeholder="Select adults" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adult</SelectItem>
                <SelectItem value="2">2 Adults</SelectItem>
                <SelectItem value="3">3 Adults</SelectItem>
                <SelectItem value="4">4+ Adults</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Children</Label>
            <Select value={data.children.toString()} onValueChange={(value) => updateData({ children: parseInt(value) })}>
              <SelectTrigger data-testid="select-children">
                <SelectValue placeholder="Select children" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 Children</SelectItem>
                <SelectItem value="1">1 Child</SelectItem>
                <SelectItem value="2">2 Children</SelectItem>
                <SelectItem value="3">3+ Children</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Infants</Label>
            <Select value={data.infants.toString()} onValueChange={(value) => updateData({ infants: parseInt(value) })}>
              <SelectTrigger data-testid="select-infants">
                <SelectValue placeholder="Select infants" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 Infants</SelectItem>
                <SelectItem value="1">1 Infant</SelectItem>
                <SelectItem value="2">2 Infants</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label>Traveling with pets?</Label>
          <RadioGroup
            value={data.pets ? "yes" : "no"}
            onValueChange={(value) => updateData({ pets: value === "yes" })}
            className="flex items-center space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="pets-yes" data-testid="radio-pets-yes" />
              <Label htmlFor="pets-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="pets-no" data-testid="radio-pets-no" />
              <Label htmlFor="pets-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
