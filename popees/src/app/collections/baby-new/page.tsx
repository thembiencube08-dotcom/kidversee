import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const shopByGender = [
  { label: 'Baby Boys', href: '/collections/baby-new?gender=boys' },
  { label: 'Baby Girls', href: '/collections/baby-new?gender=girls' },
  { label: 'Unisex', href: '/collections/baby-new?gender=unisex' },
];

const shopByAge = [
  { label: 'Tiny Baby', href: 'https://www.popees.com/collections/tiny-baby-new' },
  { label: 'Newborn', href: 'https://www.popees.com/collections/newborn-new' },
  { label: '0-1 Month', href: 'https://www.popees.com/collections/0-1-month-new' },
  { label: '1-3 Month', href: 'https://www.popees.com/collections/1-3-month-new' },
  { label: '3-6 Month', href: 'https://www.popees.com/collections/3-6-month-new' },
  { label: '6-9 Month', href: 'https://www.popees.com/collections/6-9-month-new' },
  { label: '9-12 Month', href: 'https://www.popees.com/collections/9-12-month-new' },
];

const babyClothing = [
  { label: 'Dresses', href: 'https://www.popees.com/collections/baby-dresses-1' },
  { label: 'Co-Ord Sets', href: 'https://www.popees.com/collections/baby-co-ord-sets-new' },
  { label: 'Rompers', href: 'https://www.popees.com/collections/baby-rompers' },
  { label: 'Sleepsuit', href: 'https://www.popees.com/collections/baby-sleepsuit-new' },
  { label: 'Dungaree', href: 'https://www.popees.com/collections/baby-dungaree-new' },
  { label: 'Bodysuit', href: 'https://www.popees.com/collections/baby-bodysuit-new' },
  { label: 'Gift Set', href: 'https://www.popees.com/collections/baby-gift-set-new' },
];

const topWear = [
  { label: 'T shirt', href: 'https://www.popees.com/collections/baby-t-shirt-new' },
  { label: 'Shirt', href: 'https://www.popees.com/collections/baby-shirt-new' },
  { label: 'Jacket', href: 'https://www.popees.com/collections/baby-jacket-new' },
  { label: 'Jhabla', href: 'https://www.popees.com/collections/baby-jhabla-new' },
  { label: 'Top', href: 'https://www.popees.com/collections/baby-top-new' },
  { label: 'Sweatshirt', href: 'https://www.popees.com/collections/baby-sweatshirt-new' },
];

const bottomWear = [
  { label: 'Denim Shorts', href: 'https://www.popees.com/collections/baby-denim-shorts-new' },
  { label: 'Denim Pant', href: 'https://www.popees.com/collections/baby-denim-pant-new' },
  { label: 'Pants', href: 'https://www.popees.com/collections/baby-pants-new' },
  { label: 'Shorts', href: 'https://www.popees.com/collections/baby-shorts-new' },
  { label: 'Skirt', href: 'https://www.popees.com/collections/baby-skirts-new' },
];

