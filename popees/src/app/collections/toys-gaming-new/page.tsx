'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ToyProduct {
  id: string;
  name: string;
  shortName: string;
  price: string;
  originalPrice?: string;
  href: string;
  img: string;
  soldOut?: boolean;
}

const toyProducts: ToyProduct[] = [
  {
    id: 'toy1',
    name: 'High Speed Toy Car - Police Jeep',
    shortName: 'High Speed Toy Car - Police...',
    price: 'Rs. 125.00',
    href: '/products/high-speed-toy-car-copy-1',
    img: '/assets/images/toys/high-speed-car-police.jpg',
    soldOut: true,
  },
  {
    id: 'toy2',
    name: 'High Speed Toy Car - City Car',
    shortName: 'High Speed Toy Car - City...',
    price: 'Rs. 125.00',
    href: '/products/high-speed-toy-car',
    img: '/assets/images/toys/high-speed-car-yellow.jpg',
    soldOut: true,
  },
  {
    id: 'toy3',
    name: 'Buddy Rider - Mickey Ride On',
    shortName: 'Buddy Rider - Mickey Ride...',
    price: 'Rs. 1,499.00',
    href: '/products/buddy-rider-pop',
    img: '/assets/images/toys/buddy-rider.jpg',
    soldOut: true,
  },
  {
    id: 'toy4',
    name: 'Giggles 3 in 1 Deluxe Play Gym - Pink',
    shortName: 'Giggles 3 in 1 Deluxe Play...',
    price: 'Rs. 1,999.00',
    href: '/products/3-in-1-deluxe-play-gym-n-pink',
    img: '/assets/images/toys/playgym-pink.jpg',
    soldOut: true,
  },
  {
    id: 'toy5',
    name: 'Mini Vehicles - City Police Jeep',
    shortName: 'Mini Vehicles - Police Jeep...',
    price: 'Rs. 125.00',
    href: '/products/mini-vehicles-city-police-jeep',
    img: '/assets/images/toys/police-jeep-mini.jpg',
    soldOut: true,
  },
  {
    id: 'toy6',
    name: 'Sweet Smily Walker for Kids',
    shortName: 'Sweet Smily Walker for Kids',
    price: 'Rs. 1,999.00',
    href: '/products/smily-walker-for-kids',
    img: '/assets/images/toys/smily-walker.jpg',
    soldOut: true,
  },
  {
    id: 'toy7',
    name: 'Roly Poly Turtle for Kids',
    shortName: 'Roly Poly Turtle for Kids',
    price: 'Rs. 749.00',
    href: '/products/free-wheel-police-jeep-toy-for-babies-copy',
    img: '/assets/images/toys/roly-poly-turtle.jpg',
    soldOut: true,
  },
  {
    id: 'toy8',
    name: 'Toy Pet - Sniffy The Dog for Kids',
    shortName: 'Toy Pet - Sniffy The Dog fo...',
    price: 'Rs. 699.00',
    href: '/products/toy-pet-sniffy-the-dog-for-kids',
    img: '/assets/images/toys/sniffy-dog.jpg',
    soldOut: true,
  },
  {
    id: 'toy9',
    name: 'Baby Action Ball',
    shortName: 'Baby Action Ball',
    price: 'Rs. 399.00',
    href: '/products/toy-pet-sniffy-the-dog-for-kids-copy',
    img: '/assets/images/toys/baby-action-ball.jpg',
    soldOut: true,
  },
  {
    id: 'toy10',
    name: 'Colourful Learning Blocks for Kids',
    shortName: 'Colourful Learning Block fo...',
    price: 'Rs. 399.00',
    href: '/products/cute-musical-snail-for-kids-copy',
    img: '/assets/images/toys/learning-blocks.jpg',
    soldOut: true,
  },
  {
    id: 'toy11',
    name: 'Free Wheel Police Jeep Toy',
    shortName: 'Free Wheel Police Jeep Toy...',
    price: 'Rs. 125.00',
    href: '/products/free-wheel-police-jeep-toys-for-babies-baby-care',
    img: '/assets/images/toys/police-jeep-freewheel.jpg',
    soldOut: true,
  },
  {
    id: 'toy12',
    name: 'Free Wheel Earth Mover Toy',
    shortName: 'Free Wheel Earth Mover Toy ...',
    price: 'Rs. 349.00',
    href: '/products/free-wheel-earth-mover-toys-for-babies',
    img: '/assets/images/toys/earth-mover.jpg',
    soldOut: true,
  },
  {
    id: 'toy13',
    name: 'Free Wheel Fire Engine Toy',
    shortName: 'Free Wheel Fire Engine Toy ...',
    price: 'Rs. 999.00',
    href: '/products/free-wheel-fire-engine-toys-for-babies-baby-care',
    img: '/assets/images/toys/fire-engine.jpg',
    soldOut: true,
  },
  {
    id: 'toy14',
    name: 'Cute Musical Snail for Kids',
    shortName: 'Cute Musical Snail for Kids',
    price: 'Rs. 849.00',
    href: '/products/roly-poly-turtle-for-kids-copy',
    img: '/assets/images/toys/musical-snail.jpg',
    soldOut: true,
  },
  {
    id: 'toy15',
    name: 'Mini Vehicles - Oil Tank Toy',
    shortName: 'Mini Vehicles - Oil Tank Toy',
    price: 'Rs. 125.00',
    href: '/products/mini-vehicles-oil-tank',
    img: '/assets/images/toys/oil-tank.jpg',
    soldOut: true,
  },
  {
    id: 'toy16',
    name: 'Mini Vehicles - Cement Mixer Toy',
    shortName: 'Mini Vehicles - Cement Mixe...',
    price: 'Rs. 125.00',
    href: '/products/mini-vehicles-cement-mixer',
    img: '/assets/images/toys/cement-mixer.jpg',
    soldOut: true,
  },
  {
    id: 'toy17',
    name: 'Munchkin Baby Walker for Kids',
    shortName: 'Munchkin Baby Walker for...',
    price: 'Rs. 2,499.00',
    href: '/products/munchkin-walker-for-kids',
    img: '/assets/images/toys/munchkin-walker.jpg',
    soldOut: true,
  },
  {
    id: 'toy18',
    name: 'Dolphin Rider',
    shortName: 'Dolphin Rider...',
    price: 'Rs. 1,499.00',
    href: '/products/dolphin-rider-pop',
    img: '/assets/images/toys/dolphin-rider.jpg',
    soldOut: true,
  },
  {
    id: 'toy19',
    name: 'Dolphin Swing Car',
    shortName: 'Dolphin Swing Car...',
    price: 'Rs. 1,799.00',
    href: '/products/dolpn-swg-car-pop',
    img: '/assets/images/toys/dolphin-swing-car.jpg',
    soldOut: true,
  },
  {
    id: 'toy20',
    name: 'Jumbo Rider',
    shortName: 'Jumbo Rider...',
    price: 'Rs. 2,999.00',
    href: '/products/jumbo-rider-pop',
    img: '/assets/images/toys/jumbo-rider.jpg',
    soldOut: true,
  },
  {
    id: 'toy21',
    name: 'Euro Bullet Swing Car',
    shortName: 'Euro Bullet Swing Car...',
    price: 'Rs. 1,999.00',
    href: '/products/euro-sng-car-pop',
    img: '/assets/images/toys/euro-swing-car.jpg',
    soldOut: true,
  },
  {
    id: 'toy22',
    name: 'My Pet Billy',
    shortName: 'My Pet Billy...',
    price: 'Rs. 499.00',
    href: '/products/colourful-learning-block-for-kids-copy',
    img: '/assets/images/toys/billy-pet.jpg',
    soldOut: true,
  },
];

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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
          <Link href="/" className="hover:text-[#e21a5a]">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-600">Toys &amp; Gaming</span>
        </nav>

        {/* Page title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#e21a5a] mb-8">
          toys &amp; gaming
        </h1>

        {/* 4-column product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {toyProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image area */}
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

                {/* Sold out badge */}
                {product.soldOut && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-white text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded-full border border-gray-200 shadow-sm">
                      Sold out
                    </span>
                  </div>
                )}

                {/* Wishlist heart */}
                <WishlistButton />
              </div>

              {/* Product info */}
              <div className="pt-2.5 pb-1 flex flex-col gap-1">
                <Link href={product.href}>
                  <p className="text-xs md:text-sm text-gray-800 leading-snug hover:text-[#e21a5a] transition-colors line-clamp-2">
                    {product.shortName}
                  </p>
                </Link>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs md:text-sm font-semibold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
