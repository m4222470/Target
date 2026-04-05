import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  colorId?: string;
  colorName?: string;
  colorHex?: string;
  category: string;
  brand: string;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string, colorId?: string) => void;
  updateQuantity: (id: string, colorId: string | undefined, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (item) => {
        const existing = get().items.find(i => i.id === item.id && i.colorId === item.colorId);
        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === item.id && i.colorId === item.colorId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
        set({ isCartOpen: true });
      },

      removeItem: (id, colorId) =>
        set({ items: get().items.filter(i => !(i.id === id && i.colorId === colorId)) }),

      updateQuantity: (id, colorId, qty) => {
        if (qty <= 0) {
          get().removeItem(id, colorId);
          return;
        }
        set({
          items: get().items.map(i =>
            i.id === id && i.colorId === colorId ? { ...i, quantity: qty } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'aurum-cart' }
  )
);

export default useCartStore;
