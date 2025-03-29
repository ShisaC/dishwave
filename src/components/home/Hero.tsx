
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')`,
          filter: 'blur(8px)'
        }} 
      />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Reimagine Your Cooking Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Transform traditional recipes into interactive visual journeys. Cook smarter, not harder.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for recipes, ingredients, cuisines..."
              className="pl-10 pr-20 h-12 rounded-full"
            />
            <Button className="absolute right-1 top-1 h-10 rounded-full">
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button variant="outline" className="rounded-full">Italian</Button>
            <Button variant="outline" className="rounded-full">Asian</Button>
            <Button variant="outline" className="rounded-full">Mexican</Button>
            <Button variant="outline" className="rounded-full">Dessert</Button>
            <Button variant="outline" className="rounded-full">Vegetarian</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
