'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Star, 
  ChevronDown,
  Scale,
  Sparkles,
  MessageSquareHeart,
  Award,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const topNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

const resourcesDropdown = {
  label: 'Resources',
  href: '/resources',
  items: [
    { 
      href: '/resources', 
      label: 'Compare Care Options', 
      description: 'See how in-home care compares to alternatives',
      icon: Scale,
    },
    { 
      href: '/assessment', 
      label: 'Care Assessment', 
      description: 'Take our 2-minute quiz to find the right care level',
      icon: Sparkles,
    },
    { 
      href: '/reviews', 
      label: 'Reviews', 
      description: 'Hear from families who trust ArayoLight',
      icon: MessageSquareHeart,
    },
    { 
      href: '/awards', 
      label: 'Awards & Recognition', 
      description: 'BBB A+ Rated, Home Care Pulse Leader & more',
      icon: Award,
    },
  ],
};

const ctaNavLinks = [
  { href: '/request-care', label: 'Request Care' },
  { href: '/apply', label: 'Join Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setResourcesOpen(false);
    setMobileResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isResourcesActive = resourcesDropdown.items.some(item => item.href === pathname) || pathname === resourcesDropdown.href;

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
              {topNavLinks.map((link) => (
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

              {/* Resources Dropdown */}
              <div 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  onClick={() => setResourcesOpen(v => !v)}
                  className={`relative text-sm font-medium transition-colors hover:text-care-red py-2 inline-flex items-center gap-1 ${
                    isResourcesActive
                      ? 'text-care-navy font-semibold'
                      : 'text-care-gray-500'
                  }`}
                >
                  {resourcesDropdown.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
                  {isResourcesActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-care-red rounded-full" />
                  )}
                </button>

                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    resourcesOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-care-gray-100 p-2 w-72">
                    {resourcesDropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                          pathname === item.href 
                            ? 'bg-care-red/5' 
                            : 'hover:bg-care-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          pathname === item.href ? 'bg-care-red text-white' : 'bg-care-gray-100 text-care-navy'
                        }`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${pathname === item.href ? 'text-care-red' : 'text-care-navy'}`}>
                            {item.label}
                          </p>
                          <p className="text-xs text-care-gray-500 mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 mt-2 border-t border-care-gray-100">
                      <Link
                        href={resourcesDropdown.href}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium text-care-navy hover:bg-care-gray-50 transition-colors"
                      >
                        View All Resources
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {ctaNavLinks.map((link) => (
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
              isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1 bg-care-navy rounded-2xl mb-4 px-3 shadow-2xl border border-white/10">
              {/* Logo Text in Menu */}
              <div className="px-4 py-3 border-b border-white/10 mb-2">
                <div className="flex flex-col">
                  <span className="font-heading text-xl leading-tight text-white font-bold tracking-tight">
                    ArayoLight
                  </span>
                  <span className="text-xs tracking-wide">
                    <span className="text-care-red font-semibold">Homecare</span>
                    <span className="text-white/80 font-medium ml-1">Services</span>
                  </span>
                </div>
              </div>

              {topNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                    pathname === link.href
                      ? 'bg-care-red text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Resources Accordion */}
              <div className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileResourcesOpen(v => !v)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-sm font-bold transition-colors ${
                    isResourcesActive
                      ? 'bg-care-red text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>{resourcesDropdown.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${mobileResourcesOpen ? 'max-h-72' : 'max-h-0'}`}>
                  <div className="px-3 pb-2 space-y-1 bg-care-navy/50">
                    {resourcesDropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 py-3 px-3 rounded-xl text-sm transition-colors ${
                          pathname === item.href
                            ? 'bg-care-red/20 text-white font-bold'
                            : 'text-white/80 hover:bg-white/10 font-medium'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href={resourcesDropdown.href}
                      className="flex items-center gap-3 py-3 px-3 rounded-xl text-sm text-white hover:bg-white/10 transition-colors font-bold"
                    >
                      <ArrowRight className="w-4 h-4" />
                      View All Resources
                    </Link>
                  </div>
                </div>
              </div>

              {ctaNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                    pathname === link.href
                      ? 'bg-care-red text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                <a
                  href="tel:+19194498913"
                  className="flex items-center gap-2 py-3 px-4 text-sm font-bold text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (919) 449-8913</span>
                </a>
                <a
                  href="mailto:raylightcare76@gmail.com"
                  className="flex items-center gap-2 py-3 px-4 text-sm font-bold text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>raylightcare76@gmail.com</span>
                </a>
                <Link
                  href="/request-care"
                  className="block bg-care-red text-white text-center text-sm font-bold py-3 mt-2 rounded-xl hover:bg-care-red-600 transition-colors shadow-lg"
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
