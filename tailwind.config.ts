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
          // Support colors
          white: '#FFFFFF',
          gray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
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
        'gradient-hero': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        'gradient-red': 'linear-gradient(135deg, #C62828 0%, #991B1B 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
        'glow-red': '0 0 30px rgba(198, 40, 40, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
