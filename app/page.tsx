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
  ChevronRight,
  Star
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative mt-8 lg:mt-0">
      <div className="relative">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-white/20">
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
              {slide.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-care-navy/95 via-care-navy/70 to-transparent p-6 lg:p-8">
                  <div className="text-white">
                    <p className="font-heading text-xl lg:text-2xl mb-1">{slide.caption.name}</p>
                    <p className="text-care-red text-sm lg:text-base font-medium mb-2">{slide.caption.title}</p>
                    <p className="text-white/80 text-sm hidden lg:block">{slide.caption.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <button
            onClick={goToPrev}
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-care-navy" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-care-navy" />
          </button>
          
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/60 hover:bg-white w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-5 -left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-2xl p-4 lg:p-5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] z-30 border border-care-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-care-red flex items-center justify-center">
              <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <p className="font-heading text-xl lg:text-2xl text-care-navy">20+</p>
              <p className="text-care-gray-500 text-xs lg:text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="absolute -top-5 -right-4 lg:-top-8 lg:-right-8 bg-white rounded-2xl p-4 lg:p-5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] z-30 border border-care-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-care-blue flex items-center justify-center">
              <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <p className="font-heading text-xl lg:text-2xl text-care-navy">24/7</p>
              <p className="text-care-gray-500 text-xs lg:text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// View All Services Card with Image Carousel
