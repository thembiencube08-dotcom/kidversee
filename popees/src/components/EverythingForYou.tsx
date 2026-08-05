'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flower2 } from 'lucide-react';

type Category = {
  label: string;
  href: string;
  img: string;
};

const categories: Category[] = [
  {
    label: 'Clothing',
    href: '/collections/baby-clothing',
    img: 'https://www.popees.com/cdn/shop/files/Clothing_ee582981-25a2-4538-b958-230f0b6fe8c4.jpg?v=1777098753&width=900',
  },
  {
    label: 'Baby Basics',
    href: '/collections/fmcg',
    img: 'https://www.popees.com/cdn/shop/files/essentials.jpg?v=1775462724&width=900',
  },
  {
    label: 'Toys & Gaming',
    href: '/collections/toys-gaming-new',
    img: 'https://www.popees.com/cdn/shop/files/Toys_4c5450c8-886a-4359-8369-e431fa3c74cd.jpg?v=1776516527&width=900',
  },
  {
    label: 'Maternity Wear',
    href: '/collections/womens-maternity-dress-new',
    img: 'https://www.popees.com/cdn/shop/files/Maternity_Wear.jpg?v=1772273982&width=900',
  },
  {
    label: 'Combo Packs',
    href: '/collections/combo-packs',
    img: 'https://www.popees.com/cdn/shop/files/Combo_0a7a2c09-9eda-4cdc-9bb7-1107d999fd4e.jpg?v=1776516915&width=900',
  },
  {
    label: 'Rompers',
    href: '/collections/baby-rompers',
    img: 'https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=900',
  },
];

export default function EverythingForYou() {
  return (
    <section
      aria-labelledby="everything-for-you-heading"
      className="w-full bg-[#FDF1F4] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center justify-center text-center md:mb-20">
          <Flower2
            aria-hidden="true"
            strokeWidth={1.5}
            className="mb-4 h-10 w-10 text-[#e21a5a]"
          />
          <h2
            id="everything-for-you-heading"
            className="font-heading font-extrabold tracking-tight text-[#e21a5a] text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
            Everything for You <span className="whitespace-nowrap">&amp; Baby</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm text-[#a85779] md:text-base">
            Browse our favourite picks — every essential for your little one, curated with love.
          </p>
        </div>

        {/* Desktop & tablet grid */}
        <ul className="hidden gap-6 md:grid md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} />
          ))}
        </ul>

        {/* Mobile horizontal snap carousel */}
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 md:hidden">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.label}
              cat={cat}
              liClassName="w-[72%] min-w-[240px] shrink-0 snap-center"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

type CategoryCardProps = {
  cat: Category;
  liClassName?: string;
};

function CategoryCard({ cat, liClassName = '' }: CategoryCardProps) {
  return (
    <li className={liClassName}>
      <Link
        href={cat.href}
        aria-label={`Shop ${cat.label}`}
        className="group block rounded-[36px] bg-white p-4 shadow-[0_12px_32px_-14px_rgba(226,26,90,0.28)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_55px_-16px_rgba(226,26,90,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e21a5a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF1F4] md:p-5">
        <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-[#fdf2f4]">
          <Image
            src={cat.img}
            alt={cat.label}
            fill
            loading="lazy"
            sizes="(max-width: 767px) 72vw, (max-width: 1024px) 30vw, 16vw"
            className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-center font-heading text-sm font-bold text-[#3a3a3a] transition-colors duration-300 group-hover:text-[#e21a5a] md:text-base">
          {cat.label}
        </h3>
      </Link>
    </li>
  );
}
