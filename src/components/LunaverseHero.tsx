"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingWhatsAppChat from "@/components/FloatingWhatsAppChat";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

function Sparkle({ className }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none text-foreground/90 select-none ${className}`}
      aria-hidden
    >
      ✦
    </span>
  );
}

/** Space reserved above the fixed bottom dock + safe area (matches BottomDock footprint). */
const MOBILE_DOCK_GAP =
  "max(4.75rem,calc(4.25rem + env(safe-area-inset-bottom, 0px)))";

const LunaverseHero = () => {
  const dockPadStyle = {
    ["--mobile-dock-gap"]: MOBILE_DOCK_GAP,
  } as CSSProperties;

  return (
    <>
    <section
      style={dockPadStyle}
      className={`relative z-10 flex min-h-[100svh] flex-col overflow-hidden max-sm:h-[100dvh] max-sm:min-h-0 max-sm:max-h-[100dvh] ${montserrat.className}`}
    >
      {/* Deep space wash + nebula tint over canvas starfield */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(88,28,135,0.35),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(30,27,75,0.5),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(76,29,149,0.25),transparent_45%)]"
        aria-hidden
      />

      {/* Large planet — top left (softened for balance) */}
      <div
        className="pointer-events-none absolute -left-[10%] -top-[8%] h-[min(46vw,19rem)] w-[min(46vw,19rem)] sm:h-[22rem] sm:w-[22rem] rounded-full opacity-[0.72] blur-[2px]"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, rgba(244,114,182,0.72), rgba(139,92,246,0.62) 38%, rgba(79,70,229,0.48) 58%, rgba(49,46,129,0.28) 78%, transparent 100%)",
          boxShadow:
            "0 0 56px rgba(167,139,250,0.22), inset -20px -20px 60px rgba(30,27,75,0.35)",
        }}
        aria-hidden
      />

      {/* Small planet — bottom right (slightly stronger for balance) */}
      <div
        className="pointer-events-none absolute -bottom-[5%] -right-[3%] h-[10rem] w-[10rem] sm:h-[11.5rem] sm:w-[11.5rem] rounded-full opacity-[0.98]"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(253,224,71,0.98), rgba(251,146,60,0.88) 45%, rgba(194,65,12,0.68) 72%, rgba(124,45,18,0.42) 100%)",
          boxShadow: "0 0 64px rgba(251,146,60,0.42)",
        }}
        aria-hidden
      />

      <Sparkle className="absolute left-[14%] top-[22%] text-lg opacity-80 sm:left-[18%] sm:text-xl" />
      <Sparkle className="absolute right-[20%] top-[38%] text-sm opacity-70 sm:text-base" />
      <Sparkle className="absolute bottom-[38%] left-[28%] text-xs opacity-60" />
      <Sparkle className="absolute bottom-[30%] right-[14%] text-base opacity-75" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-4 pt-0 pb-10 max-md:pb-[var(--mobile-dock-gap)] sm:px-8 md:pb-14 md:pt-6">
        <motion.h1
          className="hero-headline mx-auto max-w-5xl shrink-0 text-center text-[clamp(1.35rem,4.2vw+0.85rem,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[clamp(1.65rem,4.5vw,3.25rem)] sm:leading-[1.14]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Master Python through challenges.
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-xl shrink-0 text-center text-sm font-medium leading-relaxed text-body sm:mt-5 sm:text-base md:text-[17px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Don&apos;t waste your prime time scrolling reels while others are scripting the
          future.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 flex w-full max-w-md shrink-0 flex-col items-stretch gap-3 sm:mt-10 sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          <Button
            asChild
            variant="cta"
            size="lg"
            className="h-11 px-10 text-sm font-semibold tracking-wide sm:h-12 sm:px-12 sm:text-base"
          >
            <Link href="/courses#courses">Enroll in Python Launchpad</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 flex shrink-0 flex-col items-center gap-2 sm:mt-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <div
            className="flex gap-0.5 text-cta"
            role="img"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden strokeWidth={0} />
            ))}
          </div>
          <p className="text-center text-xs font-medium text-foreground/80 sm:text-sm">
            Trusted by 100+ students
          </p>
        </motion.div>
      </div>
    </section>
    <FloatingWhatsAppChat />
    </>
  );
};

export default LunaverseHero;
