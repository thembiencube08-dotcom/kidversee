import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import CategorySection from '@/components/CategorySection';
import MarqueeBar from '@/components/MarqueeBar';
import NaturalFabricsBanner from '@/components/NaturalFabricsBanner';
import ProductGrid from '@/components/ProductGrid';
import MadeWithLove from '@/components/MadeWithLove';
import WhyPopees from '@/components/WhyPopees';
import ShopTheMoments from '@/components/ShopTheMoments';
import Footer from '@/components/Footer';

const newArrivalsProducts = [
{
  id: 'na1',
  name: 'Popees Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set | Soft Cotton Summer Outfit| 9 Months -4 Years',
  shortName: 'Popees Baby Girls Ribbed Po...',
  price: '$ 899.00',
  href: '/products/popees-baby-girls-ribbed-polo-t-shirt-shorts-co-ord-set-soft-cotton-summer-outfit',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=3840'
},
{
  id: 'na2',
  name: 'Popees Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set | Soft Cotton Summer Outfit | 9 Months -4 Years',
  shortName: 'Popees Baby Girls Ribbed Po...',
  price: '$ 899.00',
  href: '/products/popees-baby-girls-ribbed-polo-t-shirt-shorts-co-ord-set-soft-cotton-summer-outfit-9-months-4-years',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_1.jpg?v=1784619301&width=3840'
},
{
  id: 'na3',
  name: 'Popees Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set | Soft Cotton 2-Piece Outfit with Snow Dreams Embroidery | 9 Months -4 Years',
  shortName: 'Popees Baby Girls Ribbed Po...',
  price: '$ 899.00',
  href: '/products/popees-baby-girls-ribbed-polo-t-shirt-shorts-co-ord-set-soft-cotton-2-piece-outfit-with-snow-dreams-embroidery-9-months-4-years',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_2.jpg?v=1784619301&width=3840'
},
{
  id: 'na4',
  name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie with Cute Giraffe Patch | Cream | 0-6 Months',
  shortName: 'Popees Baby Girls Solid Hal...',
  price: '$ 725.00',
  href: '/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-with-cute-giraffe-patch-cream-0-6-months',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_5.jpg?v=1784619302&width=3840',
  soldOut: true
},
{
  id: 'na5',
  name: 'Popees Baby Girls Solid Half Sleeve Romper | Soft Cotton Front Open Snap Button Onesie |0-6 Months',
  shortName: 'Popees Baby Girls Solid Hal...',
  price: '$ 725.00',
  href: '/products/popees-baby-girls-solid-half-sleeve-romper-soft-cotton-front-open-snap-button-onesie-0-6-months',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_4.jpg?v=1784619302&width=3840'
},
{
  id: 'na6',
  name: 'Popees Babycare Waffle Knit Full Sleeve Baby Top | Soft Cotton Thermal Top | Round Neck with Button Placket | Cream | 0-9 Months',
  shortName: 'Popees Babycare Waffle Knit...',
  price: '$ 699.00',
  href: '/products/popees-babycare-waffle-knit-full-sleeve-baby-top-soft-cotton-thermal-top-round-neck-with-button-placket-cream-0-9-months',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=3840'
},
{
  id: 'na7',
  name: 'Popees Baby Girls Soft Ribbed Cotton Polo T-Shirt & Shorts Co-Ord Set with Embroidered Detail | 9 Months 4 Years',
  shortName: 'Popees Baby Girls Soft Ribb...',
  price: '$ 899.00',
  href: '/products/popees-baby-girls-soft-ribbed-cotton-polo-t-shirt-shorts-co-ord-set-with-embroidered-detail-9-months-4-years',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_1.jpg?v=1784619301&width=3840'
},
{
  id: 'na8',
  name: 'Popees Soft Cotton Striped Jumpsuit with Front Button Closure & Pockets for Baby Girls (3-24 Months)',
  shortName: 'Popees Soft Cotton Striped ...',
  price: '$ 849.00',
  href: '/products/popees-soft-cotton-striped-jumpsuit-with-front-button-closure-pockets-for-baby-girls-3-24-months',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_2.jpg?v=1784619301&width=3840'
},
{
  id: 'na9',
  name: 'Popees Baby Girls Ribbed Cotton Half Sleeve Romper | Front Snap Button Onesie with Soccer Patch | Soft & Breathable | 0-6 Months',
  shortName: 'Popees Baby Girls Ribbed Co...',
  price: '$ 725.00',
  href: '/products/popees-baby-girls-ribbed-cotton-half-sleeve-romper-front-snap-button-onesie-with-soccer-patch-soft-breathable-0-6-months',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_5.jpg?v=1784619302&width=3840'
},
{
  id: 'na10',
  name: 'Popees Baby Boys Printed Cotton Pants with Utility Pocket | Soft & Comfortable Elastic Waist Bottom Wear | 3-24 Months',
  shortName: 'Popees Baby Boys Printed Co...',
  price: '$ 649.00',
  href: '/products/popees-baby-boys-printed-cotton-pants-with-utility-pocket-soft-comfortable-elastic-waist-bottom-wear-3-24-months',
  img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_4.jpg?v=1784619302&width=3840'
}];


