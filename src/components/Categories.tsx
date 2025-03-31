
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'honey',
    name: 'Honey Collection',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'From Sidr to Mountain varieties',
  },
  {
    id: 'supplements',
    name: 'Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Traditional wellness remedies',
  },
  {
    id: 'oils',
    name: 'Cold-Pressed Oils',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pure, natural, and potent',
  },
  {
    id: 'superfoods',
    name: 'Superfoods',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Nutritional powerhouses',
  },
];

const Categories = () => {
  return (
    <section className="section-padding bg-zahir-cream dark:bg-zahir-dark/30">
      <div className="zahir-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground">
            Dive into our carefully curated categories, each offering premium products 
            that bring the richness of South Asian wellness traditions to your daily life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-all-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
