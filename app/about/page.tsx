import Image from 'next/image';
import { Heart, Shield, Users, Award, Clock, MapPin, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

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
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-6 border border-care-red/10">
                <Heart className="w-4 h-4" />
                <span>About Us</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy mb-6 leading-[1.1]">
                Two Decades of{' '}
                <span className="text-care-red">Compassionate Care</span>
              </h1>
              <p className="text-care-gray-500 text-lg md:text-xl leading-relaxed">
                For over 20 years, ArayoLight has been a trusted partner for families seeking 
                quality homecare services. Our mission is simple: to help seniors and individuals 
                with care needs live with dignity, comfort, and independence in their own homes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-white border-y border-care-gray-100">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="font-heading text-4xl md:text-5xl text-care-red mb-2">{stat.value}</p>
                  <p className="text-care-gray-500 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/8 text-care-blue text-sm font-semibold mb-6 border border-care-blue/10">
                  <Clock className="w-4 h-4" />
                  <span>Our Story</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6 leading-[1.15]">
                  Built on a Foundation of Care
                </h2>
                <div className="space-y-5 text-care-gray-500 leading-relaxed text-lg">
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
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/images/about-story.jpeg"
                    alt="ArayoLight founders and early team"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-care-navy rounded-2xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.25)] max-w-xs border border-white/10">
                  <h3 className="font-heading text-xl text-white mb-4">Our Journey</h3>
                  <div className="space-y-3">
                    {milestones.slice(0, 3).map((milestone) => (
                      <div key={milestone.year} className="flex gap-3">
                        <span className="font-heading text-care-red text-base font-bold">{milestone.year}</span>
                        <p className="text-white/80 text-sm font-medium">{milestone.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-6 border border-care-red/10">
                <MapPin className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6">
                Enabling Dignified, Independent Living
              </h2>
              <p className="text-care-gray-500 text-lg md:text-xl leading-relaxed mb-10">
                Our mission is to enhance the quality of life for seniors and individuals with 
                care needs by providing compassionate, professional homecare services that promote 
                independence, dignity, and peace of mind for both clients and their families.
              </p>
            </FadeIn>
            
            <StaggerContainer className="grid sm:grid-cols-3 gap-6 text-left" staggerDelay={0.1}>
              <StaggerItem>
                <div className="bg-care-gray-50 rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 transition-colors">
                  <CheckCircle className="w-10 h-10 text-care-red mb-4" />
                  <h4 className="font-heading text-care-navy mb-2 text-lg">For Clients</h4>
                  <p className="text-care-gray-500">Live comfortably and independently in your own home with personalized care.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-care-gray-50 rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 transition-colors">
                  <CheckCircle className="w-10 h-10 text-care-red mb-4" />
                  <h4 className="font-heading text-care-navy mb-2 text-lg">For Families</h4>
                  <p className="text-care-gray-500">Peace of mind knowing your loved one is in caring, capable hands.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-care-gray-50 rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 transition-colors">
                  <CheckCircle className="w-10 h-10 text-care-red mb-4" />
                  <h4 className="font-heading text-care-navy mb-2 text-lg">For Caregivers</h4>
                  <p className="text-care-gray-500">Meaningful work with competitive pay, flexible schedules, and growth opportunities.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/8 text-care-blue text-sm font-semibold mb-4 border border-care-blue/10">
                <Users className="w-4 h-4" />
                <span>Our Team</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
                Meet the ArayoLight Leadership
              </h2>
              <p className="text-care-gray-500 text-lg">
                Dedicated professionals committed to delivering excellence in homecare.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.12}>
            <StaggerItem>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.12)] border-4 border-white">
                  <Image
                    src="/images/team-founder.jpeg"
                    alt="Founder & CEO of ArayoLight"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-xl text-care-navy">Rahab Kinity</h3>
                <p className="text-care-red text-sm mb-2 font-medium">Founder & CEO</p>
                <p className="text-care-gray-500 text-sm">Registered Nurse with 25+ years of healthcare experience</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.12)] border-4 border-white">
                  <Image
                    src="/images/team-director.jpeg"
                    alt="Care Director at ArayoLight"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-xl text-care-navy">James Thompson</h3>
                <p className="text-care-red text-sm mb-2 font-medium">Care Director</p>
                <p className="text-care-gray-500 text-sm">Expert in caregiver training and quality assurance</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.12)] border-4 border-white">
                  <Image
                    src="/images/team-operations.jpeg"
                    alt="Operations Manager at ArayoLight"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-xl text-care-navy">Maria Garcia</h3>
                <p className="text-care-red text-sm mb-2 font-medium">Operations Manager</p>
                <p className="text-care-gray-500 text-sm">Ensuring seamless care coordination nationwide</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-4 border border-care-red/10">
                <Award className="w-4 h-4" />
                <span>Our Values</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
                What We Stand For
              </h2>
              <p className="text-care-gray-500 text-lg">
                Our core values guide every decision we make and every interaction we have 
                with clients, families, and caregivers.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-care p-7 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-care-red/8 flex items-center justify-center mx-auto mb-5 border border-care-red/10">
                    <value.icon className="w-7 h-7 text-care-red" />
                  </div>
                  <h3 className="font-heading text-lg text-care-navy mb-2">{value.title}</h3>
                  <p className="text-care-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/images/nationwide-coverage.jpeg"
                    alt="ArayoLight nationwide coverage map - serving all US states"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.15}>
                <div className="card-care p-8 md:p-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-care-red flex items-center justify-center shadow-[0_8px_30px_rgba(198,40,40,0.25)]">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl text-care-navy">Nationwide Coverage</h2>
                      <p className="text-care-gray-500">Serving All States Across the USA</p>
                    </div>
                  </div>
                  <p className="text-care-gray-500 leading-relaxed mb-8 text-lg">
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
                      <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-care-gray-50">
                        <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0" />
                        <span className="text-care-navy text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
