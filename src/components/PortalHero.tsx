"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PortalHeroProps {
  onUnlock: () => void;
  /** 0–1 while dragging; drives partial logo + background intensity */
  onSlideProgress?: (progress: number) => void;
}

function usePortalLayout() {
  const [layout, setLayout] = useState({ logoSize: 220, thumbSize: 48 });

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      // Fit logo in narrow viewports; keep thumb proportional for drag range
      const logoSize = Math.min(220, Math.max(168, vw - 40));
      const thumbSize = Math.round(48 * (logoSize / 220));
      setLayout({
        logoSize,
        thumbSize: Math.max(40, Math.min(thumbSize, 52)),
      });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return layout;
}

const LOGO_SRC = "/final_logo.png";
const THUMB_SRC = "/side_button_logo.png";

/** object-cover + backdrop fills the circle; position nudges optical center (motif sits slightly top-left in the asset). */
const PORTAL_LOGO_BACKDROP = "#060912";
const PORTAL_LOGO_SCALE = 1.12;
const PORTAL_LOGO_OBJECT_POSITION = "52% 53%";

/** Glow on the thumb asset via drop-shadow (not box-shadow on the square wrapper — that drew a visible rectangular cyan edge). */
const THUMB_FILTER_IDLE =
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 14px rgba(34,211,238,0.3))";
const THUMB_FILTER_DRAGGING = [
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(34,211,238,0.45)) drop-shadow(0 0 32px rgba(34,211,238,0.35))",
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 36px rgba(34,211,238,0.95)) drop-shadow(0 0 56px rgba(34,211,238,0.55)) drop-shadow(0 0 88px rgba(167,139,250,0.18))",
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(34,211,238,0.45)) drop-shadow(0 0 32px rgba(34,211,238,0.35))",
];

/** Matches Tailwind `inset-3` (0.75rem); outer ring uses `-inset-3` so layout must reserve this band. */
const PORTAL_RING_OUTSET = 12;

const PortalHero = ({ onUnlock, onSlideProgress }: PortalHeroProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderX = useMotionValue(0);
  const { logoSize, thumbSize } = usePortalLayout();
  const maxDrag = Math.max(1, logoSize - thumbSize);

  useEffect(() => {
    sliderX.set(0);
  }, [logoSize, thumbSize, sliderX]);

  const progress = useTransform(sliderX, [0, maxDrag], [0, 1]);

  const logoGlowShadow = useTransform(
    progress,
    [0, 1],
    [
      "0 0 24px rgba(34,211,238,0.12), inset 0 0 40px rgba(0,0,0,0.35)",
      "0 0 48px rgba(34,211,238,0.45), 0 0 90px rgba(167,139,250,0.2), inset 0 0 40px rgba(0,0,0,0.25)",
    ],
  );

  const leftOpacity = useTransform(sliderX, [0, maxDrag * 0.5], [0.8, 0]);
  const portalOpacity = useTransform(sliderX, [maxDrag * 0.7, maxDrag], [1, 0]);

  useMotionValueEvent(sliderX, "change", (latest) => {
    const t = Math.min(1, Math.max(0, latest / maxDrag));
    onSlideProgress?.(t);
  });

  const handleDragEnd = () => {
    setIsDragging(false);
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
      className="fixed inset-0 z-40 flex items-center justify-center px-4 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-[max(0.5rem,env(safe-area-inset-top,0px))]"
      animate={unlocked ? { opacity: 0, scale: 1.3 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Logo with integrated slider — outer box sized for `-inset-3` ring so nothing clips past the circle */}
      <motion.div
        className="relative"
        style={{
          width: logoSize + PORTAL_RING_OUTSET * 2,
          height: logoSize + PORTAL_RING_OUTSET * 2,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: logoSize, height: logoSize }}
        >
          {/* Static logo inside the portal ring */}
          <motion.div
            className="relative box-border h-full w-full overflow-hidden rounded-full border-2 border-primary/50 p-0 [clip-path:circle(50%_at_50%_50%)]"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, hsl(270 60% 30%), hsl(230 25% 8%) 70%)",
              boxShadow: logoGlowShadow,
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-full"
              style={{ backgroundColor: PORTAL_LOGO_BACKDROP }}
            >
              <Image
                src={LOGO_SRC}
                alt=""
                fill
                sizes={`${logoSize}px`}
                priority
                unoptimized
                className="select-none object-cover pointer-events-none"
                style={{
                  objectPosition: PORTAL_LOGO_OBJECT_POSITION,
                  transform: `scale(${PORTAL_LOGO_SCALE})`,
                }}
              />
            </div>
          </motion.div>

          {/* Slider track overlay — centered vertically on the logo */}
          <div
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

            {/* Draggable thumb — custom asset + glow pulse while sliding */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none outline-none focus:outline-none border-0 ring-0"
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
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileTap={{ scale: 0.92 }}
            >
              <motion.div
                className="flex max-h-full max-w-full items-center justify-center pointer-events-none"
                animate={
                  isDragging
                    ? { filter: THUMB_FILTER_DRAGGING }
                    : { filter: THUMB_FILTER_IDLE }
                }
                transition={
                  isDragging
                    ? { duration: 1.35, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.28 }
                }
              >
                <Image
                  src={THUMB_SRC}
                  alt=""
                  width={thumbSize}
                  height={thumbSize}
                  className="max-h-full max-w-full h-auto w-auto object-contain pointer-events-none select-none outline-none"
                  draggable={false}
                  priority
                  unoptimized
                  aria-hidden
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle glow ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-primary/20 pointer-events-none"
            style={{ opacity: portalOpacity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortalHero;
