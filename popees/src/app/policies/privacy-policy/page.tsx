import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Privacy Policy</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Privacy Policy</h1>
            <p className="text-gray-500 mt-2 text-sm">Last updated: January 2025</p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 py-12">
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Introduction</h2>
              <p className="leading-relaxed">Popees Baby Care (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p className="leading-relaxed mb-3">We collect information you provide directly to us, such as:</p>
              <ul className="space-y-2">
                {['Name, email address, and phone number', 'Shipping and billing address', 'Payment information (processed securely through payment gateways)', 'Order history and preferences', 'Communications with our customer support team']?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e21a5a] rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <ul className="space-y-2">
                {['Process and fulfill your orders', 'Send order confirmations and shipping updates', 'Respond to your inquiries and provide customer support', 'Send promotional emails (with your consent)', 'Improve our website and services', 'Comply with legal obligations']?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e21a5a] rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Data Security</h2>
              <p className="leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Cookies</h2>
              <p className="leading-relaxed">We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="space-y-2">
                {['Access your personal data', 'Correct inaccurate data', 'Request deletion of your data', 'Opt-out of marketing communications', 'Lodge a complaint with a supervisory authority']?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e21a5a] rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="leading-relaxed">If you have questions about this Privacy Policy, please contact us at support@popees.com or call +91 90721 13911.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
