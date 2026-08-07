// Supplier auth — localStorage-based

export interface SupplierUser {
  id: string;
  name: string;
  email: string;
  password: string;
  contactName: string;
  phone: string;
  address: string;
  isActive: boolean;
  createdAt: string;
}

export interface SupplierProduct {
  id: string;
  supplierId: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  stock: number;
  images: string[];
  category: string;
  status: 'ACTIVE' | 'DRAFT' | 'PENDING';
  createdAt: string;
  updatedAt: string;
}

export interface ProductReview {
  id: string;
  supplierId: string;
  productId: string;
  productName: string;
  rating: number;           // 1–5
  title: string;
  body: string;
  qualityRating: number;    // 1–5
  packagingRating: number;  // 1–5
  deliveryRating: number;   // 1–5
  recommend: boolean;
  status: 'PUBLISHED' | 'PENDING';
  createdAt: string;
}

const SUPPLIERS_KEY = 'popees_suppliers';
const SUPPLIER_SESSION_KEY = 'popees_supplier_session';
const SUPPLIER_PRODUCTS_KEY = 'popees_supplier_products';

function today() { return new Date().toISOString().split('T')[0]; }
function uid() { return 'sup_' + Math.random().toString(36).slice(2, 10); }

// ── Auth ──────────────────────────────────────────────────────────────────────
export function getSuppliers(): SupplierUser[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(SUPPLIERS_KEY) || '[]'); }
  catch { return []; }
}

function saveSuppliers(s: SupplierUser[]) {
  localStorage.setItem(SUPPLIERS_KEY, JSON.stringify(s));
}

export function registerSupplier(
  name: string, email: string, password: string,
  contactName: string, phone: string, address: string
): { ok: boolean; error?: string } {
  const all = getSuppliers();
  if (all.find((s) => s.email.toLowerCase() === email.toLowerCase()))
    return { ok: false, error: 'An account with this email already exists.' };
  const user: SupplierUser = {
    id: uid(), name: name.trim(), email: email.trim().toLowerCase(),
    password, contactName: contactName.trim(), phone: phone.trim(),
    address: address.trim(), isActive: true, createdAt: today(),
  };
  all.push(user);
  saveSuppliers(all);
  return { ok: true };
}

export function loginSupplier(email: string, password: string): { ok: boolean; error?: string; user?: SupplierUser } {
  const user = getSuppliers().find(
    (s) => s.email.toLowerCase() === email.toLowerCase() && s.password === password
  );
  if (!user) return { ok: false, error: 'Invalid email or password.' };
  localStorage.setItem(SUPPLIER_SESSION_KEY, JSON.stringify({
    id: user.id, name: user.name, email: user.email,
  }));
  return { ok: true, user };
}

export function logoutSupplier() {
  localStorage.removeItem(SUPPLIER_SESSION_KEY);
}

export function getSupplierSession(): { id: string; name: string; email: string } | null {
  if (typeof window === 'undefined') return null;
  try { return JSON.parse(localStorage.getItem(SUPPLIER_SESSION_KEY) || 'null'); }
  catch { return null; }
}

export function isSupplierLoggedIn(): boolean {
  return getSupplierSession() !== null;
}

// ── Supplier products ─────────────────────────────────────────────────────────
export function getSupplierProducts(supplierId: string): SupplierProduct[] {
  if (typeof window === 'undefined') return [];
  try {
    const all: SupplierProduct[] = JSON.parse(localStorage.getItem(SUPPLIER_PRODUCTS_KEY) || '[]');
    return all.filter((p) => p.supplierId === supplierId);
  } catch { return []; }
}

export function createSupplierProduct(supplierId: string, data: Omit<SupplierProduct, 'id' | 'supplierId' | 'createdAt' | 'updatedAt'>): SupplierProduct {
  const all: SupplierProduct[] = JSON.parse(localStorage.getItem(SUPPLIER_PRODUCTS_KEY) || '[]');
  const product: SupplierProduct = { ...data, id: uid(), supplierId, createdAt: today(), updatedAt: today() };
  all.unshift(product);
  localStorage.setItem(SUPPLIER_PRODUCTS_KEY, JSON.stringify(all));
  return product;
}

export function deleteSupplierProduct(id: string) {
  const all: SupplierProduct[] = JSON.parse(localStorage.getItem(SUPPLIER_PRODUCTS_KEY) || '[]');
  localStorage.setItem(SUPPLIER_PRODUCTS_KEY, JSON.stringify(all.filter((p) => p.id !== id)));
}

// ── Product reviews ───────────────────────────────────────────────────────────
const REVIEWS_KEY = 'popees_supplier_reviews';

export function getSupplierReviews(supplierId: string): ProductReview[] {
  if (typeof window === 'undefined') return [];
  try {
    const all: ProductReview[] = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '[]');
    return all.filter((r) => r.supplierId === supplierId);
  } catch { return []; }
}

export function createProductReview(
  supplierId: string,
  data: Omit<ProductReview, 'id' | 'supplierId' | 'status' | 'createdAt'>
): ProductReview {
  const all: ProductReview[] = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '[]');
  const review: ProductReview = {
    ...data, id: uid(), supplierId,
    status: 'PENDING', createdAt: today(),
  };
  all.unshift(review);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
  return review;
}

export function deleteProductReview(id: string) {
  const all: ProductReview[] = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '[]');
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all.filter((r) => r.id !== id)));
}
