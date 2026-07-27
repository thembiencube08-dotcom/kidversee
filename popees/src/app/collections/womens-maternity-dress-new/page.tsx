import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const maternityProducts = [
{ id: 'm1', name: 'Popees Empire Waist Maternity Dress - Comfortable & Stylish', shortName: 'Popees Empire Waist Materni...', price: '$ 899.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4ffbefc-1767887235531.png" },
{ id: 'm2', name: 'Popees Soft Trendy Maternity Kurti - Comfortable Everyday Wear', shortName: 'Popees Soft Trendy Maternity...', price: '$ 799.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1965d9397-1767082897858.png" },
{ id: 'm3', name: 'Popees Soft Comfy Maternity Gown - Perfect for Nursing', shortName: 'Popees Soft Comfy Maternity...', price: '$ 849.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_173d73a22-1767951935399.png" }];


export default function WomensMaternityDressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-10 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/collections/maternity-wear" className="hover:text-[#e21a5a]">Maternity</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Maternity Dress</span>
            </nav>
            <h1 className="text-3xl font-heading font-bold text-[#ff5870]">Maternity Dress</h1>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 py-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {maternityProducts?.map((product) =>
            <div key={product?.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-xl aspect-[3/4]">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <Image src={product?.img} alt={product?.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-sm text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">{product?.shortName}</h3>
                  </Link>
                  <span className="text-sm font-semibold text-gray-900 mt-1 block">{product?.price}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}