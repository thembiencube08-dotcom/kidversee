import React from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CSRInitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">CSR Initiatives</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">CSR Initiatives</h1>
            <p className="text-gray-600 mt-2">Our commitment to society and the environment.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🌱</div>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Environmental Sustainability</h2>
              <p className="text-gray-600 leading-relaxed">We are committed to reducing our environmental footprint. We use eco-friendly packaging, source organic materials, and work with manufacturers who follow sustainable practices. Our goal is to be carbon neutral by 2030.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Education for Children</h2>
              <p className="text-gray-600 leading-relaxed">For every product sold, we contribute a portion to educational programs for underprivileged children in Kerala. We believe every child deserves access to quality education and a bright future.</p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Women Empowerment</h2>
              <p className="text-gray-600 leading-relaxed">We actively support women-led businesses and employ women artisans in our manufacturing process. Our supply chain prioritizes fair wages and safe working conditions for all workers.</p>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Community Health</h2>
              <p className="text-gray-600 leading-relaxed">We organize free health camps and awareness programs for new mothers and infants in rural areas. Our team of pediatricians and healthcare professionals volunteer their time to support these initiatives.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#e21a5a] to-[#ff5870] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Our Impact in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '50,000+', label: 'Trees Planted' },
                { number: '10,000+', label: 'Children Supported' },
                { number: '500+', label: 'Women Employed' },
                { number: '100+', label: 'Health Camps' },
              ]?.map((stat) => (
                <div key={stat?.label}>
                  <div className="text-3xl font-heading font-bold text-white mb-1">{stat?.number}</div>
                  <div className="text-white/80 text-sm">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
