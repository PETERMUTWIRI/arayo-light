'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  MinusCircle,
  Home,
  Building2,
  Stethoscope,
  DollarSign,
  Users,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import SectionBackground, { SectionBadge, FloatingCard, BlurredOrb } from '@/components/SectionBackground';

const comparisonCriteria = [
  { key: 'cost', label: 'Average Monthly Cost', icon: DollarSign },
  { key: 'independence', label: 'Independence Level', icon: Sparkles },
  { key: 'personalization', label: 'Personalized Care', icon: Heart },
  { key: 'family', label: 'Family Involvement', icon: Users },
  { key: 'environment', label: 'Living Environment', icon: Home },
  { key: 'medical', label: 'Medical Care Level', icon: Stethoscope },
  { key: 'social', label: 'Social Opportunities', icon: MapPin },
  { key: 'flexibility', label: 'Schedule Flexibility', icon: Clock },
];

const options = [
  {
    id: 'in-home',
    name: 'In-Home Care\n(ArayoLight)',
    color: 'care-red',
    highlight: true,
    values: {
      cost: '$4,500 – $6,500',
      independence: 'Highest',
      personalization: 'One-on-one',
      family: 'High',
      environment: 'Familiar home',
      medical: 'Non-medical to skilled',
      social: 'Family + caregiver',
      flexibility: '24/7 available',
    },
  },
  {
    id: 'assisted',
    name: 'Assisted Living',
    color: 'care-blue',
    highlight: false,
    values: {
      cost: '$4,500 – $8,000',
      independence: 'Moderate',
      personalization: 'Group setting',
      family: 'Moderate',
      environment: 'Community facility',
      medical: 'Basic support',
      social: 'Built-in community',
      flexibility: 'Fixed schedules',
    },
  },
  {
    id: 'nursing',
    name: 'Nursing Home',
    color: 'care-navy',
    highlight: false,
    values: {
      cost: '$7,500 – $10,000+',
      independence: 'Lowest',
      personalization: 'Staff-to-patient ratio',
      family: 'Limited',
      environment: 'Clinical setting',
      medical: 'Full medical care',
      social: 'Group activities',
      flexibility: 'Institutional routine',
    },
  },
];

function getCellContent(optionId: string, value: string) {
  const positiveForInHome = ['Highest', 'One-on-one', 'High', 'Familiar home', '24/7 available'];
  const negativeForOthers = ['Lowest', 'Limited', 'Institutional routine', 'Clinical setting'];
  
  const isPositive = optionId === 'in-home' && positiveForInHome.includes(value);
  const isNegative = optionId !== 'in-home' && negativeForOthers.includes(value);
  
  return { isPositive, isNegative, value };
}

function CheckIcon() {
  return <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />;
}

function CrossIcon() {
  return <XCircle className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />;
}

function NeutralIcon() {
  return <MinusCircle className="w-5 h-5 text-care-gray-400 flex-shrink-0 mt-0.5" />;
}

