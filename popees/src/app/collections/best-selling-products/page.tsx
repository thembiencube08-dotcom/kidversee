'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  name: string;
  shortName: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  href: string;
  img: string;
  rating?: string;
}

const bestSellers: Product[] = [
{ id: 'bs1', name: 'Popees Anti-Bacterial & Anti-Fungal Best in India Baby Fabric Wash-1 Liter', shortName: 'Popees Anti-Bacterial & Ant...', price: '$ 319.00', href: 'https://www.popees.com/products/anti-bacterial-anti-fungal-baby-fabric-wash', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1496aa865-1783070918549.png", rating: '5.0' },
{ id: 'bs2', name: 'Popees Baby Jhabla – 100% Cotton, Skin-friendly Front Knot Tops for Newborns & Infants (Pack of 6)', shortName: 'Popees Baby Jhabla – 100% C...', price: '$ 699.00', href: 'https://www.popees.com/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-7', img: "https://images.unsplash.com/photo-1649056747314-74345cf99a9c", rating: '4.3' },
{ id: 'bs3', name: 'Popees 100% Cotton Pants 5 Pieces Set for Newborn Babies', shortName: 'Popees 100% Cotton Pants 5 ...', price: '$ 699.00', href: 'https://www.popees.com/products/trendy-comfy-panties-combo-for-girls-baby-care', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15e946129-1764694310821.png", rating: '4.5' },
{ id: 'bs4', name: 'Popees Premium Pant Style Diaper - 24 PCS, Extra Soft, Breathable, Super Absorbent, Double Leakage Barrier with Elastic Waist', shortName: 'Popees Premium Pant Style D...', price: '$ 284.00', originalPrice: '$ 379.00', discount: '25% OFF', href: 'https://www.popees.com/products/popees-premium-baby-diapers-24-pcs', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11a042191-1770850585707.png", rating: '5.0' },
{ id: 'bs5', name: 'Popees Anti-bacterial Vitamin E & Aloe Vera Baby Wet Wipes -70 PCS', shortName: 'Popees Anti-bacterial Vitam...', price: '$ 149.00', href: 'https://www.popees.com/products/popees-baby-wipes-70-pcs-lid', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0ba2688-1784804619646.png" },
{ id: 'bs6', name: 'Popees Baby Jhabla – 100% Cotton, Skin-friendly Front Button Tops for Newborns & Infants (Pack of 6)', shortName: 'Popees Baby Jhabla – 100% C...', price: '$ 699.00', href: 'https://www.popees.com/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-8', img: "https://images.unsplash.com/photo-1649056747314-74345cf99a9c", rating: '5.0' },
{ id: 'bs7', name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2 | Tiny Baby, Newborn to 6 Months', shortName: 'Popees Baby Girls Cotton Fr...', price: '$ 749.00', href: 'https://www.popees.com/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-6m', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png" },
{ id: 'bs8', name: 'Popees Baby Girls Cotton Jabla Pack of 2 | Tiny Baby, Newborn to 6 Months', shortName: 'Popees Baby Girls Cotton Ja...', price: '$ 799.00', href: 'https://www.popees.com/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-to-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9b6451d-1781459672813.png" }];


export default function BestSellersPage() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const toggleWishlist = (id: string) => setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Best Sellers</span>
          </nav>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 pb-6">
          <h1 className="text-2xl font-heading font-bold text-[#ff5870]">Best Sellers</h1>
          <p className="text-sm text-gray-500 mt-1">{bestSellers.length} products</p>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bestSellers.map((product) =>
            <div key={product.id} className="group relative">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link href={product.href} target="_blank" rel="noopener noreferrer">
                    <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                  </Link>
                  {product.discount &&
                <div className="absolute top-2 left-2 bg-[#e21a5a] text-white text-xs font-bold px-2 py-1 rounded">{product.discount}</div>
                }
                  <button onClick={() => toggleWishlist(product.id)} className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#fff0f3] transition-colors" aria-label="Add to wishlist">
                    <svg className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-[#e21a5a] text-[#e21a5a]' : 'text-gray-400'}`} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </button>
                </div>
                <div className="mt-2">
                  {product.rating &&
                <div className="flex items-center gap-1 mb-1">
                      <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>
                }
                  <Link href={product.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">{product.shortName}</h3>
                  </Link>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-900">{product.price}</span>
                    {product.originalPrice && <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}