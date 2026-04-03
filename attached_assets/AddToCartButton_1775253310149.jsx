import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import useCartStore from '../store/cartStore';

/**
 * AddToCartButton - Adds product to cart with animation feedback
 * @param {Object} props
 * @param {Object} props.product - Product data
 * @param {Object} props.selectedColor - Selected color object
 * @param {number} props.quantity - Selected quantity
 */
const AddToCartButton = ({ product, selectedColor, quantity }) => {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addItem(product, selectedColor, quantity);
    setIsAdded(true);

    // Reset after animation
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 1000);
  };

  const isDisabled = !product.inStock;

  return (
    <motion.button
      onClick={handleAddToCart}
      disabled={isDisabled}
      className={`relative w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all overflow-hidden ${
        isDisabled
          ? 'bg-neutral-300 dark:bg-neutral-700 text-neutral-500 cursor-not-allowed'
          : isAdded
          ? 'bg-green-600 text-white'
          : 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500 text-white'
      }`}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: isAdded ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center gap-3"
      >
        {isAdded ? (
          <Check className="w-6 h-6" />
        ) : (
          <ShoppingBag className="w-6 h-6" />
        )}
        <span>
          {isAdded
            ? 'Added to Cart!'
            : isDisabled
            ? 'Out of Stock'
            : 'Add to Cart'}
        </span>
      </motion.div>

      {isAdded && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Check className="w-8 h-8" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default AddToCartButton;
