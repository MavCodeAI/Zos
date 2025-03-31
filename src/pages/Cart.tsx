
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/data/products';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { t, language } = useLanguage();
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="zahir-container py-16 mt-8">
          <div className="flex flex-col items-center justify-center py-16">
            <ShoppingBag size={64} className="text-muted-foreground mb-4" />
            <h1 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              {t('emptyCart')}
            </h1>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
              {language === 'en' 
                ? "Your shopping cart is empty. Start shopping to add items to your cart."
                : "آپ کا شاپنگ کارٹ خالی ہے۔ اپنے کارٹ میں آئٹمز شامل کرنے کے لیے شاپنگ شروع کریں۔"
              }
            </p>
            <Link to="/shop">
              <Button className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark">
                {t('continueShopping')}
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="zahir-container py-16 mt-8">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          {t('cart')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]"></TableHead>
                      <TableHead>{t('productName')}</TableHead>
                      <TableHead>{t('price')}</TableHead>
                      <TableHead>{t('quantity')}</TableHead>
                      <TableHead className="text-right">{t('subtotal')}</TableHead>
                      <TableHead className="w-[70px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => {
                      const price = item.product.discountPrice || item.product.price;
                      const subtotal = price * item.quantity;
                      
                      return (
                        <TableRow key={item.product.id}>
                          <TableCell>
                            <img 
                              src={item.product.image} 
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {item.product.name}
                            <div className="text-sm text-muted-foreground">
                              {item.product.category}
                            </div>
                          </TableCell>
                          <TableCell>{formatPrice(price)}</TableCell>
                          <TableCell>
                            <div className="flex items-center border rounded-md">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              >
                                <Minus size={16} />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus size={16} />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            {formatPrice(subtotal)}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-destructive hover:text-destructive/90"
                            >
                              <Trash2 size={18} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-6">
              <Link to="/shop">
                <Button variant="outline" className="mr-2">
                  {t('continueShopping')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-lg shadow-sm border p-6">
              <h2 className="font-playfair text-xl font-bold mb-4">
                {t('cartSummary')}
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('subtotal')}</span>
                  <span className="font-medium">{formatPrice(getCartTotal())}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('shipping')}</span>
                  <span className="font-medium">
                    {language === 'en' ? 'Calculated at checkout' : 'چیک آؤٹ پر شمار کیا جائے گا'}
                  </span>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>{t('total')}</span>
                  <span className="text-zahir-burgundy dark:text-zahir-gold">{formatPrice(getCartTotal())}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/checkout">
                  <Button className="w-full bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark">
                    {t('checkout')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
