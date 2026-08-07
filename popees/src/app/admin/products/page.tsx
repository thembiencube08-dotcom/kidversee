'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdminShell from '@/components/AdminShell';
import { loadProducts, deleteProduct, type Product } from '@/lib/productStore';

const statusColor: Record<string, string> = {
  ACTIVE: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  DRAFT: 'bg-white/[0.06] text-white/40 border-white/10',
  ARCHIVED: 'bg-red-500/15 text-red-400 border-red-500/20',
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setProducts(loadProducts());
  }, []);

  const categories = ['ALL', ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'ALL' || p.status === filterStatus;
    const matchCat = filterCategory === 'ALL' || p.category === filterCategory;
    return matchSearch && matchStatus && matchCat;
  });

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setProducts(loadProducts());
    setDeleteId(null);
  };

  const stats = {
    total: products.length,
    active: products.filter((p) => p.status === 'ACTIVE').length,
    draft: products.filter((p) => p.status === 'DRAFT').length,
    outOfStock: products.filter((p) => p.stockQuantity === 0).length,
  };

  return (
    <AdminShell>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Catalogue</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">Products</h1>
          </div>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,45,120,0.4)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total', value: stats.total },
            { label: 'Active', value: stats.active, color: 'text-emerald-400' },
            { label: 'Draft', value: stats.draft, color: 'text-white/40' },
            { label: 'Out of Stock', value: stats.outOfStock, color: 'text-red-400' },
          ].map((s) => (
            <div key={s.label} className="bg-[#111] border border-white/[0.07] rounded-xl p-4">
              <p className="text-[11px] text-white/30 mb-1.5">{s.label}</p>
              <p className={`text-xl font-bold ${s.color || 'text-white'}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or SKU…"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#ff2d78]/50 transition-all"
            />
          </div>

          {/* Status filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white/60 focus:outline-none focus:border-[#ff2d78]/50 transition-all"
          >
            {['ALL', 'ACTIVE', 'DRAFT', 'ARCHIVED'].map((s) => (
              <option key={s} value={s} className="bg-[#111]">{s === 'ALL' ? 'All Statuses' : s}</option>
            ))}
          </select>

          {/* Category filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white/60 focus:outline-none focus:border-[#ff2d78]/50 transition-all"
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-[#111]">{c === 'ALL' ? 'All Categories' : c}</option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-xs text-white/25">
          Showing <span className="text-white/60 font-semibold">{filtered.length}</span> of {products.length} products
        </p>

        {/* Table */}
        <div className="bg-[#111] border border-white/[0.07] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  {['Product', 'SKU', 'Price', 'Stock', 'Sizes', 'Status', 'Category', 'Updated', ''].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-widest whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-white/25 text-sm">
                      No products found. <Link href="/admin/products/new" className="text-[#ff2d78] hover:underline">Add one →</Link>
                    </td>
                  </tr>
                ) : filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/[0.05] flex-shrink-0 border border-white/[0.06]">
                          {p.img && p.img !== '/assets/images/no_image.png' ? (
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-white/80 line-clamp-1 max-w-[200px]">{p.title}</p>
                          {p.collection && <p className="text-[11px] text-white/25 mt-0.5">{p.collection}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white/35 font-mono text-xs whitespace-nowrap">{p.sku || '—'}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-semibold text-white">₹{p.price.toLocaleString('en-IN')}</span>
                      {p.originalPrice && (
                        <span className="block text-[11px] text-white/25 line-through">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`font-semibold text-sm ${
                        p.stockQuantity === 0 ? 'text-red-400' :
                        p.stockQuantity < 10 ? 'text-amber-400' : 'text-white/60'
                      }`}>
                        {p.stockQuantity === 0 ? 'Out of stock' : p.stockQuantity}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/30 text-xs">
                      {p.sizes?.length > 0 ? p.sizes.slice(0, 3).join(', ') + (p.sizes.length > 3 ? `+${p.sizes.length - 3}` : '') : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/35 whitespace-nowrap">{p.category}</td>
                    <td className="px-4 py-3 text-white/25 text-xs whitespace-nowrap">{p.updatedAt}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/admin/products/${p.id}/edit`}
                          className="text-[11px] text-white/30 hover:text-white transition-colors font-medium px-2 py-1 rounded border border-white/[0.06] hover:border-white/[0.16]"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => setDeleteId(p.id)}
                          className="text-[11px] text-red-400/50 hover:text-red-400 transition-colors font-medium px-2 py-1 rounded border border-red-500/10 hover:border-red-500/30"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setDeleteId(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-[#111] border border-white/[0.10] rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white text-center mb-1">Delete product?</h3>
            <p className="text-sm text-white/35 text-center mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-lg border border-white/[0.08] text-sm text-white/50 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 rounded-lg bg-red-500/80 hover:bg-red-500 text-white text-sm font-semibold transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
