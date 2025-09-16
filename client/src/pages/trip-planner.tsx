import { useState } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/navbar";
import StepIndicator from "@/components/trip-form/step-indicator";
import TripInfoStep from "@/components/trip-form/trip-info-step";
import TravelersStep from "@/components/trip-form/travelers-step";
import BudgetStep from "@/components/trip-form/budget-step";
import InterestsStep from "@/components/trip-form/interests-step";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TripFormData } from "@/types/trip";
import { ArrowLeft, ArrowRight, Wand2, X } from "lucide-react";

export default function TripPlanner() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<TripFormData>({
    departureCity: '',
    destination: '',
    startDate: new Date(),
    endDate: new Date(),
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    budget: 0,
    currency: 'USD',
    interests: [],
    accommodationType: 'Hotel',
    transportPreference: 'Flights'
  });

  const totalSteps = 4;

  const updateFormData = (updates: Partial<TripFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateItinerary = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation with loading
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsGenerating(false);
    setLocation('/itinerary');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <TripInfoStep data={formData} updateData={updateFormData} />;
      case 2:
        return <TravelersStep data={formData} updateData={updateFormData} />;
      case 3:
        return <BudgetStep data={formData} updateData={updateFormData} />;
      case 4:
        return <InterestsStep data={formData} updateData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground" data-testid="text-trip-planner-title">
              Plan Your Trip
            </h1>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation('/')}
              data-testid="button-close-planner"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={previousStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'invisible' : ''}
              data-testid="button-previous"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex-1" />
            
            {currentStep < totalSteps ? (
              <Button onClick={nextStep} data-testid="button-next">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={generateItinerary}
                disabled={isGenerating}
                className="bg-secondary hover:bg-secondary/90"
                data-testid="button-generate"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Itinerary
                  </>
                )}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
