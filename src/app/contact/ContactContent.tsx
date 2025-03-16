'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ContactContent = () => {
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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact background"
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
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.info.headquarters.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('contact.info.headquarters.address')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.info.phone.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                +86 512-XXXX XXXX
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {t('contact.info.phone.hours')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.info.email.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                contact@greenleaf-textile.com
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('contact.form.title')}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.contact')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.product.title')}
                </label>
                <select
                  id="product"
                  name="product"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 dark:text-white"
                  required
                >
                  <option value="">{t('contact.form.product.placeholder')}</option>
                  <option value="fabric">{t('contact.form.product.options.fabric')}</option>
                  <option value="textile">{t('contact.form.product.options.textile')}</option>
                  <option value="other">{t('contact.form.product.options.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 dark:text-white"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white text-lg font-medium rounded-lg hover:bg-emerald-600 transition-colors duration-200 shadow-lg"
                >
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.offices.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('contact.offices.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.offices.china.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('contact.offices.china.address')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.offices.europe.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('contact.offices.europe.address')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.offices.asia.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('contact.offices.asia.address')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactContent;