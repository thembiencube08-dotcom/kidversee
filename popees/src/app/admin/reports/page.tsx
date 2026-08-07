'use client';
import React from 'react';
import AdminShell from '@/components/AdminShell';
import { mockStats, mockOrders, salesChartData } from '@/lib/mockData';

const topProducts = [
  { name: 'Baby Girls Ribbed Polo Co-Ord Set', revenue: 18800, units: 21 },
  { name: 'Premium Pant Style Diaper 24 PCS', revenue: 14200, units: 50 },
  { name: 'Girls Bamboo Sleeveless Dress', revenue: 11250, units: 18 },
  { name: 'Anti-Bacterial Baby Fabric Wash', revenue: 9570, units: 30 },
  { name: 'Unisex Full-Sleeve Bamboo Sleepsuit', revenue: 8437, units: 13 },
];

const statusColors: Record<string, string> = {
  DELIVERED: 'bg-emerald-500',
  SHIPPED:   'bg-purple-500',
  CONFIRMED: 'bg-blue-500',
  PENDING:   'bg-amber-500',
  CANCELLED: 'bg-red-400',
};

export default function AdminReportsPage() {
  const totalRevenue = mockStats.totalRevenue;
  const deliveredOrders = mockOrders.filter((o) => o.status === 'DELIVERED').length;
  const avgOrderValue = Math.round(totalRevenue / mockStats.totalOrders);
  const maxRevenue = Math.max(...salesChartData.map((d) => d.revenue));
  const maxRev = topProducts[0].revenue;

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Analytics</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Reports</h1>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          {[
            { label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString('en-IN')}`, sub: 'All time' },
            { label: 'Avg. Order Value', value: `₹${avgOrderValue.toLocaleString('en-IN')}`, sub: `From ${mockStats.totalOrders} orders` },
            { label: 'Delivered Orders', value: deliveredOrders, sub: `of ${mockStats.totalOrders} total` },
            { label: 'Active Customers', value: mockStats.totalCustomers, sub: 'Registered accounts' },
          ].map((k) => (
            <div key={k.label} className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
              <p className="text-[11px] text-gray-400 mb-2">{k.label}</p>
              <p className="text-2xl font-extrabold text-gray-800">{k.value}</p>
              <p className="text-[11px] text-gray-400 mt-1">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid xl:grid-cols-2 gap-5">
          {/* Revenue chart */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-bold text-gray-800 mb-1">Monthly Revenue</p>
            <p className="text-xs text-gray-400 mb-5">Last 6 months</p>
            <div className="flex items-end gap-3 h-40">
              {salesChartData.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-gray-400">₹{(d.revenue / 1000).toFixed(1)}k</span>
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-[#ff2d78] to-pink-200 hover:from-[#e91e63] transition-colors"
                    style={{ height: `${(d.revenue / maxRevenue) * 100}%`, minHeight: '6px' }}
                  />
                  <span className="text-[11px] text-gray-500 font-medium">{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order status breakdown */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-bold text-gray-800 mb-1">Order Status Breakdown</p>
            <p className="text-xs text-gray-400 mb-5">All time</p>
            <div className="space-y-3">
              {(['DELIVERED','SHIPPED','CONFIRMED','PENDING','CANCELLED'] as const).map((status) => {
                const count = mockOrders.filter((o) => o.status === status).length;
                const pct = Math.round((count / mockOrders.length) * 100);
                return (
                  <div key={status} className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-gray-500 w-24 flex-shrink-0">{status}</span>
                    <div className="flex-1 h-2 bg-pink-50 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${statusColors[status]}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[11px] text-gray-400 w-6 text-right flex-shrink-0">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top products */}
        <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-bold text-gray-800 mb-1">Top Products by Revenue</p>
          <p className="text-xs text-gray-400 mb-5">All time best performers</p>
          <div className="space-y-4">
            {topProducts.map((p, i) => (
              <div key={p.name} className="flex items-center gap-4">
                <span className="text-[11px] font-mono text-gray-300 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-gray-700 truncate mb-1.5">{p.name}</p>
                  <div className="h-1.5 bg-pink-50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ff2d78] rounded-full" style={{ width: `${(p.revenue / maxRev) * 100}%` }} />
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-800">₹{p.revenue.toLocaleString('en-IN')}</p>
                  <p className="text-[10px] text-gray-400">{p.units} units</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
