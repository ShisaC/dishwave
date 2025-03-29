
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, ChevronLeft, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import RecipeTimeline from '@/components/recipes/RecipeTimeline';
import IngredientList from '@/components/recipes/IngredientList';
import RecommendedRecipes from '@/components/recipes/RecommendedRecipes';
import CookingModeToggle from '@/components/recipes/CookingModeToggle';
import { getRecipeById, getRecommendedRecipes } from '@/data/recipes';
import { cn } from '@/lib/utils';
import NotFound from './NotFound';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cookingMode, setCookingMode] = useState(false);
  
  const recipe = id ? getRecipeById(id) : null;
  const recommendedRecipes = id ? getRecommendedRecipes(id) : [];
  
  if (!recipe) {
    return <NotFound />;
  }
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Recipe link copied to clipboard!');
  };
  
  const toggleCookingMode = () => {
    setCookingMode(!cookingMode);
  };
  
  if (cookingMode) {
    return (
      <div className="cooking-mode">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-heading text-2xl font-bold">{recipe.title}</h1>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleCookingMode}
            >
              <ChevronLeft size={24} />
              <span className="sr-only">Exit cooking mode</span>
            </Button>
          </div>
          
          <RecipeTimeline steps={recipe.steps} cookingMode={true} />
        </div>
        <CookingModeToggle enabled={cookingMode} onToggle={toggleCookingMode} />
      </div>
    );
  }
  
  return (
    <Layout>
      <div className="container mt-6 mb-12">
        <Button
          variant="ghost"
          className="mb-4 flex items-center gap-1 text-muted-foreground"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={16} />
          <span>Back</span>
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className={cn(
              "inline-block px-2.5 py-1 rounded-full text-xs font-medium",
              recipe.cuisine === 'italian' && "bg-cuisine-italian/20 text-cuisine-italian",
              recipe.cuisine === 'asian' && "bg-cuisine-asian/20 text-cuisine-asian",
              recipe.cuisine === 'mexican' && "bg-cuisine-mexican/20 text-cuisine-mexican",
              recipe.cuisine === 'dessert' && "bg-cuisine-dessert/20 text-cuisine-dessert",
              recipe.cuisine === 'vegetarian' && "bg-cuisine-vegetarian/20 text-cuisine-vegetarian",
            )}>
              {recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mt-2">{recipe.title}</h1>
            
            <p className="text-muted-foreground mt-3 mb-6">
              {recipe.description}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime} min</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime} min</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Users size={20} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                size="lg"
                onClick={toggleCookingMode}
                className="flex items-center gap-2"
              >
                Start Cooking
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleShare}
              >
                <Share size={18} />
                <span className="sr-only">Share recipe</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1">
            <IngredientList 
              ingredients={recipe.ingredients} 
              defaultServings={recipe.servings}
            />
          </div>
          
          <div className="lg:col-span-2">
            <RecipeTimeline steps={recipe.steps} />
          </div>
        </div>
        
        <RecommendedRecipes recipes={recommendedRecipes} />
      </div>
      <CookingModeToggle enabled={cookingMode} onToggle={toggleCookingMode} />
    </Layout>
  );
};

export default RecipeDetail;
