'use client';
import React from 'react';
import CollectionPageLayout, { CollectionProduct } from '@/components/CollectionPageLayout';

const diaperProducts: CollectionProduct[] = [
{
  id: 'd1',
  name: 'Popees Premium Comfort Pant Diaper | Jumbo Pack | New Design with Extra Soft Touch, Airy Breathable Layers & Leak-Lock Technology',
  shortName: 'Popees Premium Comfort Pant...',
  price: '$ 499.00',
  originalPrice: '$ 910.00',
  discount: '45% OFF',
  href: 'https://www.popees.com/products/popees-premium-pant-style-diaper-48-pcs-extra-soft-breathable-super-absorbent-double-leakage-barrier-with-elastic-waist',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_11a042191-1770850585707.png"
},
{
  id: 'd2',
  name: 'Popees Premium Comfort Pant Diaper | Regular Pack | New Design with Extra Soft Touch, Airy Breathable Layers & Leak-Lock Technology',
  shortName: 'Popees Premium Comfort Pant...',
  price: '$ 349.00',
  originalPrice: '$ 466.00',
  discount: '25% OFF',
  href: 'https://www.popees.com/products/popees-premium-pant-style-diaper-48-pcs-extra-soft-breathable-super-absorbent-double-leakage-barrier-with-elastic-waist-copy',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_11a042191-1770850585707.png"
},
{
  id: 'd3',
  name: 'Popees Baby Nappies - 3 Pieces Set for Newborns | Soft Cotton Reusable Cloth Nappies',
  shortName: 'Popees Baby Nappies - 3 Pie...',
  price: '$ 199.00',
  href: 'https://www.popees.com/collections/diaper-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13d5852f8-1784708132564.png"
},
{
  id: 'd4',
  name: 'Popees Reusable Cloth Diaper Insert - 2 Pieces | Soft & Absorbent Baby Diaper Liner',
  shortName: 'Popees Reusable Cloth Diaper...',
  price: '$ 299.00',
  href: 'https://www.popees.com/collections/diaper-new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1af4994fd-1767501783841.png"
},
{
  id: 'd5',
  name: 'Popees Anti-bacterial Vitamin E & Aloe Vera Baby Wet Wipes - 70 PCS | Gentle & Skin-Friendly',
  shortName: 'Popees Anti-bacterial Vitam...',
  price: '$ 149.00',
  href: 'https://www.popees.com/products/popees-baby-wipes-70-pcs-lid',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0ba2688-1784804619646.png"
},
{
  id: 'd6',
  name: 'Popees Ultra-gentle Floating Soap 100g | Mild Baby Bathing Bar',
  shortName: 'Popees Ultra-gentle Floatin...',
  price: '$ 90.00',
  originalPrice: '$ 139.00',
  discount: '35% OFF',
  href: 'https://www.popees.com/products/popees-ultra-gentle-floating-soap-100g',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5d45ef6-1772063377770.png"
}];


export default function DiaperPage() {
  return (
    <CollectionPageLayout
      title="Diaper"
      itemCount={diaperProducts.length}
      products={diaperProducts}
      highestPrice="910.00" />);


}