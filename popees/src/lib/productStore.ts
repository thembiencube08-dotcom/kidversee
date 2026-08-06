'use client';

// In-memory + localStorage product store
// Acts as a mock database for the admin panel

export interface Product {
  id: string;
  title: string;
  shortName: string;
  description: string;
  sku: string;
  price: number;
  originalPrice?: number;
  stockQuantity: number;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
  category: string;
  collection: string;
  img: string;
  images: string[];
  sizes: string[];
  tags: string;
  weight: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'popees_admin_products';

function generateId(): string {
  return 'prod_' + Math.random().toString(36).slice(2, 10);
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

// Seed from mockData on first load
const seedProducts: Product[] = [
  {
    id: 'p1', title: 'Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set', shortName: 'Ribbed Polo Co-Ord Set',
    description: 'Soft cotton ribbed polo t-shirt and shorts co-ord set for baby girls aged 9 months to 4 years.',
    sku: 'KF-G-TB-957F', price: 899, stockQuantity: 42, status: 'ACTIVE',
    category: 'Girls', collection: "What's New",
    img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=200',
    images: ['https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=200'],
    sizes: ['3-6M', '6-9M', '9-12M', '1-2Y', '2-3Y', '3-4Y'], tags: 'girls, polo, co-ord, summer',
    weight: '150g', createdAt: '2026-06-01', updatedAt: '2026-07-20',
  },
  {
    id: 'p2', title: 'Baby Boys Full Sleeve Muslin Cotton Jhabla', shortName: 'Muslin Cotton Jhabla',
    description: 'Soft muslin cotton full sleeve jhabla for baby boys. Perfect for newborns.',
    sku: 'JB-B-JH-898', price: 399, stockQuantity: 85, status: 'ACTIVE',
    category: 'Baby', collection: 'Trending',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898.jpg?v=1774117938&width=200',
    images: ['https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898.jpg?v=1774117938&width=200'],
    sizes: ['0-3M', '3-6M', '6-12M'], tags: 'baby, jhabla, muslin, boys',
    weight: '80g', createdAt: '2026-05-10', updatedAt: '2026-07-18',
  },
  {
    id: 'p3', title: 'Girls Sleeveless Bamboo Cotton Dress', shortName: 'Bamboo Sleeveless Dress',
    description: 'GOTS certified organic bamboo cotton sleeveless dress for girls aged 0–9 months.',
    sku: 'JB-G-DR-529', price: 625, stockQuantity: 5, status: 'ACTIVE',
    category: 'Girls', collection: 'Bamboo',
    img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=200',
    images: ['https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=200'],
    sizes: ['0-3M', '3-6M', '6-9M'], tags: 'bamboo, girls, dress, organic',
    weight: '120g', createdAt: '2026-04-20', updatedAt: '2026-07-15',
  },
];

export function loadProducts(): Product[] {
  if (typeof window === 'undefined') return seedProducts;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedProducts));
      return seedProducts;
    }
    return JSON.parse(stored) as Product[];
  } catch {
    return seedProducts;
  }
}

export function saveProducts(products: Product[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function createProduct(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
  const product: Product = {
    ...data,
    id: generateId(),
    createdAt: today(),
    updatedAt: today(),
  };
  const all = loadProducts();
  all.unshift(product);
  saveProducts(all);
  return product;
}

export function deleteProduct(id: string): void {
  const all = loadProducts().filter((p) => p.id !== id);
  saveProducts(all);
}

export function updateProduct(id: string, data: Partial<Product>): Product | null {
  const all = loadProducts();
  const idx = all.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...data, updatedAt: today() };
  saveProducts(all);
  return all[idx];
}
