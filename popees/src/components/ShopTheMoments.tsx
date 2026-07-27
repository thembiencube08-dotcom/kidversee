'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopTheMoments() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#e21a5a] text-center mb-10">
          shop the moments
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large left image */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '300px' }}>
            <Link href="/collections/baby-new">
              <Image
                src="https://www.popees.com/cdn/shop/files/You_Baby_-_Header.jpg?v=1775190834&width=1920"
                alt="Shop Baby Collection"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-heading font-bold text-2xl">Baby Collection</h3>
                  <p className="text-white/80 text-sm mt-1">Shop Now</p>
                </div>
              </div>
            </Link>
          </div>
          {/* Top right */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '150px' }}>
            <Link href="/collections/girls-new">
              <Image
                src="https://www.popees.com/cdn/shop/files/You_Baby_Footer_-_Mobile.jpg?v=1775190740&width=828"
                alt="Girls Collection"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="25vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <h3 className="text-white font-heading font-bold text-lg">Girls</h3>
              </div>
            </Link>
          </div>
          {/* Top right 2 */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '150px' }}>
            <Link href="/collections/boys-new">
              <Image
                src="https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=828"
                alt="Boys Collection"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="25vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <h3 className="text-white font-heading font-bold text-lg">Boys</h3>
              </div>
            </Link>
          </div>
          {/* Bottom right */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '150px' }}>
            <Link href="/collections/bamboo">
              <Image
                src="https://www.popees.com/cdn/shop/files/Bamboo_90517547-f1dc-4337-8d36-651a58b527be.jpg?v=1782889207&width=1920"
                alt="Bamboo Collection"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="25vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <h3 className="text-white font-heading font-bold text-lg">Bamboo</h3>
              </div>
            </Link>
          </div>
          {/* Bottom right 2 */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '150px' }}>
            <Link href="/collections/maternity-wear">
              <Image
                src="https://www.popees.com/cdn/shop/files/Maternity_Wear.jpg?v=1772273982&width=1920"
                alt="Maternity Wear"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="25vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <h3 className="text-white font-heading font-bold text-lg">Maternity</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}