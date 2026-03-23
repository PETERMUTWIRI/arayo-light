import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Home, 
  Pill, 
  Sparkles, 
  HandHeart, 
  UserCircle,
  ArrowRight,
  CheckCircle,
  MapPin,
  Award
} from 'lucide-react';
import CTASection from '@/components/CTASection';

// How it works steps
const steps = [
  {
    number: '01',
    title: 'Submit Request',
    description: 'Fill out our simple form or call us to tell us about your care needs.',
  },
  {
    number: '02',
    title: 'We Match You',
    description: 'Our team carefully matches you with a qualified, compassionate caregiver.',
  },
  {
    number: '03',
    title: 'Care Begins',
    description: 'Your matched caregiver begins providing personalized care in your home.',
  },
];

// Trust indicators
const trustIndicators = [
  { icon: MapPin, label: 'Serving All States', value: 'USA' },
  { icon: Award, label: 'Years Experience', value: '20+' },
  { icon: Users, label: 'Families Served', value: '10K+' },
  { icon: Shield, label: 'Screened Caregivers', value: '100%' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[auto] lg:min-h-screen flex items-center bg-gradient-hero pt-16 md:pt-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Trusted Homecare Services</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy leading-tight mb-6">
                Professional Homecare Services{' '}
                <span className="text-care-red">You Can Trust</span>
              </h1>
              <p className="text-care-gray-500 text-lg md:text-xl mb-8 leading-relaxed">
                ArayoLight provides compassionate, reliable care for your loved ones in the comfort 
                of their own home. Serving families across all states with dedication and excellence 
                for over 20 years.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                <Link
                  href="/request-care"
                  className="btn-primary text-lg"
                >
                  Request Care
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/apply"
                  className="btn-outline"
                >
                  Apply as Caregiver
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-care-gray-500 text-sm">
                  <CheckCircle className="w-5 h-5 text-care-red" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-care-gray-500 text-sm">
                  <CheckCircle className="w-5 h-5 text-care-red" />
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2 text-care-gray-500 text-sm">
                  <CheckCircle className="w-5 h-5 text-care-red" />
                  <span>Background Checked</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative">
                {/* Main hero image - caregiver with senior */}
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
                  <Image
                    src="/images/hero-caregiver-senior.jpeg"
                    alt="ArayoLight caregiver providing compassionate care to a senior at home"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating card - Experience */}
                <div className="absolute -bottom-4 -left-2 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-card">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-care-red flex items-center justify-center">
                      <Award className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading text-lg lg:text-2xl text-care-navy">20+</p>
                      <p className="text-care-gray-500 text-xs lg:text-sm">Years Experience</p>
                    </div>
                  </div>
                </div>

                {/* Floating card - Support */}
                <div className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-card">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-care-blue flex items-center justify-center">
                      <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading text-lg lg:text-2xl text-care-navy">24/7</p>
                      <p className="text-care-gray-500 text-xs lg:text-sm">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/10 text-care-blue text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Our Services
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              Comprehensive Care for Your Loved Ones
            </h2>
            <p className="text-care-gray-500">
              We offer a wide range of homecare services designed to support independence 
              while ensuring safety and comfort at home.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Homecare Services */}
            <Link href="/request-care" className="card-care group block overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/service-homecare.jpeg"
                  alt="Professional homecare services - caregiver assisting senior at home"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-care-red-50 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors">
                  <Home className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                  Homecare Services
                </h3>
                <p className="text-care-gray-500 text-sm leading-relaxed">
                  Comprehensive in-home care services tailored to meet the unique needs of each client.
                </p>
              </div>
            </Link>

            {/* Medication Reminder */}
            <Link href="/request-care" className="card-care group block overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/service-medication.jpeg"
                  alt="Medication reminder service - caregiver helping with medication management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-care-red-50 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors">
                  <Pill className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                  Medication Reminder
                </h3>
                <p className="text-care-gray-500 text-sm leading-relaxed">
                  Timely medication reminders to ensure proper adherence to prescribed treatments.
                </p>
              </div>
            </Link>

            {/* Light Housekeeping */}
            <Link href="/request-care" className="card-care group block overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/service-housekeeping.jpeg"
                  alt="Light housekeeping service - caregiver maintaining clean living space"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-care-red-50 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors">
                  <Sparkles className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                  Light Housekeeping
                </h3>
                <p className="text-care-gray-500 text-sm leading-relaxed">
                  Keeping the living space clean, organized, and safe with light housekeeping.
                </p>
              </div>
            </Link>

            {/* Daily Living Assistance */}
            <Link href="/request-care" className="card-care group block overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/service-daily-living.jpeg"
                  alt="Daily living assistance - caregiver helping senior with daily activities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-care-red-50 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors">
                  <HandHeart className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                  Daily Living Assistance
                </h3>
                <p className="text-care-gray-500 text-sm leading-relaxed">
                  Support with bathing, dressing, meal preparation, and mobility assistance.
                </p>
              </div>
            </Link>

            {/* Companionship */}
            <Link href="/request-care" className="card-care group block overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/service-companionship.jpeg"
                  alt="Companionship service - caregiver and senior enjoying conversation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-care-red-50 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors">
                  <UserCircle className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                  Companionship
                </h3>
                <p className="text-care-gray-500 text-sm leading-relaxed">
                  Meaningful companionship and social engagement to prevent isolation.
                </p>
              </div>
            </Link>

            {/* View All Services Card */}
            <Link href="/request-care" className="card-care group flex flex-col items-center justify-center p-8 bg-care-navy text-white hover:bg-care-red transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl mb-2">View All Services</h3>
              <p className="text-white/70 text-sm text-center">
                Explore our complete range of homecare solutions
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Simple Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              How It Works
            </h2>
            <p className="text-care-gray-500">
              Getting started with ArayoLight homecare services is easy. Three simple steps to quality care.
            </p>
          </div>

          {/* Steps with Images */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="card-care overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/step-1-submit.jpeg"
                    alt="Submit care request - family filling out form"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="text-care-red/30 font-heading text-4xl absolute top-4 right-4">01</span>
                  <div className="w-12 h-12 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy mb-2">Submit Request</h3>
                  <p className="text-care-gray-500 text-sm">
                    Fill out our simple form or call us to tell us about your care needs.
                  </p>
                </div>
              </div>
              {steps.length > 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-care-gray-200" />
              )}
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="card-care overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/step-2-match.jpeg"
                    alt="Caregiver matching - professional team selecting the right caregiver"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="text-care-red/30 font-heading text-4xl absolute top-4 right-4">02</span>
                  <div className="w-12 h-12 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy mb-2">We Match You</h3>
                  <p className="text-care-gray-500 text-sm">
                    Our team carefully matches you with a qualified, compassionate caregiver.
                  </p>
                </div>
              </div>
              {steps.length > 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-care-gray-200" />
              )}
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="card-care overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/step-3-care.jpeg"
                    alt="Care begins - caregiver providing in-home care to senior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="text-care-red/30 font-heading text-4xl absolute top-4 right-4">03</span>
                  <div className="w-12 h-12 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy mb-2">Care Begins</h3>
                  <p className="text-care-gray-500 text-sm">
                    Your matched caregiver begins providing personalized care in your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Trust Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Why Choose ArayoLight
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Trusted Care for Over 20 Years
              </h2>
              <p className="text-care-gray-500 text-lg mb-8 leading-relaxed">
                We understand that choosing a caregiver for your loved one is one of the most 
                important decisions you&apos;ll make. That&apos;s why ArayoLight has built its reputation on 
                trust, compassion, and excellence in care.
              </p>
              
              {/* Trust indicators grid */}
              <div className="grid grid-cols-2 gap-6">
                {trustIndicators.map((indicator) => (
                  <div key={indicator.label} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-care-red/10 flex items-center justify-center">
                      <indicator.icon className="w-7 h-7 text-care-red" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-care-navy">{indicator.value}</p>
                      <p className="text-care-gray-500 text-sm">{indicator.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/trust-team.jpeg"
                  alt="ArayoLight professional caregiving team"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              What Families Say About ArayoLight
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card-care p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-1.jpeg"
                    alt="Happy family client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-care-navy">Sarah Johnson</p>
                  <p className="text-care-gray-500 text-sm">Daughter of Client</p>
                </div>
              </div>
              <p className="text-care-gray-500 text-sm italic">
                &ldquo;ArayoLight has been a blessing for our family. The caregiver is compassionate, 
                reliable, and truly cares about my mother&apos;s well-being.&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card-care p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-2.jpeg"
                    alt="Satisfied family member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-care-navy">Michael Chen</p>
                  <p className="text-care-gray-500 text-sm">Son of Client</p>
                </div>
              </div>
              <p className="text-care-gray-500 text-sm italic">
                &ldquo;The peace of mind ArayoLight provides is priceless. Knowing my father is in 
                good hands allows me to focus on my work without worry.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card-care p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-3.jpeg"
                    alt="Grateful family member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-care-navy">Emily Rodriguez</p>
                  <p className="text-care-gray-500 text-sm">Daughter of Client</p>
                </div>
              </div>
              <p className="text-care-gray-500 text-sm italic">
                &ldquo;Professional, caring, and responsive. ArayoLight exceeded our expectations 
                in every way. Highly recommend their services!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
