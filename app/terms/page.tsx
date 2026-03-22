import Link from 'next/link';
import type { Metadata } from 'next';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for using Caring Hands Homecare services. Guidelines for care requests and caregiver applications.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'legal'],
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-hero pt-32 pb-16">
      {/* Header */}
      <section className="mb-12">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              Terms of Service
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
                  Welcome to Caring Hands Homecare. By accessing or using our website and services, 
                  you agree to be bound by these Terms of Service. Please read them carefully.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">1. Introduction</h2>
                <p className="text-care-gray-500 mb-4">
                  These Terms of Service govern your use of the Caring Hands Homecare website and all 
                  related services, including care requests and caregiver applications. By accessing 
                  or using our website, you agree to comply with these terms.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">2. Services</h2>
                <p className="text-care-gray-500 mb-4">
                  Caring Hands Homecare provides:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Homecare service matching for clients seeking care</li>
                  <li>Caregiver application and recruitment services</li>
                  <li>Information about our homecare services</li>
                  <li>Communication channels for care coordination</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">3. Care Requests</h2>
                <p className="text-care-gray-500 mb-4">
                  When submitting a care request:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>You agree to provide accurate and complete information</li>
                  <li>You authorize us to contact you via WhatsApp or phone</li>
                  <li>Submission of a request does not guarantee service availability</li>
                  <li>All care arrangements are subject to caregiver availability and screening</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">4. Caregiver Applications</h2>
                <p className="text-care-gray-500 mb-4">
                  When applying as a caregiver:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>You agree to provide accurate information about your experience and qualifications</li>
                  <li>You consent to background checks and reference verification</li>
                  <li>Submission of an application does not guarantee employment</li>
                  <li>You must meet our qualification requirements and complete our screening process</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">5. No Medical Advice</h2>
                <p className="text-care-gray-500 mb-4">
                  The information provided on our website is for general informational purposes only 
                  and does not constitute medical advice. Our caregivers provide non-medical homecare 
                  services only. Always consult with qualified healthcare professionals for medical 
                  advice and treatment.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="text-care-gray-500 mb-4">
                  To the fullest extent permitted by law, Caring Hands Homecare shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising out of 
                  or relating to your use of our services.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">7. Changes to Terms</h2>
                <p className="text-care-gray-500 mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will 
                  be effective immediately upon posting to the website. Your continued use of the 
                  website after any changes indicates your acceptance of the updated terms.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">8. Contact Information</h2>
                <p className="text-care-gray-500 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-care-gray-50 rounded-xl p-6 mt-4">
                  <p className="mb-1 font-semibold text-care-navy">Caring Hands Homecare</p>
                  <p className="text-care-gray-500">Email: <a href="mailto:legal@caringhands.com" className="text-care-red hover:underline">legal@caringhands.com</a></p>
                  <p className="text-care-gray-500">Phone: <a href="tel:+1234567890" className="text-care-red hover:underline">(123) 456-7890</a></p>
                </div>

                <p className="mt-8 text-sm text-care-gray-400">
                  By using this website, you acknowledge that you have read, understood, and agree 
                  to be bound by these Terms of Service.
                </p>
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
