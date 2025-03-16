'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

const ProductsContent = dynamic(
  () => import('./ProductsContent'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
);

export default function ClientWrapper() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductsContent />
    </Suspense>
  );
}