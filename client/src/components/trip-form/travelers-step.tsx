import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Users, Baby, Dog, Minus, Plus } from "lucide-react";

interface TravelersStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

export default function TravelersStep({ data, updateData }: TravelersStepProps) {
  const incrementValue = (field: keyof TripFormData, currentValue: number, max: number = 20) => {
    if (currentValue < max) {
      updateData({ [field]: currentValue + 1 });
    }
  };

  const decrementValue = (field: keyof TripFormData, currentValue: number, min: number = 0) => {
    if (currentValue > min) {
      updateData({ [field]: currentValue - 1 });
    }
  };

  const incrementPets = () => {
    updateData({ pets: data.pets + 1 });
  };

  const decrementPets = () => {
    if (data.pets > 0) {
      updateData({ pets: data.pets - 1 });
    }
  };

  const TravelerControl = ({ 
    icon: Icon, 
    title, 
    subtitle, 
    value, 
    onIncrement, 
    onDecrement, 
    min = 0,
    testIdPrefix 
  }: {
    icon: React.ComponentType<any>;
    title: string;
    subtitle: string;
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    min?: number;
    testIdPrefix: string;
  }) => (
    <div className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-50 rounded-full">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={onDecrement}
          disabled={value <= min}
          className="h-10 w-10 rounded-lg"
          data-testid={`button-${testIdPrefix}-decrement`}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-lg font-medium w-8 text-center" data-testid={`text-${testIdPrefix}-value`}>
          {value}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={onIncrement}
          className="h-10 w-10 rounded-lg"
          data-testid={`button-${testIdPrefix}-increment`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-travelers-title">Travelers</h2>
      <div className="bg-card border border-border rounded-lg p-6">
        <TravelerControl
          icon={Users}
          title="Adults"
          subtitle="Age 18+"
          value={data.adults}
          onIncrement={() => incrementValue('adults', data.adults)}
          onDecrement={() => decrementValue('adults', data.adults, 1)}
          min={1}
          testIdPrefix="adults"
        />
        <TravelerControl
          icon={Baby}
          title="Children"
          subtitle="Age 2-17"
          value={data.children}
          onIncrement={() => incrementValue('children', data.children)}
          onDecrement={() => decrementValue('children', data.children)}
          testIdPrefix="children"
        />
        <TravelerControl
          icon={Baby}
          title="Infants"
          subtitle="Under 2"
          value={data.infants}
          onIncrement={() => incrementValue('infants', data.infants)}
          onDecrement={() => decrementValue('infants', data.infants)}
          testIdPrefix="infants"
        />
        <TravelerControl
          icon={Dog}
          title="Pets"
          subtitle="Service animals"
          value={data.pets}
          onIncrement={incrementPets}
          onDecrement={decrementPets}
          testIdPrefix="pets"
        />
      </div>
    </div>
  );
}
