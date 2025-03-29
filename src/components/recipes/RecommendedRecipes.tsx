
import React from 'react';
import RecipeCard from './RecipeCard';

interface RecommendedRecipesProps {
  recipes: {
    id: string;
    title: string;
    image: string;
    prepTime: number;
    servings: number;
    cuisine: 'italian' | 'asian' | 'mexican' | 'dessert' | 'vegetarian';
  }[];
}

const RecommendedRecipes = ({ recipes }: RecommendedRecipesProps) => {
  return (
    <section className="mt-12 mb-8">
      <h2 className="font-heading text-2xl font-semibold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            prepTime={recipe.prepTime}
            servings={recipe.servings}
            cuisine={recipe.cuisine}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedRecipes;
