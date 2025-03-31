
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: language === 'en' ? "Login successful" : "لاگ ان کامیاب",
          description: language === 'en' ? "Welcome to the admin dashboard" : "ایڈمن ڈیش بورڈ میں خوش آمدید",
        });
        navigate('/admin');
      } else {
        toast({
          title: language === 'en' ? "Login failed" : "لاگ ان ناکام",
          description: language === 'en' ? "Invalid email or password" : "غلط ای میل یا پاس ورڈ",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: language === 'en' ? "Error" : "خرابی",
        description: language === 'en' ? "An error occurred while logging in" : "لاگ ان کرتے وقت ایک خرابی آگئی",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="zahir-container py-16 mt-8 flex justify-center items-center">
        <Card className="max-w-md w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-playfair">
              {language === 'en' ? "Admin Login" : "ایڈمن لاگ ان"}
            </CardTitle>
            <CardDescription className="text-center">
              {language === 'en' 
                ? "Enter your credentials to access the admin panel" 
                : "ایڈمن پینل تک رسائی کے لیے اپنی اسناد درج کریں"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t('email')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={language === 'en' ? "admin@zos.pk" : "admin@zos.pk"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">
                    {t('password')}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-zahir-burgundy hover:bg-zahir-burgundy/90 dark:bg-zahir-gold dark:hover:bg-zahir-gold/90 dark:text-zahir-dark"
                  disabled={isLoading}
                >
                  {isLoading 
                    ? (language === 'en' ? "Logging in..." : "لاگ ان ہو رہا ہے...") 
                    : (language === 'en' ? "Login" : "لاگ ان")}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              {language === 'en' 
                ? "For demo purposes, use: admin@zos.pk / admin123" 
                : "ڈیمو مقاصد کے لیے، استعمال کریں: admin@zos.pk / admin123"}
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminLogin;
