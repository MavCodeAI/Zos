
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Eye, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Mock orders data
const mockOrders = Array.from({ length: 10 }).map((_, i) => ({
  id: `#${1000 + i}`,
  customer: `Customer ${i + 1}`,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  amount: `PKR ${(i + 1) * 1500}`,
  status: ['Processing', 'Shipped', 'Delivered', 'Cancelled'][i % 4]
}));

const AdminOrders = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = mockOrders.filter(order => 
    (order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase())
  );

  const handleViewOrder = (id: string) => {
    toast({
      title: language === 'en' ? "View Order" : "آرڈر دیکھیں",
      description: language === 'en' ? `Viewing order: ${id}` : `آرڈر دیکھنا: ${id}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">
          {language === 'en' ? 'Manage Orders' : 'آرڈرز کا انتظام کریں'}
        </h1>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <Download size={16} />
          {language === 'en' ? 'Export' : 'برآمد کریں'}
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={language === 'en' ? "Search orders..." : "آرڈرز تلاش کریں..."}
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={language === 'en' ? "Filter by status" : "حالت کے مطابق فلٹر کریں"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{language === 'en' ? "All Statuses" : "تمام حالات"}</SelectItem>
            <SelectItem value="processing">{language === 'en' ? "Processing" : "پروسیسنگ"}</SelectItem>
            <SelectItem value="shipped">{language === 'en' ? "Shipped" : "بھیج دیا گیا"}</SelectItem>
            <SelectItem value="delivered">{language === 'en' ? "Delivered" : "پہنچا دیا گیا"}</SelectItem>
            <SelectItem value="cancelled">{language === 'en' ? "Cancelled" : "منسوخ"}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Order List' : 'آرڈر کی فہرست'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Order ID' : 'آرڈر آئی ڈی'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Customer' : 'گاہک'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Date' : 'تاریخ'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Amount' : 'رقم'}</th>
                  <th className="text-center py-2 px-4">{language === 'en' ? 'Status' : 'حالت'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Actions' : 'اقدامات'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4 text-right">{order.amount}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full 
                        ${order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                          order.status === 'Shipped' ? 'bg-amber-100 text-amber-800' : 
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="outline" size="sm" onClick={() => handleViewOrder(order.id)}>
                        <Eye size={14} className="mr-1" />
                        {language === 'en' ? 'View' : 'دیکھیں'}
                      </Button>
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

export default AdminOrders;
