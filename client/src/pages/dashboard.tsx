import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/navbar";
import AuthModal from "@/components/auth-modal";
import TripsTab from "@/components/dashboard/trips-tab";
import ProfileTab from "@/components/dashboard/profile-tab";
import PreferencesTab from "@/components/dashboard/preferences-tab";
import BookingsTab from "@/components/dashboard/bookings-tab";
import SupportTab from "@/components/dashboard/support-tab";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { User } from "@/types/trip";
import { X } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('trips');
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    if (!currentUser) {
      setShowAuthModal(true);
    } else {
      setUser(currentUser);
    }
  }, []);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const tabs = [
    { id: 'trips', label: 'My Trips' },
    { id: 'profile', label: 'Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'support', label: 'Support' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'trips':
        return <TripsTab />;
      case 'profile':
        return <ProfileTab />;
      case 'preferences':
        return <PreferencesTab />;
      case 'bookings':
        return <BookingsTab />;
      case 'support':
        return <SupportTab />;
      default:
        return <TripsTab />;
    }
  };

  if (!user && !showAuthModal) {
    return (
      <div className="min-h-screen bg-muted">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please sign in to access the dashboard</h1>
            <Button onClick={() => setShowAuthModal(true)}>Sign In</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      
      {/* Dashboard Header */}
      <div className="bg-card border-b border-border pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground" data-testid="text-dashboard-title">
                Dashboard
              </h1>
              <p className="text-muted-foreground" data-testid="text-dashboard-subtitle">
                Manage your trips and preferences
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation('/')}
              data-testid="button-close-dashboard"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                data-testid={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user && renderTabContent()}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          setLocation('/');
        }}
        type="login"
        onTypeChange={() => {}}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
