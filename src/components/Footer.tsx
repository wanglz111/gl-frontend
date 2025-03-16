'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">绿叶纺织</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">GREENLEAF TEXTILE</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('company_desc_footer')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{t('contact.info.headquarters.title')}:</span> {t('contact.info.headquarters.address')}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{t('contact.info.phone.title')}:</span> +86 512-XXXX XXXX
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{t('contact.info.email.title')}:</span> contact@greenleaf-textile.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.products')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.returns')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}