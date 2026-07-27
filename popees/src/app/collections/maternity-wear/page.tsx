'use client';
import React from 'react';
import CollectionPageLayout, { CollectionProduct } from '@/components/CollectionPageLayout';

const maternityProducts: CollectionProduct[] = [
{ id: 'mat1', name: 'Popees Maternity Wear - Comfortable Nursing Dress for Expecting Mothers', shortName: 'Popees Maternity Wear - Com...', price: '$ 899.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4ffbefc-1767887235531.png" },
{ id: 'mat2', name: 'Popees Soft Trendy Maternity Kurti - Comfortable Everyday Wear for Pregnant Women', shortName: 'Popees Soft Trendy Maternity...', price: '$ 799.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1965d9397-1767082897858.png" },
{ id: 'mat3', name: 'Popees Soft Comfy Maternity Gown - Perfect for Nursing and Pregnancy', shortName: 'Popees Soft Comfy Maternity...', price: '$ 849.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_173d73a22-1767951935399.png" },
{ id: 'mat4', name: 'Popees Maternity Feeding Dress - Stylish & Comfortable for New Mothers', shortName: 'Popees Maternity Feeding Dr...', price: '$ 949.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_163b33237-1784397009095.png" },
{ id: 'mat5', name: 'Popees Maternity Wear Cotton Kurti - Breathable & Stylish for Pregnancy', shortName: 'Popees Maternity Wear Cotto...', price: '$ 749.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://images.unsplash.com/photo-1621845033482-c8d368d5105a" },
{ id: 'mat6', name: 'Popees Womens Maternity Dress - Soft & Comfortable for Expecting Mothers', shortName: 'Popees Womens Maternity Dre...', price: '$ 999.00', href: 'https://www.popees.com/collections/maternity-wear', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1060edc40-1777715921781.png" }];


export default function MaternityPage() {
  return (
    <CollectionPageLayout
      title="Maternity"
      itemCount={maternityProducts.length}
      products={maternityProducts}
      highestPrice="999.00" />);


}