'use client';

import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  variant?: 'glass' | 'white' | 'dark' | 'red';
  className?: string;
  iconClassName?: string;
  animate?: boolean;
}

/**
 * StatCard - A floating stat card with icon
 * 
 * Variants:
 * - glass: Semi-transparent with blur (for image backgrounds)
 * - white: Clean white card (for colored backgrounds)
 * - dark: Dark navy card (for light backgrounds)
 * - red: Red accent card (for special highlights)
 */
export default function StatCard({
  icon,
  value,
  label,
  variant = 'white',
  className = '',
  iconClassName = '',
  animate = true,
}: StatCardProps) {
  const variants = {
    glass: {
      card: 'bg-white/90 backdrop-blur-lg border-white/60 shadow-floating',
      icon: 'bg-care-red text-white',
      value: 'text-care-navy',
      label: 'text-care-gray-500',
    },
    white: {
      card: 'bg-white border-care-gray-100 shadow-elevated',
      icon: 'bg-care-red text-white',
      value: 'text-care-navy',
      label: 'text-care-gray-500',
    },
    dark: {
      card: 'bg-care-navy/90 backdrop-blur-lg border-white/10 shadow-floating',
      icon: 'bg-care-red text-white',
      value: 'text-white',
      label: 'text-white/70',
    },
    red: {
      card: 'bg-gradient-to-br from-care-red to-care-red-700 border-care-red-600 shadow-glow-red',
      icon: 'bg-white/20 text-white',
      value: 'text-white',
      label: 'text-white/80',
    },
  };

  const v = variants[variant];

  return (
    <div
      className={`
        rounded-2xl p-4 lg:p-5
        border
        transition-all duration-500 ease-smooth
        hover:shadow-elevated-hover hover:-translate-y-1
        ${animate ? 'animate-float' : ''}
        ${v.card}
        ${className}
      `}
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <div 
          className={`
            w-10 h-10 lg:w-12 lg:h-12
            rounded-xl
            flex items-center justify-center
            flex-shrink-0
            ${v.icon}
            ${iconClassName}
          `}
        >
          {icon}
        </div>
        <div>
          <p className={`font-heading text-xl lg:text-2xl leading-none mb-0.5 ${v.value}`}>
            {value}
          </p>
          <p className={`text-xs lg:text-sm ${v.label}`}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * StatBadge - A compact stat display for hero sections
 */
interface StatBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBadge({ value, label, className = '' }: StatBadgeProps) {
  return (
    <div 
      className={`
        inline-flex flex-col items-center
        px-5 py-3
        bg-white/95 backdrop-blur-sm
        rounded-xl
        border border-white/60
        shadow-elevated
        ${className}
      `}
    >
      <span className="font-heading text-2xl lg:text-3xl text-care-navy leading-none">
        {value}
      </span>
      <span className="text-xs lg:text-sm text-care-gray-500 mt-1">
        {label}
      </span>
    </div>
  );
}
