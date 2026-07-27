'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  img: string;
  quantity: number;
  size?: string;
  variant?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const clearCart = useCallback(() => {
    setItems([]);
    setIsOpen(false);
  }, []);

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems((prev) => {
      const key = `${newItem.id}-${newItem.size ?? ''}`;
      const existing = prev.find((i) => `${i.id}-${i.size ?? ''}` === key);
      if (existing) {
        return prev.map((i) =>
          `${i.id}-${i.size ?? ''}` === key
            ? { ...i, quantity: i.quantity + (newItem.quantity ?? 1) }
            : i
        );
      }
      return [...prev, { ...newItem, quantity: newItem.quantity ?? 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string, size?: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number, size?: string) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.size === size ? { ...i, quantity } : i))
    );
  }, []);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = items.reduce((sum, i) => {
    const numeric = parseFloat(i.price.replace(/[^0-9.]/g, ''));
    return sum + (isNaN(numeric) ? 0 : numeric * i.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clearCart, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
