'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cartContext';

const SIZES = ['0-3M', '3-6M', '6-9M', '9-12M', '1-2Y', '2-3Y', '3-4Y', '4-5Y'];

// Convert a product href or name to an internal /products/[slug] path
function toProductSlug(href: string, name: string): string {
  if (href.startsWith('/products/')) return href;
  const match = href.match(/\/products\/([^?#]+)/);
  if (match) return `/products/${match[1]}`;
  return `/products/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

interface Product {
  id: string;
  name: string;
  shortName: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  href: string;
  img: string;
  soldOut?: boolean;
  rating?: string;
}

interface ProductGridProps {
  title: string;
  viewAllHref: string;
  products: Product[];
  bgColor?: string;
}

interface QuickAddModalProps {
  product: Product;
  onClose: () => void;
}

function QuickAddModal({ product, onClose }: QuickAddModalProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity,
      size: selectedSize || undefined,
    });
    setAdded(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {added ? (
          <div className="flex flex-col items-center justify-center py-10 px-6">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base font-bold text-gray-900">Added to Cart!</p>
            <p className="text-sm text-gray-500 mt-1 text-center line-clamp-2">{product.shortName}</p>
          </div>
        ) : (
          <>
            {/* Product preview */}
            <div className="flex gap-3 p-4 border-b border-gray-100">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                <Image src={product.img} alt={product.name} fill className="object-cover" sizes="64px" unoptimized />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{product.shortName}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-bold text-[#e21a5a]">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
              <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 self-start">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Size selection */}
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Size {selectedSize && <span className="text-[#e21a5a] normal-case font-normal">— {selectedSize}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                        selectedSize === size
                          ? 'bg-[#e21a5a] text-white border-[#e21a5a]'
                          : 'border-gray-200 text-gray-700 hover:border-[#e21a5a] hover:text-[#e21a5a]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Quantity</p>
                <div className="flex items-center border border-gray-200 rounded-full w-fit overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl leading-none"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-semibold text-gray-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl leading-none"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                disabled={product.soldOut}
                className="w-full bg-[#e21a5a] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.soldOut ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProductGrid({ title, viewAllHref, products, bgColor = 'bg-white' }: ProductGridProps) {
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);

  return (
    <section className={`py-10 ${bgColor}`}>
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#e21a5a] uppercase tracking-wide">
            {title}
          </h2>
          <Link
            href={viewAllHref}
            className="text-sm font-semibold text-gray-700 border border-gray-300 px-4 py-1.5 rounded-full hover:bg-[#e21a5a] hover:text-white hover:border-[#e21a5a] transition-all duration-200"
          >
            View all
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Link href={toProductSlug(product.href, product.name)}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </Link>
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-[#e21a5a] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {product.discount}
                  </div>
                )}
                {/* Sold Out Badge */}
                {product.soldOut && (
                  <div className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Sold out
                  </div>
                )}
                {/* Wishlist */}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#e21a5a] hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Quick Add button — appears on hover */}
                {!product.soldOut && (
                  <button
                    onClick={() => setQuickAddProduct(product)}
                    className="absolute bottom-0 left-0 right-0 bg-[#e21a5a] text-white text-xs font-semibold py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
                  >
                    Quick Add
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="p-2.5">
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{product.rating}</span>
                  </div>
                )}
                <Link href={toProductSlug(product.href, product.name)}>
                  <h3 className="text-xs font-medium text-gray-800 line-clamp-2 mb-1.5 hover:text-[#e21a5a] transition-colors">
                    {product.shortName}
                  </h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add Modal */}
      {quickAddProduct && (
        <QuickAddModal product={quickAddProduct} onClose={() => setQuickAddProduct(null)} />
      )}
    </section>
  );
}
