
import React from 'react';
import { Leaf, ShieldCheck, Truck, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'All our products are made with natural ingredients, ethically sourced and free from harmful chemicals.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'We test all our products for purity and potency, ensuring you receive only the finest quality.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Enjoy quick and secure shipping with our trusted logistics partners across Pakistan.'
  },
  {
    icon: Globe,
    title: 'Ethical Sourcing',
    description: 'We work directly with farmers and artisans, ensuring fair compensation and sustainable practices.'
  }
];

const Benefits = () => {
  return (
    <section className="section-padding bg-white dark:bg-zahir-dark">
      <div className="zahir-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-zahir-gold/50 transition-all-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-zahir-cream dark:bg-zahir-dark/50 text-zahir-burgundy dark:text-zahir-gold mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
