'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Homecare Services', href: '/request-care' },
    { label: 'Medication Reminder', href: '/request-care' },
    { label: 'Light Housekeeping', href: '/request-care' },
    { label: 'Daily Living Assistance', href: '/request-care' },
    { label: 'Companionship', href: '/request-care' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Care Assessment', href: '/assessment' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Join Our Team', href: '/apply' },
    { label: 'Contact', href: '/contact' },
    { label: 'Request Care', href: '/request-care' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-care-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-care-blue/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-care-red/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3" />
      </div>

      {/* Main Footer */}
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 rounded-xl bg-white/10 p-1.5 backdrop-blur-sm">
                <Image
                  src="/Arayolight-logo.png"
                  alt="ArayoLight Homecare Services"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold !text-white block tracking-tight">ArayoLight</span>
                <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Homecare Services</span>
              </div>
            </Link>
            <p className="text-care-gray-300 text-sm leading-relaxed mb-6">
              Professional, compassionate homecare services you can trust. 
              Serving families across all states for over 20 years.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-care-red transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-care-red transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-care-red transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-base mb-5 !text-white">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-care-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading text-base mb-5 !text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-care-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-base mb-5 !text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-care-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+19194498913" className="text-white hover:text-care-red transition-colors text-sm">
                    +1 (919) 449-8913
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-care-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:raylightcare76@gmail.com" className="text-white hover:text-care-red transition-colors text-sm">
                    raylightcare76@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-care-gray-400 uppercase tracking-wider mb-0.5">Coverage</p>
                  <p className="text-white text-sm">All States (USA)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-care-gray-400 uppercase tracking-wider mb-0.5">Availability</p>
                  <p className="text-white text-sm">24/7 Support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-care-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ArayoLight Homecare. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-care-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
