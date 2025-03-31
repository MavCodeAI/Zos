
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Shop = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-zahir-burgundy dark:text-zahir-gold">Collection</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-xl font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="all" />
                    <Label htmlFor="all">All Products</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ghee" />
                    <Label htmlFor="ghee">Organic Desi Ghee</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="honey" />
                    <Label htmlFor="honey">Raw Honey</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shilajit" />
                    <Label htmlFor="shilajit">Pure Shilajit</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="herbs" />
                    <Label htmlFor="herbs">Herbal Supplements</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="oils" />
                    <Label htmlFor="oils">Cold-Pressed Oils</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skincare" />
                    <Label htmlFor="skincare">Natural Skincare</Label>
                  </div>
                </li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-playfair text-xl font-medium mb-4">Price Range</h3>
              <div className="space-y-4">
                <Slider defaultValue={[0, 5000]} max={10000} step={100} />
                <div className="flex items-center space-x-4">
                  <div>
                    <Label htmlFor="min">Min</Label>
                    <Input id="min" type="number" placeholder="0" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="max">Max</Label>
                    <Input id="max" type="number" placeholder="5000" className="mt-1" />
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  Price in PKR
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-playfair text-xl font-medium mb-4">Origin</h3>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="punjab" />
                    <Label htmlFor="punjab">Punjab</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="kashmir" />
                    <Label htmlFor="kashmir">Kashmir</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="himalayan" />
                    <Label htmlFor="himalayan">Himalayan</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="kpk" />
                    <Label htmlFor="kpk">Khyber Pakhtunkhwa</Label>
                  </div>
                </li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-playfair text-xl font-medium mb-4">Dietary</h3>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="organic" />
                    <Label htmlFor="organic">Organic</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegan" />
                    <Label htmlFor="vegan">Vegan</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="glutenFree" />
                    <Label htmlFor="glutenFree">Gluten Free</Label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sugarFree" />
                    <Label htmlFor="sugarFree">Sugar Free</Label>
                  </div>
                </li>
              </ul>
            </div>
            
            <Button className="w-full bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark">
              Apply Filters
            </Button>
          </div>
          
          {/* Products Grid */}
          <div className="col-span-1 md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing 12 of 36 products</p>
              <select className="bg-transparent border border-input rounded-md p-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="mx-1">
                Next →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
