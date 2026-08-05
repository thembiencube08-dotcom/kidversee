'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'bcs1',
    name: 'Popees Printed Top & Shorts Co-Ord Set for Baby (0-24M)',
    shortName: 'Top & Shorts Co-Ord Set',
    price: 'Rs. 599.00',
    originalPrice: 'Rs. 899.00',
    discount: '33% OFF',
    href: '/products/popees-printed-top-shorts-coord-set',
    img: 'https://www.popees.com/cdn/shop/files/1001060.jpg?v=1774117521&width=800',
    rating: '5.0',
  },
  {
    id: 'bcs2',
    name: 'Popees Waffle Knit Full Sleeve Top & Jogger Co-Ord Set',
    shortName: 'Waffle Knit Top & Jogger Set',
    price: 'Rs. 799.00',
    originalPrice: 'Rs. 1,199.00',
    discount: '33% OFF',
    href: '/products/popees-waffle-knit-top-jogger-coord-set',
    img: 'https://www.popees.com/cdn/shop/files/E9_0003_Layer1.jpg?v=1774117522&width=800',
    rating: '4.9',
  },
  {
    id: 'bcs3',
    name: 'Popees Organic Cotton Ribbed Two-Piece Matching Set',
    shortName: 'Organic Cotton Ribbed 2-Piece Set',
    price: 'Rs. 699.00',
    originalPrice: 'Rs. 999.00',
    discount: '30% OFF',
    href: '/products/popees-organic-cotton-ribbed-matching-set',
    img: 'https://www.popees.com/cdn/shop/files/003ABE-B-TE-581_1.jpg?v=1774117535&width=800',
    rating: '4.8',
  },
  {
    id: 'bcs4',
    name: 'Popees Pastel Summer Cotton Tee & Shorts Co-Ord Set',
    shortName: 'Pastel Tee & Shorts Set',
    price: 'Rs. 549.00',
    originalPrice: 'Rs. 799.00',
    discount: '31% OFF',
    href: '/products/popees-pastel-summer-tee-shorts-coord-set',
    img: 'https://www.popees.com/cdn/shop/files/JABALAFB6PACK-C_3.jpg?v=1774117603&width=800',
    rating: '5.0',
  },
];

export default function BabyCoOrdSetsPage() {
  return (
    <CollectionPageLayout
      title="Baby Co-Ord Set"
      description="Effortless matching sets designed for adorable, hassle-free dressing. Premium breathable fabrics for daily wear and play."
      itemCount={products.length}
      products={products}
    />
  );
}
