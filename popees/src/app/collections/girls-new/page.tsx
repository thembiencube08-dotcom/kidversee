import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const girlsCategories = [
{ title: 'T-Shirt', href: 'https://www.popees.com/collections/girls-t-shirt-new', img: 'https://www.popees.com/cdn/shop/files/004A-KF-G-PO-783_1.jpg?v=1774117540&width=400' },
{ title: 'Top', href: 'https://www.popees.com/collections/girls-top-new', img: 'https://www.popees.com/cdn/shop/files/005A-KF-G-TE-92_1.jpg?v=1774117615&width=400' },
{ title: 'Dress', href: 'https://www.popees.com/collections/girls-dresses-new', img: 'https://www.popees.com/cdn/shop/files/003AKF-G-DR-570_1.jpg?v=1774117535&width=400' },
{ title: 'Pants', href: 'https://www.popees.com/collections/girls-pants-new', img: 'https://www.popees.com/cdn/shop/files/1_19.jpg?v=1774117671&width=400' },
{ title: 'Shorts', href: 'https://www.popees.com/collections/girls-shorts-new', img: 'https://www.popees.com/cdn/shop/files/003BKF-G-ST-550_1.jpg?v=1774117722&width=400' },
{ title: 'Skirts', href: 'https://www.popees.com/collections/girls-skirts-new', img: 'https://www.popees.com/cdn/shop/files/006A-KF-G-SK-326_912d0908-4ce4-4959-92d2-7763fb69c0e1.jpg?v=1774117702&width=400' }];


const featuredProducts = [
{ id: 'g1', name: 'Popees Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set | Soft Cotton Summer Outfit', shortName: 'Popees Baby Girls Ribbed Po...', price: '$ 899.00', href: 'https://www.popees.com/products/popees-baby-girls-ribbed-polo-t-shirt-shorts-co-ord-set-soft-cotton-summer-outfit', img: "https://images.unsplash.com/photo-1591647631638-47b3e75ae1b9" },
{ id: 'g2', name: 'Popees Baby Girls Soft Ribbed Cotton Polo T-Shirt & Shorts Co-Ord Set with Embroidered Detail', shortName: 'Popees Baby Girls Soft Ribb...', price: '$ 899.00', href: 'https://www.popees.com/products/popees-baby-girls-soft-ribbed-cotton-polo-t-shirt-shorts-co-ord-set-with-embroidered-detail-9-months-4-years', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146371478-1772204141012.png" },
{ id: 'g3', name: 'Popees Soft Cotton Striped Jumpsuit with Front Button Closure & Pockets for Baby Girls', shortName: 'Popees Soft Cotton Striped ...', price: '$ 849.00', href: 'https://www.popees.com/products/popees-soft-cotton-striped-jumpsuit-with-front-button-closure-pockets-for-baby-girls-3-24-months', img: "https://images.unsplash.com/photo-1661434714812-f4c5682434bf" },
{ id: 'g4', name: 'Popees Baby Girls Ribbed Cotton Half Sleeve Romper | Front Snap Button Onesie with Soccer Patch', shortName: 'Popees Baby Girls Ribbed Co...', price: 'Rs. 725.00', href: 'https://www.popees.com/products/popees-baby-girls-ribbed-cotton-half-sleeve-romper-front-snap-button-onesie-with-soccer-patch-soft-breathable-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146371478-1772204141012.png" },
{ id: 'g5', name: 'Popees Girls Sleeveless Dress (0-9 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Girls Sleeveless Dre...', price: 'Rs. 625.00', href: 'https://www.popees.com/products/popees-girls-sleeveless-front-open-dress-0-9-months-made-of-organic-bamboo-cotton-fabric-copy-1', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11d3bd8ef-1784761971340.png" }];


export default function GirlsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden">
          <Image
            src="https://www.popees.com/cdn/shop/collections/freepik_a-fullshot-studio-photogr_2486052421_fc452c8a-6419-409d-a779-a8f1735e759f.png?v=1777035000&width=1400"
            alt="Girls collection - stylish clothing for baby girls"
            fill
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Girls</h1>
            <p className="text-white/80">1 - 8 Years</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Girls</span>
          </nav>
        </div>

        {/* Shop by Age */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Shop by Age</h2>
          <div className="flex flex-wrap gap-2">
            {['1-2 Year', '2-3 Year', '3-4 Year', '4-5 Year', '5-6 Year', '6-7 Year', '7-8 Year']?.map((age) =>
            <Link
              key={age}
              href={`https://www.popees.com/collections/girls-${age?.toLowerCase()?.replace(/\s+/g, '-')}-new`}
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
            {girlsCategories?.map((cat) =>
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
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">Popular Girls Products</h2>
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