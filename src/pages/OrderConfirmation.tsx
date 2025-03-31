
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OrderConfirmation = () => {
  const { t, language } = useLanguage();
  
  // Generate a random order number for demonstration
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  // Redirect if visited directly (no order was placed)
  const hasOrderBeenPlaced = sessionStorage.getItem('orderPlaced') === 'true';
  
  React.useEffect(() => {
    // Set a flag to indicate an order was placed
    sessionStorage.setItem('orderPlaced', 'true');
    
    // Clean up on unmount
    return () => {
      sessionStorage.removeItem('orderPlaced');
    };
  }, []);
  
  if (!hasOrderBeenPlaced) {
    return <Navigate to="/shop" replace />;
  }
  
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-sm border p-8 text-center">
          <CheckCircle2 size={64} className="mx-auto text-green-500 mb-4" />
          
          <h1 className="font-playfair text-3xl font-bold mb-4">
            {t('orderSuccess')}
          </h1>
          
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? `Thank you for your order! Your order #${orderNumber} has been placed successfully.`
              : `آپ کے آرڈر کے لیے شکریہ! آپ کا آرڈر #${orderNumber} کامیابی سے پلیس کر دیا گیا ہے۔`
            }
          </p>
          
          <div className="bg-muted p-6 rounded-lg mb-6 text-left">
            <h3 className="font-bold mb-3">
              {language === 'en' ? 'Order Details' : 'آرڈر کی تفصیلات'}
            </h3>
            <p className="text-sm mb-1">
              <span className="font-medium">{language === 'en' ? 'Order Number:' : 'آرڈر نمبر:'}</span> #{orderNumber}
            </p>
            <p className="text-sm mb-1">
              <span className="font-medium">{language === 'en' ? 'Date:' : 'تاریخ:'}</span> {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm mb-1">
              <span className="font-medium">{language === 'en' ? 'Payment Method:' : 'ادائیگی کا طریقہ:'}</span> {t('cashOnDelivery')}
            </p>
            <p className="text-sm mb-1">
              <span className="font-medium">{language === 'en' ? 'Estimated Delivery:' : 'متوقع ڈیلیوری:'}</span> {language === 'en' ? '3-5 business days' : '3-5 کاروباری دن'}
            </p>
          </div>
          
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? "You will receive an email confirmation shortly with more details about your order."
              : "آپ کو جلد ہی اپنے آرڈر کے بارے میں مزید تفصیلات کے ساتھ ایک ای میل تصدیق موصول ہوگی۔"
            }
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="outline">
                {language === 'en' ? 'Return to Home' : 'ہوم پیج پر واپس جائیں'}
              </Button>
            </Link>
            <Link to="/shop">
              <Button className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark">
                {t('continueShopping')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
