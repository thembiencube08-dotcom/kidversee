"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const babyCategories = [
{ title: 'Baby Jhabla', href: 'https://www.popees.com/collections/baby-jhabla-new', img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=400', count: '45+ styles' },
{ title: 'Baby Tops', href: 'https://www.popees.com/collections/baby-top-new', img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=400', count: '30+ styles' },
{ title: 'Baby T-Shirt', href: 'https://www.popees.com/collections/baby-t-shirt-new', img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=400', count: '25+ styles' },
{ title: 'Baby Dress', href: 'https://www.popees.com/collections/baby-dresses-1', img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=400', count: '20+ styles' },
{ title: 'Baby Shorts', href: 'https://www.popees.com/collections/baby-shorts-new', img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=400', count: '15+ styles' },
{ title: 'Baby Pants', href: 'https://www.popees.com/collections/baby-pants-new', img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=400', count: '20+ styles' },
{ title: 'Baby Co-Ord Sets', href: 'https://www.popees.com/collections/baby-co-ord-sets-new', img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=400', count: '18+ styles' },
{ title: 'Baby Sleepsuit', href: 'https://www.popees.com/collections/baby-sleepsuit-new', img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=400', count: '12+ styles' },
{ title: 'Baby Rompers', href: 'https://www.popees.com/collections/baby-rompers', img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=400', count: '22+ styles' },
{ title: 'Baby Dungaree', href: 'https://www.popees.com/collections/baby-dungaree-new', img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=400', count: '10+ styles' }];

const categoryDropdownSections = [
  {
    title: 'Baby',
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
    items: [
      { label: 'Pillow', href: 'https://www.popees.com/collections/pillow-new' },
      { label: 'Towel', href: 'https://www.popees.com/collections/baby-towels-new' },
      { label: 'Swaddle Wrap', href: 'https://www.popees.com/collections/swaddle-wrap-new' },
      { label: 'Bibs', href: 'https://www.popees.com/collections/bibs' },
      { label: 'Mittens', href: 'https://www.popees.com/collections/mittens-new' },
    ],
  },
];

const featuredProducts = [
{ id: 'b1', name: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla | Off-White | 0-12 Months', shortName: 'Popees Baby Boys Full Sleev...', price: '$ 399.00', href: 'https://www.popees.com/products/popees-baby-boys-full-sleeve-cotton-jhabla-off-white-0-12-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11280f753-1769340082329.png" },
{ id: 'b2', name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2 | Tiny Baby, Newborn to 6 Months', shortName: 'Popees Baby Girls Cotton Fr...', price: '$ 749.00', href: 'https://www.popees.com/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-6m', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png" },
{ id: 'b3', name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie', shortName: 'Popees Baby Girls Solid Hal...', price: 'Rs. 725.00', href: 'https://www.popees.com/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146fb607d-1772274371867.png" },
{ id: 'b4', name: 'Popees Babycare Waffle Knit Full Sleeve Baby Top | Soft Cotton Thermal Top', shortName: 'Popees Babycare Waffle Knit...', price: 'Rs. 699.00', href: 'https://www.popees.com/products/popees-babycare-waffle-knit-full-sleeve-baby-top-soft-cotton-thermal-top-round-neck-with-button-placket-cream-0-9-months', img: "https://images.unsplash.com/photo-1695628364825-a0a5ab89f97a" },
{ id: 'b5', name: 'Popees Baby Jhabla – 100% Cotton, Skin-friendly Front Button Tops (Pack of 6)', shortName: 'Popees Baby Jhabla – 100% C...', price: 'Rs. 699.00', href: 'https://www.popees.com/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-8', img: "https://images.unsplash.com/photo-1649056747314-74345cf99a9c", rating: '5.0' }];


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
        {/* Hero */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden">
          <Image
            src="https://www.popees.com/cdn/shop/collections/freepik_a-young-child-seen-from-t_2470681991.jpg?v=1777104416&width=1400"
            alt="Baby collection - adorable baby clothing and essentials"
            fill
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Baby</h1>
            <p className="text-white/80">0 - 12 Months</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Baby</span>
          </nav>
        </div>

        {/* Shop by Age */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Shop by Age</h2>
          <div className="flex flex-wrap gap-2">
            {['Tiny Baby', 'Newborn', '0-1 Month', '1-3 Months', '3-6 Months', '6-9 Months', '9-12 Months']?.map((age) =>
            <Link
              key={age}
              href={`https://www.popees.com/collections/${age?.toLowerCase()?.replace(/\s+/g, '-')?.replace(/[^a-z0-9-]/g, '')}-new`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#e21a5a] hover:text-[#e21a5a] transition-colors">
              
                {age}
              </Link>
            )}
          </div>
        </div>

        {/* Categories */}
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
            {babyCategories?.map((cat) =>
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
            )}
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-[1400px] mx-auto px-4 pb-16">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Popular Baby Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredProducts?.map((product) =>
            <div key={product?.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <Image src={product?.img} alt={product?.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">{product?.shortName}</h3>
                  </Link>
                  <span className="text-xs font-semibold text-gray-900 mt-1 block">{product?.price}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}