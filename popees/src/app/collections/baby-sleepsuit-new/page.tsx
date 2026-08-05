'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'bss1',
    name: 'Popees Pure Cotton Soft Zip-Up Baby Sleepsuit (0-12M)',
    shortName: 'Pure Cotton Zip-Up Sleepsuit',
    price: 'Rs. 699.00',
    originalPrice: 'Rs. 999.00',
    discount: '30% OFF',
    href: '/products/popees-pure-cotton-soft-zip-up-sleepsuit',
    img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=800',
    rating: '5.0',
  },
  {
    id: 'bss2',
    name: 'Popees Printed Footed Newborn Cotton Sleepsuit Suit',
    shortName: 'Printed Footed Cotton Sleepsuit',
    price: 'Rs. 649.00',
    originalPrice: 'Rs. 899.00',
    discount: '28% OFF',
    href: '/products/popees-printed-footed-newborn-sleepsuit',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=800',
    rating: '4.9',
  },
  {
    id: 'bss3',
    name: 'Popees Organic Bamboo Breathable Night Sleepsuit (Set of 2)',
    shortName: 'Organic Bamboo Sleepsuit Set of 2',
    price: 'Rs. 1,199.00',
    originalPrice: 'Rs. 1,699.00',
    discount: '29% OFF',
    href: '/products/popees-organic-bamboo-breathable-sleepsuit-set-2',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=800',
    rating: '4.8',
  },
  {
    id: 'bss4',
    name: 'Popees Soft Thermal Touch Winter Sleepsuit for Babies',
    shortName: 'Soft Thermal Touch Winter Sleepsuit',
    price: 'Rs. 749.00',
    originalPrice: 'Rs. 1,099.00',
    discount: '31% OFF',
    href: '/products/popees-soft-thermal-touch-winter-sleepsuit',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=800',
    rating: '5.0',
  },
];

export default function BabySleepsuitPage() {
  return (
    <CollectionPageLayout
      title="Baby Sleepsuit"
      description="Cozy, all-in-one sleepsuits crafted for restful nights. Easy zipper or snap closures for quick nighttime diaper changes."
      itemCount={products.length}
      products={products}
    />
  );
}
