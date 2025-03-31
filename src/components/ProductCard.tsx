
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/data/products';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isLimited?: boolean;
  description: string;
  origin: string;
  benefits: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  const { 
    id, 
    name, 
    category, 
    price, 
    discountPrice, 
    image, 
    rating, 
    isNew, 
    isBestseller, 
    isLimited 
  } = product;

  const handleAddToCart = () => {
    toast({
      title: t('addToCart'),
      description: `${name} ${language === 'en' ? 'added to cart' : 'کارٹ میں شامل کردیا گیا'}`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: t('wishlist'),
      description: `${name} ${language === 'en' ? 'added to wishlist' : 'پسندیدہ میں شامل کردیا گیا'}`,
    });
  };

  return (
    <Card className="overflow-hidden border border-input transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <div className="relative">
        <Link to={`/shop/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="h-48 w-full object-cover"
          />
        </Link>
        
        {/* Status badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">
              {language === 'en' ? 'New' : 'نیا'}
            </Badge>
          )}
          {isBestseller && (
            <Badge className="bg-blue-500 hover:bg-blue-600">
              {language === 'en' ? 'Bestseller' : 'بیسٹ سیلر'}
            </Badge>
          )}
          {isLimited && (
            <Badge className="bg-amber-500 hover:bg-amber-600">
              {language === 'en' ? 'Limited' : 'محدود'}
            </Badge>
          )}
        </div>
        
        {/* Wishlist button */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={16} className="text-zahir-burgundy dark:text-zahir-gold" />
        </button>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-muted-foreground">{category}</span>
          <div className="flex items-center">
            <Star size={12} className="fill-zahir-gold stroke-zahir-gold" />
            <span className="text-xs ml-1">{rating}/5</span>
          </div>
        </div>
        
        <Link to={`/shop/${id}`}>
          <h3 className="font-medium line-clamp-2 hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="mt-2">
          {discountPrice ? (
            <div className="flex items-center gap-2">
              <span className="font-bold text-zahir-burgundy dark:text-zahir-gold">
                {formatPrice(discountPrice)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(price)}
              </span>
            </div>
          ) : (
            <span className="font-bold text-zahir-burgundy dark:text-zahir-gold">
              {formatPrice(price)}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
        >
          {t('addToCart')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
