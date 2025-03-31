
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <div className="py-16 bg-zahir-cream dark:bg-zahir-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000000"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        <div className="zahir-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              South Asian Heritage, <span className="text-zahir-burgundy dark:text-zahir-gold">Modern Wellness</span>
            </h2>
            <p className="text-muted-foreground">
              At Zahir Open Store, we bridge centuries-old wellness traditions with modern lifestyles. 
              Each product we offer carries the rich heritage of South Asian healing practices, 
              carefully selected to bring authentic wellness into your daily routine.
            </p>
          </div>
        </div>
      </div>
      <Benefits />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;
