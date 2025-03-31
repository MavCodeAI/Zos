import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-zahir-burgundy dark:text-zahir-gold">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, 
            orders, or anything else, our team is ready to assist you.
          </p>
        </div>
        
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                        First Name <span className="text-zahir-burgundy dark:text-zahir-gold">*</span>
                      </label>
                      <Input id="first-name" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                        Last Name <span className="text-zahir-burgundy dark:text-zahir-gold">*</span>
                      </label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-zahir-burgundy dark:text-zahir-gold">*</span>
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject <span className="text-zahir-burgundy dark:text-zahir-gold">*</span>
                    </label>
                    <Input id="subject" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-zahir-burgundy dark:text-zahir-gold">*</span>
                    </label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <h2 className="font-playfair text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 text-zahir-burgundy dark:text-zahir-gold flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Wellness Avenue, Gulberg<br />
                    Lahore, Punjab 54000<br />
                    Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="mr-4 text-zahir-burgundy dark:text-zahir-gold flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    General Inquiries: <a href="mailto:hello@zos.pk" className="hover:text-zahir-burgundy dark:hover:text-zahir-gold">hello@zos.pk</a><br />
                    Orders & Support: <a href="mailto:support@zos.pk" className="hover:text-zahir-burgundy dark:hover:text-zahir-gold">support@zos.pk</a><br />
                    Wholesale: <a href="mailto:wholesale@zos.pk" className="hover:text-zahir-burgundy dark:hover:text-zahir-gold">wholesale@zos.pk</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mr-4 text-zahir-burgundy dark:text-zahir-gold flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    Customer Service: <a href="tel:+923211234567" className="hover:text-zahir-burgundy dark:hover:text-zahir-gold">+92 321 1234567</a><br />
                    WhatsApp Support: <a href="tel:+923211234568" className="hover:text-zahir-burgundy dark:hover:text-zahir-gold">+92 321 1234568</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="mr-4 text-zahir-burgundy dark:text-zahir-gold flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg"></div>
            
            {/* FAQ Section */}
            <div className="mt-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">How long does shipping take?</h3>
                  <p className="text-muted-foreground text-sm">
                    We typically process orders within 1-2 business days. Delivery times vary by location, 
                    but generally take 3-5 days within major cities in Pakistan.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Do you ship internationally?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we ship to select countries internationally. International shipping may take 7-14 business days.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">What is your return policy?</h3>
                  <p className="text-muted-foreground text-sm">
                    We accept returns within 30 days of delivery for unused and unopened products. 
                    Please contact our customer service team to initiate a return.
                  </p>
                </div>
              </div>
              <Button asChild variant="link" className="mt-2 text-zahir-burgundy dark:text-zahir-gold p-0">
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
