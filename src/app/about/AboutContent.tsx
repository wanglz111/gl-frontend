'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutContent = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-bg.jpg"
            alt="About background"
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              {t('about.story.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>{t('about.story.content1')}</p>
              <p>{t('about.story.content2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.mission.content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.vision.content')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.competence.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('about.competence.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.competence.rd.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.competence.rd.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.competence.quality.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.competence.quality.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.competence.service.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.competence.service.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.certification.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('about.certification.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Certification placeholders */}
            <div className="h-24 bg-white dark:bg-gray-900 rounded-lg shadow-lg"></div>
            <div className="h-24 bg-white dark:bg-gray-900 rounded-lg shadow-lg"></div>
            <div className="h-24 bg-white dark:bg-gray-900 rounded-lg shadow-lg"></div>
            <div className="h-24 bg-white dark:bg-gray-900 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;