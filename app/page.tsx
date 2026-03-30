'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
  Award,
  ChevronLeft,
  ChevronRight
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

// Hero Carousel Component
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/hero-caregiver-senior.jpeg',
      alt: 'ArayoLight caregiver providing compassionate care to a senior at home',
      caption: null
    },
    {
      image: '/images/team-founder.jpeg',
      alt: 'Rahab Kinity, Founder & CEO of ArayoLight',
      caption: {
        name: 'Rahab Kinity',
        title: 'Founder & CEO',
        description: 'Registered Nurse with 25+ years of healthcare experience'
      }
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative mt-8 lg:mt-0">
      <div className="relative">
        {/* Main hero image carousel */}
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className={`object-cover ${slide.caption ? 'object-top' : ''}`}
                priority={index === 0}
              />
              {/* Caption overlay for founder slide */}
              {slide.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-care-navy/90 via-care-navy/60 to-transparent p-6 lg:p-8">
                  <div className="text-white">
                    <p className="font-heading text-xl lg:text-2xl mb-1">{slide.caption.name}</p>
                    <p className="text-care-red text-sm lg:text-base font-medium mb-2">{slide.caption.title}</p>
                    <p className="text-white/80 text-sm hidden lg:block">{slide.caption.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-care-navy" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-care-navy" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-care-red w-8' 
                    : 'bg-white/80 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Floating card - Experience */}
        <div className="absolute -bottom-4 -left-2 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-card z-30">
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
        <div className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-card z-30">
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
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[auto] flex items-center bg-gradient-hero pt-24 md:pt-28 pb-8 md:pb-12">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                <span>Trusted Homecare Services</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy leading-tight mb-4">
                <span className="text-care-red">Arayolight</span>{' '}
                Professional Homecare Services
              </h1>
              <p className="text-care-gray-500 text-base md:text-lg mb-6 leading-relaxed">
                ArayoLight provides compassionate, reliable care for your loved ones in the comfort 
                of their own home. Serving families across all states with dedication and excellence 
                for over 20 years.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <Link
                  href="/request-care"
                  className="btn-primary text-lg"
                >
                  Request Care
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="text-care-gray-500 hover:text-care-red font-medium transition-colors inline-flex items-center gap-2"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
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

            {/* Hero Image Carousel */}
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/social-worker-taking-care-senior-woman.jpg"
            alt="Social worker caring for senior"
            fill
            className="object-cover"
          />
          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="container-care mx-auto relative z-10">
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
            <Link href="/services#homecare" className="card-care group block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-homecare.jpeg"
                  alt="Professional homecare services - caregiver assisting senior at home"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
            <Link href="/services#medication" className="card-care group block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-medication.jpeg"
                  alt="Medication reminder service - caregiver helping with medication management"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
            <Link href="/services#housekeeping" className="card-care group block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-housekeeping.jpeg"
                  alt="Light housekeeping service - caregiver maintaining clean living space"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
            <Link href="/services#daily-living" className="card-care group block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-daily-living.jpeg"
                  alt="Daily living assistance - caregiver helping senior with daily activities"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
            <Link href="/services#companionship" className="card-care group block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-companionship.jpeg"
                  alt="Companionship service - caregiver and senior enjoying conversation"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
            <Link href="/services" className="card-care group flex flex-col items-center justify-center p-8 bg-care-navy text-white hover:bg-care-red transition-colors">
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
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/step-1-submit.jpeg"
                    alt="Submit care request - family filling out form"
                    fill
                    className="object-cover object-center"
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
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/step-2-match.jpeg"
                    alt="Caregiver matching - professional team selecting the right caregiver"
                    fill
                    className="object-cover object-center"
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
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/step-3-care.jpeg"
                    alt="Care begins - caregiver providing in-home care to senior"
                    fill
                    className="object-cover object-center"
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
                  className="object-cover object-top w-full h-full"
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
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-heading text-care-navy">Sarah Johnson</p>
                  <p className="text-care-gray-500 text-sm">HR Director, Meridian Health</p>
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
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-heading text-care-navy">Michael Chen</p>
                  <p className="text-care-gray-500 text-sm">Managing Partner, Chen & Associates</p>
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
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-heading text-care-navy">Emily Rodriguez</p>
                  <p className="text-care-gray-500 text-sm">VP Operations, Apex Solutions</p>
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
