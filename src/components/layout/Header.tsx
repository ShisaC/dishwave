import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import FeaturedRecipes from '../home/FeaturedRecipes';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">T</span>
            </div>
            <h1 className="hidden font-heading text-xl font-bold md:block">TasteJourney</h1>
          </Link>
          
          <nav className="hidden gap-6 md:flex">
            <Link to="/" className="text-sm font-medium">Home</Link>
            <Link to="/" className="text-sm font-medium">Recipes</Link>
            <Link to="/#" className="text-sm font-medium">Categories</Link>
            <Link to="/#" className="text-sm font-medium">About</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes..."
              className="w-full pl-8"
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-10">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search recipes..."
                  className="w-full pl-8"
                />
              </div>
            </SheetContent>
          </Sheet>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 pt-10">
                <Link to="/" className="text-base font-medium">Home</Link>
                <Link to="/" className="text-base font-medium">Recipes</Link>
                <Link to="/#" className="text-base font-medium">Categories</Link>
                <Link to="/#" className="text-base font-medium">About</Link>
                <hr />
                <Button variant="outline" className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;