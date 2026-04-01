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
  Star,
  Phone
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import TestimonialsSection from '@/components/TestimonialsSection';
import SectionBackground, { FloatingCard, SectionBadge, BlurredOrb } from '@/components/SectionBackground';
import StatCard from '@/components/StatCard';

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
    <div className="relative max-w-md mx-auto lg:max-w-none">
      <div className="relative">
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[4/3] shadow-floating border border-white/40">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-smooth ${
                index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
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
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-elevated transition-all hover:scale-105 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-care-navy" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-elevated transition-all hover:scale-105 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-care-navy" />
          </button>
          
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/60 hover:bg-white w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Stats Cards - Hidden on mobile */}
        <div className="hidden md:block absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 z-30">
          <StatCard
            icon={<Award className="w-5 h-5 lg:w-6 lg:h-6" />}
            value="20+"
            label="Years Experience"
            variant="glass"
            animate={false}
            className="shadow-floating"
          />
        </div>

        <div className="hidden md:block absolute -top-5 -right-4 lg:-top-8 lg:-right-8 z-30">
          <StatCard
            icon={<Clock className="w-5 h-5 lg:w-6 lg:h-6" />}
            value="24/7"
            label="Support"
            variant="glass"
            animate={false}
            className="shadow-floating"
          />
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
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Link href="/services" className="card-care group relative flex flex-col items-center justify-center overflow-hidden min-h-[320px] h-full">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
          <ArrowRight className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-heading text-xl mb-2 !text-white">View All Services</h3>
        <p className="text-white/80 text-sm text-center max-w-xs">
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
    <div className="bg-gradient-warm border-y border-care-gray-100 py-10 md:py-12 overflow-hidden">
      <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-care-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          Trusted by Leading Healthcare Organizations
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-care-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-care-cream to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {allPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-14 md:h-16 w-28 md:w-36 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
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
      {/* Hero Section - Full Width with Image Background */}
      <SectionBackground
        imageSrc="/images/hero-caregiver-senior.jpeg"
        imageAlt="Compassionate caregiver providing care to senior"
        overlay="white-light"
        className="relative"
      >
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-40" />
        <BlurredOrb color="blue" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-30" />
        
        <div className="pt-28 md:pt-32 lg:pt-40 pb-8 md:pb-16 lg:pb-24">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
              {/* Mobile: Carousel comes first (order-1), Desktop: Content first (lg:order-1) */}
              <FadeIn direction="up" delay={0.2} className="order-1 lg:order-2">
                <HeroCarousel />
              </FadeIn>

              {/* Mobile: Content comes second (order-2), Desktop: Content first */}
              <FadeIn direction="up" delay={0.1} className="order-2 lg:order-1">
                <div className="max-w-2xl">
                  <SectionBadge 
                    icon={<Heart className="w-4 h-4" />}
                    variant="red"
                    className="mb-3 md:mb-6 hidden md:inline-flex"
                  >
                    Professional Homecare Services
                  </SectionBadge>
                  
                  {/* Mobile: Centered title with line break; Desktop: Left aligned, no break */}
                  <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-care-navy leading-tight mb-3 md:mb-6 tracking-tight text-center lg:text-left">
                    <span className="text-care-red">Compassionate Care</span>
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    <span>for Your Loved Ones</span>
                  </h1>
                  
                  <p className="text-care-gray-600 text-base md:text-lg lg:text-xl mb-4 md:mb-8 leading-relaxed max-w-xl text-center lg:text-left">
                    ArayoLight provides professional, reliable homecare services that help seniors 
                    maintain independence and dignity in the comfort of their own homes. 
                    Serving families nationwide for over 20 years.
                  </p>
                  
                  {/* Mobile: Horizontal buttons centered; Desktop: Row layout */}
                  <div className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-8">
                    <Link
                      href="/request-care"
                      className="btn-primary text-sm md:text-base group flex-shrink-0"
                    >
                      Request Care
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/about"
                      className="text-care-gray-600 hover:text-care-red font-medium transition-colors inline-flex items-center gap-1 md:gap-2 group text-sm md:text-base whitespace-nowrap"
                    >
                      Learn More
                      <span className="hidden sm:inline">About Us</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="hidden md:flex flex-wrap items-center gap-3 md:gap-7">
                    <div className="flex items-center gap-2 text-care-gray-600 text-sm">
                      <CheckCircle className="w-5 h-5 text-care-red" />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2 text-care-gray-600 text-sm">
                      <CheckCircle className="w-5 h-5 text-care-red" />
                      <span>24/7 Availability</span>
                    </div>
                    <div className="flex items-center gap-2 text-care-gray-600 text-sm">
                      <CheckCircle className="w-5 h-5 text-care-red" />
                      <span>Background Checked</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Partner Logos Marquee */}
      <PartnerLogos />

      {/* Services Section - Enhanced with Image Background */}
      <SectionBackground
        imageSrc="/images/social-worker-taking-care-senior-woman.jpg"
        imageAlt="Social worker caring for senior"
        overlay="gradient"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <FadeIn>
                <SectionBadge 
                  icon={<Heart className="w-4 h-4" />}
                  variant="blue"
                  className="mb-6"
                >
                  Our Services
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5 tracking-tight text-center">
                  Comprehensive Care for Your Loved Ones
                </h2>
                <p className="text-care-gray-600 text-lg leading-relaxed">
                  We offer a wide range of homecare services designed to support independence 
                  while ensuring safety and comfort at home.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
              <StaggerItem>
                <Link href="/services#homecare" className="card-feature group block overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/service-homecare.jpeg"
                      alt="Professional homecare services - caregiver assisting senior at home"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-care-red/10 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors duration-300">
                      <Home className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                      Homecare Services
                    </h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Comprehensive in-home care services tailored to meet the unique needs of each client.
                    </p>
                  </div>
                </Link>
              </StaggerItem>

              <StaggerItem>
                <Link href="/services#medication" className="card-feature group block overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/service-medication.jpeg"
                      alt="Medication reminder service - caregiver helping with medication management"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-care-red/10 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors duration-300">
                      <Pill className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                      Medication Reminder
                    </h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Timely medication reminders to ensure proper adherence to prescribed treatments.
                    </p>
                  </div>
                </Link>
              </StaggerItem>

              <StaggerItem>
                <Link href="/services#housekeeping" className="card-feature group block overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/service-housekeeping.jpeg"
                      alt="Light housekeeping service - caregiver maintaining clean living space"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-care-red/10 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors duration-300">
                      <Sparkles className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                      Light Housekeeping
                    </h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Keeping the living space clean, organized, and safe with light housekeeping.
                    </p>
                  </div>
                </Link>
              </StaggerItem>

              <StaggerItem>
                <Link href="/services#daily-living" className="card-feature group block overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/service-daily-living.jpeg"
                      alt="Daily living assistance - caregiver helping senior with daily activities"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-care-red/10 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors duration-300">
                      <HandHeart className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                      Daily Living Assistance
                    </h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Support with bathing, dressing, meal preparation, and mobility assistance.
                    </p>
                  </div>
                </Link>
              </StaggerItem>

              <StaggerItem>
                <Link href="/services#companionship" className="card-feature group block overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/service-companionship.jpeg"
                      alt="Companionship service - caregiver and senior enjoying conversation"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-care-red/10 flex items-center justify-center mb-4 group-hover:bg-care-red transition-colors duration-300">
                      <UserCircle className="w-6 h-6 text-care-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl mb-2 text-care-navy group-hover:text-care-red transition-colors">
                      Companionship
                    </h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
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
        </div>
      </SectionBackground>

      {/* How It Works Section - Dark Navy Background with Glass Cards */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        {/* Background Image with Navy Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/step-3-care.jpeg"
            alt="Caregiver providing compassionate care"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-care-navy/85" />
        </div>
        
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="lg" className="top-0 right-1/4 -translate-y-1/2 opacity-30" />
        <BlurredOrb color="blue" size="xl" className="bottom-0 left-1/4 translate-y-1/2 opacity-20" />
        
        <div className="container-care mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn>
              <SectionBadge 
                icon={<Clock className="w-4 h-4" />}
                variant="white"
                className="mb-6"
              >
                Simple Process
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-5 tracking-tight drop-shadow-lg">
                How It Works
              </h2>
              <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
                Getting started with ArayoLight homecare services is easy. Three simple steps to quality care.
              </p>
            </FadeIn>
          </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <StaggerItem>
                <FloatingCard variant="glass" className="h-full text-center">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/step-1-submit.jpeg"
                      alt="Submit care request - family filling out form"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <span className="text-care-red/30 font-heading text-6xl absolute top-0 right-0 -translate-y-1/2">01</span>
                    <div className="w-14 h-14 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-3">Submit Request</h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Fill out our simple form or call us to tell us about your care needs.
                    </p>
                  </div>
                </FloatingCard>
              </StaggerItem>

              <StaggerItem>
                <FloatingCard variant="glass" className="h-full text-center">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/step-2-match.jpeg"
                      alt="Caregiver matching - professional team selecting the right caregiver"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <span className="text-care-red/30 font-heading text-6xl absolute top-0 right-0 -translate-y-1/2">02</span>
                    <div className="w-14 h-14 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-3">We Match You</h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Our team carefully matches you with a qualified, compassionate caregiver.
                    </p>
                  </div>
                </FloatingCard>
              </StaggerItem>

              <StaggerItem>
                <FloatingCard variant="glass" className="h-full text-center">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/step-3-care.jpeg"
                      alt="Care begins - caregiver providing in-home care to senior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <span className="text-care-red/30 font-heading text-6xl absolute top-0 right-0 -translate-y-1/2">03</span>
                    <div className="w-14 h-14 rounded-xl bg-care-red flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-care-navy mb-3">Care Begins</h3>
                    <p className="text-care-gray-600 text-sm leading-relaxed">
                      Your matched caregiver begins providing personalized care in your home.
                    </p>
                  </div>
                </FloatingCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
      </section>

      {/* Trust Section - Dark Navy with Orbs */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        {/* Decorative Orbs */}
        <BlurredOrb color="blue" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/2" />
        <BlurredOrb color="red" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/3 opacity-40" />
        
        <div className="container-care mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="text-center md:text-left">
                <SectionBadge 
                  icon={<Shield className="w-4 h-4" />}
                  variant="white"
                  className="mb-6"
                >
                  Why Choose ArayoLight
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl !text-white mb-6 tracking-tight">
                  Trusted Care for Over 20 Years
                </h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  We understand that choosing a caregiver for your loved one is one of the most 
                  important decisions you&apos;ll make. That&apos;s why ArayoLight has built its reputation on 
                  trust, compassion, and excellence in care.
                </p>
                
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {trustIndicators.map((indicator) => (
                    <div key={indicator.label} className="card-dark p-5 rounded-2xl hover:bg-white/5 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-care-red/20 flex items-center justify-center mb-4">
                        <indicator.icon className="w-6 h-6 text-care-red" />
                      </div>
                      <div>
                        <p className="font-heading text-2xl !text-white">{indicator.value}</p>
                        <p className="text-white/60 text-sm font-medium">{indicator.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-floating border border-white/10">
                  <Image
                    src="/images/trust-team.jpeg"
                    alt="ArayoLight professional caregiving team"
                    width={600}
                    height={500}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                
                {/* Floating CTA Card */}
                <div className="absolute -bottom-6 -left-6 lg:-left-10">
                  <FloatingCard variant="white" className="max-w-[200px]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-care-red/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-care-red" />
                      </div>
                      <div>
                        <p className="font-heading text-care-navy text-sm">Call Us Now</p>
                        <p className="text-care-gray-500 text-xs">Free Consultation</p>
                      </div>
                    </div>
                  </FloatingCard>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section - Image Background */}
      <SectionBackground
        imageSrc="/images/hero-caregiver-senior.jpeg"
        imageAlt="Compassionate caregiver with senior"
        overlay="navy"
        className="relative"
      >
        <div className="relative z-10">
          <CTASection />
        </div>
      </SectionBackground>
    </main>
  );
}
