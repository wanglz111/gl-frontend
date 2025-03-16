'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-500 transition-colors duration-300 leading-tight">绿叶纺织</span>
                <span className="text-sm text-gray-600 group-hover:text-emerald-600 dark:text-gray-400 dark:group-hover:text-emerald-500 transition-colors duration-300 leading-tight">GREENLEAF TEX</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/products'
                ? 'text-emerald-600 dark:text-emerald-500'
                : 'text-gray-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500'
              }`}
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/about'
                ? 'text-emerald-600 dark:text-emerald-500'
                : 'text-gray-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/contact'
                ? 'text-emerald-600 dark:text-emerald-500'
                : 'text-gray-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500'
              }`}
            >
              {t('nav.contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 font-medium transition-all hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {i18n.language === 'zh' ? 'English' : '中文'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 font-medium transition-all hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white mr-2"
            >
              {i18n.language === 'zh' ? 'English' : '中文'}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg dark:bg-gray-900">
          <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-all dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
            {t('nav.home')}
          </Link>
          <Link href="/products" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-all dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
            {t('nav.products')}
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-all dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
            {t('nav.about')}
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-all dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
            {t('nav.contact')}
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;