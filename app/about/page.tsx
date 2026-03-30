import Image from 'next/image';
import { Heart, Shield, Users, Award, Clock, MapPin, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';

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
      <section className="bg-gradient-hero pt-32 pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6">
              Two Decades of{' '}
              <span className="text-care-red">Compassionate Care</span>
            </h1>
            <p className="text-care-gray-500 text-lg leading-relaxed">
              For over 20 years, ArayoLight has been a trusted partner for families seeking 
              quality homecare services. Our mission is simple: to help seniors and individuals 
              with care needs live with dignity, comfort, and independence in their own homes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl text-care-red mb-2">{stat.value}</p>
                <p className="text-care-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/10 text-care-blue text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Built on a Foundation of Care
              </h2>
              <div className="space-y-4 text-care-gray-500 leading-relaxed">
                <p>
                  ArayoLight was born from one woman&apos;s unwavering belief that aging with dignity 
                  isn&apos;t a privilege—it&apos;s a fundamental right. In 2004, Rahab Kinity, a registered 
                  nurse with over 25 years of clinical experience, founded ArayoLight after witnessing 
                  countless families struggle to find care that truly honored their loved ones. She 
                  saw patients discharged to environments that felt cold and institutional, and she 
                  knew there had to be a better way.
                </p>
                <p>
                  Rahab&apos;s passion stems from her deep-rooted conviction that healing happens best 
                  where love lives—at home. She built ArayoLight not as a business, but as a promise 
                  to every family: that their parents, their grandparents, their loved ones would 
                  receive the same level of care she would want for her own family. From hand-picking 
                  the first caregivers to personally training them in her philosophy of compassionate 
                  excellence, Rahab infused every aspect of the company with her clinical expertise 
                  and heartfelt dedication.
                </p>
                <p>
                  Today, that same spirit guides over 5,000 caregivers nationwide. What started as 
                  one nurse&apos;s vision has grown into a trusted network serving thousands of families 
                  across all 50 states—yet we remain deeply personal in our approach. Because at 
                  ArayoLight, we understand that behind every care plan is a human being deserving 
                  of respect, comfort, and the warmth of genuine connection.
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-story.jpeg"
                  alt="ArayoLight founders and early team"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Timeline Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-card max-w-xs">
                <h3 className="font-heading text-lg text-care-navy mb-4">Our Journey</h3>
                <div className="space-y-3">
                  {milestones.slice(0, 3).map((milestone) => (
                    <div key={milestone.year} className="flex gap-3">
                      <span className="font-heading text-care-red text-sm">{milestone.year}</span>
                      <p className="text-care-gray-500 text-xs">{milestone.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
              Enabling Dignified, Independent Living
            </h2>
            <p className="text-care-gray-500 text-lg leading-relaxed mb-8">
              Our mission is to enhance the quality of life for seniors and individuals with 
              care needs by providing compassionate, professional homecare services that promote 
              independence, dignity, and peace of mind for both clients and their families.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-care-gray-50 rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-care-red mb-3" />
                <h4 className="font-heading text-care-navy mb-2">For Clients</h4>
                <p className="text-care-gray-500 text-sm">Live comfortably and independently in your own home with personalized care.</p>
              </div>
              <div className="bg-care-gray-50 rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-care-red mb-3" />
                <h4 className="font-heading text-care-navy mb-2">For Families</h4>
                <p className="text-care-gray-500 text-sm">Peace of mind knowing your loved one is in caring, capable hands.</p>
              </div>
              <div className="bg-care-gray-50 rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-care-red mb-3" />
                <h4 className="font-heading text-care-navy mb-2">For Caregivers</h4>
                <p className="text-care-gray-500 text-sm">Meaningful work with competitive pay, flexible schedules, and growth opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/10 text-care-blue text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              Meet the ArayoLight Leadership
            </h2>
            <p className="text-care-gray-500">
              Dedicated professionals committed to delivering excellence in homecare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team-founder.jpeg"
                  alt="Founder & CEO of ArayoLight"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl text-care-navy">Rahab Kinity</h3>
              <p className="text-care-red text-sm mb-2">Founder & CEO</p>
              <p className="text-care-gray-500 text-sm">Registered Nurse with 25+ years of healthcare experience</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team-director.jpeg"
                  alt="Care Director at ArayoLight"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl text-care-navy">James Thompson</h3>
              <p className="text-care-red text-sm mb-2">Care Director</p>
              <p className="text-care-gray-500 text-sm">Expert in caregiver training and quality assurance</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team-operations.jpeg"
                  alt="Operations Manager at ArayoLight"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl text-care-navy">Maria Garcia</h3>
              <p className="text-care-red text-sm mb-2">Operations Manager</p>
              <p className="text-care-gray-500 text-sm">Ensuring seamless care coordination nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              What We Stand For
            </h2>
            <p className="text-care-gray-500">
              Our core values guide every decision we make and every interaction we have 
              with clients, families, and caregivers.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-care p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-care-red/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-care-red" />
                </div>
                <h3 className="font-heading text-lg text-care-navy mb-2">{value.title}</h3>
                <p className="text-care-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Coverage Image */}
              <div className="relative rounded-3xl overflow-hidden h-80">
                <Image
                  src="/images/nationwide-coverage.jpeg"
                  alt="ArayoLight nationwide coverage map - serving all US states"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Coverage Content */}
              <div className="card-care p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-care-red flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl text-care-navy">Nationwide Coverage</h2>
                    <p className="text-care-gray-500">Serving All States Across the USA</p>
                  </div>
                </div>
                <p className="text-care-gray-500 leading-relaxed mb-6">
                  No matter where you are in the United States, ArayoLight is ready to help. 
                  Our extensive network of caregivers spans all 50 states, ensuring that quality 
                  homecare is always within reach.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0" />
                    <span className="text-care-navy text-sm">All 50 states covered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0" />
                    <span className="text-care-navy text-sm">Urban & rural areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0" />
                    <span className="text-care-navy text-sm">Same-day service available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0" />
                    <span className="text-care-navy text-sm">Local caregivers assigned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
