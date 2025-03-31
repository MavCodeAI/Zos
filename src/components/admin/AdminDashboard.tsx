
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Users, Package, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const { language } = useLanguage();

  const stats = [
    { 
      title: language === 'en' ? 'Total Sales' : 'کل فروخت', 
      value: 'PKR 245,600', 
      change: '+14%', 
      icon: <TrendingUp className="h-8 w-8 text-zahir-burgundy dark:text-zahir-gold" /> 
    },
    { 
      title: language === 'en' ? 'Orders' : 'آرڈرز', 
      value: '156', 
      change: '+8%', 
      icon: <ShoppingCart className="h-8 w-8 text-zahir-burgundy dark:text-zahir-gold" /> 
    },
    { 
      title: language === 'en' ? 'Products' : 'مصنوعات', 
      value: '12', 
      change: '+2', 
      icon: <Package className="h-8 w-8 text-zahir-burgundy dark:text-zahir-gold" /> 
    },
    { 
      title: language === 'en' ? 'Customers' : 'گاہک', 
      value: '78', 
      change: '+5%', 
      icon: <Users className="h-8 w-8 text-zahir-burgundy dark:text-zahir-gold" /> 
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">
          {language === 'en' ? 'Dashboard' : 'ڈیش بورڈ'}
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} {language === 'en' ? 'from last month' : 'پچھلے مہینے سے'}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Recent Orders' : 'حالیہ آرڈرز'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <div className="font-medium">Order #{1000 + i}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Customer' : 'گاہک'}: John Doe
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">PKR {(i + 1) * 1500}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Popular Products' : 'مقبول مصنوعات'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Premium Sidr Honey', 'Organic Desi Ghee', 'Pink Himalayan Salt', 'Premium Ajwa Dates'].map((product, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{product}</div>
                  <div className="text-right">
                    <div className="font-medium">{(i + 1) * 15} {language === 'en' ? 'sold' : 'فروخت'}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
