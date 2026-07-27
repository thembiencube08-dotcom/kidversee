'use client';
import React from 'react';

const items = [
  'High Sensory Design',
  'Dermatologist Reviewed',
  'Pediatrician Reviewed',
  'GOTS & Oeko Tex Fabrics Certified',
  '100% Vegan',
  'No Nasty Chemicals',
  'Azo Free Dyes',
  'High Sensory Design',
  'Dermatologist Reviewed',
  'Pediatrician Reviewed',
  'GOTS & Oeko Tex Fabrics Certified',
  '100% Vegan',
  'No Nasty Chemicals',
  'Azo Free Dyes',
];

export default function MarqueeBar() {
  return (
    <div className="bg-[#fff3f3] py-3 overflow-hidden border-y border-[#fce4ec]">
      <div className="flex items-center">
        <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
          {items?.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-sm font-semibold text-[#e21a5a] px-6 font-body">{item}</span>
              <span className="text-[#e21a5a] text-lg">✦</span>
            </span>
          ))}
          {items?.map((item, i) => (
            <span key={`dup-${i}`} className="flex items-center">
              <span className="text-sm font-semibold text-[#e21a5a] px-6 font-body">{item}</span>
              <span className="text-[#e21a5a] text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
