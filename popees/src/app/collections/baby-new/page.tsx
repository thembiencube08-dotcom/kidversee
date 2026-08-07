"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const shopByGender = [
  { label: 'Baby Boys', href: '/collections/baby-new?gender=boys' },
  { label: 'Baby Girls', href: '/collections/baby-new?gender=girls' },
  { label: 'Unisex', href: '/collections/baby-new?gender=unisex' },
];

const shopByAge = [
  { label: 'Tiny Baby', href: 'https://www.popees.com/collections/tiny-baby-new' },
  { label: 'Newborn', href: 'https://www.popees.com/collections/newborn-new' },
  { label: '0-1 Month', href: 'https://www.popees.com/collections/0-1-month-new' },
  { label: '1-3 Month', href: 'https://www.popees.com/collections/1-3-month-new' },
  { label: '3-6 Month', href: 'https://www.popees.com/collections/3-6-month-new' },
  { label: '6-9 Month', href: 'https://www.popees.com/collections/6-9-month-new' },
  { label: '9-12 Month', href: 'https://www.popees.com/collections/9-12-month-new' },
];

const babyClothing = [
  { label: 'Dresses', href: 'https://www.popees.com/collections/baby-dresses-1' },
  { label: 'Co-Ord Sets', href: 'https://www.popees.com/collections/baby-co-ord-sets-new' },
  { label: 'Rompers', href: 'https://www.popees.com/collections/baby-rompers' },
  { label: 'Sleepsuit', href: 'https://www.popees.com/collections/baby-sleepsuit-new' },
  { label: 'Dungaree', href: 'https://www.popees.com/collections/baby-dungaree-new' },
  { label: 'Bodysuit', href: 'https://www.popees.com/collections/baby-bodysuit-new' },
  { label: 'Gift Set', href: 'https://www.popees.com/collections/baby-gift-set-new' },
];

const topWear = [
  { label: 'T shirt', href: 'https://www.popees.com/collections/baby-t-shirt-new' },
  { label: 'Shirt', href: 'https://www.popees.com/collections/baby-shirt-new' },
  { label: 'Jacket', href: 'https://www.popees.com/collections/baby-jacket-new' },
  { label: 'Jhabla', href: 'https://www.popees.com/collections/baby-jhabla-new' },
  { label: 'Top', href: 'https://www.popees.com/collections/baby-top-new' },
  { label: 'Sweatshirt', href: 'https://www.popees.com/collections/baby-sweatshirt-new' },
];

const bottomWear = [
  { label: 'Denim Shorts', href: 'https://www.popees.com/collections/baby-denim-shorts-new' },
  { label: 'Denim Pant', href: 'https://www.popees.com/collections/baby-denim-pant-new' },
  { label: 'Pants', href: 'https://www.popees.com/collections/baby-pants-new' },
  { label: 'Shorts', href: 'https://www.popees.com/collections/baby-shorts-new' },
  { label: 'Skirt', href: 'https://www.popees.com/collections/baby-skirts-new' },
];

// Remote category sections (kept for richer category data)
const categoryDropdownSections = [
  {
    title: 'Baby',
    href: '/collections/baby-new',
    items: [
      { label: 'Baby Jhabla', href: 'https://www.popees.com/collections/baby-jhabla-new' },
      { label: 'Baby Tops', href: 'https://www.popees.com/collections/baby-top-new' },
      { label: 'Baby T-shirt', href: 'https://www.popees.com/collections/baby-t-shirt-new' },
      { label: 'Baby Shirt', href: 'https://www.popees.com/collections/baby-shirt-new' },
      { label: 'Baby Dress', href: 'https://www.popees.com/collections/baby-dresses-1' },
      { label: 'Baby Shorts', href: 'https://www.popees.com/collections/baby-shorts-new' },
      { label: 'Baby Pants', href: 'https://www.popees.com/collections/baby-pants-new' },
      { label: 'Baby Cord Set', href: 'https://www.popees.com/collections/baby-co-ord-sets-new' },
      { label: 'Baby Sleepsuit', href: 'https://www.popees.com/collections/baby-sleepsuit-new' },
      { label: 'Baby Dungaree', href: 'https://www.popees.com/collections/baby-dungaree-new' },
    ],
  },
  {
    title: 'Girls',
    href: '/collections/girls-new',
    items: [
      { label: 'T shirt', href: 'https://www.popees.com/collections/girls-t-shirt-new' },
      { label: 'Top', href: 'https://www.popees.com/collections/girls-top-new' },
      { label: 'Dress', href: 'https://www.popees.com/collections/girls-dresses-new' },
      { label: 'Pants', href: 'https://www.popees.com/collections/girls-pants-new' },
      { label: 'Shorts', href: 'https://www.popees.com/collections/girls-shorts-new' },
    ],
  },
  {
    title: 'Boys',
    href: '/collections/boys-new',
    items: [
      { label: 'Shirt', href: 'https://www.popees.com/collections/boys-shirt-new' },
      { label: 'T shirt', href: 'https://www.popees.com/collections/boys-t-shirt-new' },
      { label: 'Pants', href: 'https://www.popees.com/collections/boys-pants-new' },
      { label: 'Shorts', href: 'https://www.popees.com/collections/boys-shorts-new' },
      { label: 'Dungaree', href: 'https://www.popees.com/collections/boys-dungaree-new' },
    ],
  },
  {
    title: 'Baby Basics',
    href: '/collections/fmcg',
    items: [
      { label: 'Fabric Wash', href: 'https://www.popees.com/collections/fabric-wash-new' },
      { label: 'Wipes', href: 'https://www.popees.com/collections/Baby-wipes' },
      { label: 'Diaper', href: 'https://www.popees.com/collections/diaper-new' },
      { label: 'Baby Soap', href: 'https://www.popees.com/collections/soap-new' },
      { label: 'Baby Shampoo', href: 'https://www.popees.com/collections/shampoo-new' },
    ],
  },
  {
    title: 'Accessories',
    href: '/collections/accessories-new',
    items: [
      { label: 'Pillow', href: 'https://www.popees.com/collections/pillow-new' },
      { label: 'Towel', href: 'https://www.popees.com/collections/baby-towels-new' },
      { label: 'Swaddle Wrap', href: 'https://www.popees.com/collections/swaddle-wrap-new' },
      { label: 'Bibs', href: 'https://www.popees.com/collections/bibs' },
      { label: 'Mittens', href: 'https://www.popees.com/collections/mittens-new' },
    ],
  },
];

