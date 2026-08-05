'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'bp1',
    name: 'Popees Soft Cotton Track Pants for Baby (Pack of 3)',
    shortName: 'Soft Cotton Track Pants Pack of 3',
    price: 'Rs. 599.00',
    originalPrice: 'Rs. 899.00',
    discount: '33% OFF',
    href: '/products/popees-soft-cotton-track-pants-pack-3',
    img: 'https://www.popees.com/cdn/shop/files/3_3_eee3347c-eeae-4f0f-a990-c03e1708a7f5.jpg?v=1774117690&width=800',
    rating: '5.0',
  },
  {
    id: 'bp2',
    name: 'Popees Stretchable Ribbed Waist Cotton Leggings Pants',
    shortName: 'Stretchable Ribbed Waist Leggings',
    price: 'Rs. 299.00',
    originalPrice: 'Rs. 449.00',
    discount: '33% OFF',
    href: '/products/popees-stretchable-ribbed-waist-leggings',
    img: 'https://www.popees.com/cdn/shop/files/3_2_4ab00b5e-cd27-4e5b-a064-88a9e41c50f5.jpg?v=1774117689&width=800',
    rating: '4.9',
  },
  {
    id: 'bp3',
    name: 'Popees Organic Cotton Pyjama Bottoms for Newborns',
    shortName: 'Organic Cotton Pyjama Bottoms',
    price: 'Rs. 349.00',
    originalPrice: 'Rs. 499.00',
    discount: '30% OFF',
    href: '/products/popees-organic-cotton-pyjama-bottoms-newborn',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=800',
    rating: '4.8',
  },
  {
    id: 'bp4',
    name: 'Popees Comfy Fleece Jogger Pants for Babies',
    shortName: 'Comfy Fleece Jogger Pants',
    price: 'Rs. 449.00',
    originalPrice: 'Rs. 649.00',
    discount: '30% OFF',
    href: '/products/popees-comfy-fleece-jogger-pants-baby',
    img: 'https://www.popees.com/cdn/shop/files/1011011.jpg?v=1774117496&width=800',
    rating: '5.0',
  },
];

export default function BabyPantsPage() {
  return (
    <CollectionPageLayout
      title="Baby Pants"
      description="Cozy, stretchable, and soft pants for babies. Designed with gentle waistbands that stay comfortably in place without tight pressure."
      itemCount={products.length}
      products={products}
    />
  );
}
