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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-care-red shadow-soft`}
    >
      <nav className="container-care mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-20 h-20">
              <Image
                src="/images/Arayolight-logo.jpeg"
                alt="ArayoLight Homecare Services"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg leading-tight text-white">
                ArayoLight
              </span>
              <span className="text-xs text-white/80">
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
              href="tel:+1234567890"
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
                href="tel:+1234567890"
                className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-care-navy"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
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
  );
}
