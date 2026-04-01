'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

interface SectionBackgroundProps {
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: 'white-light' | 'white-medium' | 'white-heavy' | 'white-full' | 'navy' | 'gradient' | 'none';
  className?: string;
  contentClassName?: string;
  parallax?: boolean;
  priority?: boolean;
}

/**
 * SectionBackground - A reusable component for image-backed sections
 * 
 * Provides:
 * - Optional background image with overlay
 * - Multiple overlay opacity options
 * - Parallax scrolling support
 * - Glassmorphism-ready content area
 * 
 * Usage:
 * <SectionBackground 
 *   imageSrc="/images/hero-caregiver.jpg"
 *   overlay="white-medium"
 *   parallax
 * >
 *   <YourContent />
 * </SectionBackground>
 */
export default function SectionBackground({
  children,
  imageSrc,
  imageAlt = '',
  overlay = 'white-medium',
  className = '',
  contentClassName = '',
  parallax = false,
  priority = false,
}: SectionBackgroundProps) {
  const overlayClasses = {
    'white-light': 'bg-gradient-to-br from-white/85 via-white/90 to-white/85',
    'white-medium': 'bg-gradient-to-br from-white/90 via-white/92 to-white/88',
    'white-heavy': 'bg-gradient-to-br from-white/95 via-white/96 to-white/94',
    'white-full': 'bg-gradient-to-br from-white/97 via-white/98 to-white/96',
    'navy': 'bg-gradient-to-br from-care-navy/92 via-care-blue/88 to-care-navy/90',
    'gradient': 'bg-gradient-to-b from-white/95 via-care-gray-50/90 to-care-gray-100/85',
    'none': '',
  };

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      {imageSrc && (
        <div className={`absolute inset-0 ${parallax ? 'parallax-bg' : ''}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority={priority}
            sizes="100vw"
          />
        </div>
      )}

      {/* Overlay */}
      {overlay !== 'none' && imageSrc && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}

      {/* Content */}
      <div className={`relative z-10 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * FloatingCard - A glassmorphism card that floats over image backgrounds
 */
interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'white' | 'dark';
}

export function FloatingCard({ 
  children, 
  className = '',
  variant = 'glass' 
}: FloatingCardProps) {
  const variantClasses = {
    glass: 'bg-white/85 backdrop-blur-xl border-white/60 shadow-floating',
    white: 'bg-white border-care-gray-100 shadow-elevated',
    dark: 'bg-care-navy/90 backdrop-blur-xl border-white/10 text-white',
  };

  return (
    <div 
      className={`
        rounded-3xl 
        p-6 md:p-8 lg:p-10
        transition-all duration-500 ease-smooth
        hover:shadow-elevated-hover hover:-translate-y-1
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/**
 * SectionBadge - A styled badge for section labels
 */
interface SectionBadgeProps {
  icon?: ReactNode;
  children: ReactNode;
  variant?: 'red' | 'blue' | 'navy' | 'white';
  className?: string;
}

export function SectionBadge({ 
  icon, 
  children, 
  variant = 'red',
  className = '' 
}: SectionBadgeProps) {
  const variantClasses = {
    red: 'bg-care-red/8 text-care-red border-care-red/10',
    blue: 'bg-care-blue/8 text-care-blue border-care-blue/10',
    navy: 'bg-care-navy/6 text-care-navy border-care-navy/10',
    white: 'bg-white/20 text-white border-white/30 backdrop-blur-sm',
  };

  return (
    <div 
      className={`
        inline-flex items-center gap-2 
        px-4 py-2 
        rounded-full 
        text-sm font-semibold 
        border 
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}

/**
 * BlurredOrb - Decorative blurred gradient orb
 */
interface BlurredOrbProps {
  color?: 'red' | 'blue' | 'navy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function BlurredOrb({ 
  color = 'red', 
  size = 'md',
  className = '' 
}: BlurredOrbProps) {
  const colorClasses = {
    red: 'bg-care-red/30',
    blue: 'bg-care-blue/30',
    navy: 'bg-care-navy/30',
  };

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-72 h-72',
    xl: 'w-96 h-96',
  };

  return (
    <div 
      className={`
        absolute 
        rounded-full 
        blur-[100px] 
        pointer-events-none
        ${colorClasses[color]}
        ${sizeClasses[size]}
        ${className}
      `}
      aria-hidden="true"
    />
  );
}
