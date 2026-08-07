'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ToyProduct {
  id: string;
  name: string;
  shortName: string;
  priceNum: number;
  price: string;
  originalPrice?: string;
  href: string;
  img: string;
  soldOut?: boolean;
  category: string;
}

const toyProducts: ToyProduct[] = [
  { id: 'toy1',  name: 'High Speed Toy Car - Police Jeep',         shortName: 'High Speed Toy Car - Police...',     priceNum: 125,  price: 'Rs. 125.00',   href: '/products/high-speed-toy-car-copy-1',                          img: '/assets/images/toys/high-speed-car-police.jpg',   soldOut: true, category: 'Vehicles' },
  { id: 'toy2',  name: 'High Speed Toy Car - City Car',            shortName: 'High Speed Toy Car - City...',       priceNum: 125,  price: 'Rs. 125.00',   href: '/products/high-speed-toy-car',                                 img: '/assets/images/toys/high-speed-car-yellow.jpg',   soldOut: true, category: 'Vehicles' },
  { id: 'toy3',  name: 'Buddy Rider - Mickey Ride On',             shortName: 'Buddy Rider - Mickey Ride...',       priceNum: 1499, price: 'Rs. 1,499.00', href: '/products/buddy-rider-pop',                                    img: '/assets/images/toys/buddy-rider.jpg',             soldOut: true, category: 'Riders' },
  { id: 'toy4',  name: 'Giggles 3 in 1 Deluxe Play Gym - Pink',   shortName: 'Giggles 3 in 1 Deluxe Play...',     priceNum: 1999, price: 'Rs. 1,999.00', href: '/products/3-in-1-deluxe-play-gym-n-pink',                      img: '/assets/images/toys/playgym-pink.jpg',            soldOut: true, category: 'Playtime' },
  { id: 'toy5',  name: 'Mini Vehicles - City Police Jeep',         shortName: 'Mini Vehicles - Police Jeep...',     priceNum: 125,  price: 'Rs. 125.00',   href: '/products/mini-vehicles-city-police-jeep',                     img: '/assets/images/toys/police-jeep-mini.jpg',        soldOut: true, category: 'Vehicles' },
  { id: 'toy6',  name: 'Sweet Smily Walker for Kids',              shortName: 'Sweet Smily Walker for Kids',        priceNum: 1999, price: 'Rs. 1,999.00', href: '/products/smily-walker-for-kids',                              img: '/assets/images/toys/smily-walker.jpg',            soldOut: true, category: 'Walkers' },
  { id: 'toy7',  name: 'Roly Poly Turtle for Kids',                shortName: 'Roly Poly Turtle for Kids',          priceNum: 749,  price: 'Rs. 749.00',   href: '/products/free-wheel-police-jeep-toy-for-babies-copy',         img: '/assets/images/toys/roly-poly-turtle.jpg',        soldOut: true, category: 'Learning' },
  { id: 'toy8',  name: 'Toy Pet - Sniffy The Dog for Kids',        shortName: 'Toy Pet - Sniffy The Dog fo...',     priceNum: 699,  price: 'Rs. 699.00',   href: '/products/toy-pet-sniffy-the-dog-for-kids',                    img: '/assets/images/toys/sniffy-dog.jpg',              soldOut: true, category: 'Learning' },
  { id: 'toy9',  name: 'Baby Action Ball',                         shortName: 'Baby Action Ball',                   priceNum: 399,  price: 'Rs. 399.00',   href: '/products/toy-pet-sniffy-the-dog-for-kids-copy',               img: '/assets/images/toys/baby-action-ball.jpg',        soldOut: true, category: 'Learning' },
  { id: 'toy10', name: 'Colourful Learning Blocks for Kids',       shortName: 'Colourful Learning Block fo...',     priceNum: 399,  price: 'Rs. 399.00',   href: '/products/cute-musical-snail-for-kids-copy',                   img: '/assets/images/toys/learning-blocks.jpg',         soldOut: true, category: 'Learning' },
  { id: 'toy11', name: 'Free Wheel Police Jeep Toy',               shortName: 'Free Wheel Police Jeep Toy...',      priceNum: 125,  price: 'Rs. 125.00',   href: '/products/free-wheel-police-jeep-toys-for-babies-baby-care',   img: '/assets/images/toys/police-jeep-freewheel.jpg',   soldOut: true, category: 'Vehicles' },
  { id: 'toy12', name: 'Free Wheel Earth Mover Toy',               shortName: 'Free Wheel Earth Mover Toy ...',     priceNum: 349,  price: 'Rs. 349.00',   href: '/products/free-wheel-earth-mover-toys-for-babies',             img: '/assets/images/toys/earth-mover.jpg',             soldOut: true, category: 'Vehicles' },
  { id: 'toy13', name: 'Free Wheel Fire Engine Toy',               shortName: 'Free Wheel Fire Engine Toy ...',     priceNum: 999,  price: 'Rs. 999.00',   href: '/products/free-wheel-fire-engine-toys-for-babies-baby-care',   img: '/assets/images/toys/fire-engine.jpg',             soldOut: true, category: 'Vehicles' },
  { id: 'toy14', name: 'Cute Musical Snail for Kids',              shortName: 'Cute Musical Snail for Kids',        priceNum: 849,  price: 'Rs. 849.00',   href: '/products/roly-poly-turtle-for-kids-copy',                     img: '/assets/images/toys/musical-snail.jpg',           soldOut: true, category: 'Learning' },
  { id: 'toy15', name: 'Mini Vehicles - Oil Tank Toy',             shortName: 'Mini Vehicles - Oil Tank Toy',       priceNum: 125,  price: 'Rs. 125.00',   href: '/products/mini-vehicles-oil-tank',                             img: '/assets/images/toys/oil-tank.jpg',                soldOut: true, category: 'Vehicles' },
  { id: 'toy16', name: 'Mini Vehicles - Cement Mixer Toy',         shortName: 'Mini Vehicles - Cement Mixe...',     priceNum: 125,  price: 'Rs. 125.00',   href: '/products/mini-vehicles-cement-mixer',                         img: '/assets/images/toys/cement-mixer.jpg',            soldOut: true, category: 'Vehicles' },
  { id: 'toy17', name: 'Munchkin Baby Walker for Kids',            shortName: 'Munchkin Baby Walker for...',        priceNum: 2499, price: 'Rs. 2,499.00', href: '/products/munchkin-walker-for-kids',                           img: '/assets/images/toys/munchkin-walker.jpg',         soldOut: true, category: 'Walkers' },
  { id: 'toy18', name: 'Dolphin Rider',                            shortName: 'Dolphin Rider',                      priceNum: 1499, price: 'Rs. 1,499.00', href: '/products/dolphin-rider-pop',                                  img: '/assets/images/toys/dolphin-rider.jpg',           soldOut: true, category: 'Riders' },
  { id: 'toy19', name: 'Dolphin Swing Car',                        shortName: 'Dolphin Swing Car',                  priceNum: 1799, price: 'Rs. 1,799.00', href: '/products/dolpn-swg-car-pop',                                  img: '/assets/images/toys/dolphin-swing-car.jpg',       soldOut: true, category: 'Riders' },
  { id: 'toy20', name: 'Jumbo Rider',                              shortName: 'Jumbo Rider',                        priceNum: 2999, price: 'Rs. 2,999.00', href: '/products/jumbo-rider-pop',                                    img: '/assets/images/toys/jumbo-rider.jpg',             soldOut: true, category: 'Riders' },
  { id: 'toy21', name: 'Euro Bullet Swing Car',                    shortName: 'Euro Bullet Swing Car',              priceNum: 1999, price: 'Rs. 1,999.00', href: '/products/euro-sng-car-pop',                                   img: '/assets/images/toys/euro-swing-car.jpg',          soldOut: true, category: 'Riders' },
  { id: 'toy22', name: 'My Pet Billy',                             shortName: 'My Pet Billy',                       priceNum: 499,  price: 'Rs. 499.00',   href: '/products/colourful-learning-block-for-kids-copy',             img: '/assets/images/toys/billy-pet.jpg',               soldOut: true, category: 'Learning' },
];

