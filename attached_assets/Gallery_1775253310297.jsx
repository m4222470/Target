import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

/**
 * Gallery - Product image gallery with navigation
 * @param {Object} props
 * @param {Array} props.images - Array of image objects with id, alt, and angle
 * @param {string} props.selectedColor - Currently selected color ID
 */
const Gallery = ({ images, selectedColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${selectedColor}-${currentIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div
              className="w-full h-full rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--gallery-bg, #f5f5f5)' }}
            >
              {/* Placeholder for generated product image */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center mb-4">
                  <span className="text-6xl">⌚</span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {images[currentIndex]?.alt || 'Product Image'}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
              index === currentIndex
                ? 'ring-2 ring-amber-600 dark:ring-amber-400 ring-offset-2'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
              <span className="text-xl">⌚</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
