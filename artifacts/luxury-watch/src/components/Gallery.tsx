import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import watchFront from '@assets/watch_front_1775253265454.webp';
import watchSide from '@assets/watch_side_1775253265433.webp';
import watchDetail from '@assets/watch_detail_1775253265391.webp';
import watchStrap from '@assets/watch_strap_1775253265477.webp';

const imageMap: Record<string, string> = {
  front: watchFront,
  side: watchSide,
  detail: watchDetail,
  strap: watchStrap,
};

interface GalleryImage {
  id: string;
  alt: string;
  angle: string;
}

interface GalleryProps {
  images: GalleryImage[];
  selectedColor: string;
}

const Gallery = ({ images, selectedColor }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 800 : -800,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 800 : -800,
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

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];
  const imageSrc = imageMap[currentImage?.angle] || watchFront;

  return (
    <div className="relative w-full">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-xl">
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
            className="absolute inset-0"
          >
            <img
              src={imageSrc}
              alt={currentImage?.alt || 'Watch image'}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-amber-500 w-6'
                  : 'bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all ${
              index === currentIndex
                ? 'ring-2 ring-amber-500 dark:ring-amber-400 ring-offset-2 ring-offset-neutral-50 dark:ring-offset-neutral-950'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={imageMap[image.angle] || watchFront}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
