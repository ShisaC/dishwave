
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  servings: number;
  cuisine: 'italian' | 'asian' | 'mexican' | 'dessert' | 'vegetarian';
  featured?: boolean;
}

const RecipeCard = ({
  id,
  title,
  image,
  prepTime,
  servings,
  cuisine,
  featured = false,
}: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${id}`} className={cn(
      "recipe-card block",
      featured ? "md:col-span-2 md:row-span-2" : ""
    )}>
      <div className="relative h-full">
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500"
          />
        </div>
        
        <div className="absolute top-3 left-3">
          <span className={cn(
            "cuisine-tag",
            cuisine === 'italian' && "bg-cuisine-italian/20 text-cuisine-italian",
            cuisine === 'asian' && "bg-cuisine-asian/20 text-cuisine-asian",
            cuisine === 'mexican' && "bg-cuisine-mexican/20 text-cuisine-mexican",
            cuisine === 'dessert' && "bg-cuisine-dessert/20 text-cuisine-dessert",
            cuisine === 'vegetarian' && "bg-cuisine-vegetarian/20 text-cuisine-vegetarian",
          )}>
            {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
          </span>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h3 className={cn(
            "font-heading font-medium line-clamp-2",
            featured ? "text-xl" : "text-lg"
          )}>
            {title}
          </h3>
          
          <div className="mt-2 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{prepTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{servings} servings</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
