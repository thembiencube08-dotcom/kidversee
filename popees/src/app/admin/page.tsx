'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminShell from '@/components/AdminShell';
import { mockStats, mockOrders, mockProducts, salesChartData } from '@/lib/mockData';

// ── Shimmer skeleton components ──────────────────────────────────────────────
function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-white/[0.06] rounded-lg ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)',
        }}
      />
    </div>
  );
}

function StatCardSkeleton() {
  return (
    <div className="bg-[#111] border border-white/[0.07] rounded-xl p-4 space-y-3">
      <Shimmer className="h-3 w-20 rounded" />
      <Shimmer className="h-7 w-16 rounded" />
      <Shimmer className="h-2.5 w-10 rounded" />
    </div>
  );
}

function RowSkeleton({ cols }: { cols: number }) {
  return (
    <tr>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="px-4 py-3.5">
          <Shimmer className={`h-3.5 rounded ${i === 0 ? 'w-36' : i === 1 ? 'w-20' : 'w-12'}`} />
        </td>
      ))}
    </tr>
  );
}

function ChartBarSkeleton() {
  return (
    <div className="flex items-end gap-2 h-36">
      {[55, 80, 65, 90, 100, 75].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <Shimmer className="w-full rounded-md" style={{ height: `${h}%` } as React.CSSProperties} />
          <Shimmer className="h-2.5 w-6 rounded" />
        </div>
      ))}
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────
export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);

  // Simulate data fetch delay
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const statCards = [
    { label: 'Total Revenue', value: `₹ ${mockStats.totalRevenue.toLocaleString('en-IN')}`, change: '+12%', up: true },
    { label: 'Total Orders', value: mockStats.totalOrders, change: '+3%', up: true },
    { label: 'Customers', value: mockStats.totalCustomers, change: '+8%', up: true },
    { label: 'Products', value: mockStats.totalProducts, change: '', up: true },
    { label: 'Low Stock', value: mockStats.lowStock, change: 'Alert', up: false },
    { label: 'Pending Orders', value: mockStats.pendingOrders, change: 'Action needed', up: false },
  ];

  const statusColor: Record<string, string> = {
    PENDING: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    CONFIRMED: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    SHIPPED: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    DELIVERED: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    CANCELLED: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  const maxRevenue = Math.max(...salesChartData.map((d) => d.revenue));

  return (
    <AdminShell>
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

      <div className="space-y-8">
        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Overview</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Dashboard</h1>
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

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <StatCardSkeleton key={i} />)
            : statCards.map((card) => (
              <div
                key={card.label}
                className="bg-white border border-pink-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-[11px] text-gray-400 font-medium mb-2">{card.label}</p>
                <p className="text-xl font-bold text-gray-800">{card.value}</p>
                {card.change && (
                  <p className={`text-[10px] font-semibold mt-1.5 ${card.up ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {card.change}
                  </p>
                )}
              </div>
            ))}
        </div>

        {/* ── Charts + recent orders ── */}
        <div className="grid xl:grid-cols-5 gap-5">

          {/* Sales chart */}
          <div className="xl:col-span-2 bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-bold text-gray-800">Sales Overview</p>
                <p className="text-xs text-gray-400 mt-0.5">Last 6 months</p>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full">
                Live
              </span>
            </div>

            {loading
              ? <ChartBarSkeleton />
              : (
                <div className="flex items-end gap-2 h-36">
                  {salesChartData.map((d) => (
                    <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-md bg-[#ff2d78]/20 hover:bg-[#ff2d78]/50 transition-colors relative group"
                        style={{ height: `${(d.revenue / maxRevenue) * 100}%`, minHeight: '8px' }}
                      >
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          ₹{(d.revenue / 1000).toFixed(1)}k
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400">{d.month}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Recent orders */}
          <div className="xl:col-span-3 bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-bold text-gray-800">Recent Orders</p>
                <p className="text-xs text-gray-400 mt-0.5">Latest customer purchases</p>
              </div>
              <Link href="/admin/orders" className="text-xs font-semibold text-[#ff2d78] hover:text-[#e91e63] transition-colors">
                View all →
              </Link>
            </div>

            {loading
              ? (
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-pink-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <Shimmer className="w-7 h-7 rounded-lg flex-shrink-0" />
                        <div className="space-y-1.5">
                          <Shimmer className="h-3 w-28 rounded" />
                          <Shimmer className="h-2.5 w-16 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shimmer className="h-4 w-16 rounded-full" />
                        <Shimmer className="h-3.5 w-14 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              )
              : (
                <div className="space-y-2">
                  {mockOrders.slice(0, 5).map((order) => (
                    <div key={order.id} className="flex items-center justify-between py-2 border-b border-pink-50 last:border-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-[10px] font-bold text-[#ff2d78]">{order.customer[0]}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-gray-800 truncate">{order.customer}</p>
                          <p className="text-[11px] text-gray-400">{order.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[order.status]}`}>
                          {order.status}
                        </span>
                        <span className="text-[13px] font-semibold text-gray-800">
                          ₹{order.totalAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>

        {/* ── Low stock alert ── */}
        <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-gray-800">Low Stock Products</p>
              <p className="text-xs text-gray-400 mt-0.5">Products with less than 10 units</p>
            </div>
            <Link href="/admin/products" className="text-xs font-semibold text-[#ff2d78] hover:text-[#e91e63] transition-colors">
              Manage products →
            </Link>
          </div>

          {loading
            ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-lg p-3">
                    <Shimmer className="w-10 h-10 rounded-lg flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Shimmer className="h-3 w-full rounded" />
                      <Shimmer className="h-2.5 w-16 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            )
            : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {mockProducts.filter((p) => p.stockQuantity < 10).map((p) => (
                  <div key={p.id} className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <img src={p.img} alt={p.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-gray-700 truncate">{p.title}</p>
                      <p className="text-[11px] text-amber-600 font-semibold mt-0.5">
                        {p.stockQuantity === 0 ? 'Out of stock' : `${p.stockQuantity} left`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </AdminShell>
  );
}
