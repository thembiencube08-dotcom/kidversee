'use client';

import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'gt1',
    name: 'Popees Fashionable T-Shirt (1–8 Years) for Girls – Soft Fabric & Modern Style',
    shortName: 'Fashionable T-Shirt — Modern Style',
    price: '225.00',
    originalPrice: '449.00',
    discount: '50% OFF',
    href: '/products/stylish-trendy-t-shirt-for-girls-1',
    img: '/assets/images/girls-tshirts/girls-tshirt-1.png',
    soldOut: true,
  },
  {
    id: 'gt2',
    name: 'Popees Cute & Comfy V-Neck T-Shirt (1–8 Years) for Girls',
    shortName: 'Cute V-Neck T-Shirt',
    price: '175.00',
    originalPrice: '349.00',
    discount: '50% OFF',
    href: '/products/004a-kf-g-te-664a',
    img: '/assets/images/girls-tshirts/girls-tshirt-2.png',
    soldOut: true,
  },
  {
    id: 'gt3',
    name: 'Popees Stylish V-Neck T-Shirt (1–8 Years) for Girls – Comfy & Fashionable',
    shortName: 'Stylish V-Neck T-Shirt',
    price: '200.00',
    originalPrice: '399.00',
    discount: '50% OFF',
    href: '/products/stylish-trendy-t-shirt-for-girls',
    img: '/assets/images/girls-tshirts/girls-tshirt-3.png',
    soldOut: true,
  },
  {
    id: 'gt4',
    name: 'Popees Comfy & Trendy Printed T-shirt (1-8 Years) for Girls',
    shortName: 'Comfy Trendy Printed T-Shirt',
    price: '200.00',
    originalPrice: '399.00',
    discount: '50% OFF',
    href: '/products/comfy-trendy-printed-t-shirt-for-girls',
    img: '/assets/images/girls-tshirts/girls-tshirt-4.jpg',
    soldOut: true,
  },
  {
    id: 'gt5',
    name: 'Popees Baby Girls Printed Cotton T-Shirt with Cute Graphic Design | 9 Months–4 Years',
    shortName: 'Graphic Printed Cotton T-Shirt',
    price: '599.00',
    href: '/products/popees-baby-girls-printed-cotton-t-shirt-9-months-4-years',
    img: '/assets/images/girls-tshirts/girls-tshirt-5.jpg',
    soldOut: true,
  },
  {
    id: 'gt6',
    name: 'Popees Baby Girls Short Sleeve Cotton Polo T-Shirt | Rust Pink | 1-8 Years',
    shortName: 'Polo T-Shirt — Rust Pink',
    price: '949.00',
    href: '/products/popees-baby-girls-short-sleeve-cotton-polo-t-shirt-rust-pink-1-8-y',
    img: '/assets/images/girls-tshirts/girls-tshirt-6.jpg',
    soldOut: true,
  },
  {
    id: 'gt7',
    name: 'Popees Baby Girls Puff Sleeves Cotton Printed T-Shirt | Cream | 9 Months To 4 Years',
    shortName: 'Puff Sleeve Printed T-Shirt — Cream',
    price: '525.00',
    href: '/products/popees-baby-girls-cotton-printed-t-shirt-cream-9-months-to-4-years',
    img: '/assets/images/girls-tshirts/girls-tshirt-7.jpg',
    soldOut: true,
  },
  {
    id: 'gt8',
    name: 'Popees Baby Girls Short Sleeve Cotton T-Shirt | White | 1-8 Years',
    shortName: 'Short Sleeve Cotton T-Shirt — White',
    price: '349.00',
    href: '/products/popees-baby-girls-short-sleeve-cotton-t-shirt-white-1-8-years',
    img: '/assets/images/girls-tshirts/girls-tshirt-8.jpg',
    soldOut: true,
  },
  {
    id: 'gt9',
    name: 'Popees Baby Girls Print Puff Sleeve Cotton T-Shirt | Pink | 9 Months to 4 Years',
    shortName: 'Puff Sleeve T-Shirt — Pink',
    price: '599.00',
    href: '/products/popees-baby-girls-puff-sleeve-cotton-t-shirt-pink-9-months-to-4-years',
    img: '/assets/images/girls-tshirts/girls-tshirt-1.png',
    soldOut: true,
  },
  {
    id: 'gt10',
    name: 'Popees Soft Pink with Animal Face Embroidery T-Shirt (3-24 Months) for Baby Girls',
    shortName: 'Animal Embroidery T-Shirt — Pink',
    price: '499.00',
    href: '/products/popees-chest-print-t-shirt-3-36-months-for-girls-copy',
    img: '/assets/images/girls-tshirts/girls-tshirt-2.png',
    soldOut: true,
  },
  {
    id: 'gt11',
    name: 'Popees Baby Girls Cotton Floral Printed Puff Sleeve T-Shirt Top | 1–6 Years',
    shortName: 'Floral Puff Sleeve T-Shirt Top',
    price: '549.00',
    href: '/products/popees-baby-girls-cotton-floral-puff-sleeve-printed-top-1-6y',
    img: '/assets/images/girls-tshirts/girls-tshirt-3.png',
    soldOut: true,
  },
  {
    id: 'gt12',
    name: 'Popees Baby Girls Floral Cotton T-Shirt | Soft Puff Sleeve Casual Top (1–6 Years)',
    shortName: 'Floral Cotton Puff Sleeve Top',
    price: '549.00',
    href: '/products/popees-baby-girls-floral-cotton-t-shirt-soft-puff-sleeve-top1-6y',
    img: '/assets/images/girls-tshirts/girls-tshirt-4.jpg',
    soldOut: true,
  },
  {
    id: 'gt13',
    name: 'Popees Baby Girls Coral Pink Full Sleeve Cotton T-Shirt | Soft Casual Wear Top (9M–4Y)',
    shortName: 'Full Sleeve T-Shirt — Coral Pink',
    price: '599.00',
    href: '/products/popees-baby-girls-full-sleeve-t-shirt-9m-4y-cotton',
    img: '/assets/images/girls-tshirts/girls-tshirt-5.jpg',
    soldOut: true,
  },
];

export default function GirlsTShirtNewPage() {
  return (
    <CollectionPageLayout
      title="Girls T-Shirts"
      description="Soft, breathable cotton T-shirts for girls aged 9 months to 8 years — from printed casuals to polo styles and puff sleeves."
      itemCount={products.length}
      products={products}
      highestPrice="949"
      showTitleHeading
      filterGroups={[
        { label: 'Availability' },
        { label: 'Price Range' },
        { label: 'Sleeve Type', options: ['Full Sleeve', 'Short Sleeve', 'Puff Sleeve', 'Sleeveless'] },
        { label: 'Age Group', options: ['9M–4 Years', '1–6 Years', '1–8 Years'] },
        { label: 'Style', options: ['Printed', 'Plain', 'Polo', 'Graphic'] },
      ]}
    />
  );
}