'use client';
import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface OrderItem {
  id: string;
  name: string;
  price: string;
  img: string;
  quantity: number;
  size?: string;
}

interface OrderData {
  orderNumber: string;
  items: OrderItem[];
  shippingAddress: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
  };
  subtotal: number;
  shippingCost: number;
  discountAmount: number;
  grandTotal: number;
  placedAt: string;
}

function getEstimatedDelivery(placedAt: string): string {
  const date = new Date(placedAt);
  date.setDate(date.getDate() + 5);
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<OrderData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const raw = searchParams.get('data');
    if (raw) {
      try {
        const parsed = JSON.parse(decodeURIComponent(raw));
        setOrder(parsed);
      } catch {
        // fallback handled below
      }
    }
  }, [searchParams]);

  if (!mounted) return null;

  if (!order) {
    return (
      <div className="min-h-screen bg-[#fdf8f5] flex flex-col items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No order found</h2>
          <p className="text-gray-400 text-sm mb-6">We couldn&apos;t find your order details. Please check your email for confirmation.</p>
          <Link href="/" className="inline-block bg-[#e21a5a] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const deliveryDate = getEstimatedDelivery(order.placedAt);

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#e21a5a] font-bold text-xl tracking-tight">Popees</span>
          </Link>
          <Link href="/" className="text-xs text-gray-400 hover:text-[#e21a5a] transition-colors">
            ← Continue Shopping
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Success header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mx-auto mb-5">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-500 text-base">
            Thank you, <span className="font-semibold text-gray-700">{order.shippingAddress.firstName}</span>! Your order has been placed successfully.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Order</span>
            <span className="text-sm font-bold text-[#e21a5a]">{order.orderNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Left column */}
          <div className="space-y-5">
            {/* Estimated delivery banner */}
            <div className="bg-gradient-to-r from-[#e21a5a]/5 to-[#ff6b9d]/5 border border-[#e21a5a]/15 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#e21a5a]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-0.5">Estimated Delivery</p>
                <p className="text-base font-bold text-gray-900">{deliveryDate}</p>
                <p className="text-xs text-gray-500 mt-0.5">Standard delivery · 4–6 business days</p>
              </div>
            </div>

            {/* Items ordered */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-base font-bold text-gray-900">Items Ordered</h2>
                <span className="text-xs text-gray-400 font-medium">{order.items.length} {order.items.length === 1 ? 'item' : 'items'}</span>
              </div>
              <div className="divide-y divide-gray-50">
                {order.items.map((item) => {
                  const key = `${item.id}-${item.size ?? ''}`;
                  const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
                  const lineTotal = isNaN(price) ? 0 : price * item.quantity;
                  return (
                    <div key={key} className="flex items-center gap-4 px-5 py-4">
                      <div className="relative w-16 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">{item.name}</p>
                        <div className="flex items-center gap-3 mt-1">
                          {item.size && (
                            <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-md px-2 py-0.5">
                              Size: {item.size}
                            </span>
                          )}
                          <span className="text-xs text-gray-400">Qty: {item.quantity}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">₹{price.toFixed(2)} each</p>
                      </div>
                      <p className="text-sm font-bold text-gray-800 flex-shrink-0">₹{lineTotal.toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e21a5a]/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-base font-bold text-gray-900">Delivery Address</h2>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 space-y-1">
                <p className="text-sm font-semibold text-gray-800">
                  {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                </p>
                <p className="text-sm text-gray-500">{order.shippingAddress.address1}</p>
                {order.shippingAddress.address2 && (
                  <p className="text-sm text-gray-500">{order.shippingAddress.address2}</p>
                )}
                <p className="text-sm text-gray-500">
                  {order.shippingAddress.city}, {order.shippingAddress.state} – {order.shippingAddress.zip}
                </p>
                <p className="text-sm text-gray-500">{order.shippingAddress.country}</p>
                <p className="text-sm text-gray-400 pt-1">{order.shippingAddress.phone}</p>
                {order.shippingAddress.email && (
                  <p className="text-sm text-gray-400">{order.shippingAddress.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right column: Order summary */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:sticky lg:top-6">
              <h2 className="text-base font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({order.items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-medium text-gray-800">₹{order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className={order.shippingCost === 0 ? 'text-green-600 font-semibold' : 'font-medium text-gray-800'}>
                    {order.shippingCost === 0 ? 'FREE' : `₹${order.shippingCost.toFixed(2)}`}
                  </span>
                </div>
                {order.discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Promo {order.promoCode ? `(${order.promoCode})` : ''}</span>
                    <span className="font-semibold">−₹{order.discountAmount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-base font-bold text-gray-900">Total Paid</span>
                <span className="text-xl font-bold text-[#e21a5a]">₹{order.grandTotal.toFixed(2)}</span>
              </div>

              <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-xs text-green-700 font-medium">Payment confirmed &amp; secure</p>
              </div>

              <div className="mt-5 space-y-2.5">
                <Link
                  href="/"
                  className="block w-full bg-[#e21a5a] text-white py-3 rounded-full font-semibold text-sm text-center hover:bg-[#c4134b] transition-colors"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/account"
                  className="block w-full bg-white text-gray-700 py-3 rounded-full font-semibold text-sm text-center border border-gray-200 hover:border-[#e21a5a] hover:text-[#e21a5a] transition-colors"
                >
                  View My Orders
                </Link>
              </div>
            </div>

            {/* Help card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Need help?</h3>
              <div className="space-y-2.5">
                <Link href="/pages/contact" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#e21a5a] transition-colors group">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#e21a5a]/10 flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Contact Support
                </Link>
                <Link href="/policies/refund-policy" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#e21a5a] transition-colors group">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#e21a5a]/10 flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  Return &amp; Refund Policy
                </Link>
                <Link href="/pages/faqs" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#e21a5a] transition-colors group">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#e21a5a]/10 flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fdf8f5] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#e21a5a] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
