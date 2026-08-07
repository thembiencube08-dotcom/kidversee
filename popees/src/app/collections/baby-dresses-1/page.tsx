'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'bd1',
    name: 'Popees Cute Floral Print Soft Cotton Baby Frock Dress',
    shortName: 'Floral Print Soft Cotton Frock',
    price: 'Rs. 499.00',
    originalPrice: 'Rs. 799.00',
    discount: '37% OFF',
    href: '/products/popees-cute-floral-print-soft-cotton-frock-dress',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=800',
    rating: '5.0',
  },
  {
    id: 'bd2',
    name: 'Popees Pastel Sleeveless Summer Frock Dress for Baby Girls',
    shortName: 'Pastel Sleeveless Summer Frock',
    price: 'Rs. 449.00',
    originalPrice: 'Rs. 699.00',
    discount: '35% OFF',
    href: '/products/popees-pastel-sleeveless-summer-frock-dress',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=800',
    rating: '4.9',
  },
  {
    id: 'bd3',
    name: 'Popees Elegant Party Wear Soft Tulle Layered Baby Dress',
    shortName: 'Party Wear Tulle Layered Dress',
    price: 'Rs. 799.00',
    originalPrice: 'Rs. 1,199.00',
    discount: '33% OFF',
    href: '/products/popees-elegant-party-wear-tulle-layered-dress',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=800',
    rating: '4.8',
  },
  {
    id: 'bd4',
    name: 'Popees 100% Organic Cotton A-Line Everyday Baby Frock',
    shortName: 'Organic Cotton A-Line Frock',
    price: 'Rs. 399.00',
    originalPrice: 'Rs. 599.00',
    discount: '33% OFF',
    href: '/products/popees-organic-cotton-a-line-everyday-frock',
    img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=800',
    rating: '5.0',
  },
];

export default function BabyDressesPage() {
  return (
    <CollectionPageLayout
      title="Baby Dress"
      description="Charming and comfortable dresses crafted specially for little ones. Soft cotton fabrics, gentle stitching, and sweet designs."
      itemCount={products.length}
      products={products}
    />
  );
}
