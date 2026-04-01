'use client';

import Image from 'next/image';
import { Heart, Shield, Users, Award, Clock, MapPin, CheckCircle, Star, Target, Globe } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import SectionBackground, { FloatingCard, SectionBadge, BlurredOrb } from '@/components/SectionBackground';
import StatCard from '@/components/StatCard';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every client with genuine care, empathy, and understanding of their unique needs.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building lasting relationships through reliability, transparency, and consistent quality care.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards in caregiver training, screening, and service delivery.',
  },
  {
    icon: Users,
    title: 'Respect',
    description: 'Honoring the dignity and independence of every individual we serve.',
  },
];

const milestones = [
  { year: '2004', event: 'ArayoLight was founded with a mission to provide quality homecare' },
  { year: '2010', event: 'Expanded services to cover all 50 states' },
  { year: '2015', event: 'Reached 5,000 families served milestone' },
  { year: '2020', event: 'Launched specialized dementia and Alzheimer\'s care programs' },
  { year: '2024', event: 'Celebrated 20 years of compassionate care' },
];

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '10K+', label: 'Families Served' },
  { value: '5K+', label: 'Caregivers' },
  { value: '50', label: 'States Covered' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Image Background */}
      <SectionBackground
        imageSrc="/images/team-founder.jpeg"
        imageAlt="Rahab Kinity, Founder of ArayoLight"
        overlay="white-medium"
        className="relative"
      >
        <div className="pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <SectionBadge 
                  icon={<Heart className="w-4 h-4" />}
                  variant="red"
                  className="mb-6"
                >
                  About Us
                </SectionBadge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy mb-6 leading-tight tracking-tight">
                  Two Decades of{' '}
                  <span className="text-care-red">Compassionate Care</span>
                </h1>
                <p className="text-care-gray-600 text-lg md:text-xl leading-relaxed">
                  For over 20 years, ArayoLight has been a trusted partner for families seeking 
                  quality homecare services. Our mission is simple: to help seniors and individuals 
                  with care needs live with dignity, comfort, and independence in their own homes.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Stats Section - Floating Cards */}
      <section className="py-16 bg-gradient-lift relative -mt-8 z-10">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard
                  icon={stat.label.includes('Experience') ? <Award className="w-5 h-5 lg:w-6 lg:h-6" /> : stat.label.includes('Families') ? <Heart className="w-5 h-5 lg:w-6 lg:h-6" /> : stat.label.includes('Caregivers') ? <Users className="w-5 h-5 lg:w-6 lg:h-6" /> : <Globe className="w-5 h-5 lg:w-6 lg:h-6" />}
                  value={stat.value}
                  label={stat.label}
                  variant="white"
                  className="shadow-elevated"
                  animate={false}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story Section - Image Background with Glass Card */}
      <SectionBackground
        imageSrc="/images/about-story.jpeg"
        imageAlt="ArayoLight founders and early team"
        overlay="gradient"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <div>
                  <SectionBadge 
                    icon={<Clock className="w-4 h-4" />}
                    variant="blue"
                    className="mb-6"
                  >
                    Our Story
                  </SectionBadge>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6 leading-tight tracking-tight">
                    Built on a Foundation of Care
                  </h2>
                  <div className="space-y-5 text-care-gray-600 leading-relaxed text-lg">
                    <p>
                      ArayoLight was born from one woman&apos;s unwavering belief that aging with dignity 
                      isn&apos;t a privilege—it&apos;s a fundamental right. In 2004, Rahab Kinity, a registered 
                      nurse with over 25 years of clinical experience, founded ArayoLight after witnessing 
                      countless families struggle to find care that truly honored their loved ones.
                    </p>
                    <p>
                      Rahab&apos;s passion stems from her deep-rooted conviction that healing happens best 
                      where love lives—at home. She built ArayoLight not as a business, but as a promise 
                      to every family: that their parents, their grandparents, their loved ones would 
                      receive the same level of care she would want for her own family.
                    </p>
                    <p>
                      Today, that same spirit guides over 5,000 caregivers nationwide. What started as 
                      one nurse&apos;s vision has grown into a trusted network serving thousands of families 
                      across all 50 states.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.15}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-floating border border-white/40">
                    <Image
                      src="/images/hero-caregiver-senior.jpeg"
                      alt="Compassionate caregiver providing care"
                      width={600}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Floating Journey Card */}
                  <div className="absolute -bottom-8 -left-6 lg:-left-8 z-10">
                    <FloatingCard variant="dark" className="max-w-xs">
                      <h3 className="font-heading text-xl !text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-care-red" />
                        Our Journey
                      </h3>
                      <div className="space-y-3">
                        {milestones.slice(0, 3).map((milestone) => (
                          <div key={milestone.year} className="flex gap-3">
                            <span className="font-heading text-care-red text-base font-bold min-w-[48px]">{milestone.year}</span>
                            <p className="text-white/80 text-sm font-medium leading-snug">{milestone.event}</p>
                          </div>
                        ))}
                      </div>
                    </FloatingCard>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Mission Section - Light Background */}
      <section className="section-padding bg-white relative">
        <div className="container-care mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <SectionBadge 
                icon={<Target className="w-4 h-4" />}
                variant="red"
                className="mb-6"
              >
                Our Mission
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6 tracking-tight">
                Enabling Dignified, Independent Living
              </h2>
              <p className="text-care-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                Our mission is to enhance the quality of life for seniors and individuals with 
                care needs by providing compassionate, professional homecare services that promote 
                independence, dignity, and peace of mind for both clients and their families.
              </p>
            </FadeIn>
            
            <StaggerContainer className="grid sm:grid-cols-3 gap-6 text-left" staggerDelay={0.1}>
              <StaggerItem>
                <div className="bg-gradient-soft rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 hover:shadow-elevated transition-all duration-500 h-full">
                  <CheckCircle className="w-10 h-10 text-care-red mb-4" />
                  <h4 className="font-heading text-care-navy mb-2 text-lg">For Clients</h4>
                  <p className="text-care-gray-600">Live comfortably and independently in your own home with personalized care.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-gradient-soft rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 hover:shadow-elevated transition-all duration-500 h-full">
                  <Heart className="w-10 h-10 text-care-red mb-4" />
                  <h4 className="font-heading text-care-navy mb-2 text-lg">For Families</h4>
                  <p className="text-care-gray-600">Peace of mind knowing your loved one is in caring, capable hands.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-gradient-soft rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 hover:shadow-elevated transition-all duration-500 h-full">
                  <Award className="w-10 h-10 text-care-red mb-4" />
                  <h4 className="font-heading text-care-navy mb-2 text-lg">For Caregivers</h4>
                  <p className="text-care-gray-600">Meaningful work with competitive pay, flexible schedules, and growth opportunities.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Team Section - Image Background */}
      <SectionBackground
        imageSrc="/images/trust-team.jpeg"
        imageAlt="ArayoLight leadership team"
        overlay="gradient"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <FadeIn>
                <SectionBadge 
                  icon={<Users className="w-4 h-4" />}
                  variant="blue"
                  className="mb-6"
                >
                  Our Team
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5 tracking-tight">
                  Meet the ArayoLight Leadership
                </h2>
                <p className="text-care-gray-600 text-lg">
                  Dedicated professionals committed to delivering excellence in homecare.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.12}>
              <StaggerItem>
                <div className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-elevated border-4 border-white group-hover:shadow-elevated-hover group-hover:border-care-red/20 transition-all duration-500">
                    <Image
                      src="/images/team-founder.jpeg"
                      alt="Founder & CEO of ArayoLight"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy">Rahab Kinity</h3>
                  <p className="text-care-red text-sm mb-2 font-medium">Founder & CEO</p>
                  <p className="text-care-gray-600 text-sm max-w-xs mx-auto">Registered Nurse with 25+ years of healthcare experience</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-elevated border-4 border-white group-hover:shadow-elevated-hover group-hover:border-care-red/20 transition-all duration-500">
                    <Image
                      src="/images/team-director.jpeg"
                      alt="Care Director at ArayoLight"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy">James Thompson</h3>
                  <p className="text-care-red text-sm mb-2 font-medium">Care Director</p>
                  <p className="text-care-gray-600 text-sm max-w-xs mx-auto">Expert in caregiver training and quality assurance</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-elevated border-4 border-white group-hover:shadow-elevated-hover group-hover:border-care-red/20 transition-all duration-500">
                    <Image
                      src="/images/team-operations.jpeg"
                      alt="Operations Manager at ArayoLight"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy">Maria Garcia</h3>
                  <p className="text-care-red text-sm mb-2 font-medium">Operations Manager</p>
                  <p className="text-care-gray-600 text-sm max-w-xs mx-auto">Ensuring seamless care coordination nationwide</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </SectionBackground>

      {/* Values Section - Dark Navy with Orbs */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        {/* Decorative Orbs */}
        <BlurredOrb color="blue" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/2" />
        <BlurredOrb color="red" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/3 opacity-40" />
        
        <div className="container-care mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn>
              <SectionBadge 
                icon={<Award className="w-4 h-4" />}
                variant="white"
                className="mb-6"
              >
                Our Values
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl !text-white mb-5 tracking-tight">
                What We Stand For
              </h2>
              <p className="text-white/70 text-lg">
                Our core values guide every decision we make and every interaction we have 
                with clients, families, and caregivers.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-dark p-7 text-center h-full group hover:bg-white/5 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-xl bg-care-red/20 flex items-center justify-center mx-auto mb-5 border border-care-red/10 group-hover:bg-care-red/30 transition-colors">
                    <value.icon className="w-7 h-7 text-care-red" />
                  </div>
                  <h3 className="font-heading text-lg !text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coverage Section - Image Background */}
      <SectionBackground
        imageSrc="/images/nationwide-coverage.jpeg"
        imageAlt="ArayoLight nationwide coverage map"
        overlay="gradient"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <FadeIn direction="right">
                  <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-floating border border-white/40">
                    <Image
                      src="/images/nationwide-coverage.jpeg"
                      alt="ArayoLight nationwide coverage map - serving all US states"
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
                
                <FadeIn direction="left" delay={0.15}>
                  <FloatingCard variant="white" className="h-full">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-red flex items-center justify-center shadow-glow-red">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl text-care-navy">Nationwide Coverage</h2>
                        <p className="text-care-gray-500">Serving All States Across the USA</p>
                      </div>
                    </div>
                    <p className="text-care-gray-600 leading-relaxed mb-8 text-lg">
                      No matter where you are in the United States, ArayoLight is ready to help. 
                      Our extensive network of caregivers spans all 50 states, ensuring that quality 
                      homecare is always within reach.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        'All 50 states covered',
                        'Urban & rural areas',
                        'Same-day service available',
                        'Local caregivers assigned'
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-warm">
                          <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0" />
                          <span className="text-care-navy text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </FloatingCard>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
