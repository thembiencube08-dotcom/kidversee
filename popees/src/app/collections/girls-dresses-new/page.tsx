'use client';
import CollectionPageLayout from '@/components/CollectionPageLayout';

const products = [
  {
    id: 'gd1',
    name: 'Trendy & Comfy Printed Dress for Girls',
    shortName: 'Trendy Printed Dress',
    price: 'Rs. 165.00',
    originalPrice: 'Rs. 549.00',
    discount: '70% OFF',
    href: 'https://www.popees.com/products/trendy-comfy-dress-for-girls',
    img: '/assets/images/girl-dresses/premium_photo-1681841020692-84546b3325a5.avif',
    rating: '5.0',
    soldOut: true,
  },
  {
    id: 'gd2',
    name: 'Trendy Party Wear Dress for Girls',
    shortName: 'Trendy Party Wear Dress',
    price: 'Rs. 600.00',
    originalPrice: 'Rs. 1,199.00',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/trendy-party-wear-for-girls-baby-care',
    img: '/assets/images/girl-dresses/premium_photo-1664442782702-8deb8ebe0dd0.avif',
    rating: '5.0',
    soldOut: true,
  },
  {
    id: 'gd3',
    name: 'Popees Sleeveless Multicolor Printed Frock (1-6 Years) for Baby Girls',
    shortName: 'Sleeveless Multicolor Printed Frock',
    price: 'Rs. 599.00',
    href: 'https://www.popees.com/products/popees-stylish-ruffled-sleeve-cotton-dress-1-8-years-for-girls-copy-1',
    img: '/assets/images/girl-dresses/premium_photo-1661699382110-4e7738b7dce8.avif',
    rating: '4.0',
    soldOut: true,
  },
  {
    id: 'gd4',
    name: 'Popees Short Sleeve Printed Frock (1-8 Years) for Baby Girls',
    shortName: 'Short Sleeve Printed Frock',
    price: 'Rs. 350.00',
    originalPrice: 'Rs. 699.00',
    discount: '50% OFF',
    href: 'https://www.popees.com/products/trendy-skin-friendly-dress-for-girls-1',
    img: '/assets/images/girl-dresses/premium_photo-1661292033022-0bc9bf8ecc6f.avif',
    soldOut: true,
  },
  {
    id: 'gd5',
    name: 'Popees Baby Girls Hooded Fleece Dress with Bear Embroidery | Full Sleeve Winter Plaid Outfit (9M–4Y)',
    shortName: 'Hooded Fleece Winter Plaid Dress',
    price: 'Rs. 899.00',
    href: 'https://www.popees.com/products/popees-baby-girls-hooded-fleece-dress-winter-plaid-outfit-9m-4y',
    img: '/assets/images/girl-dresses/istockphoto-2227328909-612x612.webp',
    soldOut: true,
  },
  {
    id: 'gd6',
    name: 'Popees Baby Girls Short Sleeve Cotton Dress | Beige | 9 Months To 4 Years',
    shortName: 'Short Sleeve Cotton Dress — Beige',
    price: 'Rs. 1,099.00',
    href: 'https://www.popees.com/products/popees-baby-girls-short-sleeve-cotton-dress-beige-9-months-to-4-years',
    img: '/assets/images/girl-dresses/photo-1715476737419-94ccc9b3fee9.avif',
    soldOut: true,
  },
  {
    id: 'gd7',
    name: 'Baby Girls Floral Print Sleeveless Dress with Bow | White | 9 Months to 4 Years',
    shortName: 'Floral Sleeveless Dress with Bow — White',
    price: 'Rs. 999.00',
    href: 'https://www.popees.com/products/baby-girls-sleeveless-dress-with-bow-white-9-months-to-4-years',
    img: '/assets/images/girl-dresses/photo-1649547903630-beb18d0aa186.avif',
    soldOut: true,
  },
  {
    id: 'gd8',
    name: 'Popees Baby Girls Heart Print Cotton Dress | 9 Months to 4 Years',
    shortName: 'Heart Print Cotton Dress',
    price: 'Rs. 749.00',
    href: 'https://www.popees.com/products/popees-baby-girls-heart-print-cotton-dress-9-months-to-4-years',
    img: '/assets/images/girl-dresses/photo-1759313560250-3bb4bc1d10bc.avif',
    soldOut: true,
  },
  {
    id: 'gd9',
    name: 'Popees Sleeveless Floral Printed Frock (1-8 Years) for Baby Girls',
    shortName: 'Sleeveless Floral Printed Frock',
    price: 'Rs. 899.00',
    href: 'https://www.popees.com/products/popees-stylish-ruffled-sleeve-cotton-dress-1-8-years-for-girls-copy',
    img: '/assets/images/girl-dresses/photo-1625170959672-08ae9102d304.avif',
    soldOut: true,
  },
  {
    id: 'gd10',
    name: 'Popees Baby Girls Soft Cotton Puff Sleeve Gathered Dress with Back Button Closure | 9M–4Y',
    shortName: 'Puff Sleeve Gathered Dress',
    price: 'Rs. 799.00',
    href: 'https://www.popees.com/products/popees-baby-girls-cotton-puff-sleeve-dress-9-months-4-years',
    img: '/assets/images/girl-dresses/photo-1585145197082-dba095ba01ab.avif',
    soldOut: true,
  },
];

export default function GirlsDressesNewPage() {
  return (
    <CollectionPageLayout
      title="Girls Dresses"
      description="Beautiful, comfortable dresses for baby girls and kids — from everyday cotton frocks to party wear and floral prints."
      itemCount={products.length}
      products={products}
      highestPrice="1,199"
      showTitleHeading
      filterGroups={[
        { label: 'Availability' },
        { label: 'Price Range' },
        { label: 'Sleeve Type', options: ['Full Sleeve', 'Short Sleeve', 'Sleeveless', 'Puff Sleeve'] },
        { label: 'Age Group', options: ['0–9 Months', '9M–4 Years', '1–6 Years', '1–8 Years'] },
        { label: 'Occasion', options: ['Casual', 'Party Wear', 'Daily Wear', 'Winter'] },
      ]}
    />
  );
}
