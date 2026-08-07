// Mock data for admin panel — replace with real DB queries when backend is ready

export interface MockProduct {
  id: string;
  title: string;
  sku: string;
  price: number;
  originalPrice?: number;
  stockQuantity: number;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
  category: string;
  collection: string;
  img: string;
  updatedAt: string;
}

export interface MockOrder {
  id: string;
  customer: string;
  email: string;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  items: number;
  totalAmount: number;
  createdAt: string;
}

export interface MockCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  createdAt: string;
}

export const mockProducts: MockProduct[] = [
  { id: 'p1', title: 'Baby Girls Ribbed Polo T-Shirt & Shorts Co-Ord Set', sku: 'KF-G-TB-957F', price: 899, stockQuantity: 42, status: 'ACTIVE', category: 'Girls', collection: "What's New", img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F.jpg?v=1784619302&width=200', updatedAt: '2026-07-20' },
  { id: 'p2', title: 'Baby Boys Full Sleeve Muslin Cotton Jhabla', sku: 'JB-B-JH-898', price: 399, stockQuantity: 85, status: 'ACTIVE', category: 'Baby', collection: 'Trending', img: 'https://www.popees.com/cdn/shop/files/007A-JB-B-JH-898.jpg?v=1774117938&width=200', updatedAt: '2026-07-18' },
  { id: 'p3', title: 'Girls Sleeveless Bamboo Cotton Dress', sku: 'JB-G-DR-529', price: 625, stockQuantity: 5, status: 'ACTIVE', category: 'Girls', collection: 'Bamboo', img: 'https://www.popees.com/cdn/shop/files/007A-JB-G-DR-529.jpg?v=1774117877&width=200', updatedAt: '2026-07-15' },
  { id: 'p4', title: 'Premium Pant Style Diaper 24 PCS', sku: 'DIAPER-24', price: 284, originalPrice: 379, stockQuantity: 120, status: 'ACTIVE', category: 'Diaper', collection: 'Best Sellers', img: 'https://www.popees.com/cdn/shop/files/1_00f2ab45-2a18-46ee-87d8-deb42d865b82.jpg?v=1777285803&width=200', updatedAt: '2026-07-12' },
  { id: 'p5', title: 'Anti-Bacterial Baby Fabric Wash 1 Litre', sku: 'FMCG-FW-1L', price: 319, stockQuantity: 0, status: 'ACTIVE', category: 'Baby Basics', collection: 'Best Sellers', img: 'https://www.popees.com/cdn/shop/files/Bath_Grooming_Header.jpg?v=1776144452&width=200', updatedAt: '2026-07-10' },
  { id: 'p6', title: 'Bamboo Unisex Full-Sleeve Front Open Sleepsuit', sku: 'JB-U-SL-316', price: 649, stockQuantity: 28, status: 'ACTIVE', category: 'Baby', collection: 'Bamboo', img: 'https://www.popees.com/cdn/shop/files/006A-JB-U-SL-316_808bcb03-2e1c-4241-9f2a-b0f5c44b8db4.jpg?v=1774117818&width=200', updatedAt: '2026-07-08' },
  { id: 'p7', title: 'Baby Girls Leopard Sleeveless Peplum Top', sku: 'KF-G-TP-674', price: 599, stockQuantity: 12, status: 'ACTIVE', category: 'Girls', collection: 'Girls T-Shirts', img: 'https://www.popees.com/cdn/shop/files/009A-KF-G-TB-957F_5.jpg?v=1784619302&width=200', updatedAt: '2026-07-05' },
  { id: 'p8', title: 'Boys Cotton Cargo Shorts with Pockets', sku: 'KF-B-SH-201', price: 450, stockQuantity: 0, status: 'DRAFT', category: 'Boys', collection: 'Boys New', img: 'https://www.popees.com/cdn/shop/files/Grooming_635ca576-b29a-4eb9-807f-d8669c238025.jpg?v=1772387129&width=200', updatedAt: '2026-07-01' },
];

export const mockOrders: MockOrder[] = [
  { id: 'ORD-10241', customer: 'Sarah Mitchell', email: 'sarah.mitchell@example.com', status: 'PENDING', items: 3, totalAmount: 1847, createdAt: '2026-08-05' },
  { id: 'ORD-10240', customer: 'James Carter', email: 'james.carter@example.com', status: 'CONFIRMED', items: 1, totalAmount: 899, createdAt: '2026-08-05' },
  { id: 'ORD-10239', customer: 'Emily Thompson', email: 'emily.t@example.com', status: 'SHIPPED', items: 2, totalAmount: 1248, createdAt: '2026-08-04' },
  { id: 'ORD-10238', customer: 'Daniel Harris', email: 'daniel.harris@example.com', status: 'DELIVERED', items: 4, totalAmount: 2396, createdAt: '2026-08-03' },
  { id: 'ORD-10237', customer: 'Jessica Brown', email: 'jessica.b@example.com', status: 'DELIVERED', items: 1, totalAmount: 319, createdAt: '2026-08-03' },
  { id: 'ORD-10236', customer: 'Michael Wilson', email: 'michael.w@example.com', status: 'CANCELLED', items: 2, totalAmount: 798, createdAt: '2026-08-02' },
  { id: 'ORD-10235', customer: 'Olivia Clarke', email: 'olivia.c@example.com', status: 'DELIVERED', items: 3, totalAmount: 1573, createdAt: '2026-08-01' },
  { id: 'ORD-10234', customer: 'Ryan Anderson', email: 'ryan.a@example.com', status: 'SHIPPED', items: 2, totalAmount: 1124, createdAt: '2026-07-31' },
];

export const mockCustomers: MockCustomer[] = [
  { id: 'c1', name: 'Sarah Mitchell', email: 'sarah.mitchell@example.com', phone: '+44 7700 900123', orders: 5, totalSpent: 6890, createdAt: '2026-03-12' },
  { id: 'c2', name: 'James Carter', email: 'james.carter@example.com', phone: '+44 7700 900456', orders: 2, totalSpent: 1848, createdAt: '2026-04-18' },
  { id: 'c3', name: 'Emily Thompson', email: 'emily.t@example.com', phone: '+44 7700 900789', orders: 8, totalSpent: 12480, createdAt: '2026-01-05' },
  { id: 'c4', name: 'Daniel Harris', email: 'daniel.harris@example.com', phone: '+44 7700 900321', orders: 3, totalSpent: 4200, createdAt: '2026-05-22' },
  { id: 'c5', name: 'Jessica Brown', email: 'jessica.b@example.com', phone: '+44 7700 900654', orders: 1, totalSpent: 319, createdAt: '2026-08-03' },
  { id: 'c6', name: 'Michael Wilson', email: 'michael.w@example.com', phone: '+44 7700 900987', orders: 4, totalSpent: 5560, createdAt: '2026-02-14' },
  { id: 'c7', name: 'Olivia Clarke', email: 'olivia.c@example.com', phone: '+44 7700 900147', orders: 6, totalSpent: 8940, createdAt: '2025-12-01' },
  { id: 'c8', name: 'Ryan Anderson', email: 'ryan.a@example.com', phone: '+44 7700 900258', orders: 2, totalSpent: 2248, createdAt: '2026-06-30' },
];

export const mockStats = {
  totalRevenue: 89430,
  totalOrders: mockOrders.length,
  totalCustomers: mockCustomers.length,
  totalProducts: mockProducts.length,
  lowStock: mockProducts.filter((p) => p.stockQuantity > 0 && p.stockQuantity < 10).length,
  pendingOrders: mockOrders.filter((o) => o.status === 'PENDING').length,
};

export const salesChartData = [
  { month: 'Mar', revenue: 4200 },
  { month: 'Apr', revenue: 7800 },
  { month: 'May', revenue: 6500 },
  { month: 'Jun', revenue: 9200 },
  { month: 'Jul', revenue: 11400 },
  { month: 'Aug', revenue: 8930 },
];
