import Link from 'next/link';
import type { Metadata } from 'next';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how ArayoLight Homecare collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'homecare privacy', 'ArayoLight'],
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-hero pt-32 pb-16">
      {/* Header */}
      <section className="mb-12">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              Privacy Policy
            </h1>
            <p className="text-care-gray-500">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card-care p-8 md:p-12">
              <div className="prose prose-care max-w-none">
                <p className="text-lg text-care-gray-500 mb-8">
                  ArayoLight Homecare is committed to protecting your privacy. This Privacy Policy explains 
                  how we collect, use, and safeguard your personal information when you use our website 
                  to request care services or apply as a caregiver.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">1. Information We Collect</h2>
                
                <h3 className="font-semibold text-care-navy mt-6 mb-2">Personal Information</h3>
                <p className="text-care-gray-500 mb-4">
                  We collect personal information that you voluntarily provide when you:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Submit a care request (name, phone number, location)</li>
                  <li>Apply as a caregiver (name, phone, email, experience)</li>
                  <li>Contact us via email or phone</li>
                </ul>

                <h3 className="font-semibold text-care-navy mt-6 mb-2">Automatically Collected Information</h3>
                <p className="text-care-gray-500 mb-4">
                  We may automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on site</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-care-gray-500 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Process care requests and match you with caregivers</li>
                  <li>Review caregiver applications</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and services</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">3. WhatsApp Communication</h2>
                <p className="text-care-gray-500 mb-4">
                  When you submit a form on our website, we may open WhatsApp with a pre-filled message 
                  containing your information. This allows us to respond to your request quickly. Your 
                  information is sent directly to us via WhatsApp and is not stored on our servers unless 
                  you explicitly consent to follow-up communication.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">4. Data Sharing</h2>
                <p className="text-care-gray-500 mb-4">
                  <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                  We may share your information only with:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Our trusted caregivers (only relevant information for care provision)</li>
                  <li>Legal authorities when required by law</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">5. Data Security</h2>
                <p className="text-care-gray-500 mb-4">
                  We implement appropriate technical measures to protect your personal information. 
                  All data transmission is encrypted using SSL/TLS technology.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">6. Your Rights</h2>
                <p className="text-care-gray-500 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of communications at any time</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">7. Contact Us</h2>
                <p className="text-care-gray-500 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-care-gray-50 rounded-xl p-6 mt-4">
                  <p className="mb-1 font-semibold text-care-navy">ArayoLight Homecare</p>
                  <p className="text-care-gray-500">Email: <a href="mailto:privacy@arayolight.com" className="text-care-red hover:underline">privacy@arayolight.com</a></p>
                  <p className="text-care-gray-500">Phone: <a href="tel:+1234567890" className="text-care-red hover:underline">(123) 456-7890</a></p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-care-gray-200">
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 text-care-red font-medium hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
