
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="font-playfair text-6xl md:text-7xl font-bold text-zahir-burgundy dark:text-zahir-gold mb-4">404</h1>
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            We're sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-zahir-burgundy hover:bg-zahir-burgundy/90">
            <Link to="/" className="inline-flex items-center">
              <Home size={18} className="mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
