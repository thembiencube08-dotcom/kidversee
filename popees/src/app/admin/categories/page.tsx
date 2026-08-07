'use client';
import React from 'react';
import AdminShell from '@/components/AdminShell';

const categories = [
  { id: 'cat1', name: 'Baby', slug: 'baby', products: 45, created: '2026-01-01' },
  { id: 'cat2', name: 'Girls', slug: 'girls', products: 60, created: '2026-01-01' },
  { id: 'cat3', name: 'Boys', slug: 'boys', products: 38, created: '2026-01-01' },
  { id: 'cat4', name: 'Bamboo', slug: 'bamboo', products: 14, created: '2026-02-01' },
  { id: 'cat5', name: 'Diaper', slug: 'diaper', products: 12, created: '2026-01-10' },
  { id: 'cat6', name: 'Baby Basics', slug: 'baby-basics', products: 20, created: '2026-01-10' },
  { id: 'cat7', name: 'Maternity', slug: 'maternity', products: 9, created: '2026-02-05' },
  { id: 'cat8', name: 'Accessories', slug: 'accessories', products: 15, created: '2026-02-08' },
  { id: 'cat9', name: 'Toys & Gaming', slug: 'toys-gaming', products: 11, created: '2026-03-01' },
];

export default function AdminCategoriesPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Catalogue</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Categories</h1>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-pink-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Category
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white border border-pink-100 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-pink-50 border border-pink-200 flex items-center justify-center">
                  <span className="text-[#ff2d78] text-sm font-bold">{cat.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{cat.name}</p>
                  <p className="text-[11px] text-gray-400 font-mono">{cat.slug}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">{cat.products}</p>
                <p className="text-[10px] text-gray-400">products</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50">
                  {['Name','Slug','Products','Created'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-pink-50/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800">{cat.name}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{cat.slug}</td>
                    <td className="px-4 py-3 text-gray-600">{cat.products}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{cat.created}</td>
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
