'use client';

import Link from 'next/link';
import { Heart, Home, ArrowLeft, FileText } from 'lucide-react';

const quickLinks = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: FileText, label: 'Request Care', href: '/request-care' },
  { icon: Heart, label: 'Join Our Team', href: '/apply' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="font-heading text-8xl sm:text-9xl text-care-red">
            404
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl sm:text-4xl text-care-navy mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg text-care-gray-500 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved or doesn&apos;t exist.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-care-navy text-white hover:bg-care-red transition-all"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-care-gray-500 hover:text-care-navy transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>

        {/* Support Message */}
        <div className="mt-12 pt-8 border-t border-care-gray-200">
          <p className="text-care-gray-400 text-sm">
            Need help? Contact ArayoLight at{' '}
            <a href="tel:+19194498913" className="text-care-red hover:underline">
              +1 (919) 449-8913
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
