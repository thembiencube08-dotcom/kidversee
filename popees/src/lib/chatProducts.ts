export interface ChatProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  ageRange: string;
  category: string;
  tags: string[];
  inStock: boolean;
  href: string;
}

export const chatProducts: ChatProduct[] = [
  { id: 'cp1', name: 'Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set', image: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=400', price: 899, ageRange: '9M–4 Years', category: 'girls', tags: ['girls', 'polo', 'co-ord', 'summer', 'cotton', 'tshirt'], inStock: true, href: '/collections/girls-t-shirt-new' },
  { id: 'cp2', name: 'Girls Fashionable T-Shirt – Soft Fabric & Modern Style', image: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_1.jpg?v=1784619301&width=400', price: 225, originalPrice: 449, ageRange: '1–8 Years', category: 'girls-tshirts', tags: ['girls', 'tshirt', 'printed', 'casual', 'cotton'], inStock: true, href: '/collections/girls-t-shirt-new' },
  { id: 'cp3', name: 'Girls Cute V-Neck T-Shirt', image: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_2.jpg?v=1784619301&width=400', price: 175, originalPrice: 349, ageRange: '1–8 Years', category: 'girls-tshirts', tags: ['girls', 'tshirt', 'vneck', 'cotton'], inStock: true, href: '/collections/girls-t-shirt-new' },
  { id: 'cp4', name: 'Girls Sleeveless Collar Top', image: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_4.jpg?v=1784619302&width=400', price: 250, originalPrice: 499, ageRange: '1–6 Years', category: 'girls-tops', tags: ['girls', 'top', 'sleeveless', 'collar', 'casual'], inStock: true, href: '/collections/girls-top-new' },
  { id: 'cp5', name: 'Girls Floral Puff Sleeve Top', image: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_5.jpg?v=1784619302&width=400', price: 549, ageRange: '1–6 Years', category: 'girls-tops', tags: ['girls', 'top', 'floral', 'puff sleeve', 'cotton'], inStock: true, href: '/collections/girls-top-new' },
  { id: 'cp6', name: 'Girls Floral Printed Pink Denim Pants', image: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=400', price: 550, originalPrice: 1099, ageRange: '1–8 Years', category: 'girls-pants', tags: ['girls', 'pants', 'denim', 'floral', 'bottoms'], inStock: true, href: '/collections/girls-pants-new' },
  { id: 'cp7', name: 'Girls Cotton Jogger Pants – Sky Blue', image: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_1.jpg?v=1774117877&width=400', price: 549, ageRange: '1–8 Years', category: 'girls-pants', tags: ['girls', 'pants', 'jogger', 'cotton', 'bottoms', 'blue'], inStock: true, href: '/collections/girls-pants-new' },
  { id: 'cp8', name: 'Girls Pink Paperbag Waist Cotton Shorts', image: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_2.jpg?v=1774117877&width=400', price: 599, ageRange: '9M–4 Years', category: 'girls-shorts', tags: ['girls', 'shorts', 'cotton', 'pink', 'paperbag'], inStock: true, href: '/collections/girls-shorts-new' },
  { id: 'cp9', name: 'Trendy Party Wear Dress for Girls', image: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898.jpg?v=1774117938&width=400', price: 600, originalPrice: 1199, ageRange: '1–8 Years', category: 'girls-dresses', tags: ['girls', 'dress', 'party wear', 'frock', 'fancy'], inStock: true, href: '/collections/girls-dresses-new' },
  { id: 'cp10', name: 'Girls Hooded Fleece Dress with Bear Embroidery', image: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898_1.jpg?v=1774117938&width=400', price: 899, ageRange: '9M–4 Years', category: 'girls-dresses', tags: ['girls', 'dress', 'winter', 'fleece', 'hooded'], inStock: true, href: '/collections/girls-dresses-new' },
  { id: 'cp11', name: 'Baby Boys Full Sleeve Muslin Cotton Jhabla', image: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898_2.jpg?v=1774117938&width=400', price: 399, ageRange: '0–12 Months', category: 'baby', tags: ['baby', 'jhabla', 'boys', 'muslin', 'cotton', 'newborn'], inStock: true, href: '/collections/baby-new' },
  { id: 'cp12', name: 'Baby Girls Ribbed Cotton Romper Onesie', image: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=400', price: 725, ageRange: '0–6 Months', category: 'baby', tags: ['baby', 'girls', 'romper', 'onesie', 'cotton', 'newborn'], inStock: true, href: '/collections/baby-new' },
  { id: 'cp13', name: 'Bamboo Unisex Full-Sleeve Front Open Sleepsuit', image: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_1.jpg?v=1774117877&width=400', price: 649, ageRange: '0–9 Months', category: 'bamboo', tags: ['bamboo', 'baby', 'sleepsuit', 'organic', 'soft', 'unisex'], inStock: true, href: '/collections/bamboo' },
  { id: 'cp14', name: 'Girls Sleeveless Bamboo Cotton Dress', image: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529_2.jpg?v=1774117877&width=400', price: 625, ageRange: '0–9 Months', category: 'bamboo', tags: ['bamboo', 'girls', 'dress', 'organic', 'sleeveless'], inStock: true, href: '/collections/bamboo' },
  { id: 'cp15', name: 'Premium Pant Style Diaper – 24 PCS', image: 'https://www.popees.com/cdn/shop/files/1_00f2ab45-2a18-46ee-87d8-deb42d865b82.jpg?v=1777285803&width=400', price: 284, originalPrice: 379, ageRange: 'M / L / XL', category: 'diaper', tags: ['diaper', 'pant style', 'absorbent', 'baby essentials'], inStock: true, href: '/collections/diaper-new' },
  { id: 'cp16', name: 'Anti-Bacterial Baby Fabric Wash 1 Litre', image: 'https://www.popees.com/cdn/shop/files/Bath_Grooming_Header.jpg?v=1776144452&width=400', price: 319, ageRange: 'All ages', category: 'baby-basics', tags: ['fabric wash', 'baby basics', 'detergent', 'anti bacterial', 'essentials'], inStock: true, href: '/collections/fmcg' },
  { id: 'cp17', name: 'Baby Wet Wipes – 72 Sheets Fragrance Free', image: 'https://www.popees.com/cdn/shop/files/Shampoo_Bodywash_864ed928-fde8-4172-928c-31822c5d835b.jpg?v=1776514751&width=400', price: 180, ageRange: 'All ages', category: 'baby-basics', tags: ['wipes', 'wet wipes', 'baby basics', 'fragrance free', 'essentials'], inStock: true, href: '/collections/fmcg' },
  { id: 'cp18', name: 'Maternity Full Panel Comfort Pants', image: 'https://www.popees.com/cdn/shop/files/Grooming_635ca576-b29a-4eb9-807f-d8669c238025.jpg?v=1772387129&width=400', price: 799, ageRange: 'Maternity', category: 'maternity', tags: ['maternity', 'pants', 'comfort', 'pregnancy', 'women'], inStock: true, href: '/collections/maternity-wear' },
  { id: 'cp19', name: 'Baby Soaps – Pack of 3', image: 'https://www.popees.com/cdn/shop/files/Baby_Soaps_28aa55a0-08b9-4d3c-8b58-53748473ceae.jpg?v=1776514699&width=400', price: 249, ageRange: 'All ages', category: 'baby-basics', tags: ['soap', 'baby soap', 'bath', 'skin care', 'baby basics'], inStock: true, href: '/collections/fmcg' },
  { id: 'cp20', name: 'Girls Cotton Ruffle Pocket Shorts – Light Blue', image: 'https://www.popees.com/cdn/shop/files/Towels_306fbbf1-0700-4533-a90a-f118657851eb.jpg?v=1777098537&width=400', price: 649, ageRange: '9M–4 Years', category: 'girls-shorts', tags: ['girls', 'shorts', 'cotton', 'ruffle', 'blue', 'bottoms'], inStock: true, href: '/collections/girls-shorts-new' },
];

export function searchChatProducts(query: string): ChatProduct[] {
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/).filter(Boolean);
  return chatProducts.filter((p) => {
    const haystack = [p.name, p.category, p.ageRange, ...p.tags].join(' ').toLowerCase();
    return words.every((word) => haystack.includes(word));
  });
}
