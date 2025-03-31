
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from 'lucide-react';

// Admin Panel Components
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminProducts from '@/components/admin/AdminProducts';
import AdminOrders from '@/components/admin/AdminOrders';
import AdminCustomers from '@/components/admin/AdminCustomers';
import AdminSettings from '@/components/admin/AdminSettings';

type AdminTab = 'dashboard' | 'products' | 'orders' | 'customers' | 'settings';

const Admin = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<AdminTab>('dashboard');

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin/login" />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'products':
        return <AdminProducts />;
      case 'orders':
        return <AdminOrders />;
      case 'customers':
        return <AdminCustomers />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar className="h-screen">
        <SidebarHeader className="p-4 flex justify-center border-b">
          <h1 className="font-playfair text-xl font-bold text-zahir-burgundy dark:text-zahir-gold">
            ZOS <span className="text-zahir-gold dark:text-zahir-cream">Admin</span>
          </h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{t('admin')}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab('dashboard')}
                    className={activeTab === 'dashboard' ? 'bg-zahir-cream dark:bg-zahir-dark/50' : ''}
                  >
                    <LayoutDashboard size={20} />
                    <span>{t('dashboard')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab('products')}
                    className={activeTab === 'products' ? 'bg-zahir-cream dark:bg-zahir-dark/50' : ''}
                  >
                    <Package size={20} />
                    <span>{t('products')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab('orders')}
                    className={activeTab === 'orders' ? 'bg-zahir-cream dark:bg-zahir-dark/50' : ''}
                  >
                    <ShoppingCart size={20} />
                    <span>{t('orders')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab('customers')}
                    className={activeTab === 'customers' ? 'bg-zahir-cream dark:bg-zahir-dark/50' : ''}
                  >
                    <Users size={20} />
                    <span>{t('customers')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab('settings')}
                    className={activeTab === 'settings' ? 'bg-zahir-cream dark:bg-zahir-dark/50' : ''}
                  >
                    <Settings size={20} />
                    <span>{t('settings')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
            onClick={logout}
          >
            <LogOut size={16} />
            <span>{t('logout')}</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-6 overflow-auto">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Admin;