const featuredProducts = [
  {
    id: 'b1',
    name: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla | Off-White | 0-12 Months',
    shortName: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla',
    price: '$ 399.00',
    href: 'https://www.popees.com/products/popees-baby-boys-full-sleeve-cotton-jhabla-off-white-0-12-months',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_11280f753-1769340082329.png',
  },
  {
    id: 'b2',
    name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2 | Tiny Baby, Newborn to 6 Months',
    shortName: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2',
    price: '$ 749.00',
    href: 'https://www.popees.com/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-6m',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png',
  },
  {
    id: 'b3',
    name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie',
    shortName: 'Popees Baby Girls Solid Half Sleeve Romper',
    price: '$ 725.00',
    href: 'https://www.popees.com/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-0-6-months',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_146fb607d-1772274371867.png',
  },
  {
    id: 'b4',
    name: 'Popees Babycare Waffle Knit Full Sleeve Baby Top | Soft Cotton Thermal Top',
    shortName: 'Popees Babycare Waffle Knit Full Sleeve Baby Top',
    price: '$ 699.00',
    href: 'https://www.popees.com/products/popees-babycare-waffle-knit-full-sleeve-baby-top-soft-cotton-thermal-top-round-neck-with-button-placket-cream-0-9-months',
    img: 'https://images.unsplash.com/photo-1695628364825-a0a5ab89f97a',
  },
  {
    id: 'b5',
    name: 'Popees Baby Jhabla – 100% Cotton, Skin-friendly Front Button Tops (Pack of 6)',
    shortName: 'Popees Baby Jhabla – 100% Cotton Front Button Tops',
    price: '$ 699.00',
    href: 'https://www.popees.com/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-8',
    img: 'https://images.unsplash.com/photo-1649056747314-74345cf99a9c',
    rating: '5.0',
  },
  {
    id: 'b6',
    name: 'Popees Baby Sleepsuit Full Sleeve | Organic Cotton | 0-9 Months',
    shortName: 'Popees Baby Sleepsuit Full Sleeve Organic Cotton',
    price: '$ 549.00',
    href: 'https://www.popees.com/collections/baby-sleepsuit-new',
    img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=400',
  },
  {
    id: 'b7',
    name: 'Popees Baby Co-Ord Set | Soft Cotton Top & Bottom | 0-12 Months',
    shortName: 'Popees Baby Co-Ord Set Soft Cotton Top & Bottom',
    price: '$ 849.00',
    href: 'https://www.popees.com/collections/baby-co-ord-sets-new',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=400',
  },
  {
    id: 'b8',
    name: 'Popees Baby Dungaree | Denim Look Soft Cotton | 3-12 Months',
    shortName: 'Popees Baby Dungaree Denim Look Soft Cotton',
    price: '$ 629.00',
    href: 'https://www.popees.com/collections/baby-dungaree-new',
    img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=400',
  },
  {
    id: 'b9',
    name: 'Popees Baby Romper | Snap Button Onesie | Unisex | 0-6 Months',
    shortName: 'Popees Baby Romper Snap Button Onesie Unisex',
    price: '$ 499.00',
    href: 'https://www.popees.com/collections/baby-rompers',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=400',
  },
  {
    id: 'b10',
    name: 'Popees Baby Top | Waffle Knit Cotton | Round Neck | 0-9 Months',
    shortName: 'Popees Baby Top Waffle Knit Cotton Round Neck',
    price: '$ 449.00',
    href: 'https://www.popees.com/collections/baby-top-new',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=400',
  },
  {
    id: 'b11',
    name: 'Popees Baby T-Shirt | Half Sleeve Printed Cotton | 0-12 Months',
    shortName: 'Popees Baby T-Shirt Half Sleeve Printed Cotton',
    price: '$ 379.00',
    href: 'https://www.popees.com/collections/baby-t-shirt-new',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=400',
  },
  {
    id: 'b12',
    name: 'Popees Baby Dress | Sleeveless Frock | Soft Cotton | 0-12 Months',
    shortName: 'Popees Baby Dress Sleeveless Frock Soft Cotton',
    price: '$ 599.00',
    href: 'https://www.popees.com/collections/baby-dresses-1',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=400',
  },
  {
    id: 'b13',
    name: 'Popees Baby Boys Cotton Jhabla | Short Sleeve | Pack of 3 | 0-9 Months',
    shortName: 'Popees Baby Boys Cotton Jhabla Short Sleeve Pack of 3',
    price: '$ 549.00',
    href: 'https://www.popees.com/collections/baby-jhabla-new',
    img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=400',
  },
  {
    id: 'b14',
    name: 'Popees Baby Girls Printed Frock | Flutter Sleeve | 3-12 Months',
    shortName: 'Popees Baby Girls Printed Frock Flutter Sleeve',
    price: '$ 649.00',
    href: 'https://www.popees.com/collections/baby-dresses-1',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=400',
  },
  {
    id: 'b15',
    name: 'Popees Baby Shorts | Elastic Waist Soft Cotton | Unisex | 0-12 Months',
    shortName: 'Popees Baby Shorts Elastic Waist Soft Cotton Unisex',
    price: '$ 329.00',
    href: 'https://www.popees.com/collections/baby-shorts-new',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=400',
  },
  {
    id: 'b16',
    name: 'Popees Baby Pants | Soft Rib Knit | Full Length | 0-12 Months',
    shortName: 'Popees Baby Pants Soft Rib Knit Full Length',
    price: '$ 349.00',
    href: 'https://www.popees.com/collections/baby-pants-new',
    img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=400',
  },
  {
    id: 'b17',
    name: 'Popees Baby Bodysuit | Snap Button | Long Sleeve | 0-6 Months',
    shortName: 'Popees Baby Bodysuit Snap Button Long Sleeve',
    price: '$ 479.00',
    href: 'https://www.popees.com/collections/baby-bodysuit-new',
    img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=400',
  },
  {
    id: 'b18',
    name: 'Popees Baby Gift Set | 5-Piece Newborn Starter Kit | 0-3 Months',
    shortName: 'Popees Baby Gift Set 5-Piece Newborn Starter Kit',
    price: '$ 1,299.00',
    href: 'https://www.popees.com/collections/baby-gift-set-new',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=400',
  },
  {
    id: 'b19',
    name: 'Popees Baby Jacket | Hooded Fleece Warm | 3-12 Months',
    shortName: 'Popees Baby Jacket Hooded Fleece Warm',
    price: '$ 799.00',
    href: 'https://www.popees.com/collections/baby-jacket-new',
    img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=400',
  },
  {
    id: 'b20',
    name: 'Popees Baby Sweatshirt | Soft Fleece Round Neck | 0-12 Months',
    shortName: 'Popees Baby Sweatshirt Soft Fleece Round Neck',
    price: '$ 599.00',
    href: 'https://www.popees.com/collections/baby-sweatshirt-new',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=400',
  },
  {
    id: 'b21',
    name: 'Popees Baby Shirt | Half Sleeve Check Print | 3-12 Months',
    shortName: 'Popees Baby Shirt Half Sleeve Check Print',
    price: '$ 429.00',
    href: 'https://www.popees.com/collections/baby-shirt-new',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=400',
  },
  {
    id: 'b22',
    name: 'Popees Baby Girls Skirt | Frill Cotton | Elastic Waist | 3-12 Months',
    shortName: 'Popees Baby Girls Skirt Frill Cotton Elastic Waist',
    price: '$ 399.00',
    href: 'https://www.popees.com/collections/baby-skirts-new',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=400',
  },
  {
    id: 'b23',
    name: 'Popees Baby Denim Shorts | Soft Stretch | Unisex | 3-12 Months',
    shortName: 'Popees Baby Denim Shorts Soft Stretch Unisex',
    price: '$ 449.00',
    href: 'https://www.popees.com/collections/baby-denim-shorts-new',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=400',
  },
  {
    id: 'b24',
    name: 'Popees Baby Denim Pant | Full Length Stretch | 3-12 Months',
    shortName: 'Popees Baby Denim Pant Full Length Stretch',
    price: '$ 499.00',
    href: 'https://www.popees.com/collections/baby-denim-pant-new',
    img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=400',
  },
  {
    id: 'b25',
    name: 'Popees Baby Unisex Romper | Printed Cotton | Snap Buttons | 0-9 Months',
    shortName: 'Popees Baby Unisex Romper Printed Cotton Snap Buttons',
    price: '$ 519.00',
    href: 'https://www.popees.com/collections/baby-rompers',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=400',
  },
  {
    id: 'b26',
    name: 'Popees Baby Boys Jhabla Set | 3-Pack Assorted Colors | 0-6 Months',
    shortName: 'Popees Baby Boys Jhabla Set 3-Pack Assorted Colors',
    price: '$ 699.00',
    href: 'https://www.popees.com/collections/baby-jhabla-new',
    img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=400',
  },
  {
    id: 'b27',
    name: 'Popees Baby Girls Co-Ord Set | Floral Top & Pants | 0-12 Months',
    shortName: 'Popees Baby Girls Co-Ord Set Floral Top & Pants',
    price: '$ 899.00',
    href: 'https://www.popees.com/collections/baby-co-ord-sets-new',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=400',
  },
  {
    id: 'b28',
    name: 'Popees Baby Sleepsuit | Zip Front Organic Cotton | 0-9 Months',
    shortName: 'Popees Baby Sleepsuit Zip Front Organic Cotton',
    price: '$ 579.00',
    href: 'https://www.popees.com/collections/baby-sleepsuit-new',
    img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=400',
  },
  {
    id: 'b29',
    name: 'Popees Newborn Baby Top | Ultra Soft Cotton | Front Open | 0-3 Months',
    shortName: 'Popees Newborn Baby Top Ultra Soft Cotton Front Open',
    price: '$ 359.00',
    href: 'https://www.popees.com/collections/baby-top-new',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=400',
  },
  {
    id: 'b30',
    name: 'Popees Baby Boys Dungaree | Soft Denim Look | Adjustable Straps | 3-12 Months',
    shortName: 'Popees Baby Boys Dungaree Soft Denim Adjustable Straps',
    price: '$ 679.00',
    href: 'https://www.popees.com/collections/baby-dungaree-new',
    img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=400',
  },
  {
    id: 'b31',
    name: 'Popees Baby Girls Dress | Smocked Cotton Frock | 3-12 Months',
    shortName: 'Popees Baby Girls Dress Smocked Cotton Frock',
    price: '$ 749.00',
    href: 'https://www.popees.com/collections/baby-dresses-1',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=400',
  },
  {
    id: 'b32',
    name: 'Popees Baby T-Shirt | Long Sleeve Striped Cotton | 0-12 Months',
    shortName: 'Popees Baby T-Shirt Long Sleeve Striped Cotton',
    price: '$ 419.00',
    href: 'https://www.popees.com/collections/baby-t-shirt-new',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=400',
  },
  {
    id: 'b33',
    name: 'Popees Baby Bodysuit | Short Sleeve Printed | Pack of 2 | 0-6 Months',
    shortName: 'Popees Baby Bodysuit Short Sleeve Printed Pack of 2',
    price: '$ 649.00',
    href: 'https://www.popees.com/collections/baby-bodysuit-new',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=400',
  },
  {
    id: 'b34',
    name: 'Popees Baby Pants | Drawstring Waist | Soft Jersey | 0-12 Months',
    shortName: 'Popees Baby Pants Drawstring Waist Soft Jersey',
    price: '$ 369.00',
    href: 'https://www.popees.com/collections/baby-pants-new',
    img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=400',
  },
  {
    id: 'b35',
    name: 'Popees Baby Jhabla | Bamboo Cotton Blend | Ultra Soft | Tiny Baby',
    shortName: 'Popees Baby Jhabla Bamboo Cotton Blend Ultra Soft',
    price: '$ 459.00',
    href: 'https://www.popees.com/collections/baby-jhabla-new',
    img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=400',
  },
  {
    id: 'b36',
    name: 'Popees Baby Girls Shorts | Frill Hem Soft Cotton | 3-12 Months',
    shortName: 'Popees Baby Girls Shorts Frill Hem Soft Cotton',
    price: '$ 349.00',
    href: 'https://www.popees.com/collections/baby-shorts-new',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=400',
  },
  {
    id: 'b37',
    name: 'Popees Baby Sweatshirt | Kangaroo Pocket Fleece | 3-12 Months',
    shortName: 'Popees Baby Sweatshirt Kangaroo Pocket Fleece',
    price: '$ 629.00',
    href: 'https://www.popees.com/collections/baby-sweatshirt-new',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=400',
  },
  {
    id: 'b38',
    name: 'Popees Baby Romper | Sleeveless Printed | Summer Onesie | 0-9 Months',
    shortName: 'Popees Baby Romper Sleeveless Printed Summer Onesie',
    price: '$ 489.00',
    href: 'https://www.popees.com/collections/baby-rompers',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=400',
  },
  {
    id: 'b39',
    name: 'Popees Baby Jacket | Padded Warm Zip | 3-12 Months',
    shortName: 'Popees Baby Jacket Padded Warm Zip',
    price: '$ 849.00',
    href: 'https://www.popees.com/collections/baby-jacket-new',
    img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=400',
  },
  {
    id: 'b40',
    name: 'Popees Baby Gift Set | Romper + Jhabla + Pants | 0-3 Months',
    shortName: 'Popees Baby Gift Set Romper + Jhabla + Pants',
    price: '$ 999.00',
    href: 'https://www.popees.com/collections/baby-gift-set-new',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=400',
  },
  {
    id: 'b41',
    name: 'Popees Baby Co-Ord Set | Stripe Print Top & Shorts | 0-12 Months',
    shortName: 'Popees Baby Co-Ord Set Stripe Print Top & Shorts',
    price: '$ 799.00',
    href: 'https://www.popees.com/collections/baby-co-ord-sets-new',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=400',
  },
  {
    id: 'b42',
    name: 'Popees Baby Shirt | Full Sleeve Solid Color | 3-12 Months',
    shortName: 'Popees Baby Shirt Full Sleeve Solid Color',
    price: '$ 449.00',
    href: 'https://www.popees.com/collections/baby-shirt-new',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=400',
  },
];

