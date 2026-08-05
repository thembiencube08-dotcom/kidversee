import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminShell from '@/components/AdminShell';

async function getDashboardStats() {
  const [totalProducts, totalOrders, totalCustomers, totalRevenue] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.customer.count(),
    prisma.order.aggregate({ _sum: { totalAmount: true } }),
  ]);

  const lowStock = await prisma.product.count({ where: { stockQuantity: { lt: 10 } } });
  const pendingOrders = await prisma.order.count({ where: { status: 'PENDING' } });

  return {
    totalProducts,
    totalOrders,
    totalCustomers,
    totalRevenue: totalRevenue._sum.totalAmount ?? 0,
    lowStock,
    pendingOrders,
  };
}

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Access denied</h1>
          <p className="text-gray-600 mb-6">You must be signed in as an admin to view this page.</p>
          <Link href="/admin/login" className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-700 transition">
            Go to Admin Login
          </Link>
        </div>
      </div>
    );
  }

  const stats = await getDashboardStats();

  return (
    <AdminShell>
      <div className="min-h-screen bg-[#f7f5f2] text-gray-900">
        <Header />
        <main className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Admin Panel</p>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mt-2">Popees Store Dashboard</h1>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
              <span className="text-sm text-gray-600">Logged in as</span>
              <span className="text-sm font-semibold text-gray-900">{session.user?.email}</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {[
              { label: 'Total Revenue', value: `₹ ${stats.totalRevenue.toFixed(2)}` },
              { label: 'Total Orders', value: stats.totalOrders },
              { label: 'Total Customers', value: stats.totalCustomers },
              { label: 'Total Products', value: stats.totalProducts },
              { label: 'Low Stock', value: stats.lowStock },
              { label: 'Pending Orders', value: stats.pendingOrders },
            ].map((card) => (
              <div key={card.label} className="rounded-3xl bg-white p-5 shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="mt-3 text-2xl font-semibold text-gray-900">{card.value}</p>
              </div>
            ))}
          </div>

          <section className="mt-10 grid gap-6 xl:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-gray-200">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sales Overview</p>
                  <p className="text-xs text-gray-500">Daily / Weekly / Monthly / Yearly</p>
                </div>
                <div className="rounded-full bg-pink-50 px-3 py-1 text-pink-700 text-xs">Live</div>
              </div>
              <div className="h-72 rounded-[1.5rem] bg-[#fff0f3] flex items-center justify-center text-sm text-gray-500">Sales chart placeholder</div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-gray-200 xl:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Recent Orders</p>
                  <p className="text-xs text-gray-500">Latest customer purchases</p>
                </div>
                <Link href="/admin/orders" className="text-sm font-semibold text-pink-600 hover:text-pink-700">View all</Link>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 rounded-3xl bg-[#fff6f8] p-4 text-sm text-gray-700">
                  <span>Order</span>
                  <span>Customer</span>
                  <span>Status</span>
                </div>
                <div className="grid grid-cols-3 gap-4 rounded-3xl bg-gray-50 p-4 text-sm text-gray-900">
                  <span>#OR-10234</span>
                  <span>Ria Sharma</span>
                  <span>Pending</span>
                </div>
                <div className="grid grid-cols-3 gap-4 rounded-3xl bg-gray-50 p-4 text-sm text-gray-900">
                  <span>#OR-10233</span>
                  <span>Aarav Mehta</span>
                  <span>Shipped</span>
                </div>
                <div className="grid grid-cols-3 gap-4 rounded-3xl bg-gray-50 p-4 text-sm text-gray-900">
                  <span>#OR-10232</span>
                  <span>Neha Kapoor</span>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </AdminShell>
  );
}
