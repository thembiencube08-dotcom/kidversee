'use client';
import React from 'react';
import Image from 'next/image';

export default function EverythingBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop */}
      <div className="hidden md:block relative w-full" style={{ aspectRatio: '16/5' }}>
        <Image
          src="https://www.popees.com/cdn/shop/files/You_Baby_-_Header.jpg?v=1775190834&width=1920"
          alt="Everything for You & Baby"
          fill
          className="object-cover object-center"
          sizes="100vw" />
        
      </div>
      {/* Mobile */}
      <div className="block md:hidden relative w-full" style={{ aspectRatio: '3/2' }}>
        <Image
          src="https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=828"
          alt="Everything for You & Baby"
          fill
          className="object-cover object-center"
          sizes="100vw" />
        
      </div>
    </section>);

}