
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-zahir-burgundy dark:text-zahir-gold">Story</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging centuries of South Asian wellness traditions with modern lifestyles.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At ZOS, we're on a mission to introduce the world to the authentic wellness treasures of South Asia. 
              For centuries, these ancient traditions have promoted health and vitality, and we believe these gifts 
              should be accessible to everyone.
            </p>
            <p className="mb-4">
              We carefully source each product directly from its traditional region of origin, working closely with 
              local farmers and artisans who have preserved these practices through generations.
            </p>
            <p>
              Every ZOS product meets the highest standards of purity and potency, bringing you the true essence 
              of South Asian wellness in its most authentic form.
            </p>
          </div>
          <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-12 rounded-lg">
            <h3 className="font-playfair text-2xl font-medium mb-4 text-zahir-burgundy dark:text-zahir-gold">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-zahir-burgundy dark:bg-zahir-gold flex items-center justify-center text-white dark:text-zahir-dark mr-3 mt-1 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-medium mb-1">Authenticity</h4>
                  <p className="text-muted-foreground">We never compromise on the authentic sourcing and traditional preparation of our products.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-zahir-burgundy dark:bg-zahir-gold flex items-center justify-center text-white dark:text-zahir-dark mr-3 mt-1 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-medium mb-1">Sustainability</h4>
                  <p className="text-muted-foreground">We support sustainable farming practices and fair trade relationships with our producers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-zahir-burgundy dark:bg-zahir-gold flex items-center justify-center text-white dark:text-zahir-dark mr-3 mt-1 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-medium mb-1">Education</h4>
                  <p className="text-muted-foreground">We're committed to educating our community about the rich heritage behind each product.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Journey Section */}
        <div className="bg-zahir-cream/50 dark:bg-zahir-dark/30 p-12 rounded-lg mb-20">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 text-center md:text-right">
                <h3 className="font-playfair text-xl font-medium text-zahir-burgundy dark:text-zahir-gold">2018</h3>
                <h4 className="font-medium">The Beginning</h4>
              </div>
              <div className="hidden md:block w-px bg-zahir-burgundy/30 dark:bg-zahir-gold/30 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-zahir-burgundy dark:bg-zahir-gold"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground">
                  ZOS began with a simple vision: to share the wellness secrets that had been passed down through generations 
                  in South Asian families. Our founder started by importing small batches of pure honey and organic ghee.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 text-center md:text-right">
                <h3 className="font-playfair text-xl font-medium text-zahir-burgundy dark:text-zahir-gold">2020</h3>
                <h4 className="font-medium">Expanding Our Offerings</h4>
              </div>
              <div className="hidden md:block w-px bg-zahir-burgundy/30 dark:bg-zahir-gold/30 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-zahir-burgundy dark:bg-zahir-gold"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground">
                  As interest grew, we expanded our collection to include herbal supplements, Shilajit, and cold-pressed oils, 
                  always maintaining our commitment to authentic sourcing and traditional preparation methods.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 text-center md:text-right">
                <h3 className="font-playfair text-xl font-medium text-zahir-burgundy dark:text-zahir-gold">2022</h3>
                <h4 className="font-medium">The ZOS Community</h4>
              </div>
              <div className="hidden md:block w-px bg-zahir-burgundy/30 dark:bg-zahir-gold/30 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-zahir-burgundy dark:bg-zahir-gold"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground">
                  Today, ZOS has grown into a thriving community of wellness enthusiasts who value authentic, 
                  traditional products. We continue to explore the rich wellness heritage of South Asia, 
                  bringing more treasures to our customers around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-playfair text-xl font-medium">Aisha Khan</h3>
              <p className="text-zahir-burgundy dark:text-zahir-gold font-medium mb-2">Founder & CEO</p>
              <p className="text-muted-foreground">
                With a background in Ayurvedic medicine and a passion for her heritage, 
                Aisha brings authentic South Asian wellness to the modern world.
              </p>
            </div>
            <div className="text-center">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-playfair text-xl font-medium">Rahul Sharma</h3>
              <p className="text-zahir-burgundy dark:text-zahir-gold font-medium mb-2">Product Sourcing Director</p>
              <p className="text-muted-foreground">
                Rahul travels throughout South Asia to find the most authentic products 
                and build relationships with traditional producers.
              </p>
            </div>
            <div className="text-center">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-playfair text-xl font-medium">Sana Ahmed</h3>
              <p className="text-zahir-burgundy dark:text-zahir-gold font-medium mb-2">Wellness Educator</p>
              <p className="text-muted-foreground">
                With expertise in traditional South Asian medicine, Sana leads our 
                educational content and customer wellness consultations.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the authentic wellness treasures of South Asia and become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark">
              <Link to="/shop">Explore Our Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
