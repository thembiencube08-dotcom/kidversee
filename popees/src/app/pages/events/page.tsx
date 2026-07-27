import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const events = [
{
  id: '1',
  title: 'Baby Care Workshop - Kochi',
  date: 'August 15, 2025',
  location: 'Lulu Mall, Kochi',
  desc: 'Join us for a free baby care workshop with expert pediatricians and parenting coaches. Learn about newborn care, feeding, and development milestones.',
  img: 'https://www.popees.com/cdn/shop/files/Natural_fabrics.jpg?v=1778733729&width=600',
  type: 'Workshop'
},
{
  id: '2',
  title: 'Popees Baby Fair 2025',
  date: 'September 5-7, 2025',
  location: 'Bolgatty Palace, Kochi',
  desc: 'The biggest baby fair in Kerala! Explore the latest baby products, attend expert talks, and enjoy exclusive discounts on all Popees products.',
  img: 'https://www.popees.com/cdn/shop/files/Just_Arrived.jpg?v=1782889157&width=600',
  type: 'Fair'
},
{
  id: '3',
  title: 'New Mom Support Group - Thiruvananthapuram',
  date: 'Every Saturday',
  location: 'Popees Store, Statue Junction',
  desc: 'A weekly support group for new mothers. Share experiences, get advice from experts, and connect with other parents in your community.',
  img: 'https://www.popees.com/cdn/shop/files/Natural_fabrics_M.jpg?v=1778733725&width=600',
  type: 'Community'
}];


export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Events</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Events</h1>
            <p className="text-gray-600 mt-2">Join us at our upcoming events and workshops.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events?.map((event) =>
            <article key={event?.id} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image src={event?.img} alt={event?.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#e21a5a] text-white text-xs font-medium px-2.5 py-1 rounded-full">{event?.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event?.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event?.location}
                  </div>
                  <h2 className="font-heading font-bold text-gray-900 mb-2">{event?.title}</h2>
                  <p className="text-sm text-gray-600 line-clamp-3">{event?.desc}</p>
                  <button className="mt-4 w-full bg-[#e21a5a] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#c4134b] transition-colors">
                    Register Now
                  </button>
                </div>
              </article>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}