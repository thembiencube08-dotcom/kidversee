import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const babyRompers = [
{ id: 'r1', name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie | 0-6 Months', shortName: 'Popees Baby Girls Solid Hal...', price: '$ 725.00', href: 'https://www.popees.com/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146fb607d-1772274371867.png" },
{ id: 'r2', name: 'Popees Baby Girls Ribbed Cotton Half Sleeve Romper | Front Snap Button Onesie with Soccer Patch', shortName: 'Popees Baby Girls Ribbed Co...', price: '$ 725.00', href: 'https://www.popees.com/products/popees-baby-girls-ribbed-cotton-half-sleeve-romper-front-snap-button-onesie-with-soccer-patch-soft-breathable-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146371478-1772204141012.png" },
{ id: 'r3', name: 'Popees Boys Full-Sleeve Front Open Romper (0-6 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Boys Full-Sleeve Fro...', price: '$ 799.00', href: 'https://www.popees.com/products/popees-boys-short-sleeve-front-open-romper-0-6-months-made-of-organic-bamboo-cotton-fabric-copy', img: "https://img.rocket.new/generatedImages/rocket_gen_img_19f435079-1774770028110.png" },
{ id: 'r4', name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie with Cute Giraffe Patch | Cream', shortName: 'Popees Baby Girls Solid Hal...', price: '$ 725.00', href: 'https://www.popees.com/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-with-cute-giraffe-patch-cream-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146fb607d-1772274371867.png", soldOut: true }];


export default function BabyRompersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-10 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Baby Rompers</span>
            </nav>
            <h1 className="text-3xl font-heading font-bold text-[#ff5870]">Baby Rompers</h1>
            <p className="text-gray-600 mt-2">{babyRompers?.length} products</p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 py-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {babyRompers?.map((product) =>
            <div key={product?.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <Image src={product?.img} alt={product?.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                  </Link>
                  {product?.soldOut &&
                <div className="absolute top-2 left-2 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded">Sold out</div>
                }
                </div>
                <div className="mt-2">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">{product?.shortName}</h3>
                  </Link>
                  <span className="text-xs font-semibold text-gray-900 mt-1 block">{product?.price}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}