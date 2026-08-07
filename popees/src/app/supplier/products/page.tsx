'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SupplierShell from '@/components/SupplierShell';
import { getSupplierSession, getSupplierProducts, deleteSupplierProduct, type SupplierProduct } from '@/lib/supplierAuth';

const statusColor: Record<string, string> = {
  ACTIVE: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  DRAFT: 'bg-gray-50 text-gray-400 border-gray-200',
  PENDING: 'bg-amber-50 text-amber-600 border-amber-200',
};

export default function SupplierProductsPage() {
  const [products, setProducts] = useState<SupplierProduct[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const load = () => {
    const s = getSupplierSession();
    if (s) setProducts(getSupplierProducts(s.id));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = (id: string) => {
    deleteSupplierProduct(id);
    load();
    setDeleteId(null);
  };

  return (
    <SupplierShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Catalogue</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">My Products</h1>
          </div>
          <Link href="/supplier/products/new"
            className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-pink-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </Link>
        </div>

        <div className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm">
          {products.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-sm mb-3">You haven't added any products yet.</p>
              <Link href="/supplier/products/new" className="text-sm font-semibold text-[#ff2d78] hover:underline">Add your first product →</Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-pink-100 bg-pink-50">
                    {['Product', 'Price', 'Stock', 'Category', 'Status', 'Added', ''].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-50">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-pink-50/50 transition-colors group">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          {p.images[0]
                            ? <img src={p.images[0]} className="w-9 h-9 rounded-lg object-cover border border-pink-100 flex-shrink-0" alt="" />
                            : <div className="w-9 h-9 rounded-lg bg-pink-50 border border-pink-100 flex-shrink-0" />}
                          <span className="font-medium text-gray-800 line-clamp-1 max-w-[180px]">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">
                        ₹{p.price.toLocaleString('en-IN')}
                        {p.originalPrice && <span className="block text-[11px] text-gray-300 line-through">₹{p.originalPrice.toLocaleString('en-IN')}</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{p.stock}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs">{p.category}</td>
                      <td className="px-4 py-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[p.status]}`}>{p.status}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{p.createdAt}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => setDeleteId(p.id)}
                          className="text-[11px] text-red-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 font-medium">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setDeleteId(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white border border-pink-100 rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-bold text-gray-800 text-center mb-1">Delete product?</h3>
            <p className="text-sm text-gray-400 text-center mb-5">This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:text-gray-800 transition-all">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}
    </SupplierShell>
  );
}
