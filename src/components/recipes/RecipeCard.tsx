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
    <Link 
      to={`/recipe/${id}`} 
      className={cn(
        "recipe-card block relative overflow-hidden rounded-xl",
        "transition-transform duration-700 ease-out transform-gpu",
        "hover:scale-[1.04] hover:shadow-2xl",
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
      style={{ perspective: "1000px" }}
    >
      {/* Background Blur Effect (Behind Card) */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
        <div className="w-full h-full blur-xl bg-black/10" />
      </div>

      <div className="relative h-full group transition-all duration-700 ease-out" style={{ transformStyle: "preserve-3d" }}>
        {/* Image with Depth Effect */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl relative">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ transform: "translateZ(30px)" }}
          />
        </div>

        {/* Cuisine Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className={cn(
            "cuisine-tag px-3 py-1 rounded-full text-sm font-semibold shadow-md",
            "backdrop-blur-lg bg-white/30 border border-white/40",
            cuisine === 'italian' && "text-red-600 border-red-400",
            cuisine === 'asian' && "text-yellow-600 border-yellow-400",
            cuisine === 'mexican' && "text-green-600 border-green-400",
            cuisine === 'dessert' && "text-purple-600 border-purple-400",
            cuisine === 'vegetarian' && "text-green-800 border-green-500",
          )}>
            {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
          </span>
        </div>

        {/* Title & Details */}
        <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-700">
          <h3 className={cn(
            "font-heading font-semibold line-clamp-2 transition-all duration-700",
            "group-hover:text-yellow-300",
            featured ? "text-xl" : "text-lg"
          )}>
            {title}
          </h3>
          
          <div className="mt-2 flex items-center gap-3 text-xs opacity-90">
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
