import { useLocation } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe, 
  Wand2, 
  Heart, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle 
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 hero-gradient min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Plan Your Next Adventure <br />
            <span className="text-secondary">with AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
            Let artificial intelligence create the perfect itinerary for your dream trip. 
            From hidden gems to must-see attractions, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setLocation('/trip-planner')}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 transform hover:scale-105 transition-all"
              data-testid="button-start-planning"
            >
              <Wand2 className="mr-2 h-5 w-5" />
              Start Planning
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-8 py-4"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
              About TripAI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
              We're revolutionizing travel planning with cutting-edge AI technology. 
              Our platform combines the power of artificial intelligence with local expertise 
              to create personalized travel experiences that match your style, budget, and preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-muted/30 border-none">
              <Wand2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3" data-testid="text-feature-ai-title">AI-Powered</h3>
              <p className="text-muted-foreground" data-testid="text-feature-ai-description">
                Advanced algorithms analyze millions of travel data points to create your perfect trip.
              </p>
            </Card>
            <Card className="text-center p-6 bg-muted/30 border-none">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3" data-testid="text-feature-personalized-title">Personalized</h3>
              <p className="text-muted-foreground" data-testid="text-feature-personalized-description">
                Every itinerary is tailored to your interests, budget, and travel style.
              </p>
            </Card>
            <Card className="text-center p-6 bg-muted/30 border-none">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3" data-testid="text-feature-timesaving-title">Time-Saving</h3>
              <p className="text-muted-foreground" data-testid="text-feature-timesaving-description">
                Get a complete travel plan in minutes, not hours of research.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-how-it-works-title">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-how-it-works-subtitle">
              Simple steps to your perfect trip
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="text-step1-title">Input Trip Details</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-step1-description">
                Tell us your destination, dates, budget, and travel preferences.
              </p>
              <Card className="p-4 shadow-sm">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Destination, dates, travelers, budget</p>
              </Card>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="text-step2-title">AI Generates Itinerary</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-step2-description">
                Our AI creates a detailed day-by-day plan with activities and recommendations.
              </p>
              <Card className="p-4 shadow-sm">
                <Wand2 className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Smart recommendations & scheduling</p>
              </Card>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="text-step3-title">Confirm & Book</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-step3-description">
                Review your itinerary, make adjustments, and book your perfect trip.
              </p>
              <Card className="p-4 shadow-sm">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Save, modify & book seamlessly</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
