import { Progress } from "@/components/ui/progress";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4 w-full">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center flex-1">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold step-indicator ${
                  isCompleted ? 'completed' : isActive ? 'active' : 'bg-muted text-muted-foreground'
                }`}
                data-testid={`step-indicator-${stepNumber}`}
              >
                {stepNumber}
              </div>
              {stepNumber < totalSteps && (
                <div className="flex-1 h-2 bg-muted rounded-full mx-2">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: stepNumber < currentStep ? '100%' : stepNumber === currentStep ? '50%' : '0%' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
