import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminShell from '@/components/AdminShell';
import Link from 'next/link';

async function getProducts() {
  return prisma.product.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 20,
    include: { media: true, categories: true, collections: true },
  });
}

export default async function AdminProductsPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    return <p className="p-8">Unauthorized</p>;
  }

  const products = await getProducts();

  return (
    <AdminShell>
      <div className="min-h-screen bg-[#fbfaf8] text-gray-900">
        <main className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Products</p>
            <h1 className="text-3xl font-heading font-bold">Product Management</h1>
          </div>
          <div className="inline-flex gap-3">
            <Link href="/admin" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
              Dashboard
            </Link>
            <Link href="/admin/products/new" className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700">
              Add Product
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#fff0f3] text-left text-xs uppercase tracking-[0.2em] text-gray-600">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Categories</th>
                <th className="px-4 py-3">Collections</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-900">{product.title}</td>
                  <td className="px-4 py-4 text-gray-700">{product.sku ?? '—'}</td>
                  <td className="px-4 py-4 text-gray-900">₹ {product.price.toFixed(2)}</td>
                  <td className="px-4 py-4 text-gray-700">{product.stockQuantity}</td>
                  <td className="px-4 py-4 text-gray-700">{product.status}</td>
                  <td className="px-4 py-4 text-gray-700">{product.categories.map((c) => c.name).join(', ') || '—'}</td>
                  <td className="px-4 py-4 text-gray-700">{product.collections.map((c) => c.name).join(', ') || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
    </AdminShell>
  );
}
