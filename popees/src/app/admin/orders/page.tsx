import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminShell from '@/components/AdminShell';
import Link from 'next/link';

async function getOrders() {
  return prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: {
      customer: true,
      items: { include: { product: true } },
    },
  });
}

export default async function AdminOrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    return <p className="p-8">Unauthorized</p>;
  }

  const orders = await getOrders();

  return (
    <AdminShell>
      <div className="min-h-screen bg-[#fbfaf8] text-gray-900">
        <main className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Orders</p>
            <h1 className="text-3xl font-heading font-bold">Manage Orders</h1>
          </div>
          <Link href="/admin" className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
            Back to Dashboard
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#fff0f3] text-left text-xs uppercase tracking-[0.2em] text-gray-600">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Items</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Placed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-4 text-gray-700">{order.customer.firstName} {order.customer.lastName}</td>
                  <td className="px-4 py-4 text-gray-700">{order.status}</td>
                  <td className="px-4 py-4 text-gray-700">{order.items.length}</td>
                  <td className="px-4 py-4 text-gray-900">₹ {order.totalAmount.toFixed(2)}</td>
                  <td className="px-4 py-4 text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
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
