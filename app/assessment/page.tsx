'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Sparkles,
  Home,
  Pill,
  HandHeart,
  UserCircle,
  Brush,
  RefreshCcw,
  Phone,
  CalendarCheck,
  Stethoscope
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import SectionBackground, { SectionBadge, FloatingCard, BlurredOrb } from '@/components/SectionBackground';

const questions = [
  {
    id: 1,
    icon: HandHeart,
    question: 'Does your loved one need help with bathing, dressing, or grooming?',
    options: [
      { label: 'Completely independent', value: 0, description: 'Manages personal hygiene without any help' },
      { label: 'Sometimes needs assistance', value: 1, description: 'Occasionally needs reminders or light help' },
      { label: 'Needs regular help', value: 2, description: 'Requires daily assistance with personal care' },
    ],
  },
  {
    id: 2,
    icon: Pill,
    question: 'Are medications taken correctly and on time without reminders?',
    options: [
      { label: 'Always manages independently', value: 0, description: 'Takes all medications correctly without prompts' },
      { label: 'Occasionally forgets', value: 1, description: 'Sometimes misses doses or needs reminders' },
      { label: 'Needs regular supervision', value: 2, description: 'Requires help organizing and taking medications' },
    ],
  },
  {
    id: 3,
    icon: Stethoscope,
    question: 'Is your loved one safe moving around the home alone?',
    options: [
      { label: 'Fully mobile and safe', value: 0, description: 'Walks confidently without risk of falls' },
      { label: 'Sometimes unsteady', value: 1, description: 'Occasionally needs support on stairs or uneven ground' },
      { label: 'High fall risk', value: 2, description: 'Requires assistance for most movement' },
    ],
  },
  {
    id: 4,
    icon: UserCircle,
    question: 'Does your loved one feel lonely or isolated during the day?',
    options: [
      { label: 'Socially active', value: 0, description: 'Regularly visits with friends, family, or community' },
      { label: 'Occasionally lonely', value: 1, description: 'Would benefit from more regular companionship' },
      { label: 'Often isolated', value: 2, description: 'Spends most days alone and seems withdrawn' },
    ],
  },
  {
    id: 5,
    icon: Brush,
    question: 'Can your loved one manage light housekeeping and meal preparation?',
    options: [
      { label: 'Manages household tasks well', value: 0, description: 'Cooks, cleans, and maintains home independently' },
      { label: 'Struggles with some tasks', value: 1, description: 'Needs help with heavier cleaning or complex meals' },
      { label: 'Unable to manage safely', value: 2, description: 'Cannot reliably prepare meals or maintain cleanliness' },
    ],
  },
];

const results = [
  {
    maxScore: 2,
    title: 'Minimal Assistance Needed',
    subtitle: 'Your loved one is largely independent.',
    description: 'Based on your answers, your loved one maintains a good level of independence. Occasional support with companionship and light household tasks can help them stay active and safe at home.',
    services: [
      { name: 'Companionship', icon: UserCircle, desc: 'Social engagement and emotional support' },
      { name: 'Light Housekeeping', icon: Brush, desc: 'Keeping the home clean and organized' },
    ],
    color: 'green',
  },
  {
    maxScore: 5,
    title: 'Part-Time Homecare Recommended',
    subtitle: 'A few hours of support per day would help greatly.',
    description: 'Your loved one would benefit from regular assistance with daily activities, medication reminders, and companionship. Part-time care provides the right balance of independence and support.',
    services: [
      { name: 'Daily Living Assistance', icon: HandHeart, desc: 'Help with bathing, dressing, and grooming' },
      { name: 'Medication Reminder', icon: Pill, desc: 'Timely reminders and schedule management' },
      { name: 'Companionship', icon: UserCircle, desc: 'Meaningful social interaction and activities' },
    ],
    color: 'blue',
  },
  {
    maxScore: 8,
    title: 'Full-Time Daily Homecare Recommended',
    subtitle: 'Daily caregiver support is the best fit.',
    description: 'Your loved one needs consistent, daily assistance to remain safe and comfortable at home. A dedicated caregiver can provide comprehensive support tailored to their routine and medical needs.',
    services: [
      { name: 'Comprehensive Homecare', icon: Home, desc: 'All-inclusive in-home care services' },
      { name: 'Daily Living Assistance', icon: HandHeart, desc: 'Personal care with dignity and respect' },
      { name: 'Medication Management', icon: Pill, desc: 'Organizing and tracking medications' },
      { name: 'Mobility Support', icon: Stethoscope, desc: 'Safe transfers and fall prevention' },
    ],
    color: 'orange',
  },
  {
    maxScore: 10,
    title: '24/7 or Specialized Care Recommended',
    subtitle: 'Round-the-clock care provides the greatest peace of mind.',
    description: 'Based on your responses, your loved one would benefit from continuous care or live-in support. This ensures immediate assistance is always available, day or night, for maximum safety and comfort.',
    services: [
      { name: 'Live-In Care', icon: Home, desc: '24/7 continuous caregiver presence' },
      { name: 'Comprehensive Homecare', icon: HandHeart, desc: 'Full-spectrum personal and medical support' },
      { name: 'Medication Management', icon: Pill, desc: 'Complete medication oversight' },
      { name: 'Safety Monitoring', icon: Stethoscope, desc: 'Constant fall-risk and wellness monitoring' },
    ],
    color: 'red',
  },
];

