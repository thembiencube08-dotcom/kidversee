'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SupplierShell from '@/components/SupplierShell';
import { getSupplierSession, getSupplierProducts, type SupplierProduct } from '@/lib/supplierAuth';

export default function SupplierDashboard() {
  const [products, setProducts] = useState<SupplierProduct[]>([]);
  const [session, setSession] = useState<{ id: string; name: string; email: string } | null>(null);

  useEffect(() => {
    const s = getSupplierSession();
    setSession(s);
    if (s) setProducts(getSupplierProducts(s.id));
  }, []);

  const active = products.filter((p) => p.status === 'ACTIVE').length;
  const draft = products.filter((p) => p.status === 'DRAFT').length;
  const pending = products.filter((p) => p.status === 'PENDING').length;
  const totalStock = products.reduce((s, p) => s + p.stock, 0);

  const stats = [
    { label: 'Total Products', value: products.length, color: 'text-gray-800' },
    { label: 'Active', value: active, color: 'text-emerald-600' },
    { label: 'Draft', value: draft, color: 'text-gray-400' },
    { label: 'Pending Review', value: pending, color: 'text-amber-600' },
    { label: 'Total Stock', value: totalStock, color: 'text-[#ff2d78]' },
  ];

  return (
    <SupplierShell>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Welcome back</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
              {session?.name ?? 'Supplier Dashboard'}
            </h1>
          </div>
          <Link href="/supplier/products/new"
            className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-pink-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-pink-100 rounded-xl p-4 shadow-sm">
              <p className="text-[11px] text-gray-400 mb-1.5">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Recent products */}
        <div className="bg-white border border-pink-100 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-pink-50">
            <p className="text-sm font-bold text-gray-800">Recent Products</p>
            <Link href="/supplier/products" className="text-xs font-semibold text-[#ff2d78] hover:underline">View all →</Link>
          </div>
          {products.length === 0 ? (
            <div className="py-16 text-center">
              <svg className="w-12 h-12 text-pink-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <p className="text-gray-400 text-sm">No products yet.</p>
              <Link href="/supplier/products/new" className="mt-3 inline-block text-sm font-semibold text-[#ff2d78] hover:underline">
                Add your first product →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-pink-50 bg-pink-50">
                    {['Product', 'Price', 'Stock', 'Status', 'Added'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-50">
                  {products.slice(0, 8).map((p) => {
                    const statusColors: Record<string, string> = {
                      ACTIVE: 'bg-emerald-50 text-emerald-600 border-emerald-200',
                      DRAFT: 'bg-gray-50 text-gray-400 border-gray-200',
                      PENDING: 'bg-amber-50 text-amber-600 border-amber-200',
                    };
                    return (
                      <tr key={p.id} className="hover:bg-pink-50/50 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            {p.images[0] && <img src={p.images[0]} className="w-8 h-8 rounded-lg object-cover flex-shrink-0 border border-pink-100" alt="" />}
                            <span className="font-medium text-gray-800 line-clamp-1 max-w-[200px]">{p.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-800">₹{p.price.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-3 text-gray-500">{p.stock}</td>
                        <td className="px-4 py-3">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColors[p.status]}`}>{p.status}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-400 text-xs">{p.createdAt}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { title: 'Add a Product', desc: 'List a new product for Popees to review.', href: '/supplier/products/new', icon: '📦' },
            { title: 'View Orders', desc: 'See orders placed for your products.', href: '/supplier/orders', icon: '📋' },
            { title: 'Update Profile', desc: 'Edit your business details and contact info.', href: '/supplier/profile', icon: '✏️' },
          ].map((a) => (
            <Link key={a.title} href={a.href}
              className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-2xl mb-3">{a.icon}</div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-[#ff2d78] transition-colors">{a.title}</p>
              <p className="text-xs text-gray-400 mt-1">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </SupplierShell>
  );
}
