import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurPoliciesPage() {
  const policies = [
    {
      title: 'Return & Refund Policy',
      desc: 'We offer a 7-day return policy. Products must be unused and in original packaging.',
      href: '/policies/refund-policy',
      icon: '🔄'
    },
    {
      title: 'Privacy Policy',
      desc: 'We are committed to protecting your personal information and privacy.',
      href: '/policies/privacy-policy',
      icon: '🔒'
    },
    {
      title: 'Terms & Conditions',
      desc: 'Read our terms of service and conditions for using our website.',
      href: '/policies/terms-of-service',
      icon: '📜'
    },
    {
      title: 'Shipping Policy',
      desc: 'Free shipping on orders above Rs. 499. Delivery in 3-7 business days.',
      href: '/pages/faqs',
      icon: '🚚'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Our Policies</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Our Policies</h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies?.map((policy) => (
              <Link key={policy?.title} href={policy?.href} className="group border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-[#e21a5a] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{policy?.icon}</div>
                  <div>
                    <h2 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-[#e21a5a] transition-colors">{policy?.title}</h2>
                    <p className="text-gray-600 text-sm">{policy?.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-[#e21a5a] text-sm font-medium">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
