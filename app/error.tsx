'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-care-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-care-red" />
        </div>
        
        <h1 className="font-heading text-3xl text-care-navy mb-4">
          Something Went Wrong
        </h1>
        
        <p className="text-care-gray-500 mb-8">
          We&apos;re experiencing some technical difficulties. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Show error details in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-care-red/5 rounded-xl text-left">
            <p className="text-care-red text-sm font-mono">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