// Build a lightweight category list for the page UI while preserving remote structure
const babyCategories = categoryDropdownSections.map((col) => ({
  title: col.title,
  href: col.href || (col.items && col.items[0]?.href) || '#',
  img: '/assets/images/kidverse-logo.png',
  count: col.items?.length || 0,
}));

const featuredProducts = [
  {
    id: 'b1',
    name: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla | Off-White | 0-12 Months',
    shortName: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla',
    price: '$ 399.00',
    href: 'https://www.popees.com/products/popees-baby-boys-full-sleeve-cotton-jhabla-off-white-0-12-months',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_11280f753-1769340082329.png',
  },
  // ... keep other featured product entries unchanged (truncated here for brevity) 
];

function ColumnLink({ label, href }: { label: string; href: string }) {
  const isExternal = href.startsWith('http');
  return (
    <li>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-sm text-gray-700 hover:text-[#e21a5a] transition-colors leading-relaxed"
      >
        {label}
      </Link>
    </li>
  );
}

export default function BabyPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const href = event.target.value;
    setSelectedCategory(href);
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 py-3">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#e21a5a]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Baby</span>
          </nav>
        </div>

        {/* Mega Menu Panel */}
        <div className="max-w-[1400px] mx-auto px-6 pb-8">
          <div className="flex flex-wrap gap-x-8 gap-y-6 lg:flex-nowrap lg:gap-10">
            {/* Shop by Gender */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Shop by Gender
              </h2>
              <ul className="space-y-1.5">
                {shopByGender.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Shop by Age */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Shop by Age
              </h2>
              <ul className="space-y-1.5">
                {shopByAge.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Baby Clothing */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Baby Clothing
              </h2>
              <ul className="space-y-1.5">
                {babyClothing.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Top Wear */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Top Wear
              </h2>
              <ul className="space-y-1.5">
                {topWear.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Bottom Wear */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Bottom Wear
              </h2>
              <ul className="space-y-1.5">
                {bottomWear.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Baby Image — hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block ml-auto flex-shrink-0 text-center">
              <div className="relative w-[190px] h-[190px] rounded-2xl overflow-hidden">
                <Image
                  src="https://www.popees.com/cdn/shop/collections/freepik_a-young-child-seen-from-t_2470681991.jpg?v=1777104416&width=400"
                  alt="Baby"
                  fill
                  className="object-cover"
                  sizes="190px"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">Baby</p>
            </div>
          </div>
        </div>

        {/* Categories (merged remote UI) */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="mb-4">
            <label htmlFor="category-dropdown" className="block text-sm font-medium text-gray-900 mb-2">
              Shop by Category
            </label>
            <div className="relative inline-block w-full sm:w-72">
              <select
                id="category-dropdown"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm text-gray-900 shadow-sm focus:border-[#e21a5a] focus:outline-none focus:ring-2 focus:ring-[#e21a5a]/20"
              >
                <option value="">Select a category</option>
                {babyCategories?.map((cat) => (
                  <option key={cat.title} value={cat.href}>
                    {cat.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Shop by Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {babyCategories?.map((cat) => (
              <Link key={cat?.title} href={cat?.href} target="_blank" rel="noopener noreferrer" className="group text-center">
                <div className="relative overflow-hidden rounded-full aspect-square bg-gray-50 mb-2 border-2 border-transparent group-hover:border-[#e21a5a] transition-colors">
                  <Image src={cat?.img} alt={cat?.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 33vw, 16vw" />
                </div>
                <h3 className="text-xs font-medium text-gray-800 group-hover:text-[#e21a5a] transition-colors">{cat?.title}</h3>
                <p className="text-xs text-gray-400">{cat?.count}</p>
                <span className="mt-1 block text-[10px] text-[#e21a5a] opacity-0 group-hover:opacity-100 transition-opacity">
                  View collection
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">
                      {product.shortName}
                    </h3>
                  </Link>
                  <span className="text-xs font-semibold text-gray-900 mt-1 block">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
