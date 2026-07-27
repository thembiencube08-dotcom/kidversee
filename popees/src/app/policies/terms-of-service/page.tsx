import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Terms of Service</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Terms & Conditions</h1>
            <p className="text-gray-500 mt-2 text-sm">Last updated: January 2025</p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 py-12">
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing and using the Popees Baby Care website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">2. Products and Pricing</h2>
              <p className="leading-relaxed mb-3">All products are subject to availability. Prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. We reserve the right to modify prices at any time without prior notice.</p>
              <p className="leading-relaxed">Product images are for illustrative purposes only. Actual product colors may vary slightly due to photography and display settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">3. Orders and Payment</h2>
              <p className="leading-relaxed">By placing an order, you confirm that all information provided is accurate and complete. We reserve the right to cancel orders in case of pricing errors, stock unavailability, or suspected fraudulent activity.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">4. Shipping and Delivery</h2>
              <p className="leading-relaxed">Delivery times are estimates and not guaranteed. We are not responsible for delays caused by courier partners, natural disasters, or other circumstances beyond our control.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
              <p className="leading-relaxed">All content on this website, including text, images, logos, and designs, is the property of Popees Baby Care and is protected by copyright laws. Unauthorized use is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p className="leading-relaxed">Popees Baby Care shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase price of the product.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">7. Governing Law</h2>
              <p className="leading-relaxed">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kerala, India.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">8. Contact</h2>
              <p className="leading-relaxed">For questions about these Terms, contact us at support@popees.com or call +91 90721 13911.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
