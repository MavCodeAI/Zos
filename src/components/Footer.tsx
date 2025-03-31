
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zahir-dark text-zahir-cream pt-16 pb-8">
      <div className="zahir-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-playfair text-2xl font-bold text-zahir-cream">
              ZOS<span className="text-zahir-gold">.</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Premium South Asian natural products, bringing ancient wellness traditions to your modern lifestyle.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-zahir-gold transition-all-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-zahir-gold transition-all-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-zahir-gold transition-all-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-zahir-gold transition-all-300">Shop All</Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-300 hover:text-zahir-gold transition-all-300">Bestsellers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-zahir-gold transition-all-300">Our Story</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-zahir-gold transition-all-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-zahir-gold transition-all-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-zahir-gold flex-shrink-0" />
                <span className="text-gray-300">123 Wellness Avenue, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-zahir-gold flex-shrink-0" />
                <span className="text-gray-300">+92 321 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-zahir-gold flex-shrink-0" />
                <span className="text-gray-300">hello@zos.pk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to receive updates on new products and special promotions.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-zahir-dark/50 border-zahir-gold/50 focus:border-zahir-gold"
              />
              <Button 
                className="bg-zahir-gold hover:bg-zahir-gold/80 text-zahir-dark"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} ZOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-zahir-gold transition-all-300">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-zahir-gold transition-all-300">Privacy Policy</Link>
            <Link to="/shipping" className="hover:text-zahir-gold transition-all-300">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