function getResult(totalScore: number) {
  for (const result of results) {
    if (totalScore <= result.maxScore) return result;
  }
  return results[results.length - 1];
}

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const progress = ((step + (showResult ? 1 : 0)) / (questions.length + 1)) * 100;
  const result = showResult ? getResult(totalScore) : null;

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [questions[step].id]: value }));
    if (step < questions.length - 1) {
      setDirection(1);
      setStep(s => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setDirection(-1);
    } else if (step > 0) {
      setDirection(-1);
      setStep(s => s - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setShowResult(false);
    setDirection(1);
  };

  const currentQuestion = questions[step];
  const isAnswered = answers[currentQuestion?.id] !== undefined;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen">
      {/* Hero - Image Background */}
      <SectionBackground
        imageSrc="/images/hero-caregiver-senior.jpeg"
        imageAlt="Caregiver helping senior with daily activities"
        overlay="white-light"
        className="relative"
      >
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-30" />
        <BlurredOrb color="blue" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-20" />
        
        <div className="pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <FadeIn>
                <SectionBadge 
                  icon={<Sparkles className="w-4 h-4" />}
                  variant="red"
                  className="mb-6"
                >
                  Free Care Assessment
                </SectionBadge>
                <h1 className="font-heading text-4xl md:text-5xl text-care-navy mb-4 tracking-tight">
                  Find the Right{' '}
                  <span className="text-care-red">Care Level</span>
                </h1>
                <p className="text-care-gray-600 text-lg md:text-xl">
                  Answer 5 quick questions about your loved one&apos;s daily needs and get a personalized recommendation in seconds.
                </p>
              </FadeIn>
            </div>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-between text-sm font-medium text-care-gray-500 mb-3">
                <span>Progress</span>
                <span>{showResult ? 'Complete' : `Question ${step + 1} of ${questions.length}`}</span>
              </div>
              <div className="h-3 bg-care-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-red rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Quiz Card */}
            <div className="max-w-2xl mx-auto">
              <FloatingCard variant="glass" className="min-h-[420px] relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  {!showResult ? (
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-care-red/10 flex items-center justify-center border border-care-red/10">
                          <currentQuestion.icon className="w-6 h-6 text-care-red" />
                        </div>
                        <span className="text-care-gray-400 text-sm font-semibold uppercase tracking-wider">
                          Question {step + 1}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl md:text-3xl text-care-navy leading-tight">
                        {currentQuestion.question}
                      </h2>

                      <div className="space-y-3 pt-2">
                        {currentQuestion.options.map((option) => {
                          const selected = answers[currentQuestion.id] === option.value;
                          return (
                            <button
                              key={option.value}
                              onClick={() => handleAnswer(option.value)}
                              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 group ${
                                selected 
                                  ? 'border-care-red bg-care-red/5' 
                                  : 'border-care-gray-100 hover:border-care-red/30 hover:bg-care-red/[0.02]'
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  selected ? 'border-care-red bg-care-red' : 'border-care-gray-300'
                                }`}>
                                  {selected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                </div>
                                <div>
                                  <p className={`font-semibold text-base ${selected ? 'text-care-navy' : 'text-care-navy'}`}>
                                    {option.label}
                                  </p>
                                  <p className="text-care-gray-500 text-sm mt-1">
                                    {option.description}
                                  </p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2"
                        >
                          <p className="text-care-gray-400 text-sm text-center">
                            Click another option to change your answer
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-8"
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                          result!.color === 'green' ? 'bg-green-100 text-green-600' :
                          result!.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          result!.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                          'bg-care-red/10 text-care-red'
                        }`}>
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl text-care-navy mb-2">
                          {result!.title}
                        </h2>
                        <p className="text-care-gray-500 text-lg">
                          {result!.subtitle}
                        </p>
                      </div>

                      <div className="bg-gradient-warm rounded-2xl p-6 border border-care-gray-100">
                        <p className="text-care-gray-600 leading-relaxed">
                          {result!.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg text-care-navy mb-4">Recommended Services</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {result!.services.map((service) => (
                            <div key={service.name} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-care-gray-100 shadow-soft">
                              <div className="w-10 h-10 rounded-lg bg-care-red/10 flex items-center justify-center flex-shrink-0 border border-care-red/10">
                                <service.icon className="w-5 h-5 text-care-red" />
                              </div>
                              <div>
                                <p className="font-semibold text-care-navy text-sm">{service.name}</p>
                                <p className="text-care-gray-500 text-xs">{service.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                        <Link
                          href="/request-care"
                          className="btn-primary flex-1 justify-center group"
                        >
                          Request a Free Consultation
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                          href="tel:+19194498913"
                          className="btn-outline flex-1 justify-center"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Us Now
                        </a>
                      </div>

                      <div className="flex items-center justify-center gap-4 pt-2">
                        <button
                          onClick={handleRestart}
                          className="text-care-gray-500 hover:text-care-red font-medium transition-colors inline-flex items-center gap-2 text-sm"
                        >
                          <RefreshCcw className="w-4 h-4" />
                          Retake Quiz
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back Button */}
                {(step > 0 || showResult) && (
                  <button
                    onClick={handleBack}
                    className="absolute top-6 left-6 p-2 rounded-xl text-care-gray-400 hover:text-care-navy hover:bg-care-gray-100 transition-colors"
                    aria-label="Go back"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
              </FloatingCard>

              {/* Trust badges below card */}
              {!showResult && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-care-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4" />
                    <span>Takes 2 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Personalized results</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionBackground>
    </main>
  );
}
