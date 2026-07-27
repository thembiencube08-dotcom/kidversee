import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const boysCategories = [
{ title: 'T-Shirt', href: 'https://www.popees.com/collections/boys-t-shirt-new', img: 'https://www.popees.com/cdn/shop/files/003AKF-B-PO-111_1.jpg?v=1774117722&width=400' },
{ title: 'Shirt', href: 'https://www.popees.com/collections/boys-shirt-new', img: 'https://www.popees.com/cdn/shop/files/Untitled_design.png?v=1774117522&width=400' },
{ title: 'Pants', href: 'https://www.popees.com/collections/boys-pants-new', img: 'https://www.popees.com/cdn/shop/files/1_6_94292094-79ce-4fd0-aec5-ac16f9869ecb.jpg?v=1774117677&width=400' },
{ title: 'Shorts', href: 'https://www.popees.com/collections/boys-shorts-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-ST-508_1.jpg?v=1774117496&width=400' },
{ title: 'Dungaree', href: 'https://www.popees.com/collections/boys-dungaree-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-B-DU-414_1_46c9e120-bb8f-4d69-846a-915fb66ffb02.jpg?v=1774117535&width=400' },
{ title: 'Jacket', href: 'https://www.popees.com/collections/boys-jacket-new', img: 'https://www.popees.com/cdn/shop/files/006A-KF-B-JK-625.jpg?v=1774117873&width=400' }];


const featuredProducts = [
{ id: 'bo1', name: 'Popees Baby Boys Printed Cotton Pants with Utility Pocket | Soft & Comfortable Elastic Waist Bottom Wear | 3-24 Months', shortName: 'Popees Baby Boys Printed Co...', price: '$ 649.00', href: 'https://www.popees.com/products/popees-baby-boys-printed-cotton-pants-with-utility-pocket-soft-comfortable-elastic-waist-bottom-wear-3-24-months', img: "https://images.unsplash.com/photo-1658857833313-12057bec15cb" },
{ id: 'bo2', name: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla | Off-White | 0-12 Months', shortName: 'Popees Baby Boys Full Sleev...', price: '$ 399.00', href: 'https://www.popees.com/products/popees-baby-boys-full-sleeve-cotton-jhabla-off-white-0-12-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11280f753-1769340082329.png" },
{ id: 'bo3', name: 'Popees Boys Full-Sleeve Front Open Romper (0-6 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Boys Full-Sleeve Fro...', price: '$ 799.00', href: 'https://www.popees.com/products/popees-boys-short-sleeve-front-open-romper-0-6-months-made-of-organic-bamboo-cotton-fabric-copy', img: "https://img.rocket.new/generatedImages/rocket_gen_img_19f435079-1774770028110.png" },
{ id: 'bo4', name: 'Popees Baby Boys Checked Cotton Shirt Grey 9 Months to 4 Years', shortName: 'Popees Baby Boys Checked Co...', price: '$ 549.00', href: 'https://www.popees.com/collections/boys-new', img: "https://images.unsplash.com/photo-1522493419534-2db203b624c8" },
{ id: 'bo5', name: 'Popees Baby Boys Short Sleeve Dungaree with T-Shirt Red 0-9 Months', shortName: 'Popees Baby Boys Short Slee...', price: '$ 649.00', href: 'https://www.popees.com/collections/boys-new', img: "https://images.unsplash.com/photo-1599456982138-ce7f991a5390" }];


export default function BoysPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden">
          <Image
            src="https://www.popees.com/cdn/shop/collections/freepik_a-fullshot-studio-photogr_2486023754_473b3409-7fab-4fee-943e-ca6f73a07a4b.png?v=1777035022&width=1400"
            alt="Boys collection - stylish clothing for baby boys"
            fill
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Boys</h1>
            <p className="text-white/80">1 - 8 Years</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Boys</span>
          </nav>
        </div>

        {/* Shop by Age */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Shop by Age</h2>
          <div className="flex flex-wrap gap-2">
            {['1-2 Year', '2-3 Year', '3-4 Year', '4-5 Year', '5-6 Year', '6-7 Year', '7-8 Year']?.map((age) =>
            <Link
              key={age}
              href={`https://www.popees.com/collections/boys-${age?.toLowerCase()?.replace(/\s+/g, '-')}-new`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#e21a5a] hover:text-[#e21a5a] transition-colors">
              
                {age}
              </Link>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Shop by Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {boysCategories?.map((cat) =>
            <Link key={cat?.title} href={cat?.href} target="_blank" rel="noopener noreferrer" className="group text-center">
                <div className="relative overflow-hidden rounded-full aspect-square bg-gray-50 mb-2 border-2 border-transparent group-hover:border-[#e21a5a] transition-colors">
                  <Image src={cat?.img} alt={cat?.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 33vw, 16vw" />
                </div>
                <h3 className="text-xs font-medium text-gray-800 group-hover:text-[#e21a5a] transition-colors">{cat?.title}</h3>
              </Link>
            )}
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-[1400px] mx-auto px-4 pb-16">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Popular Boys Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredProducts?.map((product) =>
            <div key={product?.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link href={product?.href} target="_blank" rel="noopener noreferrer">
                    <Image src={product?.img} alt={product?.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 20vw" />
                  </Link>
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