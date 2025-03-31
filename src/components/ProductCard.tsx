
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isLimited?: boolean;
  rating: number;
  description: string;
  origin?: string;
  benefits?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isFavorite ? "removed from" : "added to"} your wishlist`,
    });
  };

  return (
    <div 
      className="group relative rounded-lg overflow-hidden transition-all-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-80 bg-zahir-cream dark:bg-zahir-dark/50 rounded-lg overflow-hidden">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-zahir-burgundy text-white">New</Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-zahir-gold text-zahir-dark">Bestseller</Badge>
            )}
            {product.isLimited && (
              <Badge variant="outline" className="border-white text-white bg-black/50 backdrop-blur-sm">Limited Edition</Badge>
            )}
          </div>

          {/* Quick actions */}
          <div 
            className={`absolute right-2 flex flex-col gap-2 transition-all-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <button 
              onClick={handleToggleFavorite}
              className="p-2 bg-white/90 dark:bg-zahir-dark/90 rounded-full shadow-md hover:bg-zahir-cream dark:hover:bg-zahir-dark transition-all-300"
              aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={18} className={isFavorite ? "fill-zahir-burgundy text-zahir-burgundy" : ""} />
            </button>
            
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  onClick={(e) => e.preventDefault()}
                  className="p-2 bg-white/90 dark:bg-zahir-dark/90 rounded-full shadow-md hover:bg-zahir-cream dark:hover:bg-zahir-dark transition-all-300"
                  aria-label="Quick view"
                >
                  <Eye size={18} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zahir-cream dark:bg-zahir-dark/50 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-playfair text-xl font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                      
                      <div className="mt-4 flex items-center">
                        {product.discountPrice ? (
                          <>
                            <span className="text-xl font-semibold">${product.discountPrice.toFixed(2)}</span>
                            <span className="ml-2 text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                          </>
                        ) : (
                          <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                      
                      <p className="mt-4 text-sm">{product.description}</p>
                      
                      {product.origin && (
                        <div className="mt-4">
                          <span className="text-sm font-medium">Origin: </span>
                          <span className="text-sm">{product.origin}</span>
                        </div>
                      )}
                      
                      {product.benefits && product.benefits.length > 0 && (
                        <div className="mt-2">
                          <span className="text-sm font-medium">Benefits: </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {product.benefits.map((benefit, index) => (
                              <Badge key={index} variant="outline" className="font-normal">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 flex space-x-2">
                      <Button 
                        onClick={handleAddToCart}
                        className="flex-1 bg-zahir-burgundy hover:bg-zahir-burgundy/80"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleToggleFavorite}
                        className="border-zahir-burgundy text-zahir-burgundy hover:bg-zahir-burgundy/10"
                      >
                        <Heart size={16} className={isFavorite ? "fill-zahir-burgundy" : ""} />
                      </Button>
                    </div>
                    
                    <Link 
                      to={`/product/${product.id}`} 
                      className="mt-4 text-center text-sm underline hover:text-zahir-burgundy transition-all-300"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-white/90 dark:bg-zahir-dark/90 rounded-full shadow-md hover:bg-zahir-cream dark:hover:bg-zahir-dark transition-all-300"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-3">
          <h3 className="font-playfair text-lg font-medium line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="font-medium text-zahir-burgundy dark:text-zahir-gold">${product.discountPrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="font-medium">${product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < product.rating 
                        ? 'text-yellow-400' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
