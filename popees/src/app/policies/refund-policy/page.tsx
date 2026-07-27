import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Refund Policy</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Return & Refund Policy</h1>
            <p className="text-gray-500 mt-2 text-sm">Last updated: January 2025</p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 py-12">
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Return Policy</h2>
                <p className="text-gray-600 leading-relaxed">We want you to be completely satisfied with your purchase. If you are not satisfied for any reason, you may return most items within 7 days of delivery for a full refund or exchange.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Eligibility for Returns</h2>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Items must be returned within 7 days of delivery',
                    'Products must be unused, unwashed, and in original condition',
                    'All original tags must be intact',
                    'Items must be in original packaging',
                    'Proof of purchase (order number) is required',
                  ]?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#e21a5a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Non-Returnable Items</h2>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Diapers and wet wipes (for hygiene reasons)',
                    'Items marked as "Final Sale"',
                    'Customized or personalized products',
                    'Items damaged due to misuse or improper care',
                  ]?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">How to Initiate a Return</h2>
                <ol className="space-y-3 text-gray-600">
                  {[
                    'Contact our customer support team at support@popees.com or call +91 90721 13911',
                    'Provide your order number and reason for return',
                    'Our team will arrange a pickup from your doorstep within 2-3 business days',
                    'Once we receive and inspect the item, we will process your refund',
                  ]?.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#e21a5a] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Refund Process</h2>
                <p className="text-gray-600 leading-relaxed mb-3">Once your return is received and inspected, we will send you an email notification. If approved, your refund will be processed within 5-7 business days.</p>
                <div className="bg-[#fff3f3] rounded-xl p-4">
                  <p className="text-sm text-gray-600"><strong>Note:</strong> Refunds are credited to the original payment method. For COD orders, refunds are processed via bank transfer or store credit.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Exchanges</h2>
                <p className="text-gray-600 leading-relaxed">We offer free exchanges for size or color issues. Simply contact us within 7 days of delivery, and we will arrange a pickup and delivery of the new item at no extra cost.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-600">If you have any questions about our return policy, please contact us:</p>
                <div className="mt-3 space-y-1 text-gray-600">
                  <p>📧 support@popees.com</p>
                  <p>📞 +91 90721 13911</p>
                  <p>💬 WhatsApp: +91 90721 13911</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
