
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Mail, User, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Mock customers data
const mockCustomers = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@example.com`,
  orders: Math.floor(Math.random() * 10) + 1,
  totalSpent: `PKR ${Math.floor(Math.random() * 20000) + 1000}`,
  joinDate: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000).toLocaleDateString()
}));

const AdminCustomers = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmailCustomer = (email: string) => {
    toast({
      title: language === 'en' ? "Email Customer" : "گاہک کو ای میل کریں",
      description: language === 'en' ? `Sending email to: ${email}` : `ای میل بھیجنا: ${email}`,
    });
  };

  const handleViewCustomer = (id: number) => {
    toast({
      title: language === 'en' ? "View Customer" : "گاہک دیکھیں",
      description: language === 'en' ? `Viewing customer ID: ${id}` : `گاہک دیکھنا: ${id}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">
          {language === 'en' ? 'Customers' : 'گاہک'}
        </h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={language === 'en' ? "Search customers..." : "گاہکوں کو تلاش کریں..."}
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Customer List' : 'گاہکوں کی فہرست'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Customer' : 'گاہک'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Email' : 'ای میل'}</th>
                  <th className="text-center py-2 px-4">{language === 'en' ? 'Orders' : 'آرڈرز'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Total Spent' : 'کل خرچ'}</th>
                  <th className="text-center py-2 px-4">{language === 'en' ? 'Join Date' : 'شمولیت کی تاریخ'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Actions' : 'اقدامات'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-zahir-cream dark:bg-zahir-dark/50 text-zahir-burgundy dark:text-zahir-gold">
                            {customer.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span>{customer.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{customer.email}</td>
                    <td className="py-3 px-4 text-center">{customer.orders}</td>
                    <td className="py-3 px-4 text-right">{customer.totalSpent}</td>
                    <td className="py-3 px-4 text-center">{customer.joinDate}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEmailCustomer(customer.email)}>
                          <Mail size={14} />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleViewCustomer(customer.id)}>
                          <User size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCustomers;
