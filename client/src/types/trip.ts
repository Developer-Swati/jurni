export interface TripFormData {
  departureCity: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  budget: number;
  currency: string;
  interests: string[];
  accommodationType: string;
  transportPreference: string;
}

export interface Activity {
  time: string;
  name: string;
  description: string;
  duration: string;
  cost: string;
}

export interface DayItinerary {
  title: string;
  date: string;
  activities: Activity[];
  restaurant?: {
    name: string;
    rating: string;
  };
  image?: string;
}

export interface CostBreakdown {
  total: string;
  accommodation: string;
  transport: string;
  activities: string;
}

export interface GeneratedItinerary {
  destination: string;
  duration: string;
  cost: CostBreakdown;
  days: DayItinerary[];
}

export interface SavedTrip {
  id: string;
  title: string;
  destination: string;
  dates: string;
  travelers: string;
  budget: string;
  status: 'planned' | 'completed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface UserPreferences {
  currency: string;
  budgetTier: string;
  hotelRating: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  languages: string[];
}
