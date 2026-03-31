'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Star } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/request-care', label: 'Request Care' },
  { href: '/apply', label: 'Join Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div 
        className={`fixed left-0 right-0 z-50 bg-care-navy transition-all duration-300 ${
          scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
        style={{ top: 0 }}
      >
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5">
            {/* Left: Proud Statement & Logos */}
            <div className="flex items-center gap-3 md:gap-5">
              <div className="hidden sm:block">
                <p className="text-white/90 text-xs md:text-sm">
                  <span className="font-semibold text-white">5-Star Rated</span>
                  <span className="ml-1.5 text-white/70">by families nationwide</span>
                </p>
              </div>
              
              {/* 5 Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Logos */}
              <div className="flex items-center gap-2 md:gap-3 ml-1">
                <div className="relative w-10 h-5 md:w-12 md:h-6 bg-white rounded-md p-1">
                  <Image
                    src="/images/cmc-logo.png"
                    alt="CMC Accreditation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-10 h-5 md:w-12 md:h-6 bg-white rounded-md p-1">
                  <Image
                    src="/images/the-joint-commission.png"
                    alt="The Joint Commission"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Right: Contact Info */}
            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="tel:+19194498913" 
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">+1 (919) 449-8913</span>
              </a>
              <a 
                href="mailto:raylightcare76@gmail.com" 
                className="hidden lg:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">raylightcare76@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(15,23,42,0.08)]' 
            : 'top-[40px] md:top-[44px] bg-white'
        }`}
      >
        <nav className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-care-navy p-1.5 shadow-md">
                <Image
                  src="/Arayolight-logo.png"
                  alt="ArayoLight Homecare Services"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg md:text-xl lg:text-2xl leading-tight text-care-navy font-bold tracking-tight">
                  ArayoLight
                </span>
                <span className="text-[10px] md:text-xs lg:text-sm text-care-gray-500 font-medium hidden sm:block tracking-wide uppercase">
                  Homecare Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-care-red py-2 ${
                    pathname === link.href
                      ? 'text-care-navy font-semibold'
                      : 'text-care-gray-500'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-care-red rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+19194498913"
                className="flex items-center gap-2 text-sm font-medium text-care-navy hover:text-care-red transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <Link
                href="/request-care"
                className="bg-care-red text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-care-red-dark transition-all duration-300 shadow-[0_4px_14px_rgba(198,40,40,0.25)] hover:shadow-[0_6px_20px_rgba(198,40,40,0.35)] hover:-translate-y-0.5"
              >
                Request Care
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-care-navy hover:bg-care-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1 bg-care-gray-50 rounded-2xl mb-4 px-3 shadow-lg border border-care-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-white text-care-red shadow-sm'
                      : 'text-care-navy hover:bg-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-care-gray-200 space-y-1">
                <a
                  href="tel:+19194498913"
                  className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-care-navy hover:bg-white rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (919) 449-8913</span>
                </a>
                <a
                  href="mailto:raylightcare76@gmail.com"
                  className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-care-navy hover:bg-white rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>raylightcare76@gmail.com</span>
                </a>
                <Link
                  href="/request-care"
                  className="block bg-care-red text-white text-center text-sm font-semibold py-3 mt-2 rounded-xl hover:bg-care-red-dark transition-colors"
                >
                  Request Care Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