const MAX_PRICE = 2999;
const CATEGORIES = ['Vehicles', 'Riders', 'Walkers', 'Learning', 'Playtime'];

function FilterSection({
  label,
  defaultOpen = false,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-gray-900">{label}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <span
        className={`w-4 h-4 flex-shrink-0 border rounded flex items-center justify-center transition-colors ${
          checked ? 'bg-[#e21a5a] border-[#e21a5a]' : 'border-gray-300 group-hover:border-[#e21a5a]'
        }`}
        onClick={onChange}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}

function WishlistButton() {
  const [wished, setWished] = useState(false);
  return (
    <button
      onClick={() => setWished((w) => !w)}
      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-150"
      aria-label="Add to wishlist"
    >
      <svg
        className="w-4 h-4"
        fill={wished ? '#e21a5a' : 'none'}
        stroke={wished ? '#e21a5a' : '#888'}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}

export default function ToysGamingPage() {
  const [availInStock, setAvailInStock] = useState(false);
  const [availOutOfStock, setAvailOutOfStock] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(MAX_PRICE);
  const [selCategories, setSelCategories] = useState<string[]>([]);

  const toggleCategory = (cat: string) =>
    setSelCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));

  const filtered = useMemo(() => {
    return toyProducts.filter((p) => {
      if (availInStock && p.soldOut) return false;
      if (availOutOfStock && !p.soldOut) return false;
      if (p.priceNum < priceMin || p.priceNum > priceMax) return false;
      if (selCategories.length > 0 && !selCategories.includes(p.category)) return false;
      return true;
    });
  }, [availInStock, availOutOfStock, priceMin, priceMax, selCategories]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1280px] mx-auto px-4 py-8">
        <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
          <Link href="/" className="hover:text-[#e21a5a]">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-600">Toys &amp; Gaming</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-[#e21a5a] mb-6">toys &amp; gaming</h1>

        <div className="flex gap-8 items-start">
          {/* LEFT SIDEBAR */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-1 pb-3 border-b border-gray-200">
                <span className="text-base font-bold text-gray-900">Filters</span>
                <span className="text-sm text-gray-400">{filtered.length} items</span>
              </div>

              {/* Availability */}
              <FilterSection label="Availability" defaultOpen={true}>
                <Checkbox label="In stock" checked={availInStock} onChange={() => setAvailInStock((v) => !v)} />
                <Checkbox label="Out of stock" checked={availOutOfStock} onChange={() => setAvailOutOfStock((v) => !v)} />
              </FilterSection>

              {/* Price Range */}
              <FilterSection label="Price Range" defaultOpen={true}>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <input
                    type="number"
                    min={0}
                    max={priceMax}
                    value={priceMin}
                    onChange={(e) => setPriceMin(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-[#e21a5a]"
                    placeholder="Min"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    min={priceMin}
                    max={MAX_PRICE}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-[#e21a5a]"
                    placeholder="Max"
                  />
                </div>
                <p className="text-xs text-gray-400">The highest price is Rs. {MAX_PRICE.toLocaleString()}</p>
              </FilterSection>

              {/* Category */}
              <FilterSection label="Category" defaultOpen={true}>
                {CATEGORIES.map((cat) => (
                  <Checkbox
                    key={cat}
                    label={cat}
                    checked={selCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                ))}
              </FilterSection>
            </div>
          </aside>

          {/* RIGHT GRID */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <div
                    className="relative rounded-xl overflow-hidden"
                    style={{ backgroundColor: '#e8e8e8', aspectRatio: '1/1' }}
                  >
                    <Link href={product.href}>
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </Link>

                    {product.soldOut && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-white text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded-full border border-gray-200 shadow-sm">
                          Sold out
                        </span>
                      </div>
                    )}

                    <WishlistButton />
                  </div>

                  <div className="pt-2.5 pb-1 flex flex-col gap-1">
                    <Link href={product.href}>
                      <p className="text-xs md:text-sm text-gray-800 leading-snug hover:text-[#e21a5a] transition-colors line-clamp-2">
                        {product.shortName}
                      </p>
                    </Link>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
