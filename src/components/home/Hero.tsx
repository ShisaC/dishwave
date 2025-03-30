import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // You would typically redirect to search results page or filter content
  };

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
          <div className="mb-6">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-primary drop-shadow-md" style={{ paddingBottom: '0.1em' }}>
              Discover Interactive Cooking Stories
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Experience recipes like never before—step into a world where every dish is a journey, not just a set of instructions.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Find interactive recipes, cooking guides, and more..."
              className="pl-10 pr-20 h-12 rounded-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1 h-10 rounded-full"
            >
              Explore
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button variant="outline" className="rounded-full">Interactive Stories</Button>
            <Button variant="outline" className="rounded-full">Chef Insights</Button>
            <Button variant="outline" className="rounded-full">Cooking Challenges</Button>
            <Button variant="outline" className="rounded-full">Behind the Recipe</Button>
            <Button variant="outline" className="rounded-full">Food Science</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;