'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'gs1',
    name: 'Popees Comfortable 2-Piece Shorts Set (1–8 Years) for Girls',
    shortName: '2-Piece Shorts Set',
    price: 'Rs. 195.00',
    originalPrice: 'Rs. 649.00',
    discount: '70% OFF',
    href: 'https://www.popees.com/products/super-comfy-shorts-combo-2pcs',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=800',
    rating: '1.0',
    soldOut: true,
  },
  {
    id: 'gs2',
    name: 'Popees Stylish Front Open Shorts (1-8 Years) for Girls',
    shortName: 'Stylish Front Open Shorts',
    price: 'Rs. 400.00',
    originalPrice: 'Rs. 799.00',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/stylish-denim-for-girls',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_1.jpg?v=1784619301&width=800',
    soldOut: true,
  },
  {
    id: 'gs3',
    name: 'Popees Baby Girls Pink Cotton Shorts with Paperbag Waist & Bow | 9M–4Y',
    shortName: 'Pink Paperbag Waist Shorts',
    price: 'Rs. 599.00',
    href: 'https://www.popees.com/products/popees-baby-girls-pink-shorts-9m-4y-cotton-paperbag-waist',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_2.jpg?v=1784619301&width=800',
    soldOut: true,
  },
  {
    id: 'gs4',
    name: 'Popees Baby Girls Cotton 3/4 Shorts | Rust Pink | 1-8 Years',
    shortName: 'Cotton 3/4 Shorts — Rust Pink',
    price: 'Rs. 529.00',
    href: 'https://www.popees.com/products/popees-baby-girls-cotton-3-4-shorts-rust-pink-1-8-years',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_4.jpg?v=1784619302&width=800',
    soldOut: true,
  },
  {
    id: 'gs5',
    name: 'Popees Baby Girls Cotton Shorts with Ruffle Pocket Detail | Light Blue | 9M–4 Years',
    shortName: 'Cotton Shorts with Ruffle Pockets — Light Blue',
    price: 'Rs. 649.00',
    href: 'https://www.popees.com/products/popees-baby-girls-cotton-shorts-light-blue',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=800',
    soldOut: true,
  },
  {
    id: 'gs6',
    name: 'Popees Baby Girls Solid Cotton Shorts with Ruffle Pockets | 9 Months to 4 Years',
    shortName: 'Solid Cotton Shorts with Ruffle Pockets',
    price: 'Rs. 499.00',
    href: 'https://www.popees.com/products/popees-baby-girls-solid-cotton-ruffle-shorts-9m-4y',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_1.jpg?v=1774117877&width=800',
    soldOut: true,
  },
];

export default function GirlsShortsNewPage() {
  return (
    <CollectionPageLayout
      title="Girls Shorts"
      description="Comfortable and trendy shorts for baby girls and kids — cotton, denim and casual styles for summer and everyday wear."
      itemCount={products.length}
      products={products}
      highestPrice="799"
      showTitleHeading
      filterGroups={[
        { label: 'Availability' },
        { label: 'Price Range' },
        { label: 'Style', options: ['Cotton', 'Denim', 'Paperbag Waist', 'Ruffle Pocket', '3/4 Length', 'Combo Set'] },
        { label: 'Age Group', options: ['9M–4 Years', '1–8 Years'] },
        { label: 'Color', options: ['Pink', 'Rust Pink', 'Light Blue', 'Denim Blue'] },
      ]}
    />
  );
}
