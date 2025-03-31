
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { featuredProducts } from '@/data/products';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="zahir-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our handpicked selection of premium South Asian products, 
              each telling a story of tradition, quality, and exceptional craftsmanship.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="mt-4 md:mt-0 inline-flex items-center text-zahir-burgundy dark:text-zahir-gold hover:underline font-medium"
          >
            View All Products
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
