'use client';

import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { SectionBadge, BlurredOrb } from '@/components/SectionBackground';

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
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative max-w-4xl mx-auto">
              {/* Decorative shadow layer */}
              <div className="absolute inset-0 bg-gradient-red rounded-[2rem] transform -rotate-1 opacity-90 blur-sm" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-floating">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <SectionBadge 
                      icon={<Heart className="w-4 h-4" />}
                      variant="red"
                      className="mb-4"
                    >
                      Get Started Today
                    </SectionBadge>
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-care-navy mb-3 tracking-tight">
                      {title}
                    </h2>
                    <p className="text-care-gray-600 text-base md:text-lg max-w-md">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={primaryButtonHref}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-red text-white hover:shadow-glow-red transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap group"
                    >
                      {primaryButtonText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={secondaryButtonHref}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-care-gray-200 text-care-navy hover:border-care-red hover:text-care-red transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap"
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
      <section className="bg-gradient-lift py-20 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-care-red/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-care-blue/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionBadge 
                icon={<Heart className="w-4 h-4" />}
                variant="red"
                className="mb-6"
              >
                Get Started Today
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5 tracking-tight">
                {title}
              </h2>
              <p className="text-care-gray-600 text-lg md:text-xl mb-10">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={primaryButtonHref}
                  className="btn-primary group"
                >
                  {primaryButtonText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Orbs */}
      <BlurredOrb color="blue" size="xl" className="top-0 left-1/4 -translate-y-1/2" />
      <BlurredOrb color="red" size="lg" className="bottom-0 right-1/4 translate-y-1/2 opacity-40" />
      
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge 
              icon={<Heart className="w-4 h-4" />}
              variant="white"
              className="mb-6"
            >
              Get Started Today
            </SectionBadge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl !text-white mb-5 tracking-tight">
              {title}
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-care-red hover:bg-white/90 transition-all duration-300 hover:shadow-glow-red hover:-translate-y-0.5 w-full sm:w-auto group"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
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
