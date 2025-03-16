'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductsContent = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  // 定义默认特性列表
  const defaultFeatures = ['Feature 1', 'Feature 2', 'Feature 3'];

  // 获取翻译的特性列表，如果翻译失败则使用默认列表
  const getFeaturesArray = (key: string): string[] => {
    try {
      const features = t(key, { returnObjects: true });
      return Array.isArray(features) ? features : defaultFeatures;
    } catch (error) {
      console.error(`Error getting features for key ${key}:`, error);
      return defaultFeatures;
    }
  };

  const functionalFeatures = getFeaturesArray('products.categories.functional.features');
  const sustainableFeatures = getFeaturesArray('products.categories.sustainable.features');
  const fashionFeatures = getFeaturesArray('products.categories.fashion.features');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-bg.jpg"
            alt="Products background"
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
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('products.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('products.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('products.categories.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('products.categories.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Functional Fabrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.categories.functional.name')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t('products.categories.functional.desc')}
              </p>
              <ul className="space-y-2 mb-8">
                {functionalFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sustainable Fabrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.categories.sustainable.name')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t('products.categories.sustainable.desc')}
              </p>
              <ul className="space-y-2 mb-8">
                {sustainableFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fashion Fabrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.categories.fashion.name')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t('products.categories.fashion.desc')}
              </p>
              <ul className="space-y-2 mb-8">
                {fashionFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('products.innovation.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('products.innovation.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.innovation.equipment.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('products.innovation.equipment.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.innovation.rd.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('products.innovation.rd.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.innovation.quality.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('products.innovation.quality.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Service */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('products.custom.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('products.custom.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.custom.analysis.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('products.custom.analysis.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.custom.solution.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('products.custom.solution.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('products.custom.guarantee.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('products.custom.guarantee.desc')}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              {t('products.custom.contact')}
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductsContent;