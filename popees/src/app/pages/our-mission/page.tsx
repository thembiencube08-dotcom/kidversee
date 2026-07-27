import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Our Mission</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Our Mission</h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Making Every Baby&apos;s World Safer & Softer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission at Popees is simple: to create the safest, most comfortable, and most sustainable baby products in India. We believe every child deserves the best start in life, and that begins with what touches their skin.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to using only certified organic materials, free from harmful chemicals, dyes, and toxins. Every product we create goes through rigorous testing to ensure it meets the highest safety standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond products, we are committed to sustainability. We work with ethical manufacturers, use eco-friendly packaging, and continuously strive to reduce our environmental footprint.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://www.popees.com/cdn/shop/files/Natural_fabrics.jpg?v=1778733729&width=800"
                alt="Popees mission - natural fabrics for babies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
            { icon: '👶', title: 'Baby Safety', desc: 'Every product is tested and certified safe for babies from birth.' },
            { icon: '🌱', title: 'Sustainability', desc: 'Eco-friendly materials and practices to protect our planet.' },
            { icon: '🧑\u200d\ud83d\udc69\u200d\ud83d\udc66', title: 'Family First', desc: 'Supporting families with quality products at fair prices.' },
            { icon: '🌟', title: 'Innovation', desc: 'Continuously improving our products based on parent feedback.' }]?.
            map((pillar) =>
            <div key={pillar?.title} className="bg-[#fff8f8] rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{pillar?.icon}</div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{pillar?.title}</h3>
                <p className="text-sm text-gray-600">{pillar?.desc}</p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-[#e21a5a] to-[#ff5870] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-heading font-bold text-white text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
              { number: '1M+', label: 'Happy Families' },
              { number: '500+', label: 'Products' },
              { number: '100%', label: 'Certified Safe' },
              { number: '10+', label: 'Years of Trust' }]?.
              map((stat) =>
              <div key={stat?.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{stat?.number}</div>
                  <div className="text-white/80 text-sm">{stat?.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}