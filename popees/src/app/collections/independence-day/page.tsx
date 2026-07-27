'use client';
import React from 'react';
import CollectionPageLayout, { CollectionProduct } from '@/components/CollectionPageLayout';

const independenceDayProducts: CollectionProduct[] = [
{
  id: 'id1',
  name: 'Popees Comfy & Trendy Independence Day T-Shirt (1–8 Years) for Boys',
  shortName: 'Popees Comfy & Trendy Indep...',
  price: '$ 399.00',
  href: 'https://www.popees.com/products/comfy-trendy-independence-day-t-shirt-for-boys?variant=56314544947366',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_18b3e537c-1768048109627.png"
},
{
  id: 'id2',
  name: 'Popees Independence Day Special Boys T-Shirt | Soft Cotton Tricolor Graphic Tee | 9Months–4 Years',
  shortName: 'Popees Independence Day Spe...',
  price: '$ 449.00',
  href: 'https://www.popees.com/products/popees-comfy-trendy-t-shirt-1-8-years-for-boys?variant=56314616184998',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_15eec5772-1776793301224.png"
}];


export default function IndependenceDayPage() {
  return (
    <CollectionPageLayout
      title="Independence Day"
      itemCount={2}
      products={independenceDayProducts}
      highestPrice="499.00" />);


}