import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Home, 
  Pill, 
  Sparkles, 
  HandHeart, 
  UserCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Phone,
  Award,
  Stethoscope,
  AlertCircle,
  Calendar,
  FileText,
  Bell,
  Trash2,
  Shirt,
  ChefHat,
  UtensilsCrossed,
  BookHeart,
  CarTaxiFront
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6">
              Comprehensive <span className="text-care-red">Homecare Services</span>
            </h1>
            <p className="text-care-gray-500 text-lg leading-relaxed">
              From daily assistance to specialized care, ArayoLight provides a full spectrum of 
              professional services designed to help your loved ones maintain independence, dignity, 
              and quality of life in the comfort of their own home.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-blue/10 text-care-blue text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Why Choose ArayoLight
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Care That Adapts to Your Unique Needs
              </h2>
              <p className="text-care-gray-500 leading-relaxed mb-6">
                Every individual has unique care requirements that evolve over time. That&apos;s why 
                we take a personalized approach, conducting comprehensive assessments to understand 
                your loved one&apos;s physical, emotional, and social needs before creating a customized 
                care plan that addresses every aspect of their well-being.
              </p>
              <div className="space-y-4">
                {[
                  'Licensed, bonded, and insured caregivers with extensive training',
                  'Personalized care plans that evolve with changing needs',
                  '24/7 on-call support and rapid emergency response',
                  'Seamless coordination with healthcare providers and family',
                  'Regular quality assessments and care plan updates'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                    <span className="text-care-gray-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-story.jpeg"
                  alt="ArayoLight caregiver providing personalized care"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Homecare Services */}
      <section id="homecare" className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/service-homecare.jpeg"
                alt="Professional homecare services"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                <span>Comprehensive Care</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Homecare Services
              </h2>
              <p className="text-care-gray-500 leading-relaxed mb-6">
                Our comprehensive homecare services provide the support your loved ones need to 
                maintain independence and dignity while remaining in the comfort of their own home. 
                From personal care to companionship, we deliver compassionate, professional assistance 
                tailored to each individual&apos;s unique circumstances, medical conditions, and personal preferences.
              </p>
              <p className="text-care-gray-500 leading-relaxed mb-8">
                Every client receives a customized care plan developed through in-depth assessments 
                of their medical history, current health status, daily routines, and personal goals. 
                Our caregivers are trained to provide care that respects your loved one&apos;s dignity 
                while ensuring their safety and well-being around the clock.
              </p>
              
              <h3 className="font-heading text-lg text-care-navy mb-4">Service Features</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Personalized care plan development',
                  'Trained professional caregivers',
                  'Flexible hourly or live-in care',
                  'Regular care assessments',
                  'Family communication updates',
                  'Healthcare provider coordination'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-care-red flex-shrink-0" />
                    <span className="text-care-gray-500 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg text-care-navy mb-4">Care Options</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Hourly Care', desc: '4-8 hours/day assistance' },
                  { title: 'Overnight Care', desc: '8-12 hours/night support' },
                  { title: 'Live-In Care', desc: '24/7 continuous coverage' },
                  { title: 'Respite Care', desc: 'Temporary relief for families' }
                ].map((option, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <p className="font-heading text-care-navy">{option.title}</p>
                    <p className="text-care-gray-500 text-sm">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Medication Reminder */}
      <section id="medication" className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <Pill className="w-4 h-4" />
                <span>Medication Management</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Medication Reminder Services
              </h2>
              <p className="text-care-gray-500 leading-relaxed mb-6">
                Proper medication adherence is crucial for managing chronic conditions, preventing 
                complications, and maintaining overall health. Our medication reminder service ensures 
                your loved ones take their medications correctly and on time, every time. Medication 
                non-adherence is a leading cause of hospitalizations among seniors, and our systematic 
                approach helps prevent these avoidable health crises.
              </p>
              <p className="text-care-gray-500 leading-relaxed mb-8">
                Our caregivers don&apos;t just remind—they observe for side effects, track adherence, 
                coordinate refills, and communicate with healthcare providers to ensure medication 
                regimens remain appropriate and effective. Families receive regular updates on 
                medication compliance and any concerns that arise.
              </p>
              
              <h3 className="font-heading text-lg text-care-navy mb-4">What We Provide</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: 'Timely medication reminders' },
                  { icon: Calendar, text: 'Schedule management' },
                  { icon: FileText, text: 'Prescription tracking' },
                  { icon: Bell, text: 'Family notifications' },
                  { icon: AlertCircle, text: 'Side effect monitoring' },
                  { icon: Shield, text: 'Detailed documentation' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-care-red/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-care-red" />
                    </div>
                    <span className="text-care-gray-500 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-care-gray-50 rounded-2xl p-6">
                <h4 className="font-heading text-care-navy mb-2">Daily Medication Process</h4>
                <ul className="space-y-2 text-care-gray-500 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-care-red font-bold">1.</span>
                    Review daily schedule and prepare medications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-care-red font-bold">2.</span>
                    Administer at prescribed times with documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-care-red font-bold">3.</span>
                    Observe and record any reactions or concerns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-care-red font-bold">4.</span>
                    Complete daily logs and communicate with family
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/service-medication.jpeg"
                alt="Medication reminder service"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Light Housekeeping */}
      <section id="housekeeping" className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/service-housekeeping.jpeg"
                alt="Light housekeeping services"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Clean & Safe Living</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Light Housekeeping Services
              </h2>
              <p className="text-care-gray-500 leading-relaxed mb-6">
                A clean, organized home environment is essential for senior health, safety, and 
                emotional well-being. Our light housekeeping services help seniors maintain a 
                comfortable living space while reducing the physical strain and fall risks associated 
                with household chores. Beyond aesthetics, proper housekeeping prevents illness from 
                bacteria and germs while creating a space where seniors can thrive.
              </p>
              <p className="text-care-gray-500 leading-relaxed mb-8">
                Our caregivers are trained to identify and address safety hazards during every 
                cleaning session, ensuring your loved one&apos;s home remains not just clean, but safe. 
                We use senior-friendly cleaning products and techniques that maintain air quality 
                and reduce slip hazards.
              </p>
              
              <h3 className="font-heading text-lg text-care-navy mb-4">Our Housekeeping Services</h3>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Sparkles, title: 'Daily Tidying', tasks: ['Dusting surfaces', 'Vacuuming & sweeping', 'Mopping floors'] },
                  { icon: Shirt, title: 'Laundry Care', tasks: ['Washing & drying', 'Folding clothes', 'Changing bed linens'] },
                  { icon: ChefHat, title: 'Kitchen Care', tasks: ['Washing dishes', 'Cleaning appliances', 'Wiping counters'] },
                  { icon: Trash2, title: 'Waste Management', tasks: ['Emptying trash', 'Sorting recycling', 'Cleaning bins'] }
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-care-red/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-care-red" />
                    </div>
                    <div>
                      <p className="font-heading text-care-navy">{service.title}</p>
                      <p className="text-care-gray-500 text-sm">{service.tasks.join(' • ')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-care-navy text-white rounded-2xl p-6">
                <h4 className="font-heading mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-care-red" />
                  Safety Checks Included
                </h4>
                <p className="text-white/70 text-sm">
                  Every visit includes clearing walkways, checking lighting, securing loose rugs, 
                  and identifying potential hazards to prevent falls and injuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Daily Living Assistance */}
      <section id="daily-living" className="section-padding bg-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <HandHeart className="w-4 h-4" />
                <span>Personal Care</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Daily Living Assistance
              </h2>
              <p className="text-care-gray-500 leading-relaxed mb-6">
                Activities of Daily Living (ADLs) are the fundamental self-care tasks that allow 
                individuals to live independently. When age, illness, or disability makes these 
                activities challenging, our compassionate caregivers provide dignified assistance 
                that preserves your loved one&apos;s self-esteem while ensuring their needs are met with 
                professionalism and respect.
              </p>
              <p className="text-care-gray-500 leading-relaxed mb-8">
                Our approach emphasizes dignity and independence—we encourage clients to participate 
                in their care to the extent they are able, providing just the right amount of support 
                needed. This balanced approach helps maintain physical function and emotional well-being.
              </p>
              
              <h3 className="font-heading text-lg text-care-navy mb-4">Areas of Support</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Bathing & Hygiene', desc: 'Assistance with bathing, showering, oral care, and grooming while maintaining privacy and dignity.' },
                  { title: 'Dressing & Grooming', desc: 'Help selecting appropriate clothing and assistance with dressing, hair care, and shaving.' },
                  { title: 'Meal Preparation', desc: 'Planning and preparing nutritious meals according to dietary restrictions and preferences.' },
                  { title: 'Mobility Assistance', desc: 'Support with walking, transferring, and positioning to prevent falls and maintain strength.' },
                  { title: 'Toileting Care', desc: 'Respectful assistance with toileting needs and incontinence management.' },
                  { title: 'Transfer Assistance', desc: 'Safe transfers between bed, chair, wheelchair, and other surfaces.' }
                ].map((item, index) => (
                  <div key={index} className="bg-care-gray-50 rounded-xl p-4">
                    <p className="font-heading text-care-navy text-sm mb-1">{item.title}</p>
                    <p className="text-care-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 bg-care-red/10 rounded-xl p-4">
                <Stethoscope className="w-6 h-6 text-care-red" />
                <p className="text-care-gray-500 text-sm">
                  <strong className="text-care-navy">Note:</strong> All personal care is provided by 
                  caregivers trained in proper techniques, infection control, and privacy protection.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/service-daily-living.jpeg"
                alt="Daily living assistance"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Companionship */}
      <section id="companionship" className="section-padding bg-care-gray-50">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/service-companionship.jpeg"
                alt="Companionship services"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
                <UserCircle className="w-4 h-4" />
                <span>Social Connection</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6">
                Companionship Services
              </h2>
              <p className="text-care-gray-500 leading-relaxed mb-6">
                Social isolation and loneliness can have devastating effects on senior health, 
                contributing to depression, cognitive decline, and even physical illness. Our 
                companionship services provide meaningful social interaction that enriches lives, 
                stimulates minds, and brings joy to daily routines. ArayoLight caregivers become 
                trusted friends who genuinely care about your loved one&apos;s happiness and well-being.
              </p>
              <p className="text-care-gray-500 leading-relaxed mb-8">
                Beyond simple presence, our caregivers engage clients in activities they enjoy, 
                facilitate connections with family and community, and provide the emotional support 
                that comes from a genuine human connection. This holistic approach to companionship 
                addresses the whole person—mind, body, and spirit.
              </p>
              
              <h3 className="font-heading text-lg text-care-navy mb-4">Companionship Activities</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, title: 'Conversation', desc: 'Meaningful discussions about life experiences, current events, and personal interests.' },
                  { icon: BookHeart, title: 'Reading & Games', desc: 'Reading aloud, playing cards, board games, puzzles, and other mentally stimulating activities.' },
                  { icon: CarTaxiFront, title: 'Escorted Outings', desc: 'Accompaniment to appointments, shopping, social events, and religious services.' },
                  { icon: Heart, title: 'Emotional Support', desc: 'A caring presence to listen, share joys and concerns, and provide comfort.' }
                ].map((activity, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <activity.icon className="w-5 h-5 text-care-red" />
                      <p className="font-heading text-care-navy text-sm">{activity.title}</p>
                    </div>
                    <p className="text-care-gray-500 text-xs">{activity.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border-l-4 border-care-red">
                <p className="text-care-gray-500 italic">
                  &ldquo;The companionship my mother receives from her ArayoLight caregiver has 
                  transformed her outlook. She looks forward to their visits, and I have peace 
                  of mind knowing she&apos;s not alone.&rdquo;
                </p>
                <p className="text-care-navy font-medium text-sm mt-3">— Sarah M., Daughter of Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="section-padding bg-care-navy text-white">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-white font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-white/90">
              Beginning care with ArayoLight is simple and stress-free. We&apos;re here to guide 
              you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'Contact us for a complimentary assessment to discuss your care needs, preferences, and schedule.',
                icon: Phone,
                image: '/images/step-1-submit.jpeg'
              },
              {
                step: '02',
                title: 'Personalized Plan',
                desc: 'We develop a customized care plan and carefully match you with a qualified caregiver.',
                icon: Shield,
                image: '/images/step-2-match.jpeg'
              },
              {
                step: '03',
                title: 'Care Begins',
                desc: 'Your caregiver begins providing compassionate care with ongoing supervision and support.',
                icon: Users,
                image: '/images/step-3-care.jpeg'
              }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl overflow-hidden">
                {/* Card Image */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-care-red/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-care-red" />
                  </div>
                  <span className="text-care-red/30 font-heading text-4xl block mb-2">{item.step}</span>
                  <h3 className="font-heading text-lg text-care-navy mb-2">{item.title}</h3>
                  <p className="text-care-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/request-care" 
              className="inline-flex items-center gap-2 bg-white text-care-red font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition-colors"
            >
              Request a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
