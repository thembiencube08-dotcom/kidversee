'use client';
import React from 'react';
import AdminShell from '@/components/AdminShell';

const mediaItems = [
  { id: 'm1', name: 'Hero Banner — New Arrivals', type: 'Banner', size: '1920×600', url: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=800' },
  { id: 'm2', name: 'Bath & Grooming Header', type: 'Header', size: '1920×480', url: 'https://www.popees.com/cdn/shop/files/Bath_Grooming_Header.jpg?v=1776144452&width=800' },
  { id: 'm3', name: 'Baby Soaps Category', type: 'Category', size: '600×600', url: 'https://www.popees.com/cdn/shop/files/Baby_Soaps_28aa55a0-08b9-4d3c-8b58-53748473ceae.jpg?v=1776514699&width=400' },
  { id: 'm4', name: 'Shampoo & Bodywash Category', type: 'Category', size: '600×600', url: 'https://www.popees.com/cdn/shop/files/Shampoo_Bodywash_864ed928-fde8-4172-928c-31822c5d835b.jpg?v=1776514751&width=400' },
  { id: 'm5', name: 'Towels Category', type: 'Category', size: '600×600', url: 'https://www.popees.com/cdn/shop/files/Towels_306fbbf1-0700-4533-a90a-f118657851eb.jpg?v=1777098537&width=400' },
  { id: 'm6', name: 'Grooming Category', type: 'Category', size: '600×600', url: 'https://www.popees.com/cdn/shop/files/Grooming_635ca576-b29a-4eb9-807f-d8669c238025.jpg?v=1772387129&width=400' },
];

const typeColor: Record<string, string> = {
  Banner:   'bg-pink-50 text-[#ff2d78] border-pink-200',
  Header:   'bg-blue-50 text-blue-600 border-blue-200',
  Category: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default function AdminMediaPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Assets</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Media Library</h1>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-pink-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2">
          {['All','Banner','Header','Category'].map((t) => (
            <button key={t}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                t === 'All'
                  ? 'bg-[#ff2d78] text-white border-[#ff2d78]'
                  : 'text-gray-500 bg-white border-pink-200 hover:border-[#ff2d78] hover:text-[#ff2d78]'
              }`}>
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {mediaItems.map((item) => (
            <div key={item.id} className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-40 bg-gray-50 overflow-hidden">
                <img src={item.url} alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full border ${typeColor[item.type]}`}>
                  {item.type}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-800 leading-snug mb-2">{item.name}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">{item.size}</span>
                  <div className="flex items-center gap-3">
                    <button className="text-[11px] text-gray-400 hover:text-gray-700 transition-colors">Copy URL</button>
                    <button className="text-[11px] text-red-400 hover:text-red-600 transition-colors">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
