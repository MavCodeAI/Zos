
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Sun, Moon, Menu, X, Globe, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { formatPrice } from '@/data/products';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCartClick = () => {
    toast({
      title: language === 'en' ? "Cart" : "کارٹ",
      description: language === 'en' ? "Your cart is empty" : "آپ کا کارٹ خالی ہے",
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('shop'), path: '/shop' },
    { name: t('bestsellers'), path: '/bestsellers' },
    { name: t('ourStory'), path: '/about' },
    { name: t('contact'), path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="zahir-container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-playfair text-2xl font-bold text-zahir-burgundy dark:text-zahir-cream"
        >
          ZOS<span className="text-zahir-gold">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold font-medium transition-all-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button 
            className="hidden md:flex text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? "Switch to Urdu" : "انگریزی میں تبدیل کریں"}
          >
            <Globe size={20} />
          </button>
          
          <button 
            className="hidden md:flex text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <button 
            className="hidden md:flex text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </button>
          
          <button 
            className="text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
            onClick={handleCartClick}
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="hidden md:flex text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
                aria-label="Account"
              >
                <User size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isAdmin && (
                <DropdownMenuItem asChild>
                  <Link to="/admin" className="flex items-center cursor-pointer">
                    <Settings size={16} className="mr-2" />
                    {t('admin')}
                  </Link>
                </DropdownMenuItem>
              )}
              {!isAuthenticated && (
                <DropdownMenuItem asChild>
                  <Link to="/admin/login" className="cursor-pointer">
                    {t('login')}
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button 
            className="text-foreground hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                <div className="flex justify-between items-center mb-6">
                  <Button variant="outline" size="sm" onClick={toggleLanguage}>
                    <Globe size={16} className="mr-2" />
                    {language === 'en' ? 'Switch to Urdu' : 'انگریزی میں تبدیل کریں'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={toggleTheme}>
                    {isDarkMode ? <Sun size={16} className="mr-2" /> : <Moon size={16} className="mr-2" />}
                    {isDarkMode ? 
                      (language === 'en' ? 'Light Mode' : 'لائٹ موڈ') : 
                      (language === 'en' ? 'Dark Mode' : 'ڈارک موڈ')
                    }
                  </Button>
                </div>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-xl font-playfair font-medium hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="text-xl font-playfair font-medium hover:text-zahir-burgundy dark:hover:text-zahir-gold transition-all-300"
                  >
                    {t('admin')}
                  </Link>
                )}
                
                <div className="flex items-center gap-4 mt-4">
                  <button className="p-2 border border-input rounded-full">
                    <Search size={20} />
                  </button>
                  <button className="p-2 border border-input rounded-full">
                    <Heart size={20} />
                  </button>
                  {!isAuthenticated ? (
                    <Link to="/admin/login" className="p-2 border border-input rounded-full">
                      <User size={20} />
                    </Link>
                  ) : (
                    <button className="p-2 border border-input rounded-full">
                      <User size={20} />
                    </button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
