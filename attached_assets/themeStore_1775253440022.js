import { create } from 'zustand';

/**
 * Theme Store - Manages dark/light mode state
 */
const useThemeStore = create((set) => ({
  isDarkMode: false,

  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  setDarkMode: (value) => set({ isDarkMode: value }),
}));

export default useThemeStore;
