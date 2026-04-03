import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

import img0 from '@assets/watch_front_1775253265454.webp';
import img1 from '@assets/watch_side_1775253265433.webp';
import img2 from '@assets/watch_detail_1775253265391.webp';
import img3 from '@assets/watch_strap_1775253265477.webp';

const images = [img0, img1, img2, img3];

export default function Watch3DViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [18, -18]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-22, 22]), { stiffness: 200, damping: 30 });
  const shineX = useTransform(mouseX, [-1, 1], ['-60%', '160%']);
  const shineY = useTransform(mouseY, [-1, 1], ['-60%', '160%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartIndex.current = currentImg;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    const step = Math.round(delta / 60);
    const newIdx = ((dragStartIndex.current - step) % images.length + images.length) % images.length;
    setCurrentImg(newIdx);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <div className="relative select-none">
      <div
        ref={containerRef}
        className="relative rounded-3xl overflow-visible"
        style={{ perspective: '900px' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-2xl aspect-square cursor-grab active:cursor-grabbing"
        >
          <motion.img
            key={currentImg}
            src={images[currentImg]}
            alt="Watch 3D view"
            className="w-full h-full object-cover"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            draggable={false}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: 'radial-gradient(circle 200px at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.18) 0%, transparent 70%)',
            }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]: number[]) =>
                  `radial-gradient(circle 180px at ${50 + x * 40}% ${50 + y * 40}%, rgba(255,220,100,0.10) 0%, transparent 70%)`
              ),
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 60px 0 rgba(0,0,0,0.18)',
            }}
          />
        </motion.div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full bg-black/20 dark:bg-black/40 blur-xl" />
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentImg
                ? 'w-8 h-2 bg-amber-600'
                : 'w-2 h-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-amber-400'
            }`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: isHovered || isDragging ? 0 : 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full pointer-events-none"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Drag to rotate · Hover to tilt
      </motion.div>
    </div>
  );
}
