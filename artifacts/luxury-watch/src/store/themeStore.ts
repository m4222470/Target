import { create } from 'zustand';

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (value: boolean) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setDarkMode: (value) => set({ isDarkMode: value }),
}));

export default useThemeStore;
