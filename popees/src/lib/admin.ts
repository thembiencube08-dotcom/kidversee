// Mock admin auth — no database or next-auth needed
// In production, replace with real session/auth logic

export interface AdminSession {
  user: { email: string; name: string; role: string };
}

const ADMIN_EMAIL = 'admin@popees.com';
const ADMIN_PASSWORD = 'admin123';

export function getAdminCredentials() {
  return { email: ADMIN_EMAIL, password: ADMIN_PASSWORD };
}

// Server-side: always returns mock session (no redirect in mock mode)
export async function requireAdmin(): Promise<AdminSession> {
  return { user: { email: ADMIN_EMAIL, name: 'Admin', role: 'ADMIN' } };
}

export async function requireAdminOrRedirect(): Promise<AdminSession> {
  return requireAdmin();
}
