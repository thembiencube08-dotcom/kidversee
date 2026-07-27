'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
{
  label: 'Clothing',
  href: '/collections/baby-clothing',
  img: 'https://www.popees.com/cdn/shop/files/Clothing_ee582981-25a2-4538-b958-230f0b6fe8c4.jpg?v=1777098753&width=1920'
},
{
  label: 'Baby Basics',
  href: '/collections/fmcg',
  img: 'https://www.popees.com/cdn/shop/files/essentials.jpg?v=1775462724&width=1920'
},
{
  label: 'Toys & Gaming',
  href: '/collections/toys-gaming-new',
  img: 'https://www.popees.com/cdn/shop/files/Toys_4c5450c8-886a-4359-8369-e431fa3c74cd.jpg?v=1776516527&width=1920'
},
{
  label: 'Maternity Wear',
  href: '/collections/womens-maternity-dress-new',
  img: 'https://www.popees.com/cdn/shop/files/Maternity_Wear.jpg?v=1772273982&width=1920'
},
{
  label: 'Combo Packs',
  href: '/collections/combo-packs',
  img: 'https://www.popees.com/cdn/shop/files/Combo_0a7a2c09-9eda-4cdc-9bb7-1107d999fd4e.jpg?v=1776516915&width=1920'
},
{
  label: 'Rompers',
  href: '/collections/baby-rompers',
  img: 'https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=828'
}];


export default function EverythingForYou() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#e21a5a] text-center mb-8">
          Everything for You &amp; Baby
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {categories?.map((cat) =>
          <Link
            key={cat?.label}
            href={cat?.href}
            className="group flex flex-col items-center gap-2">
            
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                <Image
                src={cat?.img}
                alt={cat?.label}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 33vw, 16vw" />
              
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 text-center group-hover:text-[#e21a5a] transition-colors">
                {cat?.label}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </section>);

}