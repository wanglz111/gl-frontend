'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fabric-bg.jpg"
            alt="Premium fabric background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/products"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition shadow-lg text-lg"
              >
                {t('nav.products')}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg transition dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black text-lg"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">25+</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('home.achievements.years')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">200+</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('home.achievements.clients')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1000+</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('home.achievements.employees')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('home.achievements.patents')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('home.values.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('home.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {t('home.values.innovation.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('home.values.innovation.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {t('home.values.sustainability.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('home.values.sustainability.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {t('home.values.quality.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('home.values.quality.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Collaboration */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('home.brands.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('home.brands.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand logos */}
            <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
