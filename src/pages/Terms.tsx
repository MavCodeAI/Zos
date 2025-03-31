
import React from 'react';
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
          Terms of <span className="text-zahir-burgundy dark:text-zahir-gold">Service</span>
        </h1>
        
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <p>
            Welcome to ZOS. Please read these Terms of Service ("Terms") carefully as they contain important 
            information about your legal rights, remedies, and obligations. By accessing or using the ZOS website, 
            you agree to comply with and be bound by these Terms.
          </p>
          
          <h2 className="font-playfair">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the Terms and our Privacy Policy. 
            If you do not agree to these Terms, please do not use our website.
          </p>
          
          <h2 className="font-playfair">2. Changes to Terms</h2>
          <p>
            ZOS reserves the right to modify these Terms at any time. We will provide notice of significant changes by 
            posting the updated Terms on our website. Your continued use of our website following the posting of revised 
            Terms means that you accept and agree to the changes.
          </p>
          
          <h2 className="font-playfair">3. Account Registration</h2>
          <p>
            You may browse our website without registering for an account. However, to access certain features or make a 
            purchase, you may need to register. When you register, you agree to provide accurate, current, and complete 
            information about yourself and to update such information as necessary.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your account and password, and for restricting 
            access to your computer. You agree to accept responsibility for all activities that occur under your account.
          </p>
          
          <h2 className="font-playfair">4. Products and Pricing</h2>
          <p>
            All product descriptions and prices are subject to change without notice. ZOS reserves the right to modify 
            or discontinue any product without notice. We do not warrant that product descriptions or other content on 
            this site is accurate, complete, reliable, current, or error-free.
          </p>
          <p>
            All prices are displayed in Pakistani Rupees (PKR) unless otherwise specified. Prices do not include taxes 
            and shipping fees, which will be added at checkout when applicable.
          </p>
          
          <h2 className="font-playfair">5. Orders and Payment</h2>
          <p>
            When you place an order, you offer to purchase the products at the price and terms indicated. We may accept 
            or decline your order for any reason. After we receive your order, we will send you a confirmation email with 
            your order details.
          </p>
          <p>
            Payment must be received prior to the acceptance of an order unless otherwise agreed. We accept various payment 
            methods as indicated on our website, including credit/debit cards, bank transfers, and mobile payment solutions.
          </p>
          
          <h2 className="font-playfair">6. Shipping and Delivery</h2>
          <p>
            Shipping costs and estimated delivery times are indicated at checkout. ZOS is not responsible for delays in 
            shipping or delivery due to circumstances beyond our control, such as customs processing, weather conditions, 
            or carrier delays.
          </p>
          
          <h2 className="font-playfair">7. Returns and Refunds</h2>
          <p>
            Our return and refund policy is detailed in our separate Return Policy. Please review this policy before making 
            a purchase.
          </p>
          
          <h2 className="font-playfair">8. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital 
            downloads, and data compilations, is the property of ZOS or its content suppliers and is protected by 
            international copyright laws.
          </p>
          
          <h2 className="font-playfair">9. User Conduct</h2>
          <p>
            You agree not to use the website to:
          </p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Infringe the rights of others</li>
            <li>Distribute unsolicited promotional materials</li>
            <li>Upload malicious code or interfere with the functioning of the website</li>
            <li>Collect information about other users without their consent</li>
          </ul>
          
          <h2 className="font-playfair">10. Limitation of Liability</h2>
          <p>
            ZOS will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting 
            from your use of or inability to use this website or the products sold herein.
          </p>
          
          <h2 className="font-playfair">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its 
            conflict of law provisions.
          </p>
          
          <h2 className="font-playfair">12. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            ZOS<br />
            123 Wellness Avenue, Gulberg<br />
            Lahore, Punjab 54000<br />
            Pakistan<br />
            Email: hello@zos.pk<br />
            Phone: +92 321 1234567
          </p>
          
          <p className="text-sm text-muted-foreground mt-8">
            Last Updated: June 15, 2023
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
