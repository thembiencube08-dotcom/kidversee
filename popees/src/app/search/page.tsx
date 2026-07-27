'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
  category: string;
}

const ALL_PRODUCTS: Product[] = [
{ id: 'p1', name: 'Popees Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set', price: '$ 899.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdf7b790-1784806070179.png", href: '/collections/girls-new', category: 'Girls' },
{ id: 'p2', name: 'Popees Baby Girls Solid Half Sleeve Romper', price: '$ 725.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_14dcce35f-1784128741081.png", href: '/collections/girls-new', category: 'Girls' },
{ id: 'p3', name: 'Popees Babycare Waffle Knit Full Sleeve Baby Top', price: '$ 699.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f553c6ba-1765063333756.png", href: '/collections/baby-new', category: 'Baby' },
{ id: 'p4', name: 'Popees Soft Cotton Striped Jumpsuit with Front Button Closure', price: '$ 849.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_177ebbb61-1784806070026.png", href: '/collections/baby-new', category: 'Baby' },
{ id: 'p5', name: 'Popees Baby Girls Soft Ribbed Cotton Polo T-Shirt & Shorts Co-Ord Set', price: '$ 899.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f338668-1784806069992.png", href: '/collections/girls-new', category: 'Girls' },
{ id: 'p6', name: 'Popees Bamboo Soft Onesie for Newborn', price: '$ 749.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf2da779-1767906821536.png", href: '/collections/bamboo', category: 'Bamboo' },
{ id: 'p7', name: 'Popees Baby Boys Striped Cotton Romper', price: '$ 699.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3db1806-1784708131853.png", href: '/collections/boys-new', category: 'Boys' },
{ id: 'p8', name: 'Popees Maternity Comfort Dress', price: '$ 1,299.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea4c95c2-1772156983722.png", href: '/collections/maternity-wear', category: 'Maternity' },
{ id: 'p9', name: 'Popees Baby Diaper Pants Ultra Soft', price: '$ 549.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d132b906-1765546307547.png", href: '/collections/diaper-new', category: 'Diaper' },
{ id: 'p10', name: 'Popees Boys Casual Cotton Shorts', price: '$ 599.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b836c08-1776538188218.png", href: '/collections/boys-new', category: 'Boys' },
{ id: 'p11', name: 'Popees Baby Combo Pack – Onesie + Romper Set', price: '$ 1,199.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_149ac24b7-1784806070212.png", href: '/collections/combo-packs', category: 'Combo' },
{ id: 'p12', name: 'Popees Bamboo Muslin Swaddle Blanket', price: '$ 649.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_14b17257d-1772263477433.png", href: '/collections/bamboo', category: 'Bamboo' },
{ id: 'p13', name: 'Popees Girls Floral Print Frock', price: '$ 799.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8062faa-1772254441618.png", href: '/collections/girls-new', category: 'Girls' },
{ id: 'p14', name: 'Popees Baby Accessories Gift Set', price: '$ 999.00', image: "https://images.unsplash.com/photo-1677145503731-87bfe49e5c67", href: '/collections/accessories-new', category: 'Accessories' },
{ id: 'p15', name: 'Popees Newborn Baby Jhabla Set', price: '$ 499.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f154cdb-1784128742425.png", href: '/collections/baby-new', category: 'Baby' },
{ id: 'p16', name: 'Popees Maternity Nursing Bra', price: '$ 849.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea4c95c2-1772156983722.png", href: '/collections/maternity-wear', category: 'Maternity' }];


function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(ALL_PRODUCTS.map((p) => p.category)))];

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchesQuery =
    query.trim() === '' ||
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputValue);
    router.push(`/search?q=${encodeURIComponent(inputValue)}`, { scroll: false });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Search</span>
      </nav>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative max-w-2xl">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for baby clothing, diapers, bamboo…"
            className="w-full pl-5 pr-14 py-4 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#e21a5a] focus:ring-2 focus:ring-[#e21a5a]/10 transition-all shadow-sm"
            autoFocus />
          
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#e21a5a] rounded-xl flex items-center justify-center hover:bg-[#c4134b] transition-colors"
            aria-label="Search">
            
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) =>
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
          activeCategory === cat ?
          'bg-[#e21a5a] text-white' :
          'bg-white border border-gray-200 text-gray-600 hover:border-[#e21a5a] hover:text-[#e21a5a]'}`
          }>
          
            {cat}
          </button>
        )}
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          {query.trim() ?
          <>Showing <span className="font-semibold text-gray-900">{filtered.length}</span> results for &ldquo;<span className="text-[#e21a5a] font-medium">{query}</span>&rdquo;</> :
          <><span className="font-semibold text-gray-900">{filtered.length}</span> products</>
          }
        </p>
      </div>

      {/* Results grid */}
      {filtered.length === 0 ?
      <div className="text-center py-20">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-500 text-sm mb-5">Try a different search term or browse our categories.</p>
          <Link href="/collections/all" className="inline-block bg-[#e21a5a] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#c4134b] transition-colors">
            Browse All Products
          </Link>
        </div> :

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) =>
        <Link key={product.id} href={product.href} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all">
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized />
            
                <span className="absolute top-2 left-2 text-[10px] font-semibold bg-white/90 text-gray-600 px-2 py-0.5 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-700 line-clamp-2 leading-snug">{product.name}</p>
                <p className="text-sm font-bold text-gray-900 mt-1.5">{product.price}</p>
              </div>
            </Link>
        )}
        </div>
      }
    </div>);

}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#fef5ee] flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={
        <div className="flex items-center justify-center py-20">
            <svg className="w-8 h-8 animate-spin text-[#e21a5a]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </div>);

}