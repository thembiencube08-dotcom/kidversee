import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MakeYourKitPage() {
  const kitItems = [
    { category: 'Clothing', items: ['Jhablas (6-8 pieces)', 'Onesies/Rompers (4-6 pieces)', 'Sleepsuits (2-3 pieces)', 'Socks (3-4 pairs)', 'Mittens (2 pairs)', 'Cap (2-3 pieces)'] },
    { category: 'Diapering', items: ['Diapers (1-2 packs)', 'Wet Wipes (2-3 packs)', 'Nappies (1 pack)', 'Diaper Rash Cream'] },
    { category: 'Bath & Skin Care', items: ['Baby Soap (2 bars)', 'Baby Shampoo (1 bottle)', 'Baby Powder (1 pack)', 'Baby Towel (2 pieces)', 'Wash Cloths (6 pieces)'] },
    { category: 'Feeding', items: ['Feeding Bottles (2-3)', 'Bibs (4-6 pieces)', 'Burp Cloths (4-6 pieces)'] },
    { category: 'Bedding', items: ['Swaddle Wraps (2-3)', 'Baby Pillow (1)', 'Blanket (1-2)', 'Mattress (1)'] },
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
              <span className="text-gray-800">Make Your Kit</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Make Your Baby Kit</h1>
            <p className="text-gray-600 mt-2">Everything you need for your newborn, all in one place.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="bg-[#fff8f8] rounded-2xl p-6 mb-8">
            <p className="text-gray-600 leading-relaxed">
              Preparing for a new baby can be overwhelming. We&apos;ve put together a comprehensive checklist to help you get everything you need before your little one arrives. Use this guide to build your perfect baby kit with Popees products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitItems?.map((section) => (
              <div key={section?.category} className="border border-gray-100 rounded-xl p-6">
                <h2 className="font-heading font-bold text-[#e21a5a] text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e21a5a] rounded-full"></span>
                  {section?.category}
                </h2>
                <ul className="space-y-2">
                  {section?.items?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[#e21a5a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/collections/all"
              className="inline-flex items-center gap-2 bg-[#e21a5a] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#c4134b] transition-colors"
            >
              Shop All Baby Essentials
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
