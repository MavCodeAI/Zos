
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Truck, Clock, Package, AlertCircle } from 'lucide-react';

const Shipping = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
          Shipping <span className="text-zahir-burgundy dark:text-zahir-gold">Information</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Truck size={48} className="text-zahir-burgundy dark:text-zahir-gold" />
            </div>
            <h3 className="font-playfair text-xl font-medium mb-2">Nationwide Delivery</h3>
            <p className="text-muted-foreground">
              We ship to all major cities and areas across Pakistan through trusted courier services.
            </p>
          </div>
          
          <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Clock size={48} className="text-zahir-burgundy dark:text-zahir-gold" />
            </div>
            <h3 className="font-playfair text-xl font-medium mb-2">Quick Processing</h3>
            <p className="text-muted-foreground">
              Orders are processed within 24 hours and dispatched the next business day.
            </p>
          </div>
          
          <div className="bg-zahir-cream dark:bg-zahir-dark/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Package size={48} className="text-zahir-burgundy dark:text-zahir-gold" />
            </div>
            <h3 className="font-playfair text-xl font-medium mb-2">Careful Packaging</h3>
            <p className="text-muted-foreground">
              Products are carefully packaged to ensure they arrive in perfect condition.
            </p>
          </div>
        </div>
        
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <h2 className="font-playfair">Shipping & Delivery Policy</h2>
          <p>
            At ZOS, we strive to deliver your orders quickly and efficiently. Please review the information below to 
            understand our shipping processes and policies.
          </p>
          
          <h3 className="font-playfair">Domestic Shipping (Pakistan)</h3>
          <div className="not-prose">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zahir-cream/50 dark:bg-zahir-dark/30">
                    <th className="border p-3 text-left">Delivery Area</th>
                    <th className="border p-3 text-left">Estimated Time</th>
                    <th className="border p-3 text-left">Shipping Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Lahore</td>
                    <td className="border p-3">1-2 business days</td>
                    <td className="border p-3">PKR 150</td>
                  </tr>
                  <tr className="bg-zahir-cream/30 dark:bg-zahir-dark/10">
                    <td className="border p-3">Karachi, Islamabad, Rawalpindi</td>
                    <td className="border p-3">2-3 business days</td>
                    <td className="border p-3">PKR 250</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Other Major Cities</td>
                    <td className="border p-3">3-4 business days</td>
                    <td className="border p-3">PKR 300</td>
                  </tr>
                  <tr className="bg-zahir-cream/30 dark:bg-zahir-dark/10">
                    <td className="border p-3">Remote Areas</td>
                    <td className="border p-3">4-7 business days</td>
                    <td className="border p-3">PKR 400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-zahir-cream/50 dark:bg-zahir-dark/30 p-4 rounded-lg my-6 flex items-start">
            <AlertCircle size={20} className="text-zahir-burgundy dark:text-zahir-gold mr-2 mt-1 flex-shrink-0" />
            <p className="text-sm m-0">
              Free shipping is available for orders above PKR 5,000 to all major cities. Remote areas may still incur a reduced shipping fee.
            </p>
          </div>
          
          <h3 className="font-playfair">International Shipping</h3>
          <p>
            We currently ship to select countries internationally. International shipping rates and delivery times vary by 
            destination. Please contact our customer service team for detailed information about shipping to your country.
          </p>
          <div className="not-prose">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zahir-cream/50 dark:bg-zahir-dark/30">
                    <th className="border p-3 text-left">Region</th>
                    <th className="border p-3 text-left">Estimated Time</th>
                    <th className="border p-3 text-left">Shipping Fee (Starting From)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Middle East</td>
                    <td className="border p-3">5-7 business days</td>
                    <td className="border p-3">PKR 3,000</td>
                  </tr>
                  <tr className="bg-zahir-cream/30 dark:bg-zahir-dark/10">
                    <td className="border p-3">Europe</td>
                    <td className="border p-3">7-10 business days</td>
                    <td className="border p-3">PKR 4,500</td>
                  </tr>
                  <tr>
                    <td className="border p-3">North America</td>
                    <td className="border p-3">7-12 business days</td>
                    <td className="border p-3">PKR 5,000</td>
                  </tr>
                  <tr className="bg-zahir-cream/30 dark:bg-zahir-dark/10">
                    <td className="border p-3">Asia Pacific</td>
                    <td className="border p-3">5-9 business days</td>
                    <td className="border p-3">PKR 3,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <h2 className="font-playfair">Order Tracking</h2>
          <p>
            Once your order is dispatched, you will receive a tracking number via email and SMS. You can use this tracking 
            number to monitor the status of your delivery on our website or directly on the courier's website.
          </p>
          
          <h2 className="font-playfair">Shipping Delays</h2>
          <p>
            While we strive to deliver all orders within the estimated timeframes, occasionally delays may occur due to:
          </p>
          <ul>
            <li>Adverse weather conditions</li>
            <li>Public holidays</li>
            <li>Courier service disruptions</li>
            <li>Customs clearance (for international orders)</li>
          </ul>
          <p>
            We will keep you informed about any significant delays affecting your order.
          </p>
          
          <h2 className="font-playfair">Delivery Attempts</h2>
          <p>
            Our courier partners will make up to three delivery attempts. If delivery cannot be completed after three 
            attempts, the package will be returned to our warehouse. In such cases, we will contact you to arrange 
            re-delivery, which may incur additional shipping charges.
          </p>
          
          <h2 className="font-playfair">Package Inspection</h2>
          <p>
            We recommend inspecting your package upon delivery. If the package appears damaged, please note this on the 
            delivery receipt before accepting the package. Contact our customer service team immediately if you discover 
            any damaged or missing items after opening your package.
          </p>
          
          <h2 className="font-playfair">Contact Information</h2>
          <p>
            If you have any questions about our shipping policy or need assistance with a specific order, please contact 
            our customer service team:
          </p>
          <p>
            Email: shipping@zos.pk<br />
            Phone: +92 321 1234567<br />
            WhatsApp: +92 321 1234568
          </p>
          
          <p className="text-sm text-muted-foreground mt-8">
            Last Updated: June 15, 2023
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
