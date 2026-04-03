import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import useCartStore from '../store/cartStore';

interface AddToCartButtonProps {
  product: any;
  selectedColor: any;
  quantity: number;
}

const AddToCartButton = ({ product, selectedColor, quantity }: AddToCartButtonProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product, selectedColor, quantity);
    setIsAdded(true);
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
          : 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500 text-white shadow-lg'
      }`}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
    >
      <AnimatedContent isAdded={isAdded} isDisabled={isDisabled} />
    </motion.button>
  );
};

const AnimatedContent = ({ isAdded, isDisabled }: { isAdded: boolean; isDisabled: boolean }) => (
  <motion.div
    initial={false}
    animate={{ opacity: 1 }}
    className="flex items-center justify-center gap-3"
  >
    {isAdded ? (
      <>
        <Check className="w-6 h-6" />
        <span>Added to Cart!</span>
      </>
    ) : (
      <>
        <ShoppingBag className="w-6 h-6" />
        <span>{isDisabled ? 'Out of Stock' : 'Add to Cart'}</span>
      </>
    )}
  </motion.div>
);

export default AddToCartButton;
