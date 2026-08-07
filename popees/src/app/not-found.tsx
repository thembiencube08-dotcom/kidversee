'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-5 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Pink glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] bg-[#ff2d78]/10 pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        <div className="mb-2">
          <span className="text-[130px] font-black leading-none tracking-tighter text-white/[0.04] select-none">
            404
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 -mt-6">
          <div className="w-8 h-8 rounded-xl bg-[#ff2d78] flex items-center justify-center">
            <span className="text-white font-black text-base leading-none">P</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">popees</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3">
          Page not found
        </h1>
        <p className="text-sm text-white/40 leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to something good.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-white/60 hover:text-white px-5 py-2.5 rounded-lg transition-all hover:bg-white/[0.08] w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Go back
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-[0_0_24px_rgba(255,45,120,0.5)] w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to home
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="text-[11px] font-semibold text-white/25 uppercase tracking-widest mb-4">
            Popular pages
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: 'Shop All', href: '/collections/all' },
              { label: 'New Arrivals', href: '/collections/whats-new-baby-care' },
              { label: 'Baby', href: '/collections/baby-new' },
              { label: 'Bamboo', href: '/collections/bamboo' },
              { label: 'Contact', href: '/pages/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium text-white/35 hover:text-white bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] px-3 py-1.5 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
