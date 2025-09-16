import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function SupportTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-8" data-testid="text-support-title">Support</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-contact-support">
            Contact Support
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span data-testid="text-support-email">support@tripai.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span data-testid="text-support-phone">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span data-testid="text-support-chat">Live Chat (9 AM - 6 PM PST)</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-faq-title">FAQ</h3>
          <div className="space-y-4">
            <details className="border-b border-border pb-3">
              <summary className="cursor-pointer font-medium" data-testid="text-faq-question-1">
                How accurate are AI itineraries?
              </summary>
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-faq-answer-1">
                Our AI analyzes millions of travel data points to create highly accurate and personalized itineraries.
              </p>
            </details>
            <details className="border-b border-border pb-3">
              <summary className="cursor-pointer font-medium" data-testid="text-faq-question-2">
                Can I modify my itinerary?
              </summary>
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-faq-answer-2">
                Yes, all itineraries can be customized and modified according to your preferences.
              </p>
            </details>
            <details className="border-b border-border pb-3">
              <summary className="cursor-pointer font-medium" data-testid="text-faq-question-3">
                What if I need to cancel?
              </summary>
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-faq-answer-3">
                Cancellation policies depend on individual bookings. We'll help you navigate the process.
              </p>
            </details>
          </div>
        </Card>
      </div>
    </div>
  );
}
