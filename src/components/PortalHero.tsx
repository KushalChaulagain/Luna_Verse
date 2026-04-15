"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
interface PortalHeroProps {
  onUnlock: () => void;
  /** 0–1 while dragging; drives partial logo + background intensity */
  onSlideProgress?: (progress: number) => void;
}

const THUMB_SIZE = 48;
/** Horizontal inset inside the pill for the thumb (matches pl-2 / pr-2 intent). */
const TRACK_INSET = 10;

/** Extra width for the slide track vs. the logo column (breathing room for label + thumb). */
const TRACK_EXTRA_WIDTH = 72;

function usePortalLogoSize() {
  const [logoSize, setLogoSize] = useState(220);

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      setLogoSize(Math.min(220, Math.max(168, vw - 40)));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return logoSize;
}

const LOGO_SRC = "/final_logo.png";
const THUMB_SRC = "/side_button_logo.png";

const PORTAL_LOGO_BACKDROP = "#060912";
const PORTAL_LOGO_SCALE = 1.12;
const PORTAL_LOGO_OBJECT_POSITION = "52% 53%";

const THUMB_FILTER_IDLE =
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 14px rgba(34,211,238,0.3))";
const THUMB_FILTER_DRAGGING = [
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(34,211,238,0.45)) drop-shadow(0 0 32px rgba(34,211,238,0.35))",
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 36px rgba(34,211,238,0.95)) drop-shadow(0 0 56px rgba(34,211,238,0.55)) drop-shadow(0 0 88px rgba(167,139,250,0.18))",
  "drop-shadow(0 4px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(34,211,238,0.45)) drop-shadow(0 0 32px rgba(34,211,238,0.35))",
];

const PORTAL_RING_OUTSET = 12;

function portalOuterWidth(logoSize: number) {
  return logoSize + PORTAL_RING_OUTSET * 2;
}

const PortalHero = ({ onUnlock, onSlideProgress }: PortalHeroProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [maxDrag, setMaxDrag] = useState(1);
  const [sliderProgressPct, setSliderProgressPct] = useState(0);
  const sliderX = useMotionValue(0);
  const logoSize = usePortalLogoSize();
  const trackRef = useRef<HTMLDivElement>(null);

  const measureTrack = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const m = Math.max(1, w - 2 * TRACK_INSET - THUMB_SIZE);
    setMaxDrag(m);
  }, []);

  useLayoutEffect(() => {
    measureTrack();
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measureTrack());
    ro.observe(el);
    return () => ro.disconnect();
  }, [measureTrack]);

  useEffect(() => {
    sliderX.set(0);
  }, [maxDrag, sliderX]);

  const progress = useTransform(sliderX, [0, maxDrag], [0, 1]);

  const logoGlowShadow = useTransform(
    progress,
    [0, 1],
    [
      "0 0 24px rgba(34,211,238,0.12), inset 0 0 40px rgba(0,0,0,0.35)",
      "0 0 48px rgba(34,211,238,0.45), 0 0 90px rgba(167,139,250,0.2), inset 0 0 40px rgba(0,0,0,0.25)",
    ],
  );

  const portalOpacity = useTransform(sliderX, [maxDrag * 0.7, maxDrag], [1, 0]);

  useMotionValueEvent(sliderX, "change", (latest) => {
    const t = Math.min(1, Math.max(0, latest / maxDrag));
    onSlideProgress?.(t);
    setSliderProgressPct(Math.round(t * 100));
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

  const portalW = portalOuterWidth(logoSize);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden px-4 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-[max(1rem,env(safe-area-inset-bottom,0px))]"
      animate={unlocked ? { opacity: 0, scale: 1.02 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Logo column; slide track is slightly wider for label + thumb spacing */}
      <div className="flex w-full flex-col items-center gap-4 sm:gap-5">
        <motion.div
          className="relative mx-auto aspect-square w-full max-w-full shrink-0"
          style={{ maxWidth: `min(${portalW}px, calc(100vw - 2rem))` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2"
            style={{
              width: logoSize,
              height: logoSize,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
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
                  className="pointer-events-none select-none object-cover"
                  style={{
                    objectPosition: PORTAL_LOGO_OBJECT_POSITION,
                    transform: `scale(${PORTAL_LOGO_SCALE})`,
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              className="pointer-events-none absolute -inset-3 rounded-full border border-primary/20"
              style={{ opacity: portalOpacity }}
            />
          </div>
        </motion.div>

        {/* Slide to open — a bit wider than logo for padding around text + chevron */}
        <div
          className="w-full shrink-0"
          style={{
            maxWidth: `min(${portalW + TRACK_EXTRA_WIDTH}px, calc(100vw - 2rem))`,
          }}
        >
          <div
            ref={trackRef}
            className="relative mx-auto h-12 w-full rounded-full border border-white/12 bg-black/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            role="region"
            aria-label="Slide to open the site"
          >
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center px-14 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/38 sm:px-16 sm:text-[11px] sm:tracking-[0.3em]">
              Enter to the Void
            </p>

            <motion.div
              className="absolute flex cursor-grab select-none items-center justify-center outline-none [-webkit-tap-highlight-color:transparent] active:cursor-grabbing touch-none focus:outline-none"
              style={{
                x: sliderX,
                left: TRACK_INSET,
                top: "50%",
                y: "-50%",
                width: THUMB_SIZE,
                height: THUMB_SIZE,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: maxDrag }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileTap={{ scale: 0.94 }}
              role="slider"
              aria-label="Slide to unlock"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderProgressPct}
              aria-valuetext={`${sliderProgressPct}% slid`}
            >
              <motion.div
                className="pointer-events-none flex max-h-full max-w-full items-center justify-center"
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
                  width={THUMB_SIZE}
                  height={THUMB_SIZE}
                  className="h-auto max-h-full w-auto max-w-full select-none object-contain outline-none"
                  draggable={false}
                  priority
                  unoptimized
                  aria-hidden
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortalHero;