const whenToChoose = [
  {
    id: 'in-home',
    title: 'Choose In-Home Care When...',
    color: 'bg-care-red',
    points: [
      'Your loved one wants to stay in their familiar home environment',
      'They need personalized, one-on-one attention',
      'Family wants to remain actively involved in daily care decisions',
      'Cost flexibility and schedule customization are priorities',
      'The care needed is non-medical or intermittent skilled care',
    ],
  },
  {
    id: 'assisted',
    title: 'Choose Assisted Living When...',
    color: 'bg-care-blue',
    points: [
      'Your loved one is largely independent but needs help with some ADLs',
      'Social isolation at home is a growing concern',
      'Home maintenance and meal preparation have become overwhelming',
      'They can benefit from organized activities and community dining',
      'Family cannot provide regular supervision or safety checks',
    ],
  },
  {
    id: 'nursing',
    title: 'Choose Nursing Home When...',
    color: 'bg-care-navy',
    points: [
      'Complex medical needs require 24/7 skilled nursing supervision',
      'Rehabilitation or post-surgical recovery is needed long-term',
      'Safety concerns at home cannot be resolved with in-home care',
      'Significant mobility limitations require specialized equipment',
      'Multiple chronic conditions need coordinated clinical management',
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero - Image Background */}
      <SectionBackground
        imageSrc="/images/hero-caregiver-senior.jpeg"
        imageAlt="Caregiver comparing care options with family"
        overlay="white-light"
        className="relative"
      >
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-30" />
        <BlurredOrb color="blue" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-20" />
        
        <div className="pt-20 md:pt-32 lg:pt-40 pb-8 md:pb-16 lg:pb-24">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <SectionBadge 
                  icon={<Heart className="w-4 h-4" />}
                  variant="red"
                  className="mb-3 md:mb-6"
                >
                  Family Resources
                </SectionBadge>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-care-navy mb-6 leading-tight tracking-tight">
                  Compare Your{' '}
                  <span className="text-care-red">Care Options</span>
                </h1>
                <p className="text-care-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  Choosing the right care for a loved one is one of the most important decisions a family can make. 
                  We&apos;ve broken down the key differences so you can decide with confidence.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Comparison Table - Gradient Background */}
      <section className="section-padding bg-gradient-lift relative">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
              <SectionBadge 
                icon={<Sparkles className="w-4 h-4" />}
                variant="blue"
                className="mb-3 md:mb-6"
              >
                Side-by-Side Comparison
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4 tracking-tight">
                See How ArayoLight Compares
              </h2>
              <p className="text-care-gray-600 text-lg">
                See how ArayoLight in-home care stacks up against assisted living and nursing homes.
              </p>
            </div>
          </FadeIn>

          {/* Desktop Table */}
          <FadeIn delay={0.1}>
            <div className="hidden lg:block rounded-3xl border border-care-gray-200 overflow-hidden shadow-elevated bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-warm">
                    <th className="p-6 text-sm font-semibold text-care-gray-500 uppercase tracking-wider w-1/4">
                      Criteria
                    </th>
                    {options.map((option) => (
                      <th 
                        key={option.id} 
                        className={`p-6 text-lg font-heading w-1/4 ${option.highlight ? 'bg-care-red/5' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${option.highlight ? 'bg-care-red text-white' : 'bg-care-gray-100 text-care-navy'}`}>
                            {option.id === 'in-home' && <Home className="w-5 h-5" />}
                            {option.id === 'assisted' && <Building2 className="w-5 h-5" />}
                            {option.id === 'nursing' && <Stethoscope className="w-5 h-5" />}
                          </div>
                          <span className={option.highlight ? 'text-care-red' : 'text-care-navy'}>
                            {option.name.split('\n').map((line, i) => (
                              <span key={i} className="block">{line}</span>
                            ))}
                          </span>
                        </div>
                        {option.highlight && (
                          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gradient-red text-white text-xs font-semibold">
                            Recommended
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonCriteria.map((criterion, idx) => (
                    <tr key={criterion.key} className={idx % 2 === 1 ? 'bg-care-gray-50/50' : 'bg-white'}>
                      <td className="p-6 font-medium text-care-navy border-t border-care-gray-100">
                        <div className="flex items-center gap-3">
                          <criterion.icon className="w-5 h-5 text-care-gray-400" />
                          {criterion.label}
                        </div>
                      </td>
                      {options.map((option) => {
                        const { isPositive, isNegative, value } = getCellContent(option.id, option.values[criterion.key as keyof typeof option.values]);
                        return (
                          <td 
                            key={option.id} 
                            className={`p-6 border-t border-care-gray-100 ${option.highlight ? 'bg-care-red/[0.02]' : ''}`}
                          >
                            <div className="flex items-start gap-3">
                              {isPositive ? <CheckIcon /> : isNegative ? <CrossIcon /> : <NeutralIcon />}
                              <span className={`font-medium ${isPositive ? 'text-care-navy' : isNegative ? 'text-care-gray-500' : 'text-care-gray-500'}`}>
                                {value}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-8">
            {options.map((option) => (
              <FadeIn key={option.id} delay={0.1}>
                <div className={`rounded-3xl border overflow-hidden ${option.highlight ? 'border-care-red/20 shadow-elevated' : 'border-care-gray-200 shadow-soft'} bg-white`}>
                  <div className={`p-6 ${option.highlight ? 'bg-care-red/5' : 'bg-gradient-warm'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${option.highlight ? 'bg-care-red text-white' : 'bg-white text-care-navy border border-care-gray-200'}`}>
                        {option.id === 'in-home' && <Home className="w-5 h-5" />}
                        {option.id === 'assisted' && <Building2 className="w-5 h-5" />}
                        {option.id === 'nursing' && <Stethoscope className="w-5 h-5" />}
                      </div>
                      <h3 className={`font-heading text-xl ${option.highlight ? 'text-care-red' : 'text-care-navy'}`}>
                        {option.name.replace('\n', ' ')}
                      </h3>
                    </div>
                    {option.highlight && (
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-red text-white text-xs font-semibold">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    {comparisonCriteria.map((criterion) => {
                      const { isPositive, isNegative, value } = getCellContent(option.id, option.values[criterion.key as keyof typeof option.values]);
                      return (
                        <div key={criterion.key} className="flex items-start gap-3 pb-4 border-b border-care-gray-100 last:border-0 last:pb-0">
                          <criterion.icon className="w-5 h-5 text-care-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-care-gray-400 uppercase tracking-wider font-medium mb-1">{criterion.label}</p>
                            <div className="flex items-start gap-2">
                              {isPositive ? <CheckIcon /> : isNegative ? <CrossIcon /> : <NeutralIcon />}
                              <span className={`text-sm font-medium ${isPositive ? 'text-care-navy' : 'text-care-gray-500'}`}>{value}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Verdict - Image Background */}
      <SectionBackground
        imageSrc="/images/about-story.jpeg"
        imageAlt="Happy family with caregiver"
        overlay="white-light"
        className="relative"
      >
        <div className="section-padding">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <FadeIn direction="right">
                  <FloatingCard variant="white" className="border-care-red/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-red flex items-center justify-center shadow-glow-red">
                        <ShieldCheck className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl text-care-navy">The ArayoLight Advantage</h2>
                        <p className="text-care-gray-500">Why families choose us</p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Stay in the comfort and familiarity of home',
                        'Receive dedicated, one-on-one caregiver attention',
                        'Maintain complete control over schedule and routines',
                        'Keep family closely involved in every care decision',
                        'Often more affordable than facility-based care',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                          <span className="text-care-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </FloatingCard>
                </FadeIn>
                
                <FadeIn direction="left" delay={0.15}>
                  <div className="space-y-6">
                    <h3 className="font-heading text-2xl md:text-3xl text-care-navy tracking-tight">
                      Still Unsure?
                    </h3>
                    <p className="text-care-gray-600 text-lg leading-relaxed">
                      Every family situation is unique. Take our free, 2-minute Care Assessment Quiz to get a personalized recommendation based on your loved one&apos;s specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Link
                        href="/assessment"
                        className="btn-primary group"
                      >
                        Take the Quiz
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/request-care"
                        className="text-care-gray-600 hover:text-care-red font-medium transition-colors inline-flex items-center gap-2 group"
                      >
                        Talk to a Care Advisor
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* When to Choose - Dark Navy */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        {/* Decorative Orbs */}
        <BlurredOrb color="blue" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/2" />
        <BlurredOrb color="red" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/3 opacity-40" />
        
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
              <SectionBadge 
                icon={<Sparkles className="w-4 h-4" />}
                variant="white"
                className="mb-3 md:mb-6"
              >
                Which Option Is Right for You?
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Making the Right Choice
              </h2>
              <p className="text-white/70 text-lg">
                A quick guide to help you identify the best care setting for your loved one&apos;s current situation.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {whenToChoose.map((item) => (
              <StaggerItem key={item.id}>
                <FloatingCard variant="glass" className="h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl text-care-navy mb-5">{item.title}</h3>
                  <ul className="space-y-3 flex-1">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-care-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0 mt-2`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </FloatingCard>
              </StaggerItem>
            ))}
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
