
import React from 'react';
import { LayoutTimeline, Utensils, MonitorSmartphone, Users } from 'lucide-react';

const features = [
  {
    icon: <LayoutTimeline className="h-8 w-8 text-primary" />,
    title: 'Interactive Timeline',
    description: 'Navigate recipes with our intuitive horizontal timeline interface that replaces traditional numbered steps.'
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: 'Visual Ingredient Cards',
    description: 'Easily adjust ingredients based on serving sizes with our dynamic visual ingredient cards.'
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    title: 'Distraction-Free Cooking Mode',
    description: 'Switch to cooking mode for a simplified navigation experience perfect for messy hands.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Community Features',
    description: 'Share your recipe variations and results with our growing community of food enthusiasts.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-semibold mb-4">
            Reimagining Recipe Interaction
          </h2>
          <p className="text-muted-foreground">
            TasteJourney transforms traditional text-heavy recipes into an interactive visual experience
            designed to make cooking more intuitive and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
