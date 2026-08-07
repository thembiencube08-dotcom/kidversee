'use client';
import React from 'react';
import SupplierShell from '@/components/SupplierShell';

const mockOrders = [
  { id: 'ORD-10241', product: 'Baby Girls Ribbed Polo Co-Ord Set', qty: 3, total: 2697, status: 'PENDING', date: '2026-08-05' },
  { id: 'ORD-10238', product: 'Girls Bamboo Sleeveless Dress', qty: 2, total: 1250, status: 'CONFIRMED', date: '2026-08-03' },
  { id: 'ORD-10235', product: 'Baby Cotton Romper', qty: 5, total: 3625, status: 'DELIVERED', date: '2026-08-01' },
];

const statusColor: Record<string, string> = {
  PENDING: 'bg-amber-50 text-amber-600 border-amber-200',
  CONFIRMED: 'bg-blue-50 text-blue-600 border-blue-200',
  DELIVERED: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default function SupplierOrdersPage() {
  return (
    <SupplierShell>
      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Sales</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Orders</h1>
        </div>

        <div className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50">
                  {['Order ID', 'Product', 'Qty', 'Total', 'Status', 'Date'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {mockOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-pink-50/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-[#ff2d78] font-semibold">{o.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{o.product}</td>
                    <td className="px-4 py-3 text-gray-500">{o.qty}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">₹{o.total.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[o.status]}`}>{o.status}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{o.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SupplierShell>
  );
}
