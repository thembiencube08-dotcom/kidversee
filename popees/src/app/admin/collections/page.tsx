'use client';
import React from 'react';
import Link from 'next/link';
import AdminShell from '@/components/AdminShell';

const collections = [
  { id: 'c1', name: "What's New", slug: 'whats-new-baby-care', products: 22, created: '2026-01-10' },
  { id: 'c2', name: 'Trending Now', slug: 'trending-now-baby-care', products: 18, created: '2026-01-10' },
  { id: 'c3', name: 'Bamboo Collection', slug: 'bamboo', products: 14, created: '2026-02-01' },
  { id: 'c4', name: 'Best Selling', slug: 'best-selling-products', products: 30, created: '2026-01-15' },
  { id: 'c5', name: 'Girls T-Shirts', slug: 'girls-t-shirt-new', products: 13, created: '2026-03-01' },
  { id: 'c6', name: 'Girls Tops', slug: 'girls-top-new', products: 23, created: '2026-03-01' },
  { id: 'c7', name: 'Girls Pants', slug: 'girls-pants-new', products: 8, created: '2026-03-01' },
  { id: 'c8', name: 'Girls Shorts', slug: 'girls-shorts-new', products: 6, created: '2026-03-01' },
  { id: 'c9', name: 'Girls Dresses', slug: 'girls-dresses-new', products: 10, created: '2026-03-01' },
  { id: 'c10', name: 'Baby Tops', slug: 'baby-top-new', products: 23, created: '2026-03-15' },
  { id: 'c11', name: 'Diaper Range', slug: 'diaper-new', products: 12, created: '2026-02-10' },
  { id: 'c12', name: 'Baby Basics', slug: 'fmcg', products: 20, created: '2026-02-20' },
  { id: 'c13', name: 'End of Season Sale', slug: 'end-of-season-sale', products: 35, created: '2026-06-01' },
  { id: 'c14', name: 'Maternity Wear', slug: 'maternity-wear', products: 9, created: '2026-02-05' },
];

export default function AdminCollectionsPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Catalogue</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Collections</h1>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-pink-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Collection
          </button>
        </div>

        <div className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50">
                  {['Collection','Slug','Products','Created','Actions'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {collections.map((col) => (
                  <tr key={col.id} className="hover:bg-pink-50/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800">{col.name}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{col.slug}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-semibold bg-pink-50 text-[#ff2d78] border border-pink-200 px-2 py-0.5 rounded-full">
                        {col.products} items
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{col.created}</td>
                    <td className="px-4 py-3">
                      <Link href={`/collections/${col.slug}`} target="_blank"
                        className="text-xs text-gray-400 hover:text-[#ff2d78] transition-colors font-medium">
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
