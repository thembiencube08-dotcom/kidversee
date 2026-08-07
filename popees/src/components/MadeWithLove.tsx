'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    label: 'Baby Soaps',
    href: '/collections/soap-new',
    img: 'https://www.popees.com/cdn/shop/files/Baby_Soaps_28aa55a0-08b9-4d3c-8b58-53748473ceae.jpg?v=1776514699&width=600'
  },
  {
    label: 'Shampoo & Bodywash',
    href: '/collections/shampoo-new',
    img: 'https://www.popees.com/cdn/shop/files/Shampoo_Bodywash_864ed928-fde8-4172-928c-31822c5d835b.jpg?v=1776514751&width=600'
  },
  {
    label: 'Towels',
    href: '/collections/baby-towels-new',
    img: 'https://www.popees.com/cdn/shop/files/Towels_306fbbf1-0700-4533-a90a-f118657851eb.jpg?v=1777098537&width=600'
  },
  {
    label: 'Tissue',
    href: '/collections/tissue-new',
    img: 'https://www.popees.com/cdn/shop/files/freepik_2813352476_ab2d695f-a413-439b-beba-9b760a49d281.jpg?v=1776515600&width=600'
  },
  {
    label: 'Grooming',
    href: '/collections/hair-accessories-new',
    img: 'https://www.popees.com/cdn/shop/files/Grooming_635ca576-b29a-4eb9-807f-d8669c238025.jpg?v=1772387129&width=600'
  },
  {
    label: 'Oral Care',
    href: '/collections/baby-oral-care-new',
    img: '/assets/images/oral-care-banana-toothpaste.webp'
  }
];

export default function MadeWithLove() {
  return (
    <section className="relative py-12 overflow-hidden" style={{ backgroundColor: '#f4697a' }}>
      {/* Decorative top-left rainbow / clouds */}
      <div className="pointer-events-none absolute top-0 left-0 w-36 h-36 md:w-52 md:h-52 select-none" aria-hidden="true">
        {/* Rainbow arc */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" fill="none">
          <path d="M10 190 Q10 60 190 60" stroke="#ff9a3c" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M10 190 Q10 80 190 80" stroke="#ffcc00" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M10 190 Q10 100 190 100" stroke="#6bd46b" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M10 190 Q10 120 190 120" stroke="#3db5f5" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.85" />
        </svg>
        {/* Cloud blobs */}
        <div className="absolute top-16 left-6 w-12 h-7 rounded-full bg-white/80" />
        <div className="absolute top-12 left-10 w-9 h-9 rounded-full bg-white/80" />
        <div className="absolute top-20 left-14 w-8 h-5 rounded-full bg-white/70" />
      </div>

      {/* Decorative top-right baby items */}
      <div className="pointer-events-none absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 select-none" aria-hidden="true">
        {/* Simple bottle / comb shapes as pink tinted circles */}
        <div className="absolute top-3 right-6 w-10 h-10 rounded-full bg-white/30" />
        <div className="absolute top-10 right-2 w-7 h-7 rounded-full bg-white/20" />
      </div>

      {/* Sparkle dots */}
      <span className="pointer-events-none absolute top-6 left-1/3 text-yellow-200 text-2xl select-none" aria-hidden="true">✦</span>
      <span className="pointer-events-none absolute bottom-8 right-1/4 text-white/40 text-xl select-none" aria-hidden="true">✦</span>

      {/* Heading */}
      <div className="relative text-center mb-8 px-4">
        <h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Pacifico', 'Satisfy', cursive" }}
        >
          made with love
        </h2>
        <p className="mt-2 text-white/90 text-sm md:text-base font-medium tracking-wide">
          Gentle care for your little one&apos;s daily bath time
        </p>
      </div>

      {/* Category cards */}
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col items-center gap-3"
            >
              <div
                className="relative w-full aspect-square overflow-hidden bg-white shadow-md group-hover:shadow-xl transition-shadow duration-300"
                style={{ borderRadius: '22px' }}
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-white text-center group-hover:text-yellow-100 transition-colors leading-tight">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom decorative soap / tool icon (bottom-right) */}
      <div className="pointer-events-none absolute bottom-2 right-8 select-none" aria-hidden="true">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-7 h-7" fill="white" opacity="0.7">
            <rect x="8" y="12" width="24" height="18" rx="5" />
            <rect x="14" y="8" width="12" height="6" rx="3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
