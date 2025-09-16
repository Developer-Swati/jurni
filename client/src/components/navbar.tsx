import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { auth } from "@/lib/auth";
import { User } from "@/types/trip";
import AuthModal from "./auth-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, User as UserIcon, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  const handleAuth = (type: 'login' | 'signup') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    auth.logout();
    setUser(null);
  };

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">TripAI</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors" data-testid="link-home-nav">
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="button-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="button-how-it-works"
              >
                How it Works
              </button>
              <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors" data-testid="link-dashboard">
                Dashboard
              </Link>
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2" data-testid="button-user-menu">
                      <UserIcon className="h-4 w-4" />
                      <span>{user.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => window.location.href = '/dashboard'} data-testid="button-dashboard-dropdown">
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} data-testid="button-logout">
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={() => handleAuth('login')} data-testid="button-login">
                  Login / Signup
                </Button>
              )}
            </div>

            <button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 py-3 space-y-3">
              <Link href="/" className="block text-foreground hover:text-primary" data-testid="link-home-mobile">
                Home
              </Link>
              <button onClick={() => scrollToSection('about')} className="block text-foreground hover:text-primary" data-testid="button-about-mobile">
                About Us
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-foreground hover:text-primary" data-testid="button-how-it-works-mobile">
                How it Works
              </button>
              <Link href="/dashboard" className="block text-foreground hover:text-primary" data-testid="link-dashboard-mobile">
                Dashboard
              </Link>
              {user ? (
                <Button onClick={handleLogout} variant="outline" className="w-full" data-testid="button-logout-mobile">
                  Sign Out
                </Button>
              ) : (
                <Button onClick={() => handleAuth('login')} className="w-full" data-testid="button-login-mobile">
                  Login / Signup
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type={authType}
        onTypeChange={setAuthType}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}
