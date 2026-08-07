'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const allProducts = [
  { id: 'bo1',  name: 'Popees Boys Denim Pants | Soft Stretch | 1-5 Years',                    price: 849,  soldOut: true,  sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-pants-new',    img: 'https://www.popees.com/cdn/shop/files/1_6_94292094-79ce-4fd0-aec5-ac16f9869ecb.jpg?v=1774117677&width=400' },
  { id: 'bo2',  name: 'Popees Boys Polo T-Shirt | Ribbed Cotton | 1-5 Years',                   price: 599,  soldOut: true,  sleeve: 'Half Sleeve', href: 'https://www.popees.com/collections/boys-t-shirt-new',  img: 'https://www.popees.com/cdn/shop/files/003AKF-B-PO-111_1.jpg?v=1774117722&width=400' },
  { id: 'bo3',  name: 'Popees Boys Cotton Shorts | Elastic Waist | 1-5 Years',                  price: 499,  soldOut: true,  sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-shorts-new',   img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-ST-508_1.jpg?v=1774117496&width=400' },
  { id: 'bo4',  name: 'Popees Boys Dungaree | Soft Denim Look | Adjustable Straps | 1-5 Years', price: 799,  soldOut: true,  sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-dungaree-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-DU-414_1_46c9e120-bb8f-4d69-846a-915fb66ffb02.jpg?v=1774117535&width=400' },
  { id: 'bo5',  name: 'Popees Boys Check Shirt | Half Sleeve | 1-5 Years',                      price: 549,  soldOut: false, sleeve: 'Half Sleeve', href: 'https://www.popees.com/collections/boys-shirt-new',    img: 'https://www.popees.com/cdn/shop/files/Untitled_design.png?v=1774117522&width=400' },
  { id: 'bo6',  name: 'Popees Boys Hooded Jacket | Fleece Warm | 1-5 Years',                    price: 899,  soldOut: false, sleeve: 'Full Sleeve', href: 'https://www.popees.com/collections/boys-jacket-new',   img: 'https://www.popees.com/cdn/shop/files/006A-KF-B-JK-625.jpg?v=1774117873&width=400' },
  { id: 'bo7',  name: 'Popees Boys Cargo Pants | Soft Cotton | 2-6 Years',                      price: 749,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-pants-new',    img: 'https://www.popees.com/cdn/shop/files/1_6_94292094-79ce-4fd0-aec5-ac16f9869ecb.jpg?v=1774117677&width=400' },
  { id: 'bo8',  name: 'Popees Boys Striped T-Shirt | Crew Neck Cotton | 1-5 Years',              price: 449,  soldOut: false, sleeve: 'Half Sleeve', href: 'https://www.popees.com/collections/boys-t-shirt-new',  img: 'https://www.popees.com/cdn/shop/files/003AKF-B-PO-111_1.jpg?v=1774117722&width=400' },
  { id: 'bo9',  name: 'Popees Boys Denim Shorts | Stretch Fabric | 1-5 Years',                  price: 529,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-shorts-new',   img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-ST-508_1.jpg?v=1774117496&width=400' },
  { id: 'bo10', name: 'Popees Boys Casual Shirt | Solid Cotton | 2-6 Years',                    price: 579,  soldOut: false, sleeve: 'Half Sleeve', href: 'https://www.popees.com/collections/boys-shirt-new',    img: 'https://www.popees.com/cdn/shop/files/Untitled_design.png?v=1774117522&width=400' },
  { id: 'bo11', name: 'Popees Boys Bib Dungaree | Soft Denim | 1-5 Years',                      price: 849,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-dungaree-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-DU-414_1_46c9e120-bb8f-4d69-846a-915fb66ffb02.jpg?v=1774117535&width=400' },
  { id: 'bo12', name: 'Popees Boys Zip-Up Jacket | Lightweight | 2-6 Years',                    price: 949,  soldOut: false, sleeve: 'Full Sleeve', href: 'https://www.popees.com/collections/boys-jacket-new',   img: 'https://www.popees.com/cdn/shop/files/006A-KF-B-JK-625.jpg?v=1774117873&width=400' },
  { id: 'bo13', name: 'Popees Boys Jogger Pants | Rib Waist | 1-5 Years',                       price: 649,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-pants-new',    img: 'https://www.popees.com/cdn/shop/files/1_6_94292094-79ce-4fd0-aec5-ac16f9869ecb.jpg?v=1774117677&width=400' },
  { id: 'bo14', name: 'Popees Boys Graphic Tee | Half Sleeve | 2-6 Years',                      price: 479,  soldOut: false, sleeve: 'Half Sleeve', href: 'https://www.popees.com/collections/boys-t-shirt-new',  img: 'https://www.popees.com/cdn/shop/files/003AKF-B-PO-111_1.jpg?v=1774117722&width=400' },
  { id: 'bo15', name: 'Popees Boys Printed Shorts | Drawstring | 1-5 Years',                    price: 429,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-shorts-new',   img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-ST-508_1.jpg?v=1774117496&width=400' },
  { id: 'bo16', name: 'Popees Boys Linen Shirt | Full Sleeve | 2-6 Years',                      price: 629,  soldOut: false, sleeve: 'Full Sleeve', href: 'https://www.popees.com/collections/boys-shirt-new',    img: 'https://www.popees.com/cdn/shop/files/Untitled_design.png?v=1774117522&width=400' },
  { id: 'bo17', name: 'Popees Boys Padded Jacket | Winter Warm | 2-6 Years',                    price: 1099, soldOut: false, sleeve: 'Full Sleeve', href: 'https://www.popees.com/collections/boys-jacket-new',   img: 'https://www.popees.com/cdn/shop/files/006A-KF-B-JK-625.jpg?v=1774117873&width=400' },
  { id: 'bo18', name: 'Popees Boys Dungaree | Printed Chest Pocket | 2-6 Years',                price: 799,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-dungaree-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-DU-414_1_46c9e120-bb8f-4d69-846a-915fb66ffb02.jpg?v=1774117535&width=400' },
  { id: 'bo19', name: 'Popees Boys Slim Fit Pants | Twill Cotton | 2-6 Years',                  price: 699,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-pants-new',    img: 'https://www.popees.com/cdn/shop/files/1_6_94292094-79ce-4fd0-aec5-ac16f9869ecb.jpg?v=1774117677&width=400' },
  { id: 'bo20', name: 'Popees Boys Long Sleeve T-Shirt | Solid Color | 1-5 Years',              price: 499,  soldOut: false, sleeve: 'Full Sleeve', href: 'https://www.popees.com/collections/boys-t-shirt-new',  img: 'https://www.popees.com/cdn/shop/files/003AKF-B-PO-111_1.jpg?v=1774117722&width=400' },
  { id: 'bo21', name: 'Popees Boys Cargo Shorts | Multi Pocket | 2-6 Years',                    price: 599,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-shorts-new',   img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-ST-508_1.jpg?v=1774117496&width=400' },
  { id: 'bo22', name: 'Popees Boys Oxford Shirt | Button Down | 2-6 Years',                     price: 649,  soldOut: false, sleeve: 'Half Sleeve', href: 'https://www.popees.com/collections/boys-shirt-new',    img: 'https://www.popees.com/cdn/shop/files/Untitled_design.png?v=1774117522&width=400' },
  { id: 'bo23', name: 'Popees Boys Fleece Jacket | Zip Front | 2-6 Years',                      price: 999,  soldOut: false, sleeve: 'Full Sleeve', href: 'https://www.popees.com/collections/boys-jacket-new',   img: 'https://www.popees.com/cdn/shop/files/006A-KF-B-JK-625.jpg?v=1774117873&width=400' },
  { id: 'bo24', name: 'Popees Boys Denim Dungaree | Classic Fit | 2-6 Years',                   price: 879,  soldOut: false, sleeve: 'Sleeveless', href: 'https://www.popees.com/collections/boys-dungaree-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-DU-414_1_46c9e120-bb8f-4d69-846a-915fb66ffb02.jpg?v=1774117535&width=400' },
];

const MAX_PRICE = 1099;
const SIZES = ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'];
const SLEEVE_TYPES = ['Sleeveless', 'Half Sleeve', 'Full Sleeve'];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 hover:text-[#e21a5a] transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronIcon open={open} />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

function WishlistButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
      className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Add to wishlist"
    >
      <svg className="w-4 h-4" fill={liked ? '#e21a5a' : 'none'} stroke={liked ? '#e21a5a' : '#333'} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
}

export default function BoysPage() {
  const [availOutOfStock, setAvailOutOfStock] = useState(false);
  const [availInStock, setAvailInStock] = useState(false);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSleeves, setSelectedSleeves] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSize = (s: string) =>
    setSelectedSizes((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const toggleSleeve = (s: string) =>
    setSelectedSleeves((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const filtered = allProducts.filter((p) => {
    if (availOutOfStock && !p.soldOut) return false;
    if (availInStock && p.soldOut) return false;
    if (p.price > maxPrice) return false;
    if (selectedSleeves.length > 0 && !selectedSleeves.includes(p.sleeve)) return false;
    return true;
  });

  const sidebar = (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-bold text-gray-800">Filters</h2>
      </div>

      {/* Availability */}
      <FilterSection title="Availability">
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer mb-2">
          <input type="checkbox" checked={availOutOfStock} onChange={(e) => setAvailOutOfStock(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 accent-[#e21a5a]" />
          Out of stock
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" checked={availInStock} onChange={(e) => setAvailInStock(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 accent-[#e21a5a]" />
          In stock
        </label>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center border border-gray-200 rounded px-2 py-1 text-sm w-24">
            <span className="text-gray-400 mr-1">$</span>
            <span>0</span>
          </div>
          <span className="text-gray-400 text-sm">to</span>
          <div className="flex items-center border border-gray-200 rounded px-2 py-1 text-sm w-24">
            <span className="text-gray-400 mr-1">$</span>
            <span>{maxPrice.toLocaleString()}</span>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#e21a5a]"
        />
        <p className="text-xs text-gray-400 mt-1">The highest price is $ {MAX_PRICE.toLocaleString()}.00</p>
      </FilterSection>

      {/* Gender */}
      <FilterSection title="Gender">
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 accent-[#e21a5a]" />
          Boys
        </label>
      </FilterSection>

      {/* Size & Fit */}
      <FilterSection title="Size & Fit">
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => toggleSize(s)}
              className={`px-3 py-1 text-xs border rounded transition-colors ${
                selectedSizes.includes(s)
                  ? 'border-[#e21a5a] bg-[#e21a5a] text-white'
                  : 'border-gray-200 text-gray-600 hover:border-[#e21a5a] hover:text-[#e21a5a]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Sleeve Type */}
      <FilterSection title="Sleeve Type">
        {SLEEVE_TYPES.map((s) => (
          <label key={s} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer mb-2">
            <input
              type="checkbox"
              checked={selectedSleeves.includes(s)}
              onChange={() => toggleSleeve(s)}
              className="w-4 h-4 rounded border-gray-300 accent-[#e21a5a]"
            />
            {s}
          </label>
        ))}
      </FilterSection>
    </aside>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-[1400px] mx-auto px-6 pt-8 pb-16">
          {/* Page title + item count + mobile filter toggle */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-[#e21a5a]">boys</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{filtered.length} items</span>
              <button
                className="md:hidden flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-200 rounded px-3 py-1.5"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 8h12M9 12h6" />
                </svg>
                Filters
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
              <div className="sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto pr-1">
                {sidebar}
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <p className="text-gray-400 text-sm mt-8">No products match the selected filters.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filtered.map((product) => (
                    <div key={product.id} className="group relative bg-[#f5f5f5]">
                      <Link href={product.href} target="_blank" rel="noopener noreferrer">
                        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                          <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                        </div>
                      </Link>
                      {product.soldOut && (
                        <span className="absolute top-3 left-3 bg-white text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded">
                          Sold out
                        </span>
                      )}
                      <div className="absolute top-3 right-3">
                        <WishlistButton />
                      </div>
                      <div className="px-3 py-3 bg-white">
                        <Link href={product.href} target="_blank" rel="noopener noreferrer">
                          <p className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors mb-1">
                            {product.name}
                          </p>
                        </Link>
                        <p className="text-sm font-semibold text-gray-900">
                          {product.soldOut
                            ? <span className="line-through text-gray-400">${product.price}.00</span>
                            : `$${product.price}.00`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
