// Admin auth — localStorage-based, no backend needed

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const USERS_KEY = 'popees_admin_users';
const SESSION_KEY = 'popees_admin_session';

function getUsers(): AdminUser[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: AdminUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerAdmin(name: string, email: string, password: string): { ok: boolean; error?: string } {
  const users = getUsers();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, error: 'An account with this email already exists.' };
  }
  const user: AdminUser = {
    id: 'adm_' + Math.random().toString(36).slice(2, 10),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password, // plain text — fine for a mock/demo setup
    createdAt: new Date().toISOString().split('T')[0],
  };
  users.push(user);
  saveUsers(users);
  return { ok: true };
}

export function loginAdmin(email: string, password: string): { ok: boolean; error?: string; user?: AdminUser } {
  const users = getUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) return { ok: false, error: 'Invalid email or password.' };
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email }));
  return { ok: true, user };
}

export function logoutAdmin(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function getAdminSession(): { id: string; name: string; email: string } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAdminLoggedIn(): boolean {
  return getAdminSession() !== null;
}