const trendingProducts = [
{
  id: 'tr1',
  name: 'Popees Baby Boys Full Sleeve Muslin Cotton Jhabla| Off-White| 0-12 Months',
  shortName: 'Popees Baby Boys Full Sleev...',
  price: '$ 399.00',
  href: '/products/popees-baby-boys-full-sleeve-cotton-jhabla-off-white-0-12-months',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898.jpg?v=1774117938&width=3840'
},
{
  id: 'tr2',
  name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 2| Tiny Baby, Newborn to 6 Months',
  shortName: 'Popees Baby Girls Cotton Fr...',
  price: '$ 749.00',
  href: '/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-6m',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898_3_a85f2339-55f0-471b-b92c-b33f2ce025bc.jpg?v=1774117938&width=3840'
},
{
  id: 'tr3',
  name: 'Popees Baby Girls Cotton Front Open Jabla Pack of 3 | Newborn (0-1 Months)',
  shortName: 'Popees Baby Girls Cotton Fr...',
  price: '$ 649.00',
  href: '/products/popees-baby-girls-cotton-front-open-jabla-pack-of-3-newborn-0-1m',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898_2.jpg?v=1774117939&width=3840'
},
{
  id: 'tr4',
  name: 'Popees Baby Girls Cotton Jabla Pack of 2| Tiny Baby, Newborn to 6 Months',
  shortName: 'Popees Baby Girls Cotton Ja...',
  price: '$ 799.00',
  href: '/products/popees-baby-girls-cotton-jabla-pack-of-2-tiny-baby-nb-to-6-months',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898_1.jpg?v=1774117938&width=3840'
},
{
  id: 'tr5',
  name: 'Popees Baby Jhabla - 100% Cotton, Skin-friendly Front Button Tops for Newborns & Infants (Pack of 6)',
  shortName: 'Popees Baby Jhabla - 100% C...',
  price: '$ 699.00',
  href: '/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-8',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_17f154cdb-1784128742425.png",
  rating: '5.0'
}];


const bestSellersProducts = [
{
  id: 'bs1',
  name: 'Popees Anti-Bacterial & Anti-Fungal Best in India Baby Fabric Wash-1 Liter',
  shortName: 'Popees Anti-Bacterial & Ant...',
  price: '$ 319.00',
  href: '/products/anti-bacterial-anti-fungal-baby-fabric-wash',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1598e07f6-1765125327744.png",
  rating: '5.0'
},
{
  id: 'bs2',
  name: 'Popees Baby Jhabla - 100% Cotton, Skin-friendly Front Knot Tops for Newborns & Infants (Pack of 6)',
  shortName: 'Popees Baby Jhabla - 100% C...',
  price: '$ 699.00',
  href: '/products/skin-friendly-adorable-jhabla-tops-for-babies-pack-of-7',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_17f154cdb-1784128742425.png",
  rating: '4.3'
},
{
  id: 'bs3',
  name: 'Popees 100% Cotton Pants 5 Pieces Set for Newborn Babies',
  shortName: 'Popees 100% Cotton Pants 5 ...',
  price: '$ 699.00',
  href: '/products/trendy-comfy-panties-combo-for-girls-baby-care',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_174002f8b-1767951937333.png",
  rating: '4.5'
},
{
  id: 'bs4',
  name: 'Popees Premium Pant Style Diaper - 24 PCS, Extra Soft, Breathable, Super Absorbent',
  shortName: 'Popees Premium Pant Style D...',
  price: '$ 284.00',
  originalPrice: '$ 379.00',
  discount: '25% OFF',
  href: '/products/popees-premium-baby-diapers-24-pcs',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e099886a-1774460886801.png",
  rating: '5.0'
},
{
  id: 'bs5',
  name: 'Popees Anti-bacterial Vitamin E & Aloe Vera Baby Wet Wipes -70 PCS',
  shortName: 'Popees Anti-bacterial Vitam...',
  price: '$ 149.00',
  href: '/products/popees-baby-wipes-70-pcs-lid',
  img: 'https://www.popees.com/cdn/shop/files/1_00f2ab45-2a18-46ee-87d8-deb42d865b82.jpg?v=1777285803&width=200'
}];


const bambooProducts = [
{
  id: 'bb1',
  name: 'Popees Girls Sleeveless Dress (0-9 Months) Made of Organic Bamboo Cotton Fabric',
  shortName: 'Popees Girls Sleeveless Dre...',
  price: '$ 625.00',
  href: '/products/popees-girls-sleeveless-front-open-dress-0-9-months-made-of-organic-bamboo-cotton-fabric-copy-1',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=3840'
},
{
  id: 'bb2',
  name: 'Popees Unisex Full-Sleeve Front Open Sleepsuit (0-6 Months) Made of Organic Bamboo Cotton Fabric',
  shortName: 'Popees Unisex Full-Sleeve F...',
  price: '$ 649.00',
  href: '/products/popees-chest-printed-full-sleeve-front-open-sleepsuit-0-9-months-for-newborn-babies-copy-1',
  img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=200'
},
{
  id: 'bb3',
  name: 'Popees Soft Pink Dress Floral Embroidered Collar, Puff Sleeves, Pure Cotton (3-36 Months) for Baby Girls',
  shortName: 'Popees Soft Pink Dress Flor...',
  price: '$ 649.00',
  href: '/products/popees-short-sleeve-no-open-dress-3-36-months-for-baby-girls-copy',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_1.jpg?v=1774117877&width=3840'
},
{
  id: 'bb4',
  name: 'Popees Half Sleeve Front Open Jhabla Top(0-6 Months)for New Babies Made of Organic Bamboo Cotton Fabric',
  shortName: 'Popees Half Sleeve Front Op...',
  price: '$ 399.00',
  href: '/products/popees-boys-short-sleeve-front-open-jhabla-top-0-6-months-made-of-organic-bamboo-cotton-fabric-copy-1',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_2.jpg?v=1774117877&width=3840'
},
{
  id: 'bb5',
  name: 'Popees Boys Full-Sleeve Front Open Romper (0-6 Months) Made of Organic Bamboo Cotton Fabric',
  shortName: 'Popees Boys Full-Sleeve Fro...',
  price: '$ 799.00',
  href: '/products/popees-boys-short-sleeve-front-open-romper-0-6-months-made-of-organic-bamboo-cotton-fabric-copy',
  img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898.jpg?v=1774117938&width=3840'
}];


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <CategorySection />
      <MarqueeBar />
      <NaturalFabricsBanner />
      <MarqueeBar />
      <ProductGrid
        title="new arrivals"
        viewAllHref="/collections/whats-new-baby-care"
        products={newArrivalsProducts} />
      
      <ProductGrid
        title="trending now"
        viewAllHref="/collections/trending-now-baby-care"
        products={trendingProducts}
        bgColor="bg-white"
        noTopPadding />
      
      <MadeWithLove />
      <ProductGrid
        title="best sellers"
        viewAllHref="/collections/best-selling-products"
        products={bestSellersProducts}
        bgColor="bg-white" />
      
      <WhyPopees />
      <ProductGrid
        title="bamboo basics"
        viewAllHref="/collections/bamboo"
        products={bambooProducts}
        bgColor="bg-white" />
      
      <ShopTheMoments />
      <Footer />
    </main>);

}