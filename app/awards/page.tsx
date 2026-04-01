'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Award, 
  ArrowRight, 
  Star, 
  Medal, 
  Trophy, 
  ShieldCheck, 
  BadgeCheck,
  Heart,
  Users,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import SectionBackground, { SectionBadge, FloatingCard, BlurredOrb } from '@/components/SectionBackground';
import StatCard from '@/components/StatCard';

const awards = [
  {
    id: 'bbb',
    title: 'BBB A+ Rated',
    organization: 'Better Business Bureau',
    description: 'Recognized for exemplary business ethics, transparent practices, and consistent customer satisfaction.',
    year: '2018 – Present',
    icon: ShieldCheck,
    color: 'bg-blue-600',
    highlight: true,
  },
  {
    id: 'homecare-pulse',
    title: 'Home Care Pulse Leader in Experience',
    organization: 'Home Care Pulse',
    description: 'Awarded to agencies ranked in the top percentile for caregiver and client satisfaction nationwide.',
    year: '2022 – 2024',
    icon: Heart,
    color: 'bg-care-red',
    highlight: true,
  },
  {
    id: 'top-100',
    title: 'Top 100 Homecare Agencies',
    organization: 'National Home Care Association',
    description: 'Named among the nation\'s top 100 homecare providers for quality of care, training standards, and family feedback.',
    year: '2023',
    icon: Trophy,
    color: 'bg-amber-500',
    highlight: true,
  },
  {
    id: 'joint-commission',
    title: 'The Joint Commission Accredited',
    organization: 'The Joint Commission',
    description: 'Gold seal of approval for meeting rigorous national standards for health care quality and safety.',
    year: '2015 – Present',
    icon: BadgeCheck,
    color: 'bg-care-navy',
    highlight: false,
  },
  {
    id: 'cmc',
    title: 'CMC Certified Provider',
    organization: 'Care Manager Certification',
    description: 'Certified care management protocols ensuring every client receives coordinated, comprehensive support.',
    year: '2019 – Present',
    icon: Medal,
    color: 'bg-teal-600',
    highlight: false,
  },
  {
    id: 'fast-growth',
    title: 'Fastest Growing Homecare Provider',
    organization: 'Inc. 5000 Regional',
    description: 'Recognized for rapid, sustainable growth while maintaining excellence in caregiver retention and client outcomes.',
    year: '2023',
    icon: TrendingUp,
    color: 'bg-indigo-600',
    highlight: false,
  },
];

const stats = [
  { value: '20+', label: 'Years of Service' },
  { value: '10K+', label: 'Families Served' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '5-Star', label: 'Average Rating' },
];

const trustIndicators = [
  'Licensed, bonded, and insured in all 50 states',
  'Rigorous background checks on every caregiver',
  'Ongoing training and certification programs',
  '24/7 on-call support and emergency response',
  'Transparent pricing with no hidden fees',
  'Regular quality assessments and care plan reviews',
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Image Background */}
      <SectionBackground
        imageSrc="/images/trust-team.jpeg"
        imageAlt="ArayoLight award-winning caregiving team"
        overlay="white-light"
        className="relative"
      >
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-30" />
        <BlurredOrb color="blue" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-20" />
        
        <div className="pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <SectionBadge 
                  icon={<Award className="w-4 h-4" />}
                  variant="red"
                  className="mb-6"
                >
                  Awards & Recognition
                </SectionBadge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy mb-6 leading-tight tracking-tight">
                  Trusted by Families.{' '}
                  <span className="text-care-red">Recognized by Industry Leaders.</span>
                </h1>
                <p className="text-care-gray-600 text-lg md:text-xl leading-relaxed">
                  For over two decades, ArayoLight has set the standard for compassionate, 
                  professional homecare. These recognitions reflect our unwavering commitment 
                  to excellence, transparency, and the families we serve.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Stats Bar - Gradient Background */}
      <section className="py-14 bg-gradient-lift border-y border-care-gray-100">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard
                  icon={stat.label.includes('Service') ? <Award className="w-5 h-5 lg:w-6 lg:h-6" /> : stat.label.includes('Families') ? <Heart className="w-5 h-5 lg:w-6 lg:h-6" /> : stat.label.includes('Satisfaction') ? <Star className="w-5 h-5 lg:w-6 lg:h-6" /> : <Trophy className="w-5 h-5 lg:w-6 lg:h-6" />}
                  value={stat.value}
                  label={stat.label}
                  variant="glass"
                  animate={false}
                  className="text-center"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards Grid - White Background */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-care-red/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-care-blue/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
              <SectionBadge 
                icon={<Medal className="w-4 h-4" />}
                variant="blue"
                className="mb-6"
              >
                Our Accolades
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4 tracking-tight">
                Awards and Certifications
              </h2>
              <p className="text-care-gray-600 text-lg">
                Awards and certifications that reflect our dedication to delivering 
                exceptional homecare services across the United States.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
            {awards.map((award) => (
              <StaggerItem key={award.id}>
                <div className={`card-feature p-8 h-full flex flex-col hover:-translate-y-2 ${award.highlight ? 'ring-2 ring-care-red/10' : ''}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${award.color} flex items-center justify-center shadow-lg`}>
                      <award.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-care-gray-400 uppercase tracking-wider">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-care-navy mb-2">
                    {award.title}
                  </h3>
                  <p className="text-care-red text-sm font-medium mb-4">
                    {award.organization}
                  </p>
                  <p className="text-care-gray-600 text-sm leading-relaxed flex-1">
                    {award.description}
                  </p>
                  {award.highlight && (
                    <div className="mt-5 pt-5 border-t border-care-gray-100">
                      <div className="flex items-center gap-2 text-sm text-care-navy font-medium">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span>Top Industry Recognition</span>
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section - Image Background */}
      <SectionBackground
        imageSrc="/images/about-story.jpeg"
        imageAlt="ArayoLight trusted caregiving team"
        overlay="white-light"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn direction="right">
                  <FloatingCard variant="white" className="h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-red flex items-center justify-center shadow-glow-red">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl text-care-navy">Why Families Trust Us</h2>
                        <p className="text-care-gray-500">Beyond the awards</p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {trustIndicators.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                          <span className="text-care-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </FloatingCard>
                </FadeIn>

                <FadeIn direction="left" delay={0.15}>
                  <div className="space-y-6">
                    <h3 className="font-heading text-2xl md:text-3xl text-care-navy tracking-tight">
                      Ready to Experience Award-Winning Care?
                    </h3>
                    <p className="text-care-gray-600 text-lg leading-relaxed">
                      Recognition is nice, but what truly matters is the peace of mind we bring 
                      to families every single day. Let us show you why thousands of families 
                      across the USA choose ArayoLight.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Link
                        href="/request-care"
                        className="btn-primary group"
                      >
                        Request Care
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/assessment"
                        className="text-care-gray-600 hover:text-care-red font-medium transition-colors inline-flex items-center gap-2 group"
                      >
                        Take the Assessment
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <section className="relative bg-care-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-care-blue/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10">
          <CTASection />
        </div>
      </section>
    </main>
  );
}
