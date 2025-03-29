
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Step {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface RecipeTimelineProps {
  steps: Step[];
  cookingMode?: boolean;
}

const RecipeTimeline = ({ steps, cookingMode = false }: RecipeTimelineProps) => {
  const [activeStep, setActiveStep] = useState(0);
  
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  
  const progress = ((activeStep + 1) / steps.length) * 100;
  
  return (
    <div className={cn(
      "w-full",
      cookingMode ? "h-full flex flex-col" : "mt-8"
    )}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-xl font-medium">
          {cookingMode ? "Cooking Steps" : "Recipe Steps"}
        </h3>
        <div className="text-sm font-medium">
          Step {activeStep + 1} of {steps.length}
        </div>
      </div>
      
      <div className="timeline-track mb-6">
        <div className="timeline-progress" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className={cn(
        "grid gap-4",
        cookingMode ? "flex-1 overflow-hidden" : "grid-cols-1 md:grid-cols-8"
      )}>
        {!cookingMode && (
          <div className="md:col-span-2 overflow-auto h-[400px] pr-4 space-y-2 scrollbar-none">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "py-3 px-4 rounded-lg cursor-pointer transition-colors",
                  activeStep === index
                    ? "bg-primary/10 border border-primary/20"
                    : "hover:bg-muted"
                )}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
                      activeStep === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted-foreground/30 text-muted-foreground"
                    )}
                  >
                    {index + 1}
                  </div>
                  <span className="font-medium line-clamp-1">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className={cn(
          "rounded-xl bg-card shadow-sm p-6",
          cookingMode ? "flex-1 overflow-y-auto" : "md:col-span-6"
        )}>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{steps[activeStep].title}</h3>
            <p className="text-base leading-7">{steps[activeStep].description}</p>
            
            {steps[activeStep].imageUrl && (
              <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                <img
                  src={steps[activeStep].imageUrl}
                  alt={`Step ${activeStep + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className="flex items-center gap-1"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeTimeline;
