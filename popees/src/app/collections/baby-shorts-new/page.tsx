'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'bsh1',
    name: 'Popees Soft Cotton Elastic Waistband Baby Shorts (Pack of 3)',
    shortName: 'Soft Cotton Shorts Pack of 3',
    price: 'Rs. 449.00',
    originalPrice: 'Rs. 699.00',
    discount: '35% OFF',
    href: '/products/popees-soft-cotton-elastic-waistband-shorts-pack-3',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=800',
    rating: '4.9',
  },
  {
    id: 'bsh2',
    name: 'Popees Printed Comfy Summer Shorts for Baby (0-24 Months)',
    shortName: 'Printed Comfy Summer Shorts',
    price: 'Rs. 199.00',
    originalPrice: 'Rs. 299.00',
    discount: '33% OFF',
    href: '/products/popees-printed-comfy-summer-shorts',
    img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=800',
    rating: '5.0',
  },
  {
    id: 'bsh3',
    name: 'Popees Organic Denim Look Soft Knit Baby Shorts',
    shortName: 'Organic Denim Look Knit Shorts',
    price: 'Rs. 349.00',
    originalPrice: 'Rs. 499.00',
    discount: '30% OFF',
    href: '/products/popees-organic-denim-look-soft-knit-shorts',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=800',
    rating: '4.8',
  },
  {
    id: 'bsh4',
    name: 'Popees Everyday Active Stretch Cotton Shorts (Pack of 2)',
    shortName: 'Active Stretch Shorts Pack of 2',
    price: 'Rs. 399.00',
    originalPrice: 'Rs. 599.00',
    discount: '33% OFF',
    href: '/products/popees-everyday-active-stretch-shorts-pack-2',
    img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=800',
    rating: '5.0',
  },
];

export default function BabyShortsPage() {
  return (
    <CollectionPageLayout
      title="Baby Shorts"
      description="Lightweight, stretchy, and ultra-soft shorts for active babies. Gentle elastic waistbands designed for diaper flexibility."
      itemCount={products.length}
      products={products}
    />
  );
}
