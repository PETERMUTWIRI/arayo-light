'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('arayolight-cookie-consent');
    if (!hasConsented) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('arayolight-cookie-consent', 'accepted');
    localStorage.setItem('arayolight-cookie-consent-date', new Date().toISOString());
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('arayolight-cookie-consent', 'declined');
    localStorage.setItem('arayolight-cookie-consent-date', new Date().toISOString());
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-care-navy/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-care-red/20 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-care-red" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-white">
              <h3 className="font-heading text-lg mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                <Link 
                  href="/privacy" 
                  className="text-care-red hover:text-care-red-light underline ml-1 transition-colors"
                >
                  Learn more in our Privacy Policy
                </Link>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="btn-primary text-sm py-3 px-6 whitespace-nowrap"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="btn-outline text-sm py-3 px-6 border-white/30 text-white hover:bg-white/10 hover:text-white whitespace-nowrap"
              >
                Essential Only
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 md:relative md:top-auto md:right-auto p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cookie Types */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-white font-medium text-sm">Essential</p>
                <p className="text-white/60 text-xs">Required for the site to function</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-care-red mt-2 flex-shrink-0" />
              <div>
                <p className="text-white font-medium text-sm">Analytics</p>
                <p className="text-white/60 text-xs">Help us improve our website</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-care-red mt-2 flex-shrink-0" />
              <div>
                <p className="text-white font-medium text-sm">Marketing</p>
                <p className="text-white/60 text-xs">Personalized recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
