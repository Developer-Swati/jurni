import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign } from "lucide-react";

interface BudgetStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

export default function BudgetStep({ data, updateData }: BudgetStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-budget-title">Budget</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="budget">Budget Amount</Label>
          <div className="relative">
            <Input
              id="budget"
              type="number"
              placeholder="Enter your budget"
              value={data.budget || ''}
              onChange={(e) => updateData({ budget: parseInt(e.target.value) || 0 })}
              className="pl-8"
              data-testid="input-budget"
            />
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div>
          <Label>Currency</Label>
          <Select value={data.currency} onValueChange={(value) => updateData({ currency: value })}>
            <SelectTrigger data-testid="select-currency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD - US Dollar</SelectItem>
              <SelectItem value="EUR">EUR - Euro</SelectItem>
              <SelectItem value="INR">INR - Indian Rupee</SelectItem>
              <SelectItem value="GBP">GBP - British Pound</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
