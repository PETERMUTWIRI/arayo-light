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
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show top bar when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div 
        className={`fixed left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
          showTopBar ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: 0 }}
      >
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 md:py-3">
            {/* Left: Proud Statement & Logos */}
            <div className="flex items-center gap-3 md:gap-6">
              <div className="hidden sm:block">
                <p className="text-care-navy">
                  <span className="font-bold italic text-sm md:text-base">We are proud</span>
                  <span className="text-care-gray-500 text-xs md:text-sm ml-1">to be rated 5 star by</span>
                </p>
              </div>
              
              {/* 5 Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Logos */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative w-10 h-6 md:w-14 md:h-8">
                  <Image
                    src="/images/cmc-logo.png"
                    alt="CMC Accreditation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-10 h-6 md:w-14 md:h-8">
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
            <div className="flex items-center gap-3 md:gap-6">
              <a 
                href="tel:+19194498913" 
                className="flex items-center gap-1.5 text-care-navy hover:text-care-red transition-colors"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium hidden sm:inline">+1 (919) 449-8913</span>
                <span className="text-xs md:text-sm font-medium sm:hidden">Call</span>
              </a>
              <a 
                href="mailto:raylightcare76@gmail.com" 
                className="flex items-center gap-1.5 text-care-navy hover:text-care-red transition-colors hidden md:flex"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">raylightcare76@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-care-red shadow-soft ${
          showTopBar ? 'top-[40px] md:top-[52px]' : 'top-0'
        }`}
      >
        <nav className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
                <Image
                  src="/Arayolight-logo.png"
                  alt="ArayoLight Homecare Services"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg md:text-xl lg:text-2xl leading-tight text-white font-bold drop-shadow-sm tracking-tight">
                  ArayoLight
                </span>
                <span className="text-xs md:text-sm lg:text-base text-white/90 font-medium hidden sm:block tracking-wide">
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
                  className={`text-sm font-medium transition-colors hover:text-white/80 ${
                    pathname === link.href
                      ? 'text-white font-semibold'
                      : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+19194498913"
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <Link
                href="/request-care"
                className="bg-white text-care-red text-sm font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-colors shadow-md"
              >
                Request Care
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2 bg-white rounded-2xl mb-4 px-4 shadow-soft">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-care-red/10 text-care-red'
                      : 'text-care-navy hover:bg-care-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-care-gray-200">
                <a
                  href="tel:+19194498913"
                  className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-care-navy"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (919) 449-8913</span>
                </a>
                <a
                  href="mailto:raylightcare76@gmail.com"
                  className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-care-navy"
                >
                  <Mail className="w-4 h-4" />
                  <span>raylightcare76@gmail.com</span>
                </a>
                <Link
                  href="/request-care"
                  className="block bg-care-red text-white text-center text-sm font-semibold py-3 mt-2 rounded-xl hover:bg-care-red/90 transition-colors"
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
