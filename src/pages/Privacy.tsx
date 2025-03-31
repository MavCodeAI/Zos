
import React from 'react';
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
          Privacy <span className="text-zahir-burgundy dark:text-zahir-gold">Policy</span>
        </h1>
        
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <p>
            At ZOS, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or make a purchase. Please read this 
            Privacy Policy carefully. By accessing or using our website, you agree to the terms of this Privacy Policy.
          </p>
          
          <h2 className="font-playfair">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Register on our website</li>
            <li>Place an order</li>
            <li>Subscribe to our newsletter</li>
            <li>Participate in surveys or promotions</li>
            <li>Contact us</li>
          </ul>
          <p>
            The personal information we collect may include:
          </p>
          <ul>
            <li>Name, email address, phone number, and billing/shipping address</li>
            <li>Payment information (credit card details, bank account information)</li>
            <li>Order history and preferences</li>
            <li>Communications with us</li>
          </ul>
          <p>
            We also automatically collect certain information when you visit our website, including:
          </p>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages viewed and time spent on our website</li>
            <li>Referring website or application</li>
            <li>Device information</li>
          </ul>
          
          <h2 className="font-playfair">2. How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including to:
          </p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Create and manage your account</li>
            <li>Provide customer service and respond to inquiries</li>
            <li>Send transaction-related emails and updates</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our website, products, and services</li>
            <li>Protect against fraud and unauthorized transactions</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="font-playfair">3. Information Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Payment processors to process transactions</li>
            <li>Shipping partners to deliver orders</li>
            <li>Marketing partners (with your consent)</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your consent.
          </p>
          
          <h2 className="font-playfair">4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and to hold certain information. 
            Cookies are files with a small amount of data that may include an anonymous unique identifier. They are sent to 
            your browser from a website and stored on your device.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
            do not accept cookies, you may not be able to use some portions of our website.
          </p>
          
          <h2 className="font-playfair">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, accidental loss, destruction, or damage. However, the transmission of information via the 
            internet is not completely secure. While we do our best to protect your personal information, we cannot guarantee 
            the security of your information transmitted to our website.
          </p>
          
          <h2 className="font-playfair">6. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to delete your information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
          
          <h2 className="font-playfair">7. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility for 
            the content, privacy policies, or practices of any third-party websites or services. We encourage you to read the 
            privacy policy of every website you visit.
          </p>
          
          <h2 className="font-playfair">8. Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information 
            from children under 13. If you are a parent or guardian and believe that your child has provided us with personal 
            information, please contact us.
          </p>
          
          <h2 className="font-playfair">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
            Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically 
            for any changes.
          </p>
          
          <h2 className="font-playfair">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            ZOS<br />
            123 Wellness Avenue, Gulberg<br />
            Lahore, Punjab 54000<br />
            Pakistan<br />
            Email: privacy@zos.pk<br />
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

export default Privacy;
