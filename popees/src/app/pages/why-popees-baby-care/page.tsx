import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WhyPopeesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <div className="relative bg-[#fff3f3] py-16 px-4 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Why Popees?</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#ff5870] mb-4">Why Families Choose Popees?</h1>
              <p className="text-gray-600 text-lg leading-relaxed">At Popees, garments are thoughtfully crafted for your baby&apos;s comfort and safety, using soft organic and hypoallergenic fabrics with uncompromising quality.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-[1400px] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
            {
              icon: '🛡️',
              title: 'Comfort & Safety',
              desc: 'Every product is designed with your baby\'s safety as the top priority. We use only certified, non-toxic materials that are gentle on delicate skin.'
            },
            {
              icon: '🌿',
              title: 'Organic Quality',
              desc: 'Our fabrics are GOTS certified and Oeko-Tex certified, ensuring they are free from harmful chemicals and safe for your baby from day one.'
            },
            {
              icon: '❤️',
              title: 'Crafted with Care',
              desc: 'Each garment is made with precision stitching and thoughtful design, ensuring durability while maintaining the softness your baby deserves.'
            }]?.
            map((item) =>
            <div key={item?.title} className="text-center p-8 bg-[#fff8f8] rounded-2xl">
                <div className="text-4xl mb-4">{item?.icon}</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">{item?.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item?.desc}</p>
              </div>
            )}
          </div>

          {/* Certifications */}
          <div className="bg-[#fff3f3] rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-heading font-bold text-[#ff5870] text-center mb-8">Our Certifications & Standards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
              { title: 'GOTS Certified', desc: 'Global Organic Textile Standard' },
              { title: 'Oeko-Tex Certified', desc: 'Tested for harmful substances' },
              { title: 'Dermatologist Reviewed', desc: 'Safe for sensitive skin' },
              { title: 'Pediatrician Reviewed', desc: 'Recommended by doctors' },
              { title: '100% Vegan', desc: 'No animal-derived materials' },
              { title: 'Azo Free Dyes', desc: 'Safe, non-toxic coloring' },
              { title: 'No Nasty Chemicals', desc: 'Free from harmful substances' },
              { title: 'High Sensory Design', desc: 'Designed for baby comfort' }]?.
              map((cert) =>
              <div key={cert?.title} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="w-10 h-10 bg-[#e21a5a] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{cert?.title}</h4>
                  <p className="text-xs text-gray-500">{cert?.desc}</p>
                </div>
              )}
            </div>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#ff5870] mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Popees Baby Care was founded with a simple mission: to provide the safest, most comfortable clothing and care products for babies. We understand that every parent wants the best for their child, and we&apos;re committed to delivering just that.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Starting from Kerala, India, we&apos;ve grown to become one of the most trusted baby care brands in the country. Our products are used by millions of families who trust us to keep their little ones safe and comfortable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every product we create goes through rigorous testing and quality checks. We work with certified manufacturers and use only the finest organic materials to ensure your baby gets the best start in life.
              </p>
              <Link
                href="/pages/our-mission"
                className="inline-flex items-center gap-2 mt-6 bg-[#e21a5a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c4134b] transition-colors">
                
                Our Mission
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://www.popees.com/cdn/shop/files/Natural_fabrics.jpg?v=1778733729&width=800"
                alt="Popees Baby Care - Natural fabrics for babies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}