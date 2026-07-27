'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cartContext';

const SIZES = ['0-3M', '3-6M', '6-9M', '9-12M', '1-2Y', '2-3Y', '3-4Y', '4-5Y'];

const COLORS = [
  { name: 'Cream', hex: '#F5F0E8' },
  { name: 'Blush Pink', hex: '#F4A7B9' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Mint Green', hex: '#98D8C8' },
  { name: 'Lavender', hex: '#C8A2C8' },
  { name: 'Sunshine Yellow', hex: '#FFD700' },
];

const MOCK_REVIEWS = [
  {
    id: 'rv1',
    author: 'Priya M.',
    rating: 5,
    date: 'June 2025',
    title: 'Absolutely love this!',
    body: 'The fabric is so soft and gentle on my baby\'s skin. The fit is perfect and the quality is outstanding. Will definitely buy more.',
    verified: true,
  },
  {
    id: 'rv2',
    author: 'Ananya S.',
    rating: 4,
    date: 'May 2025',
    title: 'Great quality, fast delivery',
    body: 'Really happy with this purchase. The material is breathable and my little one is comfortable all day. Sizing runs slightly small so order one size up.',
    verified: true,
  },
  {
    id: 'rv3',
    author: 'Deepa R.',
    rating: 5,
    date: 'April 2025',
    title: 'Best baby clothing brand',
    body: 'Popees never disappoints. This is my third order and the quality is consistently excellent. The colors are vibrant and don\'t fade after washing.',
    verified: true,
  },
  {
    id: 'rv4',
    author: 'Kavitha L.',
    rating: 4,
    date: 'March 2025',
    title: 'Soft and comfortable',
    body: 'My baby loves wearing this. The snap buttons make diaper changes so easy. Highly recommend for new parents.',
    verified: false,
  },
];

// Generate mock product data from slug
function getProductFromSlug(slug: string) {
  const name = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const images = [
    'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=3840',
    'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_1.jpg?v=1784619301&width=3840',
    'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_2.jpg?v=1784619301&width=3840',
    'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_4.jpg?v=1784619302&width=3840',
    'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_5.jpg?v=1784619302&width=3840',
  ];

  return {
    id: slug,
    name,
    shortName: name.length > 60 ? name.slice(0, 60) + '...' : name,
    price: '₹ 899.00',
    originalPrice: '₹ 1,199.00',
    discount: '25% OFF',
    rating: 4.6,
    reviewCount: 128,
    images,
    description: `Made from premium 100% organic cotton, this Popees baby garment is designed for maximum comfort and breathability. The soft, skin-friendly fabric is gentle on your baby's delicate skin, making it perfect for all-day wear. Features easy snap buttons for quick diaper changes and a relaxed fit that allows free movement.`,
    features: [
      '100% Organic Cotton — gentle on sensitive skin',
      'Easy snap button closure for quick changes',
      'Pre-shrunk fabric — maintains size after washing',
      'OEKO-TEX certified — free from harmful substances',
      'Machine washable at 30°C',
    ],
    soldOut: false,
    category: 'Baby Clothing',
  };
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass} ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { addItem, openCart } = useCart();
  const product = getProductFromSlug(params.slug);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.images[0],
      quantity,
      size: selectedSize,
      variant: selectedColor || undefined,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const avgRating = MOCK_REVIEWS.reduce((s, r) => s + r.rating, 0) / MOCK_REVIEWS.length;
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: MOCK_REVIEWS.filter((r) => r.rating === star).length,
    pct: Math.round((MOCK_REVIEWS.filter((r) => r.rating === star).length / MOCK_REVIEWS.length) * 100),
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 py-6 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#e21a5a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections/all" className="hover:text-[#e21a5a] transition-colors">All Products</Link>
          <span>/</span>
          <span className="text-gray-800 line-clamp-1">{product.shortName}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14">
          {/* ── LEFT: Image Gallery ── */}
          <div className="flex gap-3">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-2 w-16 flex-shrink-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-[#e21a5a]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 group">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-[#e21a5a] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.discount}
                  </div>
                )}
                {/* Wishlist */}
                <button
                  onClick={() => setWishlist((w) => !w)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  aria-label="Toggle wishlist"
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${wishlist ? 'fill-[#e21a5a] text-[#e21a5a]' : 'text-gray-400'}`}
                    fill={wishlist ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Mobile thumbnails */}
              <div className="flex sm:hidden gap-2 mt-3 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-14 h-18 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === i ? 'border-[#e21a5a]' : 'border-transparent'
                    }`}
                    style={{ height: '72px', minWidth: '56px' }}
                  >
                    <Image
                      src={img}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="flex flex-col gap-5">
            {/* Title & Rating */}
            <div>
              <p className="text-xs font-semibold text-[#e21a5a] uppercase tracking-widest mb-1">{product.category}</p>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-gray-900 leading-snug">{product.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <StarRating rating={product.rating} size="md" />
                <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className="text-sm text-[#e21a5a] hover:underline"
                >
                  {product.reviewCount} reviews
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-gray-900">{product.price}</span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">{product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-2.5">
                Color
                {selectedColor && <span className="font-normal text-gray-500 ml-1.5">— {selectedColor}</span>}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                      selectedColor === color.name
                        ? 'border-[#e21a5a] scale-110 shadow-md'
                        : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <p className={`text-sm font-semibold ${sizeError ? 'text-red-500' : 'text-gray-800'}`}>
                  Size
                  {selectedSize && <span className="font-normal text-gray-500 ml-1.5">— {selectedSize}</span>}
                  {sizeError && <span className="font-normal ml-1.5">— Please select a size</span>}
                </p>
                <button className="text-xs text-[#e21a5a] hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                    className={`px-4 py-2 text-sm rounded-full border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-[#e21a5a] text-white border-[#e21a5a] shadow-sm'
                        : sizeError
                        ? 'border-red-300 text-gray-700 hover:border-[#e21a5a]'
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
              <p className="text-sm font-semibold text-gray-800 mb-2.5">Quantity</p>
              <div className="flex items-center border-2 border-gray-200 rounded-full w-fit overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl"
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 pt-1">
              <button
                onClick={handleAddToCart}
                disabled={product.soldOut}
                className={`flex-1 py-3.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : product.soldOut
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' :'bg-[#e21a5a] text-white hover:bg-[#c4134b] active:scale-95'
                }`}
              >
                {addedToCart ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Cart!
                  </>
                ) : product.soldOut ? (
                  'Sold Out'
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={() => setWishlist((w) => !w)}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                  wishlist ? 'border-[#e21a5a] bg-[#fff0f5]' : 'border-gray-200 hover:border-[#e21a5a]'
                }`}
                aria-label="Wishlist"
              >
                <svg
                  className={`w-5 h-5 ${wishlist ? 'fill-[#e21a5a] text-[#e21a5a]' : 'text-gray-400'}`}
                  fill={wishlist ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-100">
              {[
                { icon: '🚚', label: 'Free Delivery', sub: 'Orders above ₹499' },
                { icon: '↩️', label: 'Easy Returns', sub: '7-day return policy' },
                { icon: '✅', label: 'Authentic', sub: '100% genuine products' },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-1 p-2 rounded-xl bg-gray-50">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-xs font-semibold text-gray-800">{badge.label}</span>
                  <span className="text-[10px] text-gray-500">{badge.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Description & Reviews Tabs ── */}
        <div className="mt-14">
          <div className="flex border-b border-gray-200 mb-8">
            {(['description', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold capitalize transition-all border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-[#e21a5a] text-[#e21a5a]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab === 'reviews' ? `Reviews (${MOCK_REVIEWS.length})` : 'Description'}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div className="max-w-3xl">
              <p className="text-gray-700 leading-relaxed text-sm mb-6">{product.description}</p>
              <ul className="space-y-2.5">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#e21a5a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-4xl">
              {/* Rating Summary */}
              <div className="flex flex-col sm:flex-row gap-8 mb-10 p-6 bg-gray-50 rounded-2xl">
                <div className="flex flex-col items-center justify-center text-center flex-shrink-0">
                  <span className="text-5xl font-bold text-gray-900">{avgRating.toFixed(1)}</span>
                  <StarRating rating={avgRating} size="lg" />
                  <span className="text-sm text-gray-500 mt-1">{MOCK_REVIEWS.length} reviews</span>
                </div>
                <div className="flex-1 space-y-2">
                  {ratingBreakdown.map(({ star, count, pct }) => (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-xs text-gray-600 w-4 text-right">{star}</span>
                      <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-6">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Cards */}
              <div className="space-y-6">
                {MOCK_REVIEWS.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[#e21a5a] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {review.author.charAt(0)}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{review.author}</span>
                          {review.verified && (
                            <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-medium">
                              Verified
                            </span>
                          )}
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">{review.date}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 mt-2 mb-1">{review.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{review.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
