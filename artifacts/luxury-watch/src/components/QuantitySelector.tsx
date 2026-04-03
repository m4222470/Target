import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  max?: number;
}

const QuantitySelector = ({ quantity, onQuantityChange, max = 99 }: QuantitySelectorProps) => {
  const handleDecrement = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < max) onQuantityChange(quantity + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= max) {
      onQuantityChange(value);
    } else if (e.target.value === '') {
      onQuantityChange(1);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase">
        Quantity
      </label>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-neutral-300 dark:border-neutral-600 rounded-lg overflow-hidden">
          <motion.button
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className={`p-3 transition-colors ${
              quantity <= 1
                ? 'text-neutral-400 cursor-not-allowed'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label="Decrease quantity"
          >
            <Minus className="w-5 h-5" />
          </motion.button>

          <input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min={1}
            max={max}
            className="w-16 text-center text-lg font-semibold bg-transparent border-x border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 focus:outline-none py-2"
          />

          <motion.button
            onClick={handleIncrement}
            disabled={quantity >= max}
            className={`p-3 transition-colors ${
              quantity >= max
                ? 'text-neutral-400 cursor-not-allowed'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label="Increase quantity"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>

        <span className="text-sm text-neutral-500 dark:text-neutral-500">{max} available</span>
      </div>
    </div>
  );
};

export default QuantitySelector;
