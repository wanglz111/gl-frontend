'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      setMounted(true);
      const savedLang = localStorage.getItem('i18nextLng');
      if (savedLang) {
        await i18n.changeLanguage(savedLang);
      }
    };
    initializeLanguage();
  }, [i18n]);

  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-20 bg-white shadow-md"></div>
        <main className="flex-grow">
          {children}
        </main>
        <div className="h-96 bg-black"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}