
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'Home Cook',
    text: 'The timeline interface completely changed how I follow recipes. It\'s so much easier to keep track of where I am in the cooking process.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Michael Chen',
    role: 'Food Blogger',
    text: 'The cooking mode is a game-changer! No more sticky phone screens or lost place in the recipe. TasteJourney has revolutionized my kitchen workflow.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    name: 'Sarah Williams',
    role: 'Culinary Student',
    text: 'Being able to adjust serving sizes and seeing ingredients update in real-time makes meal prep so much more efficient. Love this platform!',
    stars: 4,
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-semibold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Join thousands of cooks who are transforming their cooking experience with TasteJourney
          </p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl shadow-sm p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.stars ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-lg italic flex-1">"{testimonial.text}"</blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
