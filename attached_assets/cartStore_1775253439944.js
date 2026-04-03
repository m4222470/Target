import { create } from 'zustand';

/**
 * Cart Store - Manages shopping cart state
 * Uses Zustand for lightweight state management
 */
const useCartStore = create((set, get) => ({
  // State
  items: [],
  isCartOpen: false,

  // Computed
  get totalItems() {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // Actions
  addItem: (product, color, quantity = 1) => {
    const existingItem = get().items.find(
      item => item.id === product.id && item.colorId === color.id
    );

    if (existingItem) {
      set(state => ({
        items: state.items.map(item =>
          item.id === product.id && item.colorId === color.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }));
    } else {
      set(state => ({
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            colorId: color.id,
            colorName: color.name,
            colorHex: color.hex,
            quantity,
            image: product.gallery[0]?.id
          }
        ]
      }));
    }
  },

  removeItem: (itemId, colorId) => {
    set(state => ({
      items: state.items.filter(
        item => !(item.id === itemId && item.colorId === colorId)
      )
    }));
  },

  updateQuantity: (itemId, colorId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(itemId, colorId);
      return;
    }

    set(state => ({
      items: state.items.map(item =>
        item.id === itemId && item.colorId === colorId
          ? { ...item, quantity }
          : item
      )
    }));
  },

  clearCart: () => set({ items: [] }),

  toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));

export default useCartStore;
