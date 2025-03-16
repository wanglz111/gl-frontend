'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ContactContent = dynamic(() => import('./ContactContent'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
    </div>
  ),
  ssr: false
});

const Contact = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
};

export default Contact;