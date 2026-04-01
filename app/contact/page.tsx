'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Heart, Award, Shield } from 'lucide-react';
import Link from 'next/link';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import SectionBackground, { SectionBadge, FloatingCard, BlurredOrb } from '@/components/SectionBackground';
import StatCard from '@/components/StatCard';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak directly with our care coordinators',
    action: '+1 (919) 449-8913',
    href: 'tel:+19194498913',
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
    action: 'raylightcare76@gmail.com',
    href: 'mailto:raylightcare76@gmail.com',
    cta: 'Send Email',
  },
];

const coverageInfo = [
  { icon: MapPin, title: 'Service Coverage', value: 'All States (USA)' },
  { icon: Clock, title: 'Availability', value: '24/7 Support' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Image Background */}
      <SectionBackground
        imageSrc="/images/contact-office.jpeg"
        imageAlt="ArayoLight support team ready to help"
        overlay="white-heavy"
        className="relative"
      >
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-30" />
        <BlurredOrb color="blue" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-20" />
        
        <div className="pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <SectionBadge 
                  icon={<MessageCircle className="w-4 h-4" />}
                  variant="red"
                  className="mb-6"
                >
                  Contact Us
                </SectionBadge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy mb-5 leading-tight tracking-tight">
                  Get in Touch with ArayoLight
                </h1>
                <p className="text-care-gray-600 text-lg md:text-xl">
                  Have questions about our services? We&apos;re here to help. Reach out to us through 
                  any of the channels below.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Contact Methods */}
      <section className="pb-16 md:pb-24 bg-gradient-lift">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <div className="card-feature p-7 md:p-8 text-center h-full flex flex-col hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-care-red/10 flex items-center justify-center mx-auto mb-6 border border-care-red/10">
                    <method.icon className="w-8 h-8 text-care-red" />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy mb-2">{method.title}</h3>
                  <p className="text-care-gray-500 text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-care-navy mb-6">{method.action}</p>
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="btn-primary w-full text-sm py-3 mt-auto group"
                  >
                    {method.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coverage & Quick Actions - Image Background */}
      <SectionBackground
        imageSrc="/images/support-team.jpeg"
        imageAlt="ArayoLight support team"
        overlay="gradient"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <FadeIn direction="up" delay={0.1}>
                  <FloatingCard variant="white" className="h-full">
                    <div className="relative h-52 rounded-xl overflow-hidden mb-6">
                      <Image
                        src="/images/contact-office.jpeg"
                        alt="ArayoLight support team ready to help"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-6">Coverage Information</h3>
                    <div className="space-y-4">
                      {coverageInfo.map((info) => (
                        <div key={info.title} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-care-blue/10 flex items-center justify-center flex-shrink-0 border border-care-blue/10">
                            <info.icon className="w-6 h-6 text-care-blue" />
                          </div>
                          <div>
                            <p className="text-sm text-care-gray-500">{info.title}</p>
                            <p className="font-medium text-care-navy">{info.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FloatingCard>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                  <FloatingCard variant="white" className="h-full">
                    <h3 className="font-heading text-xl text-care-navy mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                      <Link
                        href="/request-care"
                        className="flex items-center gap-4 p-4 rounded-xl bg-care-red/5 hover:bg-care-red/10 transition-colors group border border-care-red/10"
                      >
                        <div className="w-12 h-12 rounded-xl bg-care-red flex items-center justify-center flex-shrink-0 shadow-glow-red">
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
                        className="flex items-center gap-4 p-4 rounded-xl bg-care-blue/5 hover:bg-care-blue/10 transition-colors group border border-care-blue/10"
                      >
                        <div className="w-12 h-12 rounded-xl bg-care-blue flex items-center justify-center flex-shrink-0 shadow-glow-blue">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-care-navy group-hover:text-care-blue transition-colors">Apply as Caregiver</p>
                          <p className="text-sm text-care-gray-500">Join our team of caregivers</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-care-gray-400 group-hover:text-care-blue group-hover:translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </FloatingCard>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Response Time Notice - Dark Navy */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        {/* Decorative Orbs */}
        <BlurredOrb color="blue" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/2" />
        <BlurredOrb color="red" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/3 opacity-40" />
        
        <div className="container-care mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <FadeIn direction="up">
                <FloatingCard variant="dark" className="text-center md:text-left">
                  <Clock className="w-12 h-12 text-care-red mb-5 mx-auto md:mx-0" />
                  <h2 className="font-heading text-2xl md:text-3xl !text-white mb-4">Fast Response Times</h2>
                  <p className="text-white/70 mb-8">
                    We understand that care needs can be urgent. That&apos;s why ArayoLight prioritizes 
                    quick responses to all inquiries.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="font-heading text-3xl text-care-red">30 min</p>
                      <p className="text-white/60 text-sm">Average response</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="font-heading text-3xl text-care-red">24/7</p>
                      <p className="text-white/60 text-sm">Emergency support</p>
                    </div>
                  </div>
                </FloatingCard>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.15}>
                <div className="relative rounded-3xl overflow-hidden h-80 md:h-full min-h-[320px] shadow-floating border border-white/10">
                  <Image
                    src="/images/support-team.jpeg"
                    alt="ArayoLight customer support team"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
