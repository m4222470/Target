import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockUsers, User } from '../data/mockData';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: (email, password) => {
        const found = mockUsers.find(u => u.email === email && u.password === password);
        if (found) {
          set({ user: found, isAuthenticated: true });
          return { success: true, message: `Welcome back, ${found.name.split(' ')[0]}!` };
        }
        return { success: false, message: 'Invalid email or password.' };
      },

      logout: () => set({ user: null, isAuthenticated: false }),

      updateUser: (updates) => {
        const current = get().user;
        if (current) set({ user: { ...current, ...updates } });
      },

      addToWishlist: (productId) => {
        const user = get().user;
        if (!user) return;
        if (!user.wishlist.includes(productId)) {
          set({ user: { ...user, wishlist: [...user.wishlist, productId] } });
        }
      },

      removeFromWishlist: (productId) => {
        const user = get().user;
        if (!user) return;
        set({ user: { ...user, wishlist: user.wishlist.filter(id => id !== productId) } });
      },

      isInWishlist: (productId) => {
        const user = get().user;
        return user ? user.wishlist.includes(productId) : false;
      },
    }),
    { name: 'aurum-auth' }
  )
);

export default useAuthStore;
