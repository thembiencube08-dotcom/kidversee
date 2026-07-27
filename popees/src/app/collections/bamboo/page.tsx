'use client';
import React from 'react';
import CollectionPageLayout, { CollectionProduct } from '@/components/CollectionPageLayout';

const bambooProducts: CollectionProduct[] = [
{ id: 'bam1', name: 'Popees Baby Organic Bamboo Cotton Full Sleeve Sleepsuit | Soft Footed Romper with Snap Closure | Newborn Baby Wear | 0–6 Months', shortName: 'Popees Baby Organic Bamboo ...', price: '$ 975.00', href: 'https://www.popees.com/products/popees-baby-organic-bamboo-cotton-full-sleeve-sleepsuit-soft-footed-romper-with-snap-closure-newborn-baby-wear-0-6-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15c64523a-1772210759888.png" },
{ id: 'bam2', name: 'Popees Baby Boys Organic Bamboo Cotton T-Shirt & Shorts Set | Off to Explore Printed Raglan Sleeve Co-Ord Outfit | White & Orange | 0–9 Months', shortName: 'Popees Baby Boys Organic Ba...', price: '$ 849.00', href: 'https://www.popees.com/products/popees-baby-boys-organic-bamboo-cotton-t-shirt-shorts-set-off-to-explore-printed-raglan-sleeve-co-ord-outfit-white-orange-0-9-months', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18fc239f8-1764645193403.png" },
{ id: 'bam3', name: 'Popees Unisex Full-Sleeve Front Open Sleepsuit (0-9 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Unisex Full-Sleeve F...', price: '$ 699.00', href: 'https://www.popees.com/products/popees-embroidered-unisex-full-sleeve-front-open-sleepsuit-0-6-months-made-of-organic-bamboo-cotton-fabric-copy-1', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae68588c-1779170840275.png" },
{ id: 'bam4', name: 'Popees Girls Sleeveless Front Open Dress (0-9 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Girls Sleeveless Fro...', price: '$ 599.00', href: 'https://www.popees.com/products/popees-boys-half-sleeve-front-open-co-ord-set-0-9-months-made-of-organic-bamboo-cotton-fabric-copy-copy', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11d3bd8ef-1784761971340.png" },
{ id: 'bam5', name: 'Popees Boys Half-Sleeve Front Open Co-ord Set (0-9 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Boys Half-Sleeve Fro...', price: '$ 649.00', href: 'https://www.popees.com/products/popees-boys-half-sleeve-shoulder-open-co-ord-set-0-9-months-made-of-organic-bamboo-cotton-fabric-copy', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb8a83bb-1773079442153.png" },
{ id: 'bam6', name: 'Popees Half Sleeve Front Open Jhabla Top (0-6 Months) for New Babies Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Half Sleeve Front Op...', price: '$ 399.00', href: 'https://www.popees.com/products/popees-boys-short-sleeve-front-open-jhabla-top-0-6-months-made-of-organic-bamboo-cotton-fabric-copy-1', img: "https://images.unsplash.com/photo-1673113819861-cef93099dad8" },
{ id: 'bam7', name: 'Popees Boys Full-Sleeve Front Open Romper (0-6 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Boys Full-Sleeve Fro...', price: '$ 799.00', href: 'https://www.popees.com/products/popees-boys-short-sleeve-front-open-romper-0-6-months-made-of-organic-bamboo-cotton-fabric-copy', img: "https://img.rocket.new/generatedImages/rocket_gen_img_19f435079-1774770028110.png" },
{ id: 'bam8', name: 'Popees Girls Sleeveless Dress (0-9 Months) Made of Organic Bamboo Cotton Fabric', shortName: 'Popees Girls Sleeveless Dre...', price: '$ 625.00', href: 'https://www.popees.com/products/popees-girls-sleeveless-front-open-dress-0-9-months-made-of-organic-bamboo-cotton-fabric-copy-1', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11d3bd8ef-1784761971340.png" }];


export default function BambooPage() {
  return (
    <CollectionPageLayout
      title="Bamboo"
      itemCount={bambooProducts.length}
      products={bambooProducts}
      highestPrice="975.00" />);


}