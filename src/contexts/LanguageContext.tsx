import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ur';

type Translations = {
  [key: string]: {
    en: string;
    ur: string;
  };
};

// Common translations used across the site
export const translations: Translations = {
  home: {
    en: 'Home',
    ur: 'ہوم'
  },
  shop: {
    en: 'Shop',
    ur: 'دکان'
  },
  bestsellers: {
    en: 'Bestsellers',
    ur: 'بیسٹ سیلرز'
  },
  ourStory: {
    en: 'Our Story',
    ur: 'ہماری کہانی'
  },
  contact: {
    en: 'Contact',
    ur: 'رابطہ'
  },
  search: {
    en: 'Search',
    ur: 'تلاش'
  },
  cart: {
    en: 'Cart',
    ur: 'کارٹ'
  },
  wishlist: {
    en: 'Wishlist',
    ur: 'پسندیدہ'
  },
  account: {
    en: 'Account',
    ur: 'اکاؤنٹ'
  },
  admin: {
    en: 'Admin',
    ur: 'ایڈمن'
  },
  featuredProducts: {
    en: 'Featured Products',
    ur: 'نمایاں مصنوعات'
  },
  viewAllProducts: {
    en: 'View All Products',
    ur: 'تمام مصنوعات دیکھیں'
  },
  addToCart: {
    en: 'Add to Cart',
    ur: 'کارٹ میں شامل کریں'
  },
  outOfStock: {
    en: 'Out of Stock',
    ur: 'سٹاک میں نہیں'
  },
  price: {
    en: 'Price',
    ur: 'قیمت'
  },
  category: {
    en: 'Category',
    ur: 'زمرہ'
  },
  description: {
    en: 'Description',
    ur: 'تفصیل'
  },
  origin: {
    en: 'Origin',
    ur: 'اصل'
  },
  benefits: {
    en: 'Benefits',
    ur: 'فوائد'
  },
  dashboard: {
    en: 'Dashboard',
    ur: 'ڈیش بورڈ'
  },
  products: {
    en: 'Products',
    ur: 'مصنوعات'
  },
  orders: {
    en: 'Orders',
    ur: 'آرڈرز'
  },
  customers: {
    en: 'Customers',
    ur: 'گاہک'
  },
  settings: {
    en: 'Settings',
    ur: 'ترتیبات'
  },
  logout: {
    en: 'Logout',
    ur: 'لاگ آؤٹ'
  },
  login: {
    en: 'Login',
    ur: 'لاگ ان'
  },
  email: {
    en: 'Email',
    ur: 'ای میل'
  },
  password: {
    en: 'Password',
    ur: 'پاس ورڈ'
  },
  subscribe: {
    en: 'Subscribe',
    ur: 'سبسکرائب کریں'
  },
  subscribeToNewsletter: {
    en: 'Subscribe to our newsletter',
    ur: 'ہماری نیوز لیٹر کے لیے سبسکرائب کریں'
  },
  privacy: {
    en: 'Privacy Policy',
    ur: 'پرائیویسی پالیسی'
  },
  terms: {
    en: 'Terms & Conditions',
    ur: 'شرائط و ضوابط'
  },
  shipping: {
    en: 'Shipping Information',
    ur: 'شپنگ کی معلومات'
  },
  contactUs: {
    en: 'Contact Us',
    ur: 'ہم سے رابطہ کریں'
  },
  writeToUs: {
    en: 'Write to Us',
    ur: 'ہمیں لکھیں'
  },
  sendMessage: {
    en: 'Send Message',
    ur: 'پیغام بھیجیں'
  },
  yourName: {
    en: 'Your Name',
    ur: 'آپ کا نام'
  },
  yourEmail: {
    en: 'Your Email',
    ur: 'آپ کا ای میل'
  },
  subject: {
    en: 'Subject',
    ur: 'موضوع'
  },
  message: {
    en: 'Message',
    ur: 'پیغام'
  },
  aboutUs: {
    en: 'About Us',
    ur: 'ہمارے بارے میں'
  },
  language: {
    en: 'en',
    ur: 'ur'
  },
  cart: {
    en: 'Cart',
    ur: 'کارٹ'
  },
  wishlist: {
    en: 'Wishlist',
    ur: 'پسندیدہ'
  },
  addToCart: {
    en: 'Add to Cart',
    ur: 'کارٹ میں شامل کریں'
  },
  outOfStock: {
    en: 'Out of Stock',
    ur: 'سٹاک میں نہیں'
  },
  emptyCart: {
    en: 'Your cart is empty',
    ur: 'آپ کا کارٹ خالی ہے'
  },
  continueShopping: {
    en: 'Continue Shopping',
    ur: 'شاپنگ جاری رکھیں'
  },
  cartSummary: {
    en: 'Cart Summary',
    ur: 'کارٹ کا خلاصہ'
  },
  productName: {
    en: 'Product Name',
    ur: 'پروڈکٹ کا نام'
  },
  quantity: {
    en: 'Quantity',
    ur: 'مقدار'
  },
  price: {
    en: 'Price',
    ur: 'قیمت'
  },
  removeFromCart: {
    en: 'Remove',
    ur: 'ہٹائیں'
  },
  subtotal: {
    en: 'Subtotal',
    ur: 'ذیلی کل'
  },
  shipping: {
    en: 'Shipping',
    ur: 'شپنگ'
  },
  tax: {
    en: 'Tax',
    ur: 'ٹیکس'
  },
  total: {
    en: 'Total',
    ur: 'کل'
  },
  checkout: {
    en: 'Proceed to Checkout',
    ur: 'چیک آؤٹ کے لیے آگے بڑھیں'
  },
  billingDetails: {
    en: 'Billing Details',
    ur: 'بلنگ کی تفصیلات'
  },
  fullName: {
    en: 'Full Name',
    ur: 'پورا نام'
  },
  address: {
    en: 'Address',
    ur: 'پتہ'
  },
  city: {
    en: 'City',
    ur: 'شہر'
  },
  postalCode: {
    en: 'Postal Code',
    ur: 'پوسٹل کوڈ'
  },
  phoneNumber: {
    en: 'Phone Number',
    ur: 'فون نمبر'
  },
  orderNotes: {
    en: 'Order Notes',
    ur: 'آرڈر نوٹس'
  },
  placeOrder: {
    en: 'Place Order',
    ur: 'آرڈر پلیس کریں'
  },
  paymentMethod: {
    en: 'Payment Method',
    ur: 'ادائیگی کا طریقہ'
  },
  cashOnDelivery: {
    en: 'Cash on Delivery',
    ur: 'ڈیلیوری پر نقد ادائیگی'
  },
  bankTransfer: {
    en: 'Bank Transfer',
    ur: 'بینک ٹرانسفر'
  },
  creditCard: {
    en: 'Credit Card',
    ur: 'کریڈٹ کارڈ'
  },
  orderSuccess: {
    en: 'Order Placed Successfully',
    ur: 'آرڈر کامیابی سے پلیس کر دیا گیا'
  },
  orderFailure: {
    en: 'Failed to Place Order',
    ur: 'آرڈر پلیس کرنے میں ناکامی'
  },
  orderConfirmation: {
    en: 'Order Confirmation',
    ur: 'آرڈر کی تصدیق'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set the dir attribute on html for RTL support
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    
    // Add a class to the body for RTL-specific styles
    if (language === 'ur') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    
    // Save language preference
    localStorage.setItem('language', language);
  }, [language]);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ur')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Translate function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    // Fallback to English or key if translation is not found
    return translations[key]?.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
