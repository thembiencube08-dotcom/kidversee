import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StoreLocatorPage() {
  const stores = [
    { city: 'Kochi', address: 'MG Road, Ernakulam, Kochi - 682011', phone: '+91 90721 13911', hours: 'Mon-Sat: 9am - 8pm, Sun: 10am - 6pm' },
    { city: 'Thiruvananthapuram', address: 'Statue Junction, Thiruvananthapuram - 695001', phone: '+91 90721 13912', hours: 'Mon-Sat: 9am - 8pm, Sun: 10am - 6pm' },
    { city: 'Kozhikode', address: 'SM Street, Kozhikode - 673001', phone: '+91 90721 13913', hours: 'Mon-Sat: 9am - 8pm, Sun: 10am - 6pm' },
    { city: 'Thrissur', address: 'Round South, Thrissur - 680001', phone: '+91 90721 13914', hours: 'Mon-Sat: 9am - 8pm, Sun: 10am - 6pm' },
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
              <span className="text-gray-800">Store Locator</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Store Locator</h1>
            <p className="text-gray-600 mt-2">Find a Popees store near you.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stores?.map((store) => (
              <div key={store?.city} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#fff0f3] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{store?.city}</h3>
                    <p className="text-gray-600 text-sm mb-2">{store?.address}</p>
                    <p className="text-gray-500 text-sm mb-1">📞 {store?.phone}</p>
                    <p className="text-gray-500 text-sm">🕒 {store?.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#fff3f3] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Can&apos;t find a store near you?</h3>
            <p className="text-gray-600 mb-4">Shop online and get free delivery on orders above Rs. 499!</p>
            <Link
              href="/collections/all"
              className="inline-flex items-center gap-2 bg-[#e21a5a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c4134b] transition-colors"
            >
              Shop Online
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
