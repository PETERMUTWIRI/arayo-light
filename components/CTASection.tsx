'use client';

import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

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
  title = "Ready to Get Started?",
  description = "Let us help you find the perfect caregiver for your loved one.",
  primaryButtonText = "Request Care",
  primaryButtonHref = "/request-care",
  secondaryButtonText = "Join Our Team",
  secondaryButtonHref = "/apply",
  variant = 'red',
}: CTASectionProps) {
  if (variant === 'red') {
    return (
      <section className="py-16 md:py-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-care-red rounded-[2rem] transform -rotate-1 opacity-90" />
              
              <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-4 border border-care-red/10">
                      <Heart className="w-4 h-4" />
                      <span>Get Started Today</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-care-navy mb-3">
                      {title}
                    </h2>
                    <p className="text-care-gray-500 text-base md:text-lg max-w-md">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={primaryButtonHref}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-care-red text-white hover:bg-care-red-dark transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,40,40,0.35)] text-sm whitespace-nowrap"
                    >
                      {primaryButtonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={secondaryButtonHref}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-care-gray-200 text-care-navy hover:border-care-red hover:text-care-red transition-all duration-300 text-sm whitespace-nowrap"
                    >
                      {secondaryButtonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  if (variant === 'light') {
    return (
      <section className="bg-care-gray-50 py-20 md:py-28">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5">
                {title}
              </h2>
              <p className="text-care-gray-500 text-lg md:text-xl mb-10">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={primaryButtonHref}
                  className="btn-primary"
                >
                  {primaryButtonText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href={secondaryButtonHref}
                  className="btn-outline"
                >
                  {secondaryButtonText}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-care py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-care-blue/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-care-red/20 rounded-full blur-[100px]" />
      </div>
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl !text-white mb-5">
              {title}
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-care-red text-white hover:bg-care-red-dark transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,40,40,0.4)] w-full sm:w-auto"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
