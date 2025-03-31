
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Zahir Open Store" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zahir-dark/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="zahir-container relative z-10">
        <div className="max-w-xl">
          <span className="inline-block mb-3 text-zahir-gold font-medium animate-fade-in">
            South Asian Heritage, Modern Wellness
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in">
            Nature's Treasures, <span className="text-gradient-gold">Curated For You</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8 animate-slide-in opacity-90">
            Discover premium natural products rooted in South Asian traditions, carefully selected to enhance your modern wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              className="bg-zahir-gold hover:bg-zahir-gold/90 text-zahir-dark font-medium text-base px-8 py-6"
            >
              Shop Now
              <ChevronRight size={18} className="ml-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium text-base px-8 py-6"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
