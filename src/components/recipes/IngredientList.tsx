
import React, { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

interface IngredientListProps {
  ingredients: Ingredient[];
  defaultServings: number;
}

const IngredientList = ({ ingredients, defaultServings }: IngredientListProps) => {
  const [servings, setServings] = useState(defaultServings);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  
  const handleIncrement = () => {
    setServings(servings + 1);
  };
  
  const handleDecrement = () => {
    if (servings > 1) {
      setServings(servings - 1);
    }
  };
  
  const toggleCheck = (id: number) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const calculateQuantity = (quantity: number) => {
    const adjusted = (quantity / defaultServings) * servings;
    return adjusted.toFixed(adjusted % 1 === 0 ? 0 : 1);
  };

  return (
    <div className="bg-card rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-xl font-medium">Ingredients</h3>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleDecrement}
            disabled={servings <= 1}
          >
            <Minus size={16} />
            <span className="sr-only">Decrease servings</span>
          </Button>
          <span className="font-medium">{servings} servings</span>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleIncrement}
          >
            <Plus size={16} />
            <span className="sr-only">Increase servings</span>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ingredients.map((ingredient) => (
          <div 
            key={ingredient.id} 
            className="ingredient-card flex items-center gap-3 cursor-pointer"
            onClick={() => toggleCheck(ingredient.id)}
          >
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
              checkedItems.includes(ingredient.id) 
                ? 'border-primary bg-primary text-primary-foreground' 
                : 'border-muted-foreground/40'
            }`}>
              {checkedItems.includes(ingredient.id) && <Check className="h-4 w-4" />}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${
                checkedItems.includes(ingredient.id) 
                  ? 'line-through text-muted-foreground' 
                  : ''
              }`}>
                {calculateQuantity(ingredient.quantity)} {ingredient.unit} {ingredient.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
