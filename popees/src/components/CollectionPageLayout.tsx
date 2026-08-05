'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cartContext';

export interface CollectionProduct {
  id: string;
  name: string;
  shortName: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  href: string;
  img: string;
  img2?: string;
  rating?: string;
  soldOut?: boolean;
}

interface FilterGroup {
  label: string;
  options?: string[];
}

interface CollectionPageLayoutProps {
  title: string;
  description?: string;
  itemCount: number;
  products: CollectionProduct[];
  bannerImg?: string;
  bannerImg2?: string;
  filterGroups?: FilterGroup[];
  highestPrice?: string;
  showTitleHeading?: boolean;
}

const defaultFilterGroups: FilterGroup[] = [
  { label: 'Availability' },
  { label: 'Price Range' },
  { label: 'Gender' },
  { label: 'Size & Fit' },
  { label: 'Sleeve Type' },
  { label: 'Discount Range' },
  { label: 'Color' },
];

const SIZES = ['0-3M', '3-6M', '6-9M', '9-12M', '1-2Y', '2-3Y', '3-4Y', '4-5Y'];

// Convert a product href or name to an internal /products/[slug] path
function toProductSlug(href: string, name: string): string {
  // If already an internal /products/ path, use as-is
  if (href.startsWith('/products/')) return href;
  // If external URL with /products/ segment, extract slug
  const match = href.match(/\/products\/([^?#]+)/);
  if (match) return `/products/${match[1]}`;
  // Fallback: slugify the name
  return `/products/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

interface QuickAddModalProps {
  product: CollectionProduct;
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

export default function CollectionPageLayout({
  title,
  description,
  itemCount,
  products,
  bannerImg,
  bannerImg2,
  filterGroups = defaultFilterGroups,
  highestPrice = '2,499.00',
  showTitleHeading,
}: CollectionPageLayoutProps) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [openFilters, setOpenFilters] = useState<string[]>(['Availability', 'Price Range']);
  const [gridZoom, setGridZoom] = useState<'default' | 'zoom'>('default');
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState('Featured');
  const [availFilter, setAvailFilter] = useState<string[]>([]);
  const [lowPrice, setLowPrice] = useState('0');
  const [highPrice, setHighPrice] = useState(highestPrice.replace(/,/g, ''));
  const [quickAddProduct, setQuickAddProduct] = useState<CollectionProduct | null>(null);

  const toggleWishlist = (id: string) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );

  const toggleFilter = (label: string) =>
    setOpenFilters((prev) =>
      prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
    );

  const sortOptions = [
    'Featured',
    'Best selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ];

  // Show title heading if no banner OR if explicitly requested
  const hasBanner = !!(bannerImg || bannerImg2);
  const displayTitleHeading = showTitleHeading || !hasBanner;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Banner Image */}
        {hasBanner && (
          <div className="relative w-full overflow-hidden" style={{ maxHeight: '420px' }}>
            <div className="relative w-full" style={{ paddingBottom: '30%' }}>
              <Image
                src={bannerImg2 || bannerImg || ''}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
                unoptimized
              />
            </div>
          </div>
        )}

        {/* Title Heading (shown when no banner, like Trending Now / Independence Day) */}
        {displayTitleHeading && (
          <div className="text-center py-8 px-4">
            <h1
              className="text-2xl font-medium"
              style={{ fontFamily: 'Comfortaa, cursive', color: '#e21a5a' }}
            >
              {title.toLowerCase()}
            </h1>
            {description && (
              <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Filters + Products */}
        <div className="max-w-[1400px] mx-auto px-4 pb-16">
          <a href="#ResultsList" className="sr-only focus:not-sr-only">
            Skip to results list
          </a>

          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <aside className="hidden lg:block w-[240px] flex-shrink-0">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-gray-900">Filters</h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{itemCount} items</span>
                </div>
              </div>

              {/* Filter Groups */}
              <div className="space-y-0 border-t border-gray-200">
                {/* Availability */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFilter('Availability')}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-800 hover:text-[#e21a5a] transition-colors"
                  >
                    <span>Availability</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openFilters.includes('Availability') ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFilters.includes('Availability') && (
                    <div className="pb-3 space-y-2">
                      {['In stock', 'Out of stock'].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                          <div
                            className={`w-4 h-4 border rounded flex items-center justify-center transition-colors cursor-pointer ${
                              availFilter.includes(opt)
                                ? 'bg-[#e21a5a] border-[#e21a5a]'
                                : 'border-gray-300 group-hover:border-[#e21a5a]'
                            }`}
                            onClick={() =>
                              setAvailFilter((prev) =>
                                prev.includes(opt)
                                  ? prev.filter((f) => f !== opt)
                                  : [...prev, opt]
                              )
                            }
                          >
                            {availFilter.includes(opt) && (
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFilter('Price Range')}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-800 hover:text-[#e21a5a] transition-colors"
                  >
                    <span>Price Range</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openFilters.includes('Price Range') ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFilters.includes('Price Range') && (
                    <div className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            value={lowPrice}
                            onChange={(e) => setLowPrice(e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm pr-6 focus:outline-none focus:border-[#e21a5a]"
                          />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">$</span>
                        </div>
                        <span className="text-sm text-gray-500">to</span>
                        <div className="relative flex-1">
                          <input
                            type="number"
                            value={highPrice}
                            onChange={(e) => setHighPrice(e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm pr-6 focus:outline-none focus:border-[#e21a5a]"
                          />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">$</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">The highest price is $ {highestPrice}</p>
                    </div>
                  )}
                </div>

                {/* Other filter groups */}
                {filterGroups
                  .filter((g) => g.label !== 'Availability' && g.label !== 'Price Range')
                  .map((group) => (
                    <div key={group.label} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleFilter(group.label)}
                        className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-800 hover:text-[#e21a5a] transition-colors"
                      >
                        <span>{group.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openFilters.includes(group.label) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openFilters.includes(group.label) && group.options && (
                        <div className="pb-3 space-y-2">
                          {group.options.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                              <div className="w-4 h-4 border border-gray-300 rounded" />
                              <span className="text-sm text-gray-700">{opt}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Top bar: Filters label (mobile) + Sort + Grid */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 lg:hidden">
                  <h2 className="text-base font-semibold text-gray-900">Filters</h2>
                  <span className="text-sm text-gray-500">{itemCount} items</span>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                  <span className="text-sm text-gray-500">{itemCount} items</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  {/* Sort */}
                  <div className="relative">
                    <button
                      onClick={() => setSortOpen(!sortOpen)}
                      className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 hover:border-[#e21a5a] transition-colors"
                    >
                      <span>Sort</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {sortOpen && (
                      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 min-w-[200px]">
                        {sortOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setSortValue(opt);
                              setSortOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#fff0f3] hover:text-[#e21a5a] transition-colors ${
                              sortValue === opt ? 'text-[#e21a5a] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Grid Toggle */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setGridZoom('default')}
                      className={`p-1.5 rounded transition-colors ${
                        gridZoom === 'default' ? 'text-[#e21a5a]' : 'text-gray-400 hover:text-gray-600'
                      }`}
                      aria-label="Default grid"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setGridZoom('zoom')}
                      className={`p-1.5 rounded transition-colors ${
                        gridZoom === 'zoom' ? 'text-[#e21a5a]' : 'text-gray-400 hover:text-gray-600'
                      }`}
                      aria-label="Zoom out grid"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="4" height="4" rx="0.5" />
                        <rect x="10" y="3" width="4" height="4" rx="0.5" />
                        <rect x="17" y="3" width="4" height="4" rx="0.5" />
                        <rect x="3" y="10" width="4" height="4" rx="0.5" />
                        <rect x="10" y="10" width="4" height="4" rx="0.5" />
                        <rect x="17" y="10" width="4" height="4" rx="0.5" />
                        <rect x="3" y="17" width="4" height="4" rx="0.5" />
                        <rect x="10" y="17" width="4" height="4" rx="0.5" />
                        <rect x="17" y="17" width="4" height="4" rx="0.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <ul
                id="ResultsList"
                className={`grid gap-4 list-none p-0 ${
                  gridZoom === 'zoom' ?'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5' :'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {products.map((product) => (
                  <li key={product.id} className="group relative">
                    <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                      <Link href={toProductSlug(product.href, product.name)}>
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, 25vw"
                          unoptimized
                        />
                      </Link>
                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-[#e21a5a] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {product.discount}
                        </div>
                      )}
                      {product.soldOut && !product.discount && (
                        <div className="absolute top-2 left-2 bg-white text-gray-700 text-[10px] font-medium px-2 py-0.5 rounded border border-gray-200">
                          Sold out
                        </div>
                      )}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#fff0f3] transition-colors"
                        aria-label="Add to wishlist"
                      >
                        <svg
                          className={`w-4 h-4 ${
                            wishlist.includes(product.id)
                              ? 'fill-[#e21a5a] text-[#e21a5a]'
                              : 'text-gray-400'
                          }`}
                          fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      {/* Quick Add button */}
                      {!product.soldOut && (
                        <button
                          onClick={() => setQuickAddProduct(product)}
                          className="absolute bottom-0 left-0 right-0 bg-[#e21a5a] text-white text-xs font-semibold py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
                        >
                          Quick Add
                        </button>
                      )}
                    </div>
                    <div className="mt-2 px-0.5">
                      {product.rating && (
                        <div className="flex items-center gap-1 mb-1">
                          <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs text-gray-500">{product.rating}</span>
                        </div>
                      )}
                      <Link href={toProductSlug(product.href, product.name)}>
                        <h3 className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">
                          {product.shortName}
                        </h3>
                      </Link>
                      <div className="mt-1 flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-xs font-semibold ${
                            product.originalPrice ? 'text-[#e21a5a]' : 'text-gray-900'
                          }`}
                        >
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Quick Add Modal */}
      {quickAddProduct && (
        <QuickAddModal product={quickAddProduct} onClose={() => setQuickAddProduct(null)} />
      )}
    </div>
  );
}
