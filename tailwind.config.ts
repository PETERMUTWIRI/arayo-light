import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // CSS Variable-based colors for theming
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Caregiver Brand Colors - Professional Healthcare Palette
        care: {
          // Primary Deep Red - CTAs only, use sparingly
          red: {
            DEFAULT: '#C62828',
            50: '#FEE2E2',
            100: '#FECACA',
            200: '#FCA5A5',
            300: '#F87171',
            400: '#EF4444',
            500: '#C62828', // Primary CTA
            600: '#B91C1C',
            700: '#991B1B',
            800: '#7F1D1D',
            900: '#450A0A',
          },
          // Base Dark Navy - Primary text and dark sections
          navy: {
            DEFAULT: '#0F172A',
            50: '#F1F5F9',
            100: '#E2E8F0',
            200: '#CBD5E1',
            300: '#94A3B8',
            400: '#64748B',
            500: '#475569',
            600: '#334155',
            700: '#1E293B',
            800: '#0F172A', // Primary dark
            900: '#020617',
          },
          // Soft Blue - Trust, healthcare feel
          blue: {
            DEFAULT: '#1E3A8A',
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E3A8A', // Primary blue
            900: '#1E3A5F',
          },
          // Warm grays for sophistication
          cream: '#FAFBFC',
          gray: {
            50: '#F8FAFC',
            75: '#F5F7FA',
            100: '#F1F5F9',
            150: '#E8EDF3',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
          },
          // WhatsApp Green
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        // Clean, professional healthcare typography
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-care': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 50%, #F5F7FA 100%)',
        'gradient-hero-dark': 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
        'gradient-red': 'linear-gradient(135deg, #C62828 0%, #991B1B 100%)',
        'gradient-navy': 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
        'gradient-soft': 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 50%, #F1F5F9 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FAFBFC 0%, #F8F9FC 50%, #F5F7FA 100%)',
        'gradient-lift': 'linear-gradient(180deg, #F1F5F9 0%, #FFFFFF 100%)',
        'gradient-shine': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
      },
      boxShadow: {
        // Premium shadows
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 10px 40px -4px rgba(15, 23, 42, 0.1)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
        'elevated': '0 20px 50px rgba(15, 23, 42, 0.1), 0 8px 20px rgba(15, 23, 42, 0.05)',
        'elevated-hover': '0 30px 80px rgba(15, 23, 42, 0.12), 0 12px 30px rgba(15, 23, 42, 0.08)',
        'glow-red': '0 0 30px rgba(198, 40, 40, 0.3)',
        'glow-red-lg': '0 0 60px rgba(198, 40, 40, 0.2)',
        'glow-blue': '0 0 30px rgba(30, 58, 138, 0.3)',
        'glow-blue-lg': '0 0 60px rgba(30, 58, 138, 0.2)',
        'inner-light': 'inset 0 2px 4px rgba(255, 255, 255, 0.5)',
        'floating': '0 25px 60px rgba(15, 23, 42, 0.12), 0 10px 20px rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-slow': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-up-slow': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'blur-in': 'blurIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.03em',
        'wide': '0.02em',
        'wider': '0.04em',
        'widest': '0.08em',
      },
      lineHeight: {
        'tighter': '1.1',
        'snug': '1.4',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
