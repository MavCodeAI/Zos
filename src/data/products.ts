
import { Product } from '@/components/ProductCard';

export const products: Product[] = [
  {
    id: "organic-desi-ghee",
    name: "Organic Desi Ghee",
    category: "Dairy",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isNew: true,
    rating: 5,
    description: "Pure organic ghee made from the milk of grass-fed cows using traditional churning methods. Rich in healthy fats and perfect for cooking, this ghee adds authentic flavor to your dishes.",
    origin: "Punjab, Pakistan",
    benefits: ["Rich in butyric acid", "Promotes healthy gut", "High smoke point", "Lactose-free"]
  },
  {
    id: "sidr-honey",
    name: "Premium Sidr Honey",
    category: "Honey",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isBestseller: true,
    rating: 5,
    description: "Rare Sidr honey harvested from the mountains of Yemen. Known for its distinctive caramel taste and exceptional medicinal properties, this premium honey is one of the most sought-after varieties in the world.",
    origin: "Yemen",
    benefits: ["Immune support", "Natural antibacterial", "Rich in antioxidants", "Promotes healing"]
  },
  {
    id: "gold-shilajit",
    name: "Gold Shilajit Resin",
    category: "Supplements",
    price: 49.99,
    discountPrice: 39.99,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isLimited: true,
    rating: 4,
    description: "Premium Gold Shilajit resin, harvested from the highest peaks of the Himalayan mountains. This ancient mineral-rich substance is packed with fulvic acid and over 84 minerals for optimal health and vitality.",
    origin: "Himalayan Mountains",
    benefits: ["Increases energy", "Enhances nutrient absorption", "Supports immunity", "Anti-aging properties"]
  },
  {
    id: "ashwagandha-powder",
    name: "Organic Ashwagandha Powder",
    category: "Supplements",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 5,
    description: "Pure organic Ashwagandha powder, known as the king of Ayurvedic herbs. This adaptogenic herb helps reduce stress and anxiety while promoting overall wellbeing and vitality.",
    origin: "India",
    benefits: ["Reduces stress", "Improves sleep", "Boosts immunity", "Enhances vitality"]
  },
  {
    id: "black-seed-oil",
    name: "Cold-Pressed Black Seed Oil",
    category: "Oils",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isBestseller: true,
    rating: 4,
    description: "Pure cold-pressed Black Seed (Nigella Sativa) oil, known as 'the remedy for all diseases except death'. Our oil is extracted using traditional methods to preserve all beneficial compounds.",
    origin: "Egypt",
    benefits: ["Immune support", "Respiratory health", "Anti-inflammatory", "Skin health"]
  },
  {
    id: "sandalwood-powder",
    name: "Pure Sandalwood Powder",
    category: "Skincare",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 5,
    description: "100% pure Sandalwood powder, traditionally used in Ayurvedic skincare routines. This fine powder helps cool the skin, reduce blemishes, and promote a radiant complexion.",
    origin: "Karnataka, India",
    benefits: ["Cooling properties", "Reduces blemishes", "Anti-aging", "Natural fragrance"]
  },
  {
    id: "ajwa-dates",
    name: "Premium Ajwa Dates",
    category: "Superfoods",
    price: 34.99,
    discountPrice: 29.99,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isLimited: true,
    isBestseller: true,
    rating: 5,
    description: "Premium Ajwa dates from Madinah, known for their exceptional taste and numerous health benefits. These rare dates are rich in antioxidants and have been treasured for centuries.",
    origin: "Madinah, Saudi Arabia",
    benefits: ["Heart health", "Rich in fiber", "Antioxidant-rich", "Natural energy"]
  },
  {
    id: "moringa-tea",
    name: "Organic Moringa Detox Tea",
    category: "Teas",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isNew: true,
    rating: 4,
    description: "Organic Moringa leaf tea with hints of lemongrass and ginger. This detoxifying blend is rich in antioxidants and provides natural energy without the caffeine crash.",
    origin: "Kerala, India",
    benefits: ["Detoxifying", "Rich in vitamins", "Boosts metabolism", "Caffeine-free"]
  }
];

export const featuredProducts = products.filter(product => product.isBestseller || product.isNew);
export const bestsellerProducts = products.filter(product => product.isBestseller);
export const newArrivals = products.filter(product => product.isNew);
