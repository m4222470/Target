import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useThemeStore from '../store/themeStore';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{ scale: isDarkMode ? 0 : 1, opacity: isDarkMode ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-amber-500" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ scale: isDarkMode ? 1 : 0, opacity: isDarkMode ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;
