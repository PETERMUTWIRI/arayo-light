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
    <footer className="bg-care-navy text-white">
      {/* Main Footer */}
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/Arayolight-logo.png"
                  alt="ArayoLight Homecare Services"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-white block drop-shadow-lg">ArayoLight</span>
                <span className="text-white text-sm font-medium">Homecare Services</span>
              </div>
            </Link>
            <p className="text-care-gray-300 text-sm leading-relaxed mb-6">
              Professional, compassionate homecare services you can trust. 
              Serving families across all states for over 20 years.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-care-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-care-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-care-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-lg mb-6">Our Services</h3>
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
            <h3 className="font-heading text-lg mb-6">Company</h3>
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
            <h3 className="font-heading text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-care-gray-300">Phone</p>
                  <a href="tel:+19194498913" className="text-white hover:text-care-red transition-colors">
                    +1 (919) 449-8913
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-care-gray-300">Email</p>
                  <a href="mailto:raylightcare76@gmail.com" className="text-white hover:text-care-red transition-colors">
                    raylightcare76@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-care-gray-300">Coverage</p>
                  <p className="text-white">All States (USA)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-care-gray-300">Availability</p>
                  <p className="text-white">24/7 Support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
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
