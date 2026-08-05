'use client';
import React from 'react';

/*
 * Category Section — a row of small circular category images.
 *
 * Each card is a small, perfectly round photo circle sitting side by side
 * in a line, followed by a compact label underneath. No text behind photos.
 *
 * Images are local transparent PNGs from /public, and each card links to
 * its existing collection page.
 */
const categories = [
  { word: 'baby', image: '/baby.png', href: '/collections/baby-new' },
  { word: 'girls', image: '/girl.png', href: '/collections/girls-new' },
  { word: 'boys', image: '/boy.png', href: '/collections/boys-new' },
];

export default function CategorySection() {
  return (
    <section className="w-full py-10 px-4" style={{ background: '#f5f5f5' }}>
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 md:gap-10 flex-wrap">
        {categories.map((cat) => (
          <a
            key={cat.word}
            href={cat.href}
            aria-label={`Shop ${cat.word}`}
            className="category-card group flex flex-col items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-2"
            style={{ textDecoration: 'none' }}
          >
            {/* Small circular photo */}
            <div
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden flex items-center justify-center
                         bg-[#ebebeb] border-4 border-white shadow-md transition-all duration-300
                         group-hover:border-[#e21a5a] group-hover:shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.word}
                className="w-[88%] h-[88%] object-contain object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Compact label below the circle */}
            <span className="text-xl sm:text-2xl font-heading font-bold text-[#e21a5a] tracking-tight lowercase">
              {cat.word}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

