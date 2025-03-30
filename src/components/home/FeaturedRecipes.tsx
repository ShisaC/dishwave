
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipes/RecipeCard';

interface FeaturedRecipesProps {
  recipes: {
    id: string;
    title: string;
    image: string;
    prepTime: number;
    servings: number;
    cuisine: 'italian' | 'asian' | 'mexican' | 'dessert' | 'vegetarian';
    featured?: boolean;
  }[];
}

const FeaturedRecipes = ({ recipes }: FeaturedRecipesProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="font-heading text-3xl font-semibold">Featured Recipes - Interactive blogs</h2>
            <p className="text-muted-foreground mt-2">Discover our most loved recipes and set up your smart cooking to get involved in the entire prcoess</p>
          </div>
          <Link to="/recipes" className="group mt-4 sm:mt-0 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all recipes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              prepTime={recipe.prepTime}
              servings={recipe.servings}
              cuisine={recipe.cuisine}
              featured={recipe.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
