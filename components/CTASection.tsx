'use client';

import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'red' | 'navy' | 'light';
}

export default function CTASection({
  title = "Get Matched with a Caregiver Today",
  description = "Take the first step towards quality homecare. Our compassionate caregivers are ready to help your loved ones live comfortably at home.",
  primaryButtonText = "Request Care Now",
  primaryButtonHref = "/request-care",
  secondaryButtonText = "Apply as Caregiver",
  secondaryButtonHref = "/apply",
  variant = 'navy',
}: CTASectionProps) {
  if (variant === 'red') {
    return (
      <section className="bg-gradient-red py-16 md:py-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              {title}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-care-red hover:bg-care-gray-50 transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'light') {
    return (
      <section className="bg-care-gray-50 py-16 md:py-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              {title}
            </h2>
            <p className="text-care-gray-500 text-lg mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryButtonHref}
                className="btn-primary w-full sm:w-auto"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="btn-outline w-full sm:w-auto"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default navy variant
  return (
    <section className="bg-gradient-care py-16 md:py-20">
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-care-red text-white hover:bg-care-red-dark transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              {primaryButtonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
