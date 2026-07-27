'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
{
  label: 'baby',
  href: '/collections/baby-new',
  img: 'https://www.popees.com/cdn/shop/files/Natural_fabrics_M.jpg?v=1778733725&width=828',
  color: 'text-[#e21a5a]'
},
{
  label: 'girls',
  href: '/collections/girls-new',
  img: 'https://www.popees.com/cdn/shop/files/Natural_fabrics.jpg?v=1778733729&width=1920',
  color: 'text-[#e21a5a]'
},
{
  label: 'boys',
  href: '/collections/boys-new',
  img: 'https://www.popees.com/cdn/shop/files/Natural_fabrics_M.jpg?v=1778733725&width=828',
  color: 'text-[#e21a5a]'
}];


const babyImg = 'https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=828';
const girlsImg = 'https://www.popees.com/cdn/shop/files/You_Baby_-_Header.jpg?v=1775190834&width=1920';
const boysImg = 'https://www.popees.com/cdn/shop/files/You_Baby_Footer_-_Mobile.jpg?v=1775190740&width=828';

const categoryData = [
{ label: 'baby', href: '/collections/baby-new', img: babyImg },
{ label: 'girls', href: '/collections/girls-new', img: girlsImg },
{ label: 'boys', href: '/collections/boys-new', img: boysImg }];


export default function CategoryCircles() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12">
          {categoryData?.map((cat) =>
          <Link
            key={cat?.label}
            href={cat?.href}
            className="flex flex-col items-center gap-3 group">
            
              {/* Circle Image */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#fce4ec] group-hover:border-[#e21a5a] transition-all duration-300 shadow-md">
                <Image
                src={cat?.img}
                alt={cat?.label}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 128px, 192px" />
              
              </div>
              {/* Label with overlapping letters style */}
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#e21a5a] tracking-tight group-hover:scale-105 transition-transform duration-200">
                {cat?.label}
              </h2>
            </Link>
          )}
        </div>
      </div>
    </section>);

}