import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const accessoriesCategories = [
{ title: 'Mittens', href: 'https://www.popees.com/collections/mittens-new', img: 'https://www.popees.com/cdn/shop/files/10b_1.jpg?v=1774117666&width=400' },
{ title: 'Booties', href: 'https://www.popees.com/collections/booties-new', img: 'https://www.popees.com/cdn/shop/files/POPEESBOOTIES-C_1.jpg?v=1774117871&width=400' },
{ title: 'Cap', href: 'https://www.popees.com/collections/cap-new', img: 'https://www.popees.com/cdn/shop/files/CAPC3PCS_1.jpg?v=1774117553&width=400' },
{ title: 'Socks', href: 'https://www.popees.com/collections/socks-new', img: 'https://www.popees.com/cdn/shop/files/9a_1.jpg?v=1774117666&width=400' },
{ title: 'Pillow', href: 'https://www.popees.com/collections/pillow-new', img: 'https://www.popees.com/cdn/shop/files/20250926_1256_BabyNeckPad_remix_01k62ek6pzevwbtbyky4samttx_1.png?v=1774117854&width=400' },
{ title: 'Swaddle Wrap', href: 'https://www.popees.com/collections/swaddle-wrap-new', img: 'https://www.popees.com/cdn/shop/files/007A-JB-U-TL-701A.jpg?v=1774117953&width=400' },
{ title: 'Bibs', href: 'https://www.popees.com/collections/bibs', img: 'https://www.popees.com/cdn/shop/files/TH323-JN-0052.jpg?v=1774117626&width=400' },
{ title: 'Hair Band', href: 'https://www.popees.com/collections/hair-band-new', img: 'https://www.popees.com/cdn/shop/files/1_13.jpg?v=1774117647&width=400' },
{ title: 'Feeding Bottle', href: 'https://www.popees.com/collections/feeding-bottle-new', img: 'https://www.popees.com/cdn/shop/files/8.jpg?v=1774117654&width=400' },
{ title: 'Blanket', href: 'https://www.popees.com/collections/blanket-new', img: 'https://www.popees.com/cdn/shop/files/005A-JB-U-BL-01.jpg?v=1774117620&width=400' }];


export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-10 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Accessories</span>
            </nav>
            <h1 className="text-3xl font-heading font-bold text-[#ff5870]">Accessories</h1>
            <p className="text-gray-600 mt-2">Complete your baby&apos;s wardrobe with our range of adorable accessories.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-10 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {accessoriesCategories?.map((cat) =>
            <Link key={cat?.title} href={cat?.href} target="_blank" rel="noopener noreferrer" className="group text-center">
                <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-50 mb-2 group-hover:shadow-md transition-shadow">
                  <Image src={cat?.img} alt={cat?.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#e21a5a] transition-colors">{cat?.title}</h3>
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}