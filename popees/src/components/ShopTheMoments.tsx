'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const moments = [
  {
    href: '/collections/baby-new',
    img: 'https://www.popees.com/cdn/shop/files/You_Baby_-_Header.jpg?v=1775190834&width=828',
    alt: 'Baby hands close up',
  },
  {
    href: '/collections/newborn',
    img: 'https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=828',
    alt: 'Sleeping newborn baby',
  },
  {
    href: '/collections/whats-new-baby-care',
    img: 'https://www.popees.com/cdn/shop/files/You_Baby_Footer_-_Mobile.jpg?v=1775190740&width=828',
    alt: 'Smiling baby in yellow onesie',
  },
  {
    href: '/collections/baby-clothing',
    img: 'https://www.popees.com/cdn/shop/files/Bamboo_90517547-f1dc-4337-8d36-651a58b527be.jpg?v=1782889207&width=828',
    alt: 'Crawling baby product',
  },
  {
    href: '/collections/boys-new',
    img: 'https://www.popees.com/cdn/shop/files/Maternity_Wear.jpg?v=1772273982&width=828',
    alt: 'Happy toddler boy',
  },
];

export default function ShopTheMoments() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#e21a5a] text-center mb-10">
          shop the moments
        </h2>

        {/* 5-column portrait card row */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 md:overflow-visible">
          {moments.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative flex-shrink-0 w-[42vw] md:w-0 md:flex-1 rounded-2xl overflow-hidden bg-[#f5e8e8]"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Thumbnail image */}
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 42vw, 20vw"
              />

              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-black/70 flex items-center justify-center shadow-lg group-hover:bg-black/85 transition-colors duration-200">
                  {/* Triangle play icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white ml-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Popees logo watermark — top area */}
              <div className="absolute top-3 left-0 right-0 flex justify-center">
                <div className="bg-white/0 px-2 py-0.5">
                  <span
                    className="text-[#e21a5a] font-bold text-xs tracking-wide drop-shadow-sm"
                    style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.04em' }}
                  >
                    <span className="text-base">p</span>opees
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
