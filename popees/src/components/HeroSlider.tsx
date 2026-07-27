'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: number;
  desktopImg: string;
  mobileImg: string;
  href: string;
  alt: string;
}

const slides: Slide[] = [
{
  id: 1,
  desktopImg: 'https://www.popees.com/cdn/shop/files/Just_Arrived.jpg?v=1782889157&width=1920',
  mobileImg: 'https://www.popees.com/cdn/shop/files/just_arrived.png?v=1782889175&width=828',
  href: '/collections/whats-new-baby-care',
  alt: 'Just Arrived - New Baby Collection'
},
{
  id: 2,
  desktopImg: 'https://www.popees.com/cdn/shop/files/fmcg_352d6334-9140-4f9c-bb6d-274bbe2f58ba.png?v=1782889110&width=1920',
  mobileImg: 'https://www.popees.com/cdn/shop/files/fmcg_1.png?v=1782889131&width=828',
  href: '/collections/fmcg',
  alt: 'Baby Basics - FMCG Collection'
},
{
  id: 3,
  desktopImg: 'https://www.popees.com/cdn/shop/files/smart_picks.jpg?v=1782889047&width=1920',
  mobileImg: 'https://www.popees.com/cdn/shop/files/smart_picks.png?v=1782889075&width=828',
  href: '/collections/end-of-season-sale',
  alt: 'Smart Pick Sale'
},
{
  id: 4,
  desktopImg: 'https://www.popees.com/cdn/shop/files/diapers_d606096a-560e-4a72-8128-efd3294b6860.jpg?v=1782889254&width=1920',
  mobileImg: 'https://www.popees.com/cdn/shop/files/diapers_0416ed7f-b364-43dc-aeea-4ef5f6ec1e67.png?v=1782889278&width=828',
  href: '/collections/diaper-new',
  alt: 'Baby Diapers Collection'
},
{
  id: 5,
  desktopImg: 'https://www.popees.com/cdn/shop/files/Bamboo_90517547-f1dc-4337-8d36-651a58b527be.jpg?v=1782889207&width=1920',
  mobileImg: 'https://www.popees.com/cdn/shop/files/bamboo.png?v=1782889228&width=828',
  href: '/collections/bamboo',
  alt: 'Bamboo Collection'
}];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full overflow-hidden bg-[#fef5ee]" style={{ aspectRatio: '16/6' }}>
      {/* Slides */}
      {slides.map((slide, index) =>
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
        index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`
        }>
        
          <Link href={slide.href} className="absolute inset-0">
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-full relative">
              <Image
              src={slide.desktopImg}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw" />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden w-full h-full relative">
              <Image
              src={slide.mobileImg}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw" />
            </div>
          </Link>
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) =>
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`rounded-full transition-all duration-300 ${
          index === current ?
          'w-6 h-2.5 bg-[#e21a5a]' :
          'w-2.5 h-2.5 bg-white/70 hover:bg-white'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </div>);

}