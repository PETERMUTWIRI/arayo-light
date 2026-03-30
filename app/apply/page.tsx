'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Heart, ArrowRight, CheckCircle, User, Phone, Mail, Award, FileUp, Briefcase, FileText } from 'lucide-react';
import { submitCaregiverApplication, generateCVMailto } from '@/lib/whatsapp';

const experienceOptions = [
  { value: '', label: 'Select years of experience' },
  { value: '0-1', label: 'Less than 1 year' },
  { value: '1-2', label: '1-2 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
];

const serviceOptions = [
  'Homecare Services',
  'Medication Reminder',
  'Light Housekeeping',
  'Daily Living Assistance',
  'Companionship',
  'Specialized Care (Dementia/Alzheimer\'s)',
  'Post-Surgery Care',
  'Respite Care',
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    services: [] as string[],
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvUploadMethod, setCvUploadMethod] = useState<'upload' | 'email'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare services string
    const servicesString = formData.services.join(', ');

    // If CV is uploaded via email, open mailto first
    if (cvUploadMethod === 'email' || !cvFile) {
      const mailtoLink = generateCVMailto({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        recipientEmail: 'careers@arayolight.com',
      });
      window.open(mailtoLink, '_blank');
    }

    // Submit to WhatsApp
    submitCaregiverApplication({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      experience: formData.experience,
      services: servicesString,
      cvMethod: cvUploadMethod === 'email' || !cvFile ? 'email' : 'upload',
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
      setCvUploadMethod('upload');
    }
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
                Application Submitted!
              </h1>
              <p className="text-care-gray-500 mb-4">
                {cvUploadMethod === 'email' 
                  ? 'Please check your email client - we\'ve prepared a message for you to send your CV. Also, WhatsApp should open with your application details.'
                  : 'WhatsApp should open automatically with your application details. We\'ll review your application and get back to you soon.'}
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      experience: '',
                      services: [],
                    });
                    setCvFile(null);
                  }}
                  className="btn-primary w-full"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-hero pt-32">
      {/* Header */}
      <section className="py-16 md:py-20">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
              Apply to Be an ArayoLight Caregiver
            </h1>
            <p className="text-care-gray-500 text-lg">
              Join our team of compassionate caregivers. Fill out the form below and we&apos;ll connect with you via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="card-care p-6 md:p-10">
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

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label flex items-center gap-2">
                    <Mail className="w-4 h-4 text-care-gray-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="form-input"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="form-label flex items-center gap-2">
                    <Award className="w-4 h-4 text-care-gray-400" />
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {experienceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Services */}
                <div>
                  <label className="form-label flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4 text-care-gray-400" />
                    Services You Can Provide *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.services.includes(service)
                            ? 'border-care-red bg-care-red/5'
                            : 'border-care-gray-200 hover:border-care-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 text-care-red rounded border-care-gray-300 focus:ring-care-red"
                        />
                        <span className="text-sm text-care-navy">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CV Upload */}
                <div>
                  <label className="form-label flex items-center gap-2">
                    <FileUp className="w-4 h-4 text-care-gray-400" />
                    Upload Your CV/Resume *
                  </label>
                  
                  {/* Upload Method Selection */}
                  <div className="flex gap-4 mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="cvMethod"
                        checked={cvUploadMethod === 'upload'}
                        onChange={() => setCvUploadMethod('upload')}
                        className="text-care-red focus:ring-care-red"
                      />
                      <span className="text-sm text-care-navy">Upload File</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="cvMethod"
                        checked={cvUploadMethod === 'email'}
                        onChange={() => setCvUploadMethod('email')}
                        className="text-care-red focus:ring-care-red"
                      />
                      <span className="text-sm text-care-navy">Send via Email</span>
                    </label>
                  </div>

                  {cvUploadMethod === 'upload' ? (
                    <div className="space-y-3">
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-care-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-care-red hover:bg-care-red/5 transition-colors"
                      >
                        <FileText className="w-8 h-8 text-care-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-care-navy font-medium">
                          {cvFile ? cvFile.name : 'Click to upload your CV'}
                        </p>
                        <p className="text-xs text-care-gray-400 mt-1">
                          PDF, DOC, or DOCX (max 5MB)
                        </p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {cvFile && (
                        <p className="text-xs text-care-gray-500">
                          Note: File uploads require email submission. We&apos;ll open your email client.
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="bg-care-blue/5 rounded-xl p-4">
                      <p className="text-sm text-care-navy">
                        We&apos;ll open your email client after you submit the form so you can attach your CV.
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-care-gray-400 text-xs text-center">
                  By submitting, you agree to be contacted via WhatsApp and email about your application.
                </p>
              </form>
            </div>

            {/* Side Content with Images */}
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/caregiver-team.jpeg"
                  alt="ArayoLight professional caregiving team"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Benefits Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-care p-6">
                  <Heart className="w-8 h-8 text-care-red mb-3" />
                  <h3 className="font-heading text-care-navy mb-1">Why Join Us?</h3>
                  <p className="text-care-gray-500 text-sm">Competitive pay, flexible schedules, and ongoing training.</p>
                </div>
                <div className="card-care p-6">
                  <Award className="w-8 h-8 text-care-red mb-3" />
                  <h3 className="font-heading text-care-navy mb-1">Requirements</h3>
                  <p className="text-care-gray-500 text-sm">Background check, references, and passion for helping others.</p>
                </div>
              </div>

              {/* Training Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                <Image
                  src="/images/caregiver-training.jpeg"
                  alt="ArayoLight caregiver training program"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-care-navy/80 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">Comprehensive training provided</p>
                </div>
              </div>

              {/* Stats */}
              <div className="card-care p-6 bg-care-navy text-white">
                <h3 className="font-heading text-lg mb-4">Join 5,000+ ArayoLight Caregivers</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-heading text-2xl text-care-red">$25</p>
                    <p className="text-white/70 text-xs">Avg. Hourly Rate</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl text-care-red">Flexible</p>
                    <p className="text-white/70 text-xs">Scheduling</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl text-care-red">50</p>
                    <p className="text-white/70 text-xs">States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
