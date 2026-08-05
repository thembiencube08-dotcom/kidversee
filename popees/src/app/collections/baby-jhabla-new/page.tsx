'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'bj1',
    name: 'Popees Organic Cotton Baby Jhabla Front Button Pack of 3 (0-12 Months)',
    shortName: 'Organic Cotton Jhabla Pack of 3',
    price: 'Rs. 599.00',
    originalPrice: 'Rs. 899.00',
    discount: '33% OFF',
    href: '/products/popees-organic-cotton-baby-jhabla-front-button-pack-of-3',
    img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=800',
    rating: '4.9',
  },
  {
    id: 'bj2',
    name: 'Popees Newborn Pure Cotton Soft Printed Front Open Jhabla Top',
    shortName: 'Newborn Pure Cotton Soft Jhabla',
    price: 'Rs. 249.00',
    originalPrice: 'Rs. 399.00',
    discount: '38% OFF',
    href: '/products/popees-newborn-pure-cotton-soft-printed-front-open-jhabla',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=800',
    rating: '5.0',
  },
  {
    id: 'bj3',
    name: 'Popees Pastel Soft Breathable Newborn Cotton Jhabla (Pack of 6)',
    shortName: 'Pastel Soft Newborn Jhabla Pack of 6',
    price: 'Rs. 999.00',
    originalPrice: 'Rs. 1,499.00',
    discount: '33% OFF',
    href: '/products/popees-pastel-soft-breathable-newborn-cotton-jhabla-pack-of-6',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=800',
    rating: '4.8',
  },
  {
    id: 'bj4',
    name: 'Popees Sleeveless Summer Cotton Jhabla Top for Newborn (0-6 Months)',
    shortName: 'Sleeveless Summer Cotton Jhabla',
    price: 'Rs. 199.00',
    originalPrice: 'Rs. 299.00',
    discount: '33% OFF',
    href: '/products/popees-sleeveless-summer-cotton-jhabla-top-0-6m',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=800',
    rating: '4.9',
  },
  {
    id: 'bj5',
    name: 'Popees Full Sleeve Warm Touch Newborn Cotton Jhabla (0-9 Months)',
    shortName: 'Full Sleeve Warm Touch Cotton Jhabla',
    price: 'Rs. 299.00',
    originalPrice: 'Rs. 449.00',
    discount: '33% OFF',
    href: '/products/popees-full-sleeve-warm-touch-newborn-jhabla',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=800',
    rating: '5.0',
  },
  {
    id: 'bj6',
    name: 'Popees Premium Bamboo Cotton Gentle Touch Jhabla Set of 2',
    shortName: 'Bamboo Cotton Gentle Touch Jhabla Set',
    price: 'Rs. 649.00',
    originalPrice: 'Rs. 899.00',
    discount: '28% OFF',
    href: '/products/popees-premium-bamboo-cotton-gentle-touch-jhabla-set-2',
    img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=800',
    rating: '4.9',
  },
];

export default function BabyJhablaPage() {
  return (
    <CollectionPageLayout
      title="Baby Jhabla"
      description="Keep your little one comfortable with our collection of soft and breathable baby jhablas, thoughtfully designed for newborns and young infants. Made from 100% skin-friendly cotton."
      itemCount={products.length}
      products={products}
    />
  );
}
