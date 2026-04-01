'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, ArrowRight, CheckCircle, MapPin, Clock, User, Phone, FileText, Calendar } from 'lucide-react';
import { submitClientRequest } from '@/lib/whatsapp';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import SectionBackground, { SectionBadge, FloatingCard, BlurredOrb } from '@/components/SectionBackground';
import StatCard from '@/components/StatCard';

const careTypes = [
  { value: '', label: 'Select type of care needed' },
  { value: 'Homecare Services', label: 'Homecare Services' },
  { value: 'Medication Reminder', label: 'Medication Reminder' },
  { value: 'Light Housekeeping', label: 'Light Housekeeping' },
  { value: 'Daily Living Assistance', label: 'Daily Living Assistance' },
  { value: 'Companionship', label: 'Companionship' },
  { value: 'Multiple Services', label: 'Multiple Services' },
];

const durationOptions = [
  { value: '', label: 'Select duration' },
  { value: 'A few hours', label: 'A few hours' },
  { value: 'Part-time (few days/week)', label: 'Part-time (few days/week)' },
  { value: 'Full-time (daily)', label: 'Full-time (daily)' },
  { value: '24/7 Live-in care', label: '24/7 Live-in care' },
  { value: 'Not sure yet', label: 'Not sure yet' },
];

export default function RequestCarePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    serviceType: '',
    duration: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submit to WhatsApp
    submitClientRequest({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      serviceType: formData.serviceType,
      duration: formData.duration,
      notes: formData.notes,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-hero pt-32">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="card-care p-8 md:p-12">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-heading text-2xl md:text-3xl text-care-navy mb-4">
                WhatsApp Opening...
              </h1>
              <p className="text-care-gray-500 mb-6">
                We&apos;ve prepared your care request. WhatsApp should open automatically with your details.
                If it doesn&apos;t open, please check your browser settings or contact us directly.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary w-full"
                >
                  Submit Another Request
                </button>
                <a
                  href="tel:+19194498913"
                  className="btn-outline w-full"
                >
                  Call Us Instead
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Image Background */}
      <SectionBackground
        imageSrc="/images/hero-caregiver-senior.jpeg"
        imageAlt="Compassionate caregiver providing care to senior"
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
                  icon={<Heart className="w-4 h-4" />}
                  variant="red"
                  className="mb-6"
                >
                  Request Care
                </SectionBadge>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5 leading-tight tracking-tight">
                  Get the Care Your Loved One Deserves
                </h1>
                <p className="text-care-gray-600 text-lg md:text-xl">
                  Fill out the form below and we&apos;ll connect with you via WhatsApp to discuss your care needs.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Form Section */}
      <section className="pb-16 md:pb-24 bg-gradient-lift">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <FadeIn direction="up">
              <div className="card-feature p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label flex items-center gap-2">
                      <User className="w-4 h-4 text-care-gray-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="form-input"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label flex items-center gap-2">
                      <Phone className="w-4 h-4 text-care-gray-400" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="form-input"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="form-label flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-care-gray-400" />
                      Location (City, State) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Los Angeles, CA"
                      className="form-input"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="form-label flex items-center gap-2">
                      <Heart className="w-4 h-4 text-care-gray-400" />
                      Type of Care Needed *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {careTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Duration */}
                  <div>
                    <label htmlFor="duration" className="form-label flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-care-gray-400" />
                      Duration of Care Needed *
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      required
                      value={formData.duration}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {durationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="form-label flex items-center gap-2">
                      <FileText className="w-4 h-4 text-care-gray-400" />
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us more about your care needs, preferred schedule, or any special requirements..."
                      className="form-textarea"
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Request via WhatsApp
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-care-gray-400 text-xs text-center">
                    By submitting, you agree to be contacted via WhatsApp about your care request.
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* Side Content with Images */}
            <div className="space-y-6">
              {/* Image */}
              <FadeIn direction="up" delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-elevated">
                  <Image
                    src="/images/request-care-hero.jpeg"
                    alt="Compassionate caregiver providing care to senior"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </FadeIn>

              {/* Info Cards */}
              <FadeIn direction="up" delay={0.15}>
                <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="card-care p-6 hover:shadow-elevated transition-shadow">
                      <Clock className="w-8 h-8 text-care-red mb-3" />
                      <h3 className="font-heading text-care-navy mb-1">Quick Response</h3>
                      <p className="text-care-gray-500 text-sm">We typically respond within 30 minutes during business hours.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="card-care p-6 hover:shadow-elevated transition-shadow">
                      <Heart className="w-8 h-8 text-care-red mb-3" />
                      <h3 className="font-heading text-care-navy mb-1">No Obligation</h3>
                      <p className="text-care-gray-500 text-sm">Free consultation to discuss your care needs.</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </FadeIn>

              {/* Trust Image */}
              <FadeIn direction="up" delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-elevated">
                  <Image
                    src="/images/caregiver-family.jpeg"
                    alt="ArayoLight caregiver with happy family"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-care-navy/80 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">Trusted by 10,000+ families nationwide</p>
                  </div>
                </div>
              </FadeIn>

              {/* Quick Stats */}
              <FadeIn direction="up" delay={0.25}>
                <div className="grid grid-cols-3 gap-4">
                  <StatCard
                    icon={<Clock className="w-5 h-5" />}
                    value="30min"
                    label="Response"
                    variant="glass"
                    animate={false}
                    className="text-center"
                  />
                  <StatCard
                    icon={<Heart className="w-5 h-5" />}
                    value="10K+"
                    label="Families"
                    variant="glass"
                    animate={false}
                    className="text-center"
                  />
                  <StatCard
                    icon={<MapPin className="w-5 h-5" />}
                    value="50"
                    label="States"
                    variant="glass"
                    animate={false}
                    className="text-center"
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
