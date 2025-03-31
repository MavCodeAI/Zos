
import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';

const Bestsellers = () => {
  // Filter to show just 6 bestseller products
  const bestsellers = products.filter(product => product.isBestseller).slice(0, 6);
  
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-zahir-burgundy dark:text-zahir-gold">Bestsellers</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular products that have won the hearts of our customers. 
            Each bestseller represents the pinnacle of quality and effectiveness in South Asian wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="relative">
              <Badge className="absolute top-4 right-4 z-10 bg-zahir-burgundy dark:bg-zahir-gold dark:text-zahir-dark">
                Bestseller
              </Badge>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="font-playfair text-2xl font-medium mb-4">
            Why Our Products Are Loved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-8 rounded-lg">
              <h3 className="font-playfair text-xl font-medium mb-2">Authentic Sourcing</h3>
              <p className="text-muted-foreground">
                Every product is directly sourced from its traditional region of origin, ensuring the purest quality and authentic benefits.
              </p>
            </div>
            <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-8 rounded-lg">
              <h3 className="font-playfair text-xl font-medium mb-2">Tested Quality</h3>
              <p className="text-muted-foreground">
                Each batch undergoes rigorous lab testing to guarantee purity, potency and freedom from contaminants.
              </p>
            </div>
            <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-8 rounded-lg">
              <h3 className="font-playfair text-xl font-medium mb-2">Visible Results</h3>
              <p className="text-muted-foreground">
                Our customers report noticeable improvements in well-being, making these products our consistent top sellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bestsellers;
