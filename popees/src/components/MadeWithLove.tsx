'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
{
  label: 'Baby Soaps',
  href: '/collections/soap-new',
  img: 'https://www.popees.com/cdn/shop/files/Baby_Soaps_28aa55a0-08b9-4d3c-8b58-53748473ceae.jpg?v=1776514699&width=1920'
},
{
  label: 'Shampoo & Bodywash',
  href: '/collections/shampoo-new',
  img: 'https://www.popees.com/cdn/shop/files/Shampoo_Bodywash_864ed928-fde8-4172-928c-31822c5d835b.jpg?v=1776514751&width=1920'
},
{
  label: 'Towels',
  href: '/collections/baby-towels-new',
  img: 'https://www.popees.com/cdn/shop/files/Towels_306fbbf1-0700-4533-a90a-f118657851eb.jpg?v=1777098537&width=1920'
},
{
  label: 'Tissue',
  href: '/collections/tissue-new',
  img: 'https://www.popees.com/cdn/shop/files/freepik_2813352476_ab2d695f-a413-439b-beba-9b760a49d281.jpg?v=1776515600&width=1920'
},
{
  label: 'Grooming',
  href: '/collections/hair-accessories-new',
  img: 'https://www.popees.com/cdn/shop/files/Grooming_635ca576-b29a-4eb9-807f-d8669c238025.jpg?v=1772387129&width=1920'
},
{
  label: 'Oral Care',
  href: '/collections/baby-oral-care-new',
  img: 'https://www.popees.com/cdn/shop/files/Bath_Grooming_Header.jpg?v=1776144452&width=1920'
}];


export default function MadeWithLove() {
  return (
    <section className="py-10 bg-[#fff3f3]">
      {/* Header Banner */}
      <div className="relative w-full mb-8" style={{ aspectRatio: '16/4' }}>
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="https://www.popees.com/cdn/shop/files/Bath_Grooming_Header.jpg?v=1776144452&width=1920"
            alt="Made With Love - Bath & Grooming"
            fill
            className="object-cover object-center"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-lg">
              Made With Love
            </h2>
          </div>
        </div>
        <div className="block md:hidden relative w-full" style={{ aspectRatio: '3/2' }}>
          <Image
            src="https://www.popees.com/cdn/shop/files/Bath_Grooming_Header_-_Mobile.jpg?v=1776144443&width=828"
            alt="Made With Love - Bath & Grooming"
            fill
            className="object-cover object-center"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-2xl font-heading font-bold text-white drop-shadow-lg">
              Made With Love
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {categories?.map((cat) =>
          <Link
            key={cat?.label}
            href={cat?.href}
            className="group flex flex-col items-center gap-2">
            
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow duration-200">
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
      {/* Footer Banner */}
      <div className="relative w-full mt-8" style={{ aspectRatio: '16/4' }}>
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="https://www.popees.com/cdn/shop/files/Bath_Grooming_Footer.jpg?v=1776144454&width=1920"
            alt="Bath and Grooming Footer"
            fill
            className="object-cover object-center"
            sizes="100vw" />
          
        </div>
        <div className="block md:hidden relative w-full" style={{ aspectRatio: '3/2' }}>
          <Image
            src="https://www.popees.com/cdn/shop/files/Bath_Grooming_Footer_-_Mobile.jpg?v=1776144448&width=828"
            alt="Bath and Grooming Footer"
            fill
            className="object-cover object-center"
            sizes="100vw" />
          
        </div>
      </div>
    </section>);

}