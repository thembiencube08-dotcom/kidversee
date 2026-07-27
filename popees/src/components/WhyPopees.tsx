'use client';
import React from 'react';
import Image from 'next/image';

export default function WhyPopees() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#fff3f3]">
      {/* Cloud Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.popees.com/cdn/shop/files/Cloud_Background_e5741d20-f65a-47bf-8cdd-5eccdf274967.svg?v=1773742388&width=3840"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw" />
        
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#e21a5a] mb-4 leading-tight">
              why families<br />
              <span className="text-[#e21a5a]">choose popees?</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
              At Popees, garments are thoughtfully crafted for your baby&apos;s comfort and safety, using soft organic and hypoallergenic fabrics with uncompromising quality.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="w-14 h-14 rounded-full bg-[#fce4ec] flex items-center justify-center">
                  <Image
                    src="https://popees-online.myshopify.com/cdn/shop/files/Untitled_design_16.png?v=1774347231&width=1200"
                    alt="Comfort & Safety"
                    width={40}
                    height={40}
                    className="object-contain" />
                  
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Comfort &amp; Safety</p>
                  <p className="text-gray-500 text-xs">Safe and comfortable</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="w-14 h-14 rounded-full bg-[#fce4ec] flex items-center justify-center">
                  <Image
                    src="https://popees-online.myshopify.com/cdn/shop/files/Untitled_design_15.png?v=1774347221&width=1200"
                    alt="Organic Quality"
                    width={40}
                    height={40}
                    className="object-contain" />
                  
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Organic Quality</p>
                  <p className="text-gray-500 text-xs">Soft, hypoallergenic cotton</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="w-14 h-14 rounded-full bg-[#fce4ec] flex items-center justify-center">
                  <Image
                    src="https://popees-online.myshopify.com/cdn/shop/files/Untitled_design_14.png?v=1774347253&width=1200"
                    alt="Crafted with Care"
                    width={40}
                    height={40}
                    className="object-contain" />
                  
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Crafted with Care</p>
                  <p className="text-gray-500 text-xs">Gentle, durable stitching</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 w-full md:w-80 lg:w-96">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://www.popees.com/cdn/shop/files/freepik_a-baby-wearing-a-striped-_2478252082.png?v=1777034964&width=1920"
                alt="Baby wearing Popees clothing"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}