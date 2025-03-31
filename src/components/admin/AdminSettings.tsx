
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();

  const handleSave = (section: string) => {
    toast({
      title: language === 'en' ? "Settings Saved" : "ترتیبات محفوظ ہوگئیں",
      description: language === 'en' ? `${section} settings have been updated` : `${section} ترتیبات اپ ڈیٹ کردی گئی ہیں`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">
          {language === 'en' ? 'Settings' : 'ترتیبات'}
        </h1>
      </div>
      
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">
            {language === 'en' ? 'General' : 'عام'}
          </TabsTrigger>
          <TabsTrigger value="payment">
            {language === 'en' ? 'Payment' : 'ادائیگی'}
          </TabsTrigger>
          <TabsTrigger value="shipping">
            {language === 'en' ? 'Shipping' : 'شپنگ'}
          </TabsTrigger>
          <TabsTrigger value="notifications">
            {language === 'en' ? 'Notifications' : 'اطلاعات'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'General Settings' : 'عام ترتیبات'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="storeName">{language === 'en' ? 'Store Name' : 'دکان کا نام'}</label>
                <Input id="storeName" defaultValue="ZOS - Zahir Organic Store" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="storeDescription">{language === 'en' ? 'Store Description' : 'دکان کی تفصیل'}</label>
                <Textarea id="storeDescription" defaultValue="Premium South Asian wellness products" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="contactEmail">{language === 'en' ? 'Contact Email' : 'رابطہ ای میل'}</label>
                <Input id="contactEmail" type="email" defaultValue="contact@zos.pk" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="phone">{language === 'en' ? 'Phone Number' : 'فون نمبر'}</label>
                <Input id="phone" defaultValue="+92 321 1234567" />
              </div>
              
              <div className="space-y-2">
                <label>{language === 'en' ? 'Language Settings' : 'زبان کی ترتیبات'}</label>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant={language === 'en' ? "default" : "outline"}
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? "bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark" : ""}
                  >
                    English
                  </Button>
                  <Button 
                    variant={language === 'ur' ? "default" : "outline"}
                    onClick={() => setLanguage('ur')}
                    className={language === 'ur' ? "bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark" : ""}
                  >
                    اردو
                  </Button>
                </div>
              </div>
              
              <Button 
                className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
                onClick={() => handleSave('General')}
              >
                {language === 'en' ? 'Save Changes' : 'تبدیلیاں محفوظ کریں'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Payment Settings' : 'ادائیگی کی ترتیبات'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'Cash on Delivery' : 'ادائیگی بذریعہ نقد'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Allow customers to pay when receiving the product' : 'گاہکوں کو مصنوعات وصول کرتے وقت ادائیگی کی اجازت دیں'}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'Bank Transfer' : 'بینک ٹرانسفر'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Allow customers to pay via bank transfer' : 'گاہکوں کو بینک ٹرانسفر کے ذریعے ادائیگی کی اجازت دیں'}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'Credit/Debit Card' : 'کریڈٹ/ڈیبٹ کارڈ'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Accept credit and debit card payments' : 'کریڈٹ اور ڈیبٹ کارڈ ادائیگیاں قبول کریں'}</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="space-y-1 pt-4">
                  <label htmlFor="currency">{language === 'en' ? 'Currency' : 'کرنسی'}</label>
                  <Input id="currency" defaultValue="PKR" disabled />
                  <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'All prices are in Pakistani Rupees (PKR)' : 'تمام قیمتیں پاکستانی روپے (PKR) میں ہیں'}</p>
                </div>
              </div>
              
              <Button 
                className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
                onClick={() => handleSave('Payment')}
              >
                {language === 'en' ? 'Save Changes' : 'تبدیلیاں محفوظ کریں'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Shipping Settings' : 'شپنگ کی ترتیبات'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="domesticRate">{language === 'en' ? 'Domestic Shipping Rate (PKR)' : 'ملکی شپنگ ریٹ (PKR)'}</label>
                  <Input id="domesticRate" type="number" defaultValue="250" />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="internationalRate">{language === 'en' ? 'International Shipping Rate (PKR)' : 'بین الاقوامی شپنگ ریٹ (PKR)'}</label>
                  <Input id="internationalRate" type="number" defaultValue="2500" />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="freeShippingThreshold">{language === 'en' ? 'Free Shipping Threshold (PKR)' : 'مفت شپنگ کی حد (PKR)'}</label>
                  <Input id="freeShippingThreshold" type="number" defaultValue="5000" />
                  <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'Orders above this amount qualify for free shipping' : 'اس رقم سے زیادہ آرڈرز مفت شپنگ کے اہل ہیں'}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'Enable Free Shipping' : 'مفت شپنگ فعال کریں'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Offer free shipping on orders above threshold' : 'حد سے زیادہ آرڈرز پر مفت شپنگ کی پیشکش کریں'}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Button 
                className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
                onClick={() => handleSave('Shipping')}
              >
                {language === 'en' ? 'Save Changes' : 'تبدیلیاں محفوظ کریں'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Notification Settings' : 'اطلاعات کی ترتیبات'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'Email Notifications' : 'ای میل اطلاعات'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Send email notifications for new orders' : 'نئے آرڈرز کے لیے ای میل اطلاعات بھیجیں'}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'SMS Notifications' : 'ایس ایم ایس اطلاعات'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Send SMS notifications for order status changes' : 'آرڈر کی حالت میں تبدیلیوں کے لیے ایس ایم ایس اطلاعات بھیجیں'}</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language === 'en' ? 'Low Stock Alerts' : 'کم اسٹاک الرٹس'}</h3>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Receive alerts when product stock is low' : 'جب مصنوعات کا اسٹاک کم ہو تو الرٹس حاصل کریں'}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="space-y-1 pt-4">
                  <label htmlFor="notificationEmail">{language === 'en' ? 'Notification Email' : 'اطلاعات کا ای میل'}</label>
                  <Input id="notificationEmail" type="email" defaultValue="admin@zos.pk" />
                </div>
              </div>
              
              <Button 
                className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
                onClick={() => handleSave('Notification')}
              >
                {language === 'en' ? 'Save Changes' : 'تبدیلیاں محفوظ کریں'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