function ViewAllServicesCard() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: '/images/service-homecare.jpeg', alt: 'Homecare services' },
    { src: '/images/service-medication.jpeg', alt: 'Medication reminder' },
    { src: '/images/service-housekeeping.jpeg', alt: 'Light housekeeping' },
    { src: '/images/service-daily-living.jpeg', alt: 'Daily living assistance' },
    { src: '/images/service-companionship.jpeg', alt: 'Companionship' },
    { src: '/images/hero-caregiver-senior.jpeg', alt: 'Caregiver with senior' },
    { src: '/images/team-founder.jpeg', alt: 'Our founder' },
    { src: '/images/social-worker-taking-care-senior-woman.jpg', alt: 'Social worker caring for senior' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Link href="/services" className="card-care group relative flex flex-col items-center justify-center overflow-hidden min-h-[320px]">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-care-navy/50 group-hover:bg-care-red/60 transition-colors duration-500" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <ArrowRight className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-heading text-xl mb-2 text-white">View All Services</h3>
        <p className="text-white/80 text-sm text-center">
          Explore our complete range of homecare solutions
        </p>
        
        <div className="flex items-center gap-1.5 mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'w-6 bg-white' 
                  : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

// Partner Logos Infinite Marquee
function PartnerLogos() {
  const partners = [
    { name: 'Access Home Health', logo: '/images/partners/Acess_home_health.png' },
    { name: 'Caring Hand Home', logo: '/images/partners/caring-hand-home.png' },
    { name: 'CMC', logo: '/images/partners/cmc-logo.png' },
    { name: 'Epic Home Care', logo: '/images/partners/epichomechare.png' },
    { name: 'The Joint Commission', logo: '/images/partners/the-joint-commission.png' },
  ];

  const allPartners = [...partners, ...partners];

  return (
    <div className="bg-white border-y border-care-gray-100 py-8 md:py-10 overflow-hidden">
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <p className="text-center text-care-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          Trusted by Leading Healthcare Organizations
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {allPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-14 md:h-16 w-28 md:w-36 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[auto] flex items-center bg-gradient-hero pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="up" delay={0.1}>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-5 border border-care-red/10">
                  <Heart className="w-4 h-4" />
                  <span>Trusted Homecare Services</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy leading-[1.1] mb-5">
                  <span className="text-care-red">ArayoLight</span>{' '}
                  Professional Homecare Services
                </h1>
                <p className="text-care-gray-500 text-lg md:text-xl mb-7 leading-relaxed max-w-xl">
                  ArayoLight provides compassionate, reliable care for your loved ones in the comfort 
                  of their own home. Serving families across all states with dedication and excellence 
                  for over 20 years.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-7">
                  <Link
                    href="/request-care"
                    className="btn-primary text-base"
                  >
                    Request Care
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/about"
                    className="text-care-gray-500 hover:text-care-red font-medium transition-colors inline-flex items-center gap-2 group"
                  >
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center gap-5 md:gap-7">
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
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <HeroCarousel />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <PartnerLogos />

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/social-worker-taking-care-senior-woman.jpg"
            alt="Social worker caring for senior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>
        <div className="container-care mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/8 text-care-blue text-sm font-semibold mb-4 border border-care-blue/10">
                <Heart className="w-4 h-4" />
                <span>Our Services</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
                Comprehensive Care for Your Loved Ones
              </h2>
              <p className="text-care-gray-500 text-lg">
                We offer a wide range of homecare services designed to support independence 
                while ensuring safety and comfort at home.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <Link href="/services#homecare" className="card-care group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/service-homecare.jpeg"
                    alt="Professional homecare services - caregiver assisting senior at home"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
            </StaggerItem>

            <StaggerItem>
              <Link href="/services#medication" className="card-care group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/service-medication.jpeg"
                    alt="Medication reminder service - caregiver helping with medication management"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
            </StaggerItem>

            <StaggerItem>
              <Link href="/services#housekeeping" className="card-care group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/service-housekeeping.jpeg"
                    alt="Light housekeeping service - caregiver maintaining clean living space"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
            </StaggerItem>

            <StaggerItem>
              <Link href="/services#daily-living" className="card-care group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/service-daily-living.jpeg"
                    alt="Daily living assistance - caregiver helping senior with daily activities"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
            </StaggerItem>

            <StaggerItem>
              <Link href="/services#companionship" className="card-care group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/service-companionship.jpeg"
                    alt="Companionship service - caregiver and senior enjoying conversation"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
            </StaggerItem>

            <StaggerItem>
              <ViewAllServicesCard />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-4 border border-care-red/10">
                <Clock className="w-4 h-4" />
                <span>Simple Process</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
                How It Works
              </h2>
              <p className="text-care-gray-500 text-lg">
                Getting started with ArayoLight homecare services is easy. Three simple steps to quality care.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <div className="relative">
                <div className="card-care overflow-hidden group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/step-1-submit.jpeg"
                      alt="Submit care request - family filling out form"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center relative">
                    <span className="text-care-red/20 font-heading text-5xl absolute top-3 right-4">01</span>
                    <div className="w-14 h-14 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white shadow-lg">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-2">Submit Request</h3>
                    <p className="text-care-gray-500 text-sm">
                      Fill out our simple form or call us to tell us about your care needs.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-care-gray-200" />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative">
                <div className="card-care overflow-hidden group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/step-2-match.jpeg"
                      alt="Caregiver matching - professional team selecting the right caregiver"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center relative">
                    <span className="text-care-red/20 font-heading text-5xl absolute top-3 right-4">02</span>
                    <div className="w-14 h-14 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-2">We Match You</h3>
                    <p className="text-care-gray-500 text-sm">
                      Our team carefully matches you with a qualified, compassionate caregiver.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-care-gray-200" />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative">
                <div className="card-care overflow-hidden group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/step-3-care.jpeg"
                      alt="Care begins - caregiver providing in-home care to senior"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center relative">
                    <span className="text-care-red/20 font-heading text-5xl absolute top-3 right-4">03</span>
                    <div className="w-14 h-14 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-2">Care Begins</h3>
                    <p className="text-care-gray-500 text-sm">
                      Your matched caregiver begins providing personalized care in your home.
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-care-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-care-red/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container-care mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/10">
                  <Shield className="w-4 h-4" />
                  <span>Why Choose ArayoLight</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                  Trusted Care for Over 20 Years
                </h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  We understand that choosing a caregiver for your loved one is one of the most 
                  important decisions you&apos;ll make. That&apos;s why ArayoLight has built its reputation on 
                  trust, compassion, and excellence in care.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {trustIndicators.map((indicator) => (
                    <div key={indicator.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-care-red/20 flex items-center justify-center">
                        <indicator.icon className="w-6 h-6 text-care-red" />
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-white">{indicator.value}</p>
                        <p className="text-white/60 text-sm font-medium">{indicator.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)] border border-white/10">
                  <Image
                    src="/images/trust-team.jpeg"
                    alt="ArayoLight professional caregiving team"
                    width={600}
                    height={500}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-4 border border-care-red/10">
                <Star className="w-4 h-4" />
                <span>Testimonials</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
                What Families Say About ArayoLight
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="card-care p-7 h-full">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-care-gray-500 leading-relaxed mb-6">
                  &ldquo;ArayoLight has been a blessing for our family. The caregiver is compassionate, 
                  reliable, and truly cares about my mother&apos;s well-being.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonial-1.jpeg"
                      alt="Happy family client"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-care-navy text-sm">Sarah Johnson</p>
                    <p className="text-care-gray-400 text-xs">HR Director, Meridian Health</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-care p-7 h-full">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-care-gray-500 leading-relaxed mb-6">
                  &ldquo;The peace of mind ArayoLight provides is priceless. Knowing my father is in 
                  good hands allows me to focus on my work without worry.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonial-2.jpeg"
                      alt="Satisfied family member"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-care-navy text-sm">Michael Chen</p>
                    <p className="text-care-gray-400 text-xs">Managing Partner, Chen & Associates</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-care p-7 h-full">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-care-gray-500 leading-relaxed mb-6">
                  &ldquo;Professional, caring, and responsive. ArayoLight exceeded our expectations 
                  in every way. Highly recommend their services!&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonial-3.jpeg"
                      alt="Grateful family member"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-care-navy text-sm">Emily Rodriguez</p>
                    <p className="text-care-gray-400 text-xs">VP Operations, Apex Solutions</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

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
