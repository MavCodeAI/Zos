
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    notes: ''
  });
  
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast({
        title: language === 'en' ? 'Cart is empty' : 'کارٹ خالی ہے',
        description: language === 'en' ? 'Add some products to your cart before checkout' : 'چیک آؤٹ سے پہلے اپنے کارٹ میں کچھ پروڈکٹس شامل کریں',
        variant: 'destructive'
      });
      return;
    }
    
    // Validate form fields
    if (!billingDetails.fullName || !billingDetails.email || !billingDetails.address || 
        !billingDetails.city || !billingDetails.postalCode || !billingDetails.phoneNumber) {
      toast({
        title: language === 'en' ? 'Missing information' : 'معلومات غائب ہیں',
        description: language === 'en' ? 'Please fill all required fields' : 'براہ کرم تمام مطلوبہ فیلڈز پُر کریں',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      navigate('/order-confirmation');
    }, 1500);
  };
  
  const calculateShipping = () => {
    // Simple shipping calculation based on cart total
    const cartTotal = getCartTotal();
    return cartTotal > 5000 ? 0 : 500; // Free shipping over 5000 PKR
  };
  
  const calculateTax = () => {
    // Simple tax calculation (7%)
    return getCartTotal() * 0.07;
  };
  
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          {t('checkout')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="font-playfair text-xl font-bold mb-4">
                    {t('billingDetails')}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t('fullName')} *</Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        value={billingDetails.fullName} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')} *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={billingDetails.email} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="address">{t('address')} *</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={billingDetails.address} 
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">{t('city')} *</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={billingDetails.city} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">{t('postalCode')} *</Label>
                      <Input 
                        id="postalCode" 
                        name="postalCode" 
                        value={billingDetails.postalCode} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="phoneNumber">{t('phoneNumber')} *</Label>
                    <Input 
                      id="phoneNumber" 
                      name="phoneNumber" 
                      value={billingDetails.phoneNumber} 
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="notes">{t('orderNotes')}</Label>
                    <Textarea 
                      id="notes" 
                      name="notes" 
                      value={billingDetails.notes} 
                      onChange={handleChange} 
                      placeholder={language === 'en' ? "Special instructions for delivery" : "ڈیلیوری کے لیے خصوصی ہدایات"}
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h2 className="font-playfair text-xl font-bold mb-4">
                    {t('paymentMethod')}
                  </h2>
                  
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod} 
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" />
                      <Label htmlFor="cashOnDelivery" className="font-medium">
                        {t('cashOnDelivery')}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bankTransfer" id="bankTransfer" />
                      <Label htmlFor="bankTransfer" className="font-medium">
                        {t('bankTransfer')}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="creditCard" id="creditCard" />
                      <Label htmlFor="creditCard" className="font-medium">
                        {t('creditCard')}
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (language === 'en' ? 'Processing...' : 'پروسیسنگ...') 
                  : t('placeOrder')
                }
              </Button>
            </form>
          </div>
          
          {/* Right side - Order summary */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-playfair text-xl font-bold mb-4">
                  {t('orderSummary')}
                </h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const price = item.product.discountPrice || item.product.price;
                    
                    return (
                      <div key={item.product.id} className="flex justify-between">
                        <div className="flex items-start">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-12 h-12 object-cover rounded mr-3"
                          />
                          <div>
                            <p className="font-medium">{item.product.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {t('quantity')}: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="font-medium">{formatPrice(price * item.quantity)}</span>
                      </div>
                    );
                  })}
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('subtotal')}</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('shipping')}</span>
                    <span>{formatPrice(calculateShipping())}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('tax')}</span>
                    <span>{formatPrice(calculateTax())}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>{t('total')}</span>
                    <span className="text-zahir-burgundy dark:text-zahir-gold">
                      {formatPrice(getCartTotal() + calculateShipping() + calculateTax())}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
