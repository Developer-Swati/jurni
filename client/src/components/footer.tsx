import { Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">TripAI</span>
            </div>
            <p className="text-card/80">AI-powered travel planning for unforgettable adventures.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-card/80">
              <p className="flex items-center" data-testid="text-phone">
                <Phone className="h-4 w-4 mr-2" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center" data-testid="text-email">
                <Mail className="h-4 w-4 mr-2" /> hello@tripai.com
              </p>
              <p className="flex items-center" data-testid="text-address">
                <MapPin className="h-4 w-4 mr-2" /> San Francisco, CA
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-card/80">
              <a href="#about" className="block hover:text-primary" data-testid="link-about-footer">About Us</a>
              <a href="#" className="block hover:text-primary" data-testid="link-careers">Careers</a>
              <a href="#" className="block hover:text-primary" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="block hover:text-primary" data-testid="link-terms">Terms of Service</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-card/80 hover:text-primary" data-testid="link-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-card/80 hover:text-primary" data-testid="link-facebook">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-card/80 hover:text-primary" data-testid="link-instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-card/20 mt-8 pt-8 text-center text-card/60">
          <p data-testid="text-copyright">&copy; 2024 TripAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
