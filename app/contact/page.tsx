'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak directly with our care coordinators',
    action: '(123) 456-7890',
    href: 'tel:+1234567890',
    cta: 'Call Now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick responses via WhatsApp messaging',
    action: 'Available 24/7',
    href: 'https://wa.me/1234567890',
    cta: 'Chat on WhatsApp',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us your questions anytime',
    action: 'care@arayolight.com',
    href: 'mailto:care@arayolight.com',
    cta: 'Send Email',
  },
];

const coverageInfo = [
  { icon: MapPin, title: 'Service Coverage', value: 'All States (USA)' },
  { icon: Clock, title: 'Availability', value: '24/7 Support' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-hero pt-20">
      {/* Header */}
      <section className="py-16 md:py-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
              Get in Touch with ArayoLight
            </h1>
            <p className="text-care-gray-500 text-lg">
              Have questions about our services? We&apos;re here to help. Reach out to us through 
              any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method) => (
              <div key={method.title} className="card-care p-6 md:p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-care-red/10 flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-care-red" />
                </div>
                <h3 className="font-heading text-xl text-care-navy mb-2">{method.title}</h3>
                <p className="text-care-gray-500 text-sm mb-4">{method.description}</p>
                <p className="font-medium text-care-navy mb-6">{method.action}</p>
                <a
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="btn-primary w-full text-sm py-3"
                >
                  {method.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage & Quick Actions */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Coverage Info with Image */}
              <div className="card-care overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/contact-office.jpg"
                    alt="ArayoLight support team ready to help"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-care-navy mb-6">Coverage Information</h3>
                  <div className="space-y-4">
                    {coverageInfo.map((info) => (
                      <div key={info.title} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-care-blue/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-care-blue" />
                        </div>
                        <div>
                          <p className="text-sm text-care-gray-500">{info.title}</p>
                          <p className="font-medium text-care-navy">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-care p-6">
                <h3 className="font-heading text-xl text-care-navy mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link
                    href="/request-care"
                    className="flex items-center gap-4 p-4 rounded-xl bg-care-red/5 hover:bg-care-red/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-care-red flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-care-navy group-hover:text-care-red transition-colors">Request Care</p>
                      <p className="text-sm text-care-gray-500">Get matched with a caregiver</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-care-gray-400 group-hover:text-care-red group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    href="/apply"
                    className="flex items-center gap-4 p-4 rounded-xl bg-care-blue/5 hover:bg-care-blue/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-care-blue flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-care-navy group-hover:text-care-blue transition-colors">Apply as Caregiver</p>
                      <p className="text-sm text-care-gray-500">Join our team of caregivers</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-care-gray-400 group-hover:text-care-blue group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-care-navy rounded-2xl p-8 md:p-12">
                <Clock className="w-12 h-12 text-care-red mb-4" />
                <h2 className="font-heading text-2xl text-white mb-4">Fast Response Times</h2>
                <p className="text-white/80 mb-6">
                  We understand that care needs can be urgent. That&apos;s why ArayoLight prioritizes 
                  quick responses to all inquiries.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-heading text-3xl text-care-red">30 min</p>
                    <p className="text-white/70 text-sm">Average WhatsApp response</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl text-care-red">24/7</p>
                    <p className="text-white/70 text-sm">Emergency support available</p>
                  </div>
                </div>
              </div>
              
              {/* Support Image */}
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="/images/support-team.jpg"
                  alt="ArayoLight customer support team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
