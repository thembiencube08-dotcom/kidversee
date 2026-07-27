'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[70] flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            Your Cart{' '}
            {items?.length > 0 && (
              <span className="text-sm font-normal text-gray-500">
                ({items?.reduce((s, i) => s + i?.quantity, 0)} items)
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <svg className="w-16 h-16 text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-1">Add some products to get started</p>
              <button
                onClick={closeCart}
                className="mt-6 bg-[#e21a5a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c4134b] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items?.map((item) => {
              const key = `${item?.id}-${item?.size ?? ''}`;
              return (
                <div key={key} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                  {/* Image */}
                  <div className="relative w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={item?.img}
                      alt={item?.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                      unoptimized
                    />
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">{item?.name}</h3>
                    {item?.size && (
                      <p className="text-xs text-gray-500 mt-0.5">Size: <span className="font-medium">{item?.size}</span></p>
                    )}
                    {item?.variant && (
                      <p className="text-xs text-gray-500">Variant: <span className="font-medium">{item?.variant}</span></p>
                    )}
                    <p className="text-sm font-bold text-[#e21a5a] mt-1">{item?.price}</p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item?.id, item?.quantity - 1, item?.size)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg leading-none"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-gray-800">{item?.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item?.id, item?.quantity + 1, item?.size)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg leading-none"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item?.id, item?.size)}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items?.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 bg-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-base font-bold text-gray-900">₹ {totalPrice?.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4 text-center">Shipping & taxes calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-[#e21a5a] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors text-center"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full mt-2 border border-gray-200 text-gray-700 py-2.5 rounded-full text-sm font-medium hover:border-[#e21a5a] hover:text-[#e21a5a] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
