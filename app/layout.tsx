import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';

// ==========================================
// CARING HANDS - PROFESSIONAL HOMECARE
// Root Layout with SEO Optimization
// ==========================================

// Clean, professional font for healthcare
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ==========================================
// SEO METADATA - OPTIMIZED FOR SEARCH
// ==========================================

export const metadata: Metadata = {
  // Core title template
  title: {
    default: "Caring Hands | Professional Homecare Services",
    template: "%s | Caring Hands Homecare",
  },
  
  // Primary description
  description: "Professional homecare services you can trust. Serving families across all states for over 20 years. Compassionate caregivers for seniors and individuals needing assistance at home.",
  
  // Keywords for search engines
  keywords: [
    'homecare services',
    'senior care',
    'in-home care',
    'caregiver services',
    'elderly care',
    'home health aide',
    'personal care assistant',
    'respite care',
    'companionship services',
    'medication reminders',
    'daily living assistance',
    'USA homecare',
    'professional caregivers',
    'licensed homecare',
  ],
  
  // Authors and ownership
  authors: [{ name: "Caring Hands Homecare" }],
  creator: "Caring Hands Homecare",
  publisher: "Caring Hands Homecare",
  
  // Format detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // Canonical URL base
  metadataBase: new URL('https://www.caringhandshomecare.com'),
  
  // Alternates
  alternates: {
    canonical: '/',
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Open Graph - Social sharing
  openGraph: {
    title: "Caring Hands | Professional Homecare Services",
    description: "Trusted homecare services for your loved ones. 20+ years of experience serving families across all states.",
    url: 'https://www.caringhandshomecare.com',
    siteName: "Caring Hands Homecare",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caring Hands - Professional Homecare Services',
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: "Caring Hands | Professional Homecare Services",
    description: "Trusted homecare services for your loved ones. Serving all states with compassion and professionalism.",
    images: ['/og-image.jpg'],
    creator: '@CaringHandsCare',
    site: '@CaringHandsCare',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  
  // Category
  category: 'healthcare',
};

// ==========================================
// VIEWPORT CONFIGURATION
// ==========================================

export const viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Caring Hands Homecare',
              description: 'Professional homecare services serving all states across the USA. 20+ years of experience providing compassionate care for seniors and individuals needing assistance.',
              url: 'https://www.caringhandshomecare.com',
              telephone: '+1-123-456-7890',
              email: 'care@caringhandshomecare.com',
              image: 'https://www.caringhandshomecare.com/logo.png',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
                addressRegion: 'All States',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              serviceType: [
                'Homecare Services',
                'Senior Care',
                'Personal Care',
                'Companionship',
                'Medication Reminders',
              ],
              priceRange: '$$',
              openingHours: '24/7',
              sameAs: [
                'https://facebook.com/caringhandshomecare',
                'https://instagram.com/caringhandshomecare',
                'https://linkedin.com/company/caringhandshomecare',
              ],
            }),
          }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Homecare Services',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Caring Hands Homecare',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Homecare Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Homecare Services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Medication Reminder',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Daily Living Assistance',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Companionship',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      
      <body 
        className={`${inter.className} antialiased bg-care-gray-50 text-care-navy`}
      >
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main className="relative">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
        
        {/* Back to top button */}
        <BackToTop />
      </body>
    </html>
  );
}
