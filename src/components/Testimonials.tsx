
import React from 'react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    position: 'Wellness Enthusiast',
    quote: 'The Premium Sidr Honey has transformed my morning routine. Its authentic taste and healing properties are beyond compare.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Priya Sharma',
    position: 'Yoga Instructor',
    quote: 'As someone who values traditional medicine, Zahir\'s Ashwagandha has become essential in my daily regimen. The quality is exceptional.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Tariq Malik',
    position: 'Holistic Health Coach',
    quote: 'The Black Seed Oil from Zahir is the purest I\'ve found. My clients have reported remarkable improvements in their allergies and immunity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-zahir-burgundy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="zahir-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-zahir-cream/80">
            Join thousands of satisfied customers who have made Zahir Open Store an integral part of their wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/30 transition-all-300"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-zahir-gold" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 12C7.64 12 5.33333 14.3067 5.33333 17.3333C5.33333 20.36 7.64 22.6667 10.6667 22.6667C10.6667 22.6667 10.6667 26.6667 5.33333 26.6667V28C13.6 28 13.6 19.4267 13.6 17.3333C13.6 14.3067 11.2933 12 10.6667 12ZM21.3333 12C18.3067 12 16 14.3067 16 17.3333C16 20.36 18.3067 22.6667 21.3333 22.6667C21.3333 22.6667 21.3333 26.6667 16 26.6667V28C24.2667 28 24.2667 19.4267 24.2667 17.3333C24.2667 14.3067 21.96 12 21.3333 12Z"/>
                </svg>
              </div>
              <p className="text-white mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-zahir-cream/70">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