function ColumnLink({ label, href }: { label: string; href: string }) {
  const isExternal = href.startsWith('http');
  return (
    <li>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-sm text-gray-700 hover:text-[#e21a5a] transition-colors leading-relaxed"
      >
        {label}
      </Link>
    </li>
  );
}

export default function BabyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 py-3">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#e21a5a]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Baby</span>
          </nav>
        </div>

        {/* Mega Menu Panel */}
        <div className="max-w-[1400px] mx-auto px-6 pb-8">
          <div className="flex flex-wrap gap-x-8 gap-y-6 lg:flex-nowrap lg:gap-10">
            {/* Shop by Gender */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Shop by Gender
              </h2>
              <ul className="space-y-1.5">
                {shopByGender.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Shop by Age */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Shop by Age
              </h2>
              <ul className="space-y-1.5">
                {shopByAge.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Baby Clothing */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Baby Clothing
              </h2>
              <ul className="space-y-1.5">
                {babyClothing.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Top Wear */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Top Wear
              </h2>
              <ul className="space-y-1.5">
                {topWear.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Bottom Wear */}
            <div className="w-[45%] sm:w-auto">
              <h2 className="text-sm font-bold text-[#e21a5a] mb-3 uppercase tracking-wide">
                Bottom Wear
              </h2>
              <ul className="space-y-1.5">
                {bottomWear.map((item) => (
                  <ColumnLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Baby Image — hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block ml-auto flex-shrink-0 text-center">
              <div className="relative w-[190px] h-[190px] rounded-2xl overflow-hidden">
                <Image
                  src="https://www.popees.com/cdn/shop/collections/freepik_a-young-child-seen-from-t_2470681991.jpg?v=1777104416&width=400"
                  alt="Baby"
                  fill
                  className="object-cover"
                  sizes="190px"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">Baby</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Featured Products */}
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm aspect-[4/5]">
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-xs text-gray-700 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors">
                      {product.shortName}
                    </h3>
                  </Link>
                  <span className="text-xs font-semibold text-gray-900 mt-1 block">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
