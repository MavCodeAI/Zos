
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products, formatPrice } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const AdminProducts = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id: string) => {
    toast({
      title: language === 'en' ? "Edit Product" : "مصنوعات میں ترمیم کریں",
      description: language === 'en' ? `Editing product ID: ${id}` : `مصنوعات میں ترمیم: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: language === 'en' ? "Delete Product" : "مصنوعات حذف کریں",
      description: language === 'en' ? `Would delete product ID: ${id}` : `مصنوعات حذف کرنا: ${id}`,
      variant: "destructive",
    });
  };

  const handleAddProduct = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: language === 'en' ? "Product Added" : "مصنوعات شامل کی گئیں",
      description: language === 'en' ? "New product has been added" : "نئی مصنوعات شامل کی گئی ہیں",
    });
    setIsAddDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">
          {language === 'en' ? 'Manage Products' : 'مصنوعات کا انتظام کریں'}
        </h1>
        <Button 
          className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus size={16} className="mr-2" />
          {language === 'en' ? 'Add Product' : 'مصنوعات شامل کریں'}
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={language === 'en' ? "Search products..." : "مصنوعات تلاش کریں..."}
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Product List' : 'مصنوعات کی فہرست'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Name' : 'نام'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Category' : 'زمرہ'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Price' : 'قیمت'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Status' : 'حالت'}</th>
                  <th className="text-right py-2 px-4">{language === 'en' ? 'Actions' : 'اقدامات'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4 text-right">{formatPrice(product.price)}</td>
                    <td className="py-3 px-4 text-right">
                      {product.isNew ? (
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {language === 'en' ? 'New' : 'نیا'}
                        </span>
                      ) : product.isBestseller ? (
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          {language === 'en' ? 'Bestseller' : 'بیسٹ سیلر'}
                        </span>
                      ) : product.isLimited ? (
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                          {language === 'en' ? 'Limited' : 'محدود'}
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          {language === 'en' ? 'Regular' : 'معمول'}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(product.id)}>
                          <Edit size={14} />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500" onClick={() => handleDelete(product.id)}>
                          <Trash2 size={14} />
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
      
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {language === 'en' ? 'Add New Product' : 'نئی مصنوعات شامل کریں'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddProduct}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="name">{language === 'en' ? 'Product Name' : 'مصنوعات کا نام'}</label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="category">{language === 'en' ? 'Category' : 'زمرہ'}</label>
                <Input id="category" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="price">{language === 'en' ? 'Price (PKR)' : 'قیمت (پی کے آر)'}</label>
                <Input id="price" type="number" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="description">{language === 'en' ? 'Description' : 'تفصیل'}</label>
                <textarea 
                  id="description" 
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsAddDialogOpen(false)}
              >
                {language === 'en' ? 'Cancel' : 'منسوخ کریں'}
              </Button>
              <Button 
                type="submit"
                className="bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
              >
                {language === 'en' ? 'Add Product' : 'مصنوعات شامل کریں'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProducts;
