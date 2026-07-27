import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const babyClothingProducts = [
{ id: 'bc1', name: 'Popees Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set', shortName: 'Popees Baby Girls Ribbed Po...', price: '$ 899.00', href: 'https://www.popees.com/products/popees-baby-girls-ribbed-polo-t-shirt-shorts-co-ord-set-soft-cotton-summer-outfit', img: "https://images.unsplash.com/photo-1591647631638-47b3e75ae1b9" },
{ id: 'bc2', name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie', shortName: 'Popees Baby Girls Solid Hal...', price: '$ 725.00', href: 'https://www.popees.com/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146fb607d-1772274371867.png" },
{ id: 'bc3', name: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla | Off-White | 0-12 Months', shortName: 'Popees Baby Boys Full Sleev...', price: '$ 399.00', href: 'https://www.popees.com/products/popees-baby-boys-full-sleeve-cotton-jhabla-off-white-0-12-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11280f753-1769340082329.png" },
{ id: 'bc4', name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2 | Tiny Baby, Newborn to 6 Months', shortName: 'Popees Baby Girls Cotton Fr...', price: '$ 749.00', href: 'https://www.popees.com/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-6m', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png" },
{ id: 'bc5', name: 'Popees Soft Cotton Striped Jumpsuit with Front Button Closure & Pockets for Baby Girls', shortName: 'Popees Soft Cotton Striped ...', price: '$ 849.00', href: 'https://www.popees.com/products/popees-soft-cotton-striped-jumpsuit-with-front-button-closure-pockets-for-baby-girls-3-24-months', img: "https://images.unsplash.com/photo-1661434714812-f4c5682434bf" },
{ id: 'bc6', name: 'Popees Baby Girls Ribbed Cotton Half Sleeve Romper | Front Snap Button Onesie', shortName: 'Popees Baby Girls Ribbed Co...', price: '$ 725.00', href: 'https://www.popees.com/products/popees-baby-girls-ribbed-cotton-half-sleeve-romper-front-snap-button-onesie-with-soccer-patch-soft-breathable-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_146371478-1772204141012.png" },
{ id: 'bc7', name: 'Popees Unisex Full-Sleeve Front Open Sleepsuit (0-6 Months) Made of Organic Bamboo Cotton', shortName: 'Popees Unisex Full-Sleeve F...', price: '$ 649.00', href: 'https://www.popees.com/products/popees-chest-printed-full-sleeve-front-open-sleepsuit-0-9-months-for-newborn-babies-copy-1', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae68588c-1779170840275.png" },
{ id: 'bc8', name: 'Popees Baby Boys Printed Cotton Pants with Utility Pocket | 3-24 Months', shortName: 'Popees Baby Boys Printed Co...', price: '$ 649.00', href: 'https://www.popees.com/products/popees-baby-boys-printed-cotton-pants-with-utility-pocket-soft-comfortable-elastic-waist-bottom-wear-3-24-months', img: "https://images.unsplash.com/photo-1658857833313-12057bec15cb" },
{ id: 'bc9', name: 'Popees Babycare Waffle Knit Full Sleeve Baby Top | Soft Cotton Thermal Top', shortName: 'Popees Babycare Waffle Knit...', price: '$ 699.00', href: 'https://www.popees.com/products/popees-babycare-waffle-knit-full-sleeve-baby-top-soft-cotton-thermal-top-round-neck-with-button-placket-cream-0-9-months', img: "https://images.unsplash.com/photo-1695628364825-a0a5ab89f97a" },
{ id: 'bc10', name: 'Popees Girls Sleeveless Dress (0-9 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Girls Sleeveless Dre...', price: '$ 625.00', href: 'https://www.popees.com/products/popees-girls-sleeveless-front-open-dress-0-9-months-made-of-organic-bamboo-cotton-fabric-copy-1', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11d3bd8ef-1784761971340.png" }];


export default function BabyClothingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-10 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/collections/baby-new" className="hover:text-[#e21a5a]">Baby</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Baby Clothing</span>
            </nav>
            <h1 className="text-3xl font-heading font-bold text-[#ff5870]">Baby Clothing</h1>
            <p className="text-gray-600 mt-2">{babyClothingProducts?.length} products</p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 py-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {babyClothingProducts?.map((product) =>
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