
export type Cuisine = 'italian' | 'asian' | 'mexican' | 'dessert' | 'vegetarian' | 'indian';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  cuisine: Cuisine;
  featured?: boolean;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}
