
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { featuredProducts } from '@/data/products';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedProducts = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="section-padding bg-background">
      <div className="zahir-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3">
              {t('featuredProducts')}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {language === 'en' 
                ? "Discover our handpicked selection of premium South Asian products, each telling a story of tradition, quality, and exceptional craftsmanship."
                : "جنوبی ایشیائی پریمیم مصنوعات کا ہمارا منتخب کردہ مجموعہ دریافت کریں، ہر ایک روایت، معیار، اور استثنائی کاریگری کی کہانی بیان کرتا ہے۔"
              }
            </p>
          </div>
          <Link 
            to="/shop" 
            className="mt-4 md:mt-0 inline-flex items-center text-zahir-burgundy dark:text-zahir-gold hover:underline font-medium"
          >
            {t('viewAllProducts')}
            <ChevronRight size={18} className={language === 'ur' ? 'mr-1 rotate-180' : 'ml-1'} />
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
