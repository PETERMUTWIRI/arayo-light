import Link from 'next/link';
import type { Metadata } from 'next';
import { Accessibility, ArrowLeft, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to making homecare services accessible to everyone. Learn about our accessibility features and WCAG compliance.',
  keywords: ['accessibility', 'WCAG', 'screen reader', 'keyboard navigation', 'inclusive design'],
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-gradient-hero pt-32 pb-16">
      {/* Header */}
      <section className="mb-12">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/10 text-care-red text-sm font-medium mb-6">
              <Accessibility className="w-4 h-4" />
              <span>Accessibility Statement</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
              Accessibility Statement
            </h1>
            <p className="text-care-gray-500">
              Our commitment to making homecare accessible to everyone
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
                  Caring Hands Homecare is committed to ensuring digital accessibility for people with 
                  disabilities. We continually work to improve the user experience for all visitors 
                  to our website.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">Our Commitment</h2>
                <p className="text-care-gray-500 mb-4">
                  We are dedicated to creating an inclusive digital experience that allows all users 
                  to access our services. Whether you are using assistive technologies or have specific 
                  accessibility needs, we want you to be able to use our website with ease.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">Conformance Status</h2>
                <p className="text-care-gray-500 mb-4">
                  Caring Hands Homecare strives to conform to <strong>WCAG 2.1 Level AA</strong> standards. 
                  We are continuously working to improve the accessibility of our website to ensure 
                  all users can access our content.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">Accessibility Features</h2>
                
                <h3 className="font-semibold text-care-navy mt-6 mb-2">Keyboard Navigation</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>All interactive elements are accessible via keyboard</li>
                  <li>Visible focus indicators to show your current position</li>
                  <li>Logical tab order for intuitive navigation</li>
                  <li>Skip links to bypass repetitive content</li>
                </ul>

                <h3 className="font-semibold text-care-navy mt-6 mb-2">Screen Reader Support</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Semantic HTML structure for clear content organization</li>
                  <li>Descriptive labels for all interactive elements</li>
                  <li>Proper heading hierarchy for easy navigation</li>
                  <li>ARIA labels where necessary</li>
                </ul>

                <h3 className="font-semibold text-care-navy mt-6 mb-2">Visual Design</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Sufficient color contrast between text and background</li>
                  <li>Text can be resized up to 200% without loss of functionality</li>
                  <li>Information is not conveyed by color alone</li>
                  <li>Clear, readable fonts with consistent styling</li>
                  <li>Responsive design that works on all screen sizes</li>
                </ul>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">Feedback and Contact</h2>
                <p className="text-care-gray-500 mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter 
                  accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                
                <div className="bg-care-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-care-gray-500">Email: <a href="mailto:accessibility@caringhands.com" className="text-care-red hover:underline">accessibility@caringhands.com</a></p>
                  <p className="text-care-gray-500">Phone: <a href="tel:+1234567890" className="text-care-red hover:underline">(123) 456-7890</a></p>
                </div>

                <p className="text-care-gray-500 mb-4">
                  We aim to respond to accessibility feedback within 2 business days and will work 
                  to address any issues as quickly as possible.
                </p>

                <h2 className="font-heading text-xl text-care-navy mt-8 mb-4">Ongoing Improvements</h2>
                <p className="text-care-gray-500 mb-4">
                  Accessibility is an ongoing effort. We regularly:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-care-gray-500">
                  <li>Review and test our website for accessibility</li>
                  <li>Incorporate accessibility into our design and development process</li>
                  <li>Stay informed about evolving accessibility standards</li>
                  <li>Train our team on accessibility best practices</li>
                </ul>

                <div className="bg-care-blue/5 rounded-xl p-6 mt-12 border border-care-blue/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-care-blue flex-shrink-0 mt-0.5" />
                    <p className="text-care-navy font-medium">
                      Quality care should be accessible to everyone. We are committed to making our 
                      website and services accessible to all users, regardless of ability.
                    </p>
                  </div>
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
