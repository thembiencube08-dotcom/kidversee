import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Wishlist</span>
          </nav>

          <div className="text-center py-20">
            <div className="w-20 h-20 bg-[#fff0f3] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-heading font-bold text-gray-900 mb-3">Your Wishlist is Empty</h1>
            <p className="text-gray-500 mb-6">Save your favorite items to your wishlist and come back to them later.</p>
            <Link
              href="/collections/all"
              className="inline-flex items-center gap-2 bg-[#e21a5a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c4134b] transition-colors"
            >
              Explore Products
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
