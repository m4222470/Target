import { motion } from 'framer-motion';

/**
 * ColorSelector - Allows users to select product color variant
 * @param {Object} props
 * @param {Array} props.colors - Array of color options with id, name, hex
 * @param {string} props.selectedColor - Currently selected color ID
 * @param {Function} props.onColorChange - Callback when color changes
 */
const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  const selected = colors.find((c) => c.id === selectedColor) || colors[0];

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase">
          Color
        </label>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {selected.name}
        </span>
      </div>

      <div className="flex gap-3">
        {colors.map((color) => (
          <motion.button
            key={color.id}
            onClick={() => onColorChange(color.id)}
            className={`relative w-12 h-12 rounded-full transition-transform hover:scale-110 ${
              selectedColor === color.id ? 'ring-2 ring-offset-2 ring-amber-600 dark:ring-amber-400' : ''
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label={`Select ${color.name}`}
            title={color.name}
          >
            <div
              className="w-full h-full rounded-full border-2 border-neutral-200 dark:border-neutral-700"
              style={{ backgroundColor: color.hex }}
            />
            {selectedColor === color.id && (
              <motion.div
                layoutId="colorIndicator"
                className="absolute inset-0 rounded-full border-4 border-amber-600 dark:border-amber-400"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
