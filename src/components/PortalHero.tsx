"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface PortalHeroProps {
  onUnlock: () => void;
}

const PortalHero = ({ onUnlock }: PortalHeroProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const sliderX = useMotionValue(0);

  const logoSize = 220;
  const thumbSize = 48;
  const maxDrag = logoSize - thumbSize;

  const leftOpacity = useTransform(sliderX, [0, maxDrag * 0.5], [0.8, 0]);
  const portalOpacity = useTransform(sliderX, [maxDrag * 0.7, maxDrag], [1, 0]);

  const handleDragEnd = () => {
    const current = sliderX.get();
    if (current > maxDrag * 0.8) {
      animate(sliderX, maxDrag, { duration: 0.3 });
      setUnlocked(true);
      setTimeout(onUnlock, 600);
    } else {
      animate(sliderX, 0, { type: "spring", stiffness: 300, damping: 25 });
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      animate={unlocked ? { opacity: 0, scale: 1.3 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Logo with integrated slider */}
      <motion.div
        className="relative"
        style={{ width: logoSize, height: logoSize }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Logo */}
        <div
          className="w-full h-full rounded-full border-2 border-primary/30 shadow-lg shadow-primary/20 flex items-center justify-center overflow-hidden p-2"
          style={{
            background: "radial-gradient(circle at 35% 35%, hsl(270 60% 30%), hsl(230 25% 8%) 70%)",
          }}
        >
          <Image
            src="/lunaverse.jpg"
            alt="lunaverse"
            width={400}
            height={400}
            priority
            className="h-[78%] w-[78%] object-contain select-none pointer-events-none"
          />
        </div>

        {/* Slider track overlay — centered vertically on the logo */}
        <div
          ref={constraintsRef}
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 flex items-center"
          style={{ pointerEvents: "none" }}
        >
          {/* Hint arrows */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.25em] text-white/70 select-none pointer-events-none drop-shadow-md"
            style={{ opacity: leftOpacity }}
          >
            &gt;&gt;&gt;
          </motion.div>

          {/* Draggable thumb */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none shadow-lg shadow-primary/40"
            style={{
              x: sliderX,
              width: thumbSize,
              height: thumbSize,
              left: 0,
              pointerEvents: "auto",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: maxDrag }}
            dragElastic={0}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-mono text-xl font-black text-primary-foreground">&gt;</span>
          </motion.div>
        </div>

        {/* Subtle glow ring */}
        <motion.div
          className="absolute -inset-3 rounded-full border border-primary/20 pointer-events-none"
          style={{ opacity: portalOpacity }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PortalHero;
