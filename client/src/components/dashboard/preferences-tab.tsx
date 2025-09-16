import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPreferences } from "@/types/trip";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PreferencesTab() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    currency: 'USD',
    budgetTier: 'Standard',
    hotelRating: '4',
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    languages: ['English']
  });
  const { toast } = useToast();

  const handlePreferenceChange = (key: keyof UserPreferences, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleNotificationChange = (type: keyof UserPreferences['notifications'], checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [type]: checked }
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    toast({
      title: "Preferences Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-8" data-testid="text-preferences-title">Preferences</h2>
      <Card className="p-8 max-w-2xl">
        <div className="space-y-6">
          <div>
            <Label>Default Currency</Label>
            <Select 
              value={preferences.currency} 
              onValueChange={(value) => handlePreferenceChange('currency', value)}
            >
              <SelectTrigger className="bg-muted" data-testid="select-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="INR">INR - Indian Rupee</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Default Budget Tier</Label>
            <Select 
              value={preferences.budgetTier} 
              onValueChange={(value) => handlePreferenceChange('budgetTier', value)}
            >
              <SelectTrigger className="bg-muted" data-testid="select-budget-tier">
                <SelectValue placeholder="Select budget tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Budget">Budget</SelectItem>
                <SelectItem value="Standard">Standard</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Preferred Hotel Rating</Label>
            <Select 
              value={preferences.hotelRating} 
              onValueChange={(value) => handlePreferenceChange('hotelRating', value)}
            >
              <SelectTrigger className="bg-muted" data-testid="select-hotel-rating">
                <SelectValue placeholder="Select hotel rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3★ or above</SelectItem>
                <SelectItem value="4">4★ or above</SelectItem>
                <SelectItem value="5">5★ only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Notifications</Label>
            <div className="space-y-3 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="email-notifications"
                  checked={preferences.notifications.email}
                  onCheckedChange={(checked) => handleNotificationChange('email', checked as boolean)}
                  data-testid="checkbox-email"
                />
                <Label htmlFor="email-notifications">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sms-notifications"
                  checked={preferences.notifications.sms}
                  onCheckedChange={(checked) => handleNotificationChange('sms', checked as boolean)}
                  data-testid="checkbox-sms"
                />
                <Label htmlFor="sms-notifications">SMS notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="push-notifications"
                  checked={preferences.notifications.push}
                  onCheckedChange={(checked) => handleNotificationChange('push', checked as boolean)}
                  data-testid="checkbox-push"
                />
                <Label htmlFor="push-notifications">Push notifications</Label>
              </div>
            </div>
          </div>
          
          <div>
            <Label>Languages</Label>
            <div className="flex items-center space-x-4 mt-2">
              <Select value={preferences.languages[0]} onValueChange={() => {}}>
                <SelectTrigger className="flex-1 bg-muted" data-testid="select-language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" data-testid="button-add-language">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button onClick={handleSave} data-testid="button-save-preferences">
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}
