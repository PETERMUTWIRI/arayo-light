'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body className="bg-care-gray-50 text-care-navy min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-care-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-care-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="font-heading text-4xl mb-4">Critical Error</h1>
          <p className="text-care-gray-500 mb-8">
            ArayoLight is experiencing technical difficulties. Please refresh the page or try again later.
          </p>
          <button
            onClick={reset}
            className="px-8 py-4 rounded-xl bg-gradient-red text-white font-semibold hover:shadow-lg transition-all"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
