'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'gp1',
    name: 'Popees Soft & Breathable Pants (1–8 Years) for Girls',
    shortName: 'Soft & Breathable Pants',
    price: 'Rs. 375.00',
    originalPrice: 'Rs. 749.00',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/trendy-comfy-pants-for-girls-copy',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=800',
    soldOut: true,
  },
  {
    id: 'gp2',
    name: 'Popees Stylish Cargo Joggers with Pockets (1-8 Years) for Girls',
    shortName: 'Cargo Joggers with Pockets',
    price: 'Rs. 400.00',
    originalPrice: 'Rs. 799.00',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/skin-friendly-comfy-pants-for-girls-1',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_1.jpg?v=1784619301&width=800',
    rating: '3.0',
    soldOut: true,
  },
  {
    id: 'gp3',
    name: 'Popees Girls Floral Printed Pink Denim Pants with Button Closure | 1–8 Years',
    shortName: 'Floral Printed Pink Denim Pants',
    price: 'Rs. 550.00',
    originalPrice: 'Rs. 1,099.00',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/popees-girls-printed-pink-denim-pants-with-button-closure-1-8-years',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_2.jpg?v=1784619301&width=800',
    soldOut: true,
  },
  {
    id: 'gp4',
    name: 'Popees Stylish Cargo Joggers with Pockets (1-8 Years) for Girls — Green',
    shortName: 'Cargo Joggers — Green',
    price: 'Rs. 200.00',
    originalPrice: 'Rs. 399.50',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/skin-friendly-comfy-pants-for-boys-3',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_4.jpg?v=1784619302&width=800',
    soldOut: true,
  },
  {
    id: 'gp5',
    name: 'Popees Baby Girls Cotton Knit Pants | Pink | 9 Months To 4 Years',
    shortName: 'Cotton Knit Pants — Pink',
    price: 'Rs. 649.00',
    href: 'https://www.popees.com/products/popees-baby-girls-cotton-knit-pants-pink-9-months-to-4-years',
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_5.jpg?v=1784619302&width=800',
    soldOut: true,
  },
  {
    id: 'gp6',
    name: 'Popees Baby Girls Cotton Jogger Pants | Sky Blue | 1-8 Years',
    shortName: 'Cotton Jogger Pants — Sky Blue',
    price: 'Rs. 549.00',
    href: 'https://www.popees.com/products/popees-baby-girls-cotton-jogger-pants-sky-blue-1-8-years',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=800',
    soldOut: true,
  },
  {
    id: 'gp7',
    name: 'Popees Baby Girls Soft & Stylish Denim Jeans | Classic Blue Regular Fit | 9 Months–4 Years',
    shortName: 'Soft Denim Jeans — Classic Blue',
    price: 'Rs. 999.00',
    href: 'https://www.popees.com/products/popees-baby-girls-soft-stylish-denim-jeans-classic-blue-regular-fit-cotton-denim-pants-with-pockets-9-months-4-years',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_1.jpg?v=1774117877&width=800',
    soldOut: true,
  },
  {
    id: 'gp8',
    name: 'Popees Baby Girls Waffle Knit Pants with Elastic Waist | Soft Cotton Casual Wear | 9M–4Y',
    shortName: 'Waffle Knit Pants — Elastic Waist',
    price: 'Rs. 799.00',
    href: 'https://www.popees.com/products/popees-baby-girls-waffle-knit-pants-9m-4y',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_2.jpg?v=1774117877&width=800',
    soldOut: true,
  },
];

export default function GirlsPantsNewPage() {
  return (
    <CollectionPageLayout
      title="Girls Pants"
      description="Comfortable, stylish pants for baby girls and kids — joggers, denim, knit and cotton styles for every occasion."
      itemCount={products.length}
      products={products}
      highestPrice="999"
      showTitleHeading
      filterGroups={[
        { label: 'Availability' },
        { label: 'Price Range' },
        { label: 'Style', options: ['Jogger', 'Denim', 'Knit', 'Cotton', 'Cargo'] },
        { label: 'Age Group', options: ['9M–4 Years', '1–8 Years'] },
        { label: 'Color', options: ['Pink', 'Blue', 'Sky Blue', 'Green', 'Denim Blue'] },
      ]}
    />
  );
}
