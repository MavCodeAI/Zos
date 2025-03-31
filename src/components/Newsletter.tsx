
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
    });
  };

  return (
    <section className="section-padding bg-zahir-cream dark:bg-zahir-dark/30">
      <div className="zahir-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new product launches, special promotions, 
            and wellness tips rooted in ancient South Asian traditions.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
              required
            />
            <Button 
              type="submit"
              className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 text-white"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
