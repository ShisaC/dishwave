
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-semibold mb-4">Stay Inspired</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for weekly recipe inspiration, cooking tips, and exclusive content.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
