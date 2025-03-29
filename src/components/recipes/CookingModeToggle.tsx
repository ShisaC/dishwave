
import React from 'react';
import { ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CookingModeToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const CookingModeToggle = ({ enabled, onToggle }: CookingModeToggleProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={enabled ? "secondary" : "outline"}
            size="sm"
            className="fixed bottom-8 right-8 z-50 flex gap-2 shadow-lg"
            onClick={onToggle}
          >
            <ChefHat size={16} />
            <span>{enabled ? "Exit Cooking Mode" : "Cooking Mode"}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{enabled ? "Return to normal view" : "Distraction-free cooking"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CookingModeToggle;
