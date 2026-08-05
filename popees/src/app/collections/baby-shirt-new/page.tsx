'use client';

import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'gt1',
    name: 'Popees Premium Printed Cotton Girls T-Shirt | Pink (1-6 Years)',
    shortName: 'Printed Cotton Girls T-Shirt',
    price: 'Rs. 399.00',
    originalPrice: 'Rs. 599.00',
    discount: '33% OFF',
    href: '/products/popees-premium-printed-cotton-girls-tshirt-pink',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=800',
    rating: '4.8',
  },
  {
    id: 'gt2',
    name: 'Popees Cute Floral Print Half Sleeve Girls T-Shirt',
    shortName: 'Floral Print Half Sleeve T-Shirt',
    price: 'Rs. 349.00',
    originalPrice: 'Rs. 499.00',
    discount: '30% OFF',
    href: '/products/popees-cute-floral-print-half-sleeve-girls-tshirt',
    img: 'https://www.popees.com/cdn/shop/files/1_49e5777f-74d7-459c-81a5-7b34c5334dbf.jpg?v=1774117923&width=800',
    rating: '5.0',
  },
  {
    id: 'gt3',
    name: 'Popees Breathable Soft Cotton Casual Girls T-Shirt',
    shortName: 'Breathable Soft Cotton T-Shirt',
    price: 'Rs. 299.00',
    originalPrice: 'Rs. 449.00',
    discount: '33% OFF',
    href: '/products/popees-breathable-soft-cotton-casual-girls-tshirt',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=800',
    rating: '4.9',
  },
  {
    id: 'gt4',
    name: 'Popees Stylish Round Neck Graphic Girls T-Shirt',
    shortName: 'Round Neck Graphic T-Shirt',
    price: 'Rs. 449.00',
    originalPrice: 'Rs. 649.00',
    discount: '31% OFF',
    href: '/products/popees-stylish-round-neck-graphic-girls-tshirt',
    img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=800',
    rating: '4.7',
  },
];

export default function GirlsTShirtPage() {
  return (
    <CollectionPageLayout
      title="Girls T-Shirts"
      description="Explore our adorable and comfortable collection of girls' t-shirts. Soft, breathable cotton for play, parties, and daily wear."
      itemCount={products.length}
      products={products}
    />
  );
}