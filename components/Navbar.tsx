'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Heart } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/request-care', label: 'Request Care' },
  { href: '/apply', label: 'Join Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-care mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/images/Arayolight-logo.jpeg"
                alt="ArayoLight Homecare Services"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading text-lg leading-tight transition-colors ${
                isScrolled ? 'text-care-navy' : 'text-care-navy'
              }`}>
                ArayoLight
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled ? 'text-care-gray-500' : 'text-care-gray-500'
              }`}>
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
                className={`text-sm font-medium transition-colors hover:text-care-red ${
                  pathname === link.href
                    ? 'text-care-red'
                    : isScrolled
                    ? 'text-care-navy'
                    : 'text-care-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm font-medium text-care-navy hover:text-care-red transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <Link
              href="/request-care"
              className="btn-primary text-sm py-3 px-6"
            >
              Request Care
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-care-navy hover:bg-care-gray-100 transition-colors"
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
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl mb-4 px-4 shadow-soft">
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
                href="tel:+1234567890"
                className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-care-navy"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <Link
                href="/request-care"
                className="block btn-primary text-center text-sm py-3 mt-2"
              >
                Request Care Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
