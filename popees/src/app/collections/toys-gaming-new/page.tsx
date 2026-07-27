import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const toysCategories = [
{ title: 'Toddler Toys', href: 'https://www.popees.com/collections/toddler-toys-new', img: 'https://www.popees.com/cdn/shop/collections/freepik_a-clean-category-product-_2858017131.png?v=1777036151&width=400', desc: 'Fun toys for little ones' },
{ title: 'Rider Toys', href: 'https://www.popees.com/collections/rider-toys-new', img: 'https://www.popees.com/cdn/shop/collections/freepik_a-clean-category-product-_2858027059.png?v=1777036134&width=400', desc: 'Ride-on toys for active kids' },
{ title: 'Walker', href: 'https://www.popees.com/collections/walker-new', img: 'https://www.popees.com/cdn/shop/collections/freepik_a-clean-category-product-_2858029777.png?v=1777036114&width=400', desc: 'Baby walkers for first steps' },
{ title: 'Learning', href: 'https://www.popees.com/collections/learning-new', img: 'https://www.popees.com/cdn/shop/collections/freepik_a-clean-category-product-_2858030474.png?v=1777036098&width=400', desc: 'Educational toys & games' },
{ title: 'Playtime', href: 'https://www.popees.com/collections/playtime-new', img: 'https://www.popees.com/cdn/shop/collections/freepik_a-clean-category-product-_2858031128.png?v=1777036075&width=400', desc: 'Play gyms & activity sets' }];


export default function ToysGamingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-100 py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Toys & Gaming</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870] mb-2">Toys & Gaming</h1>
            <p className="text-gray-600 max-w-lg">Safe, fun, and educational toys designed to stimulate your baby&apos;s development and bring joy to playtime.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {toysCategories?.map((cat) =>
            <Link key={cat?.title} href={cat?.href} target="_blank" rel="noopener noreferrer" className="group text-center">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-white shadow-sm border border-gray-100 mb-3 group-hover:shadow-md transition-shadow">
                  <Image src={cat?.img} alt={cat?.title} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#e21a5a] transition-colors">{cat?.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{cat?.desc}</p>
              </Link>
            )}
          </div>

          {/* Safety Note */}
          <div className="mt-12 bg-[#fff3f3] rounded-2xl p-8">
            <h3 className="text-lg font-heading font-bold text-[#e21a5a] mb-3">Safety First</h3>
            <p className="text-gray-600 text-sm leading-relaxed">All Popees toys are tested for safety and comply with international toy safety standards. Our toys are made from non-toxic materials and are designed to be age-appropriate, ensuring your child&apos;s safety during playtime.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}