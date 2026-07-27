'use client';
import React from 'react';
import CollectionPageLayout, { CollectionProduct } from '@/components/CollectionPageLayout';

const babyBasicsProducts: CollectionProduct[] = [
{
  id: 'bb1',
  name: 'Popees Anti-Bacterial & Anti-Fungal Baby Fabric Wash - 1 Liter | Safe for Baby Clothes',
  shortName: 'Popees Anti-Bacterial & Ant...',
  price: '$ 319.00',
  href: 'https://www.popees.com/products/anti-bacterial-anti-fungal-baby-fabric-wash',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1496aa865-1783070918549.png",
  rating: '5.0'
},
{
  id: 'bb2',
  name: 'Popees Premium Comfort Pant Diaper | Jumbo Pack | Extra Soft Touch, Airy Breathable Layers & Leak-Lock Technology',
  shortName: 'Popees Premium Comfort Pant...',
  price: '$ 499.00',
  originalPrice: '$ 910.00',
  discount: '45% OFF',
  href: 'https://www.popees.com/products/popees-premium-pant-style-diaper-48-pcs-extra-soft-breathable-super-absorbent-double-leakage-barrier-with-elastic-waist',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_11a042191-1770850585707.png",
  rating: '5.0'
},
{
  id: 'bb3',
  name: 'Popees Anti-bacterial Vitamin E & Aloe Vera Baby Wet Wipes - 70 PCS | Gentle & Skin-Friendly',
  shortName: 'Popees Anti-bacterial Vitam...',
  price: '$ 149.00',
  href: 'https://www.popees.com/products/popees-baby-wipes-70-pcs-lid',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0ba2688-1784804619646.png"
},
{
  id: 'bb4',
  name: 'Popees Ultra-gentle Floating Soap 100g | Mild Baby Bathing Bar Free from Harsh Chemicals',
  shortName: 'Popees Ultra-gentle Floatin...',
  price: '$ 90.00',
  originalPrice: '$ 139.00',
  discount: '35% OFF',
  href: 'https://www.popees.com/products/popees-ultra-gentle-floating-soap-100g',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5d45ef6-1772063377770.png"
},
{
  id: 'bb5',
  name: 'Popees Baby Body Wash & Shampoo with pH 5.5 | Tear-Free Formula for Babies',
  shortName: 'Popees Baby Body Wash & Sha...',
  price: '$ 199.00',
  href: 'https://www.popees.com/collections/shampoo-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_146fb607d-1772274371867.png"
},
{
  id: 'bb6',
  name: 'Popees Baby Nappies - 3 Pieces Set for Newborns | Soft Cotton Reusable Cloth Nappies',
  shortName: 'Popees Baby Nappies - 3 Pie...',
  price: '$ 199.00',
  href: 'https://www.popees.com/collections/diaper-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13d5852f8-1784708132564.png"
},
{
  id: 'bb7',
  name: 'Popees Baby Soft Towel | Combed Cotton Hooded Bath Towel for Newborns',
  shortName: 'Popees Baby Soft Towel | Co...',
  price: '$ 349.00',
  href: 'https://www.popees.com/collections/baby-towels-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf91fe61-1772142841303.png"
},
{
  id: 'bb8',
  name: 'Popees Baby Grooming Kit | Comb, Brush & Nail Care Set for Newborns',
  shortName: 'Popees Baby Grooming Kit | ...',
  price: '$ 249.00',
  href: 'https://www.popees.com/collections/hair-accessories-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bde3a444-1773019698099.png"
},
{
  id: 'bb9',
  name: 'Popees Baby Oral Care Set | Soft Silicone Toothbrush & Baby-Safe Toothpaste',
  shortName: 'Popees Baby Oral Care Set |...',
  price: '$ 179.00',
  href: 'https://www.popees.com/collections/baby-oral-care-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_14474f0e1-1765125018521.png"
},
{
  id: 'bb10',
  name: 'Popees Baby Soft Tissue Box | Gentle Facial Tissues for Babies',
  shortName: 'Popees Baby Soft Tissue Box...',
  price: '$ 99.00',
  href: 'https://www.popees.com/collections/tissue-new',
  img: "https://images.unsplash.com/photo-1706524077175-cbca91df06e7"
},
{
  id: 'bb11',
  name: 'Popees Anti-Bacterial & Anti-Fungal Baby Fabric Wash - 500ml | Gentle on Baby Skin',
  shortName: 'Popees Anti-Bacterial & Ant...',
  price: '$ 199.00',
  href: 'https://www.popees.com/collections/fabric-wash-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1496aa865-1783070918549.png",
  rating: '5.0'
},
{
  id: 'bb12',
  name: 'Popees Premium Comfort Pant Diaper | Regular Pack | Extra Soft Touch & Leak-Lock Technology',
  shortName: 'Popees Premium Comfort Pant...',
  price: '$ 349.00',
  originalPrice: '$ 466.00',
  discount: '25% OFF',
  href: 'https://www.popees.com/products/popees-premium-pant-style-diaper-48-pcs-extra-soft-breathable-super-absorbent-double-leakage-barrier-with-elastic-waist-copy',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_11a042191-1770850585707.png"
}];


export default function BabyBasicsPage() {
  return (
    <CollectionPageLayout
      title="Baby Basics"
      itemCount={babyBasicsProducts.length}
      products={babyBasicsProducts}
      highestPrice="910.00" />);


}