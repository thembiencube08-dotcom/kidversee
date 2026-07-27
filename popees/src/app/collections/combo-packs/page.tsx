import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const comboPacks = [
{ id: 'cp1', name: 'Popees Baby Jhabla – 100% Cotton, Skin-friendly Front Button Tops for Newborns & Infants (Pack of 6)', shortName: 'Popees Baby Jhabla – 100% C...', price: '$ 699.00', href: 'https://www.popees.com/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-8', img: "https://images.unsplash.com/photo-1649056747314-74345cf99a9c", rating: '5.0' },
{ id: 'cp2', name: 'Popees Baby Jhabla – 100% Cotton, Skin-friendly Front Knot Tops for Newborns & Infants (Pack of 6)', shortName: 'Popees Baby Jhabla – 100% C...', price: '$ 699.00', href: 'https://www.popees.com/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-7', img: "https://images.unsplash.com/photo-1649056747314-74345cf99a9c", rating: '4.3' },
{ id: 'cp3', name: 'Popees 100% Cotton Pants 5 Pieces Set for Newborn Babies', shortName: 'Popees 100% Cotton Pants 5 ...', price: '$ 699.00', href: 'https://www.popees.com/products/trendy-comfy-panties-combo-for-girls-baby-care', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15e946129-1764694310821.png", rating: '4.5' },
{ id: 'cp4', name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2 | Tiny Baby, Newborn to 6 Months', shortName: 'Popees Baby Girls Cotton Fr...', price: '$ 749.00', href: 'https://www.popees.com/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-6m', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png" },
{ id: 'cp5', name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 3 | Newborn (0–1 Months)', shortName: 'Popees Baby Girls Cotton Fr...', price: '$ 649.00', href: 'https://www.popees.com/products/popees-baby-girls-cotton-front-open-jabla-pack-of-3-newborn-0-1m', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png" }];


export default function ComboPacksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-10 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Combo Packs</span>
            </nav>
            <h1 className="text-3xl font-heading font-bold text-[#ff5870]">Combo Packs</h1>
            <p className="text-gray-600 mt-2">Save more with our value combo packs!</p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 py-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {comboPacks?.map((product) =>
            <div key={product?.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <Image src={product?.img} alt={product?.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                  </Link>
                </div>
                <div className="mt-2">
                  {product?.rating &&
                <div className="flex items-center gap-1 mb-1">
                      <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="text-xs text-gray-500">{product?.rating}</span>
                    </div>
                }
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