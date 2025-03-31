
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Ancient Healing Power of Shilajit',
    excerpt: 'Discover how this Himalayan resin has been used for centuries to restore vitality and promote longevity.',
    date: 'June 12, 2023',
    category: 'Traditional Medicine',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'A Guide to Incorporating Desi Ghee in Modern Cooking',
    excerpt: 'Learn how to use traditional clarified butter to enhance flavors and add nutritional benefits to your everyday meals.',
    date: 'May 24, 2023',
    category: 'Culinary Wellness',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Understanding Different Types of Honey: From Sidr to Acacia',
    excerpt: 'Explore the unique properties and benefits of various honey types from across South Asia.',
    date: 'April 18, 2023',
    category: 'Product Guides',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 4,
    title: "The Science Behind Ashwagandha's Stress-Relieving Properties",
    excerpt: 'A deep dive into how this adaptogenic herb helps the body manage stress and restore balance.',
    date: 'March 30, 2023',
    category: 'Research & Science',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 5,
    title: "Sustainable Harvesting: How We Source Our Products",
    excerpt: "Learn about ZOS's commitment to ethical sourcing and environmental responsibility.",
    date: 'February 15, 2023',
    category: 'Behind the Scenes',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Morning Rituals: South Asian Practices for Daily Wellness',
    excerpt: 'Simple traditional routines you can incorporate into your morning for improved wellbeing.',
    date: 'January 7, 2023',
    category: 'Lifestyle',
    imageUrl: '/placeholder.svg'
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-zahir-burgundy dark:text-zahir-gold">Journal</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore traditional South Asian wellness wisdom, product guides, and lifestyle tips to enhance your well-being.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="outline" size="sm">Traditional Medicine</Button>
            <Button variant="outline" size="sm">Culinary Wellness</Button>
            <Button variant="outline" size="sm">Product Guides</Button>
            <Button variant="outline" size="sm">Lifestyle</Button>
          </div>
        </div>
        
        {/* Featured Article */}
        <div className="mb-16 bg-zahir-cream dark:bg-zahir-dark/50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto bg-gray-200"></div>
            <div className="p-8 md:p-12">
              <div className="text-sm text-zahir-burgundy dark:text-zahir-gold font-medium mb-2">
                Featured Article
              </div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Rediscovering Ancient Wisdom: The South Asian Approach to Holistic Health
              </h2>
              <p className="text-muted-foreground mb-6">
                In a world of quick fixes and synthetic solutions, traditional South Asian wellness practices offer a time-tested, 
                natural approach to health that treats the whole person—body, mind, and spirit.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">July 3, 2023 • 8 min read</div>
                <Button variant="ghost" size="sm" className="text-zahir-burgundy dark:text-zahir-gold hover:text-zahir-burgundy/80 hover:dark:text-zahir-gold/80">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <div key={article.id} className="border border-input rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div 
                className="h-48 bg-gray-200"
                style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div className="p-6">
                <div className="text-xs text-zahir-burgundy dark:text-zahir-gold font-medium mb-2">
                  {article.category}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-muted-foreground">{article.date}</div>
                  <Button variant="ghost" size="sm" className="text-zahir-burgundy dark:text-zahir-gold hover:text-zahir-burgundy/80 hover:dark:text-zahir-gold/80 p-0">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">
            Next →
          </Button>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-20 bg-zahir-cream dark:bg-zahir-dark/50 p-12 rounded-lg text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Get the latest articles, product guides, and wellness tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 border border-input rounded-md flex-grow"
            />
            <Button className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
