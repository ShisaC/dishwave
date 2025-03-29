
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedRecipes from '@/components/home/FeaturedRecipes';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import { recipes } from '@/data/recipes';

const Index = () => {
  // Get featured and other recipes for homepage
  const featuredRecipes = recipes.slice(0, 4);
  
  return (
    <Layout>
      <Hero />
      <FeaturedRecipes recipes={featuredRecipes} />
      <FeaturesSection />
      <TestimonialSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
