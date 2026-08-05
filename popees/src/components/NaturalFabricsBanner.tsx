'use client';
import React from 'react';
import Image from 'next/image';

export default function NaturalFabricsBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block relative w-full" style={{ aspectRatio: '16/5' }}>
        <Image
          src="https://www.popees.com/cdn/shop/files/Natural_fabrics.jpg?v=1778733729&width=1920"
          alt="Natural fabrics"
          fill
          className="object-cover object-center"
          sizes="100vw" />
      </div>
      {/* Mobile Banner */}
      <div className="block md:hidden relative w-full" style={{ aspectRatio: '3/2' }}>
        <Image
          src="https://www.popees.com/cdn/shop/files/Natural_fabrics_M.jpg?v=1778733725&width=828"
          alt="Natural fabrics"
          fill
          className="object-cover object-center"
          sizes="100vw" />
      </div>
    </section>);

}