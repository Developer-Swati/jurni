import { TripFormData } from "@/types/trip";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Euro, PoundSterling, IndianRupee } from "lucide-react";

interface BudgetStepProps {
  data: TripFormData;
  updateData: (updates: Partial<TripFormData>) => void;
}

export default function BudgetStep({ data, updateData }: BudgetStepProps) {
  const getCurrencyIcon = () => {
    switch (data.currency) {
      case 'USD':
        return DollarSign;
      case 'EUR':
        return Euro;
      case 'GBP':
        return PoundSterling;
      case 'INR':
        return IndianRupee;
      default:
        return DollarSign;
    }
  };

  const getCurrencySymbol = () => {
    switch (data.currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'GBP':
        return '£';
      case 'INR':
        return '₹';
      default:
        return '$';
    }
  };

  const CurrencyIcon = getCurrencyIcon();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" data-testid="text-budget-title">Budget</h2>
      <div className="space-y-6">
        <div>
          <Label className="text-base font-medium mb-3 block">Trip Budget</Label>
          <p className="text-sm text-muted-foreground mb-4">Total budget for the entire trip</p>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-3 text-muted-foreground font-medium">
                  {getCurrencySymbol()}
                </span>
                <Input
                  id="budget"
                  type="number"
                  placeholder="1000"
                  value={data.budget || ''}
                  onChange={(e) => updateData({ budget: parseInt(e.target.value) || 0 })}
                  className="pl-8 text-lg"
                  data-testid="input-budget"
                />
                <CurrencyIcon className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="w-48">
              <Select value={data.currency} onValueChange={(value) => updateData({ currency: value })}>
                <SelectTrigger data-testid="select-currency" className="h-12">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">{getCurrencySymbol()} USD</SelectItem>
                  <SelectItem value="EUR">€ EUR</SelectItem>
                  <SelectItem value="INR">₹ INR</SelectItem>
                  <SelectItem value="GBP">£ GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
