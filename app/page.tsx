import Link from 'next/link';
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
      <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
                Compassionate, reliable care for your loved ones in the comfort of their own home. 
                Serving families across all states with dedication and excellence.
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

            {/* Hero Image/Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main image placeholder */}
                <div className="relative rounded-3xl overflow-hidden bg-care-gray-100 aspect-[4/3] shadow-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-care-blue/20 to-care-red/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-care-red/10 flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-16 h-16 text-care-red" />
                      </div>
                      <p className="text-care-gray-500 font-medium">Compassionate Care</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating card - Experience */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-care-red flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-care-navy">20+</p>
                      <p className="text-care-gray-500 text-sm">Years Experience</p>
                    </div>
                  </div>
                </div>

                {/* Floating card - Support */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-care-blue flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-care-navy">24/7</p>
                      <p className="text-care-gray-500 text-sm">Support</p>
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

          {/* Services Grid - Inline to avoid Server->Client component prop issues */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Homecare Services */}
            <Link href="/request-care" className="card-care group block p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-care-red-50 flex items-center justify-center mb-6 group-hover:bg-care-red transition-colors">
                <Home className="w-7 h-7 text-care-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-care-navy group-hover:text-care-red transition-colors">
                Homecare Services
              </h3>
              <p className="text-care-gray-500 text-sm leading-relaxed mb-4">
                Comprehensive in-home care services tailored to meet the unique needs of each client, ensuring comfort and dignity.
              </p>
              <div className="flex items-center gap-2 text-care-red text-sm font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Medication Reminder */}
            <Link href="/request-care" className="card-care group block p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-care-red-50 flex items-center justify-center mb-6 group-hover:bg-care-red transition-colors">
                <Pill className="w-7 h-7 text-care-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-care-navy group-hover:text-care-red transition-colors">
                Medication Reminder
              </h3>
              <p className="text-care-gray-500 text-sm leading-relaxed mb-4">
                Timely medication reminders to ensure proper adherence to prescribed treatments and health schedules.
              </p>
              <div className="flex items-center gap-2 text-care-red text-sm font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Light Housekeeping */}
            <Link href="/request-care" className="card-care group block p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-care-red-50 flex items-center justify-center mb-6 group-hover:bg-care-red transition-colors">
                <Sparkles className="w-7 h-7 text-care-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-care-navy group-hover:text-care-red transition-colors">
                Light Housekeeping
              </h3>
              <p className="text-care-gray-500 text-sm leading-relaxed mb-4">
                Keeping the living space clean, organized, and safe with light housekeeping and maintenance tasks.
              </p>
              <div className="flex items-center gap-2 text-care-red text-sm font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Daily Living Assistance */}
            <Link href="/request-care" className="card-care group block p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-care-red-50 flex items-center justify-center mb-6 group-hover:bg-care-red transition-colors">
                <HandHeart className="w-7 h-7 text-care-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-care-navy group-hover:text-care-red transition-colors">
                Daily Living Assistance
              </h3>
              <p className="text-care-gray-500 text-sm leading-relaxed mb-4">
                Support with daily activities like bathing, dressing, meal preparation, and mobility assistance.
              </p>
              <div className="flex items-center gap-2 text-care-red text-sm font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Companionship */}
            <Link href="/request-care" className="card-care group block p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-care-red-50 flex items-center justify-center mb-6 group-hover:bg-care-red transition-colors">
                <UserCircle className="w-7 h-7 text-care-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-care-navy group-hover:text-care-red transition-colors">
                Companionship
              </h3>
              <p className="text-care-gray-500 text-sm leading-relaxed mb-4">
                Meaningful companionship and social engagement to prevent isolation and promote mental well-being.
              </p>
              <div className="flex items-center gap-2 text-care-red text-sm font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
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
              Getting started with our homecare services is easy. Three simple steps to quality care.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="card-care p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-care-red flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <CheckCircle className="w-8 h-8 text-white" />}
                    {index === 1 && <Users className="w-8 h-8 text-white" />}
                    {index === 2 && <Heart className="w-8 h-8 text-white" />}
                  </div>
                  <span className="text-care-red/30 font-heading text-5xl absolute top-4 right-4">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-xl text-care-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-care-gray-500 text-sm">
                    {step.description}
                  </p>
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-care-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gradient-care">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Trust Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
                Trusted Care for Over 20 Years
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We understand that choosing a caregiver for your loved one is one of the most 
                important decisions you&apos;ll make. That&apos;s why we&apos;ve built our reputation on 
                trust, compassion, and excellence in care.
              </p>
              
              {/* Trust indicators grid */}
              <div className="grid grid-cols-2 gap-6">
                {trustIndicators.map((indicator) => (
                  <div key={indicator.label} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                      <indicator.icon className="w-7 h-7 text-care-red" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-white">{indicator.value}</p>
                      <p className="text-white/70 text-sm">{indicator.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Visual */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white/5 p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-care-red flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-white mb-1">Licensed & Insured</h4>
                      <p className="text-white/70 text-sm">Fully licensed and insured for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-care-red flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-white mb-1">Background Checked</h4>
                      <p className="text-white/70 text-sm">All caregivers undergo thorough background checks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-care-red flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-white mb-1">Personalized Care Plans</h4>
                      <p className="text-white/70 text-sm">Tailored care plans to meet individual needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-care-red flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-white mb-1">Continuous Support</h4>
                      <p className="text-white/70 text-sm">24/7 support team always available to help.</p>
                    </div>
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
