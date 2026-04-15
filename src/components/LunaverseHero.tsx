"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

function WireframeGlobe({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="0.75"
      />
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <ellipse
          key={deg}
          cx="100"
          cy="100"
          rx="88"
          ry="28"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.6"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
      {[0, 45, 90, 135].map((deg) => (
        <ellipse
          key={`v-${deg}`}
          cx="100"
          cy="100"
          rx="28"
          ry="88"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="0.55"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
    </svg>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none text-white/90 select-none ${className}`}
      aria-hidden
    >
      ✦
    </span>
  );
}

const LunaverseHero = () => {
  return (
    <section
      className={`relative z-10 min-h-[100svh] flex flex-col overflow-hidden ${montserrat.className}`}
    >
      {/* Deep space wash + nebula tint over canvas starfield */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(88,28,135,0.35),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(30,27,75,0.5),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(76,29,149,0.25),transparent_45%)]"
        aria-hidden
      />

      {/* Large planet — top left */}
      <div
        className="pointer-events-none absolute -left-[12%] -top-[8%] h-[min(52vw,22rem)] w-[min(52vw,22rem)] sm:h-[26rem] sm:w-[26rem] rounded-full opacity-95 blur-[1px]"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, rgba(244,114,182,0.85), rgba(139,92,246,0.75) 38%, rgba(79,70,229,0.55) 58%, rgba(49,46,129,0.35) 78%, transparent 100%)",
          boxShadow:
            "0 0 80px rgba(167,139,250,0.35), inset -20px -20px 60px rgba(30,27,75,0.4)",
        }}
        aria-hidden
      />

      {/* Small planet — bottom right */}
      <div
        className="pointer-events-none absolute -bottom-[6%] -right-[4%] h-36 w-36 sm:h-44 sm:w-44 rounded-full opacity-95"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(253,224,71,0.95), rgba(251,146,60,0.85) 45%, rgba(194,65,12,0.65) 72%, rgba(124,45,18,0.4) 100%)",
          boxShadow: "0 0 50px rgba(251,146,60,0.35)",
        }}
        aria-hidden
      />

      <WireframeGlobe className="pointer-events-none absolute left-1/2 top-[6%] w-[min(92vw,24rem)] -translate-x-1/2 opacity-[0.42] sm:top-[7%] sm:w-[28rem]" />

      <Sparkle className="absolute left-[14%] top-[22%] text-lg opacity-80 sm:left-[18%] sm:text-xl" />
      <Sparkle className="absolute right-[20%] top-[38%] text-sm opacity-70 sm:text-base" />
      <Sparkle className="absolute bottom-[38%] left-[28%] text-xs opacity-60" />
      <Sparkle className="absolute bottom-[30%] right-[14%] text-base opacity-75" />

      <p className="absolute right-5 top-5 z-20 text-[10px] font-medium uppercase tracking-[0.4em] text-white/90 sm:right-8 sm:top-7 sm:text-[11px]">
        LUNAVERSE
      </p>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-6 pt-20 sm:px-8 sm:pt-24">
        <motion.h1
          className="hero-luna-title mx-auto max-w-5xl text-center text-[clamp(1.65rem,5vw,3.75rem)] font-extrabold uppercase leading-[1.08] tracking-[0.02em] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Welcome to the Lunaverse
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-right text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/95 sm:mt-10 sm:text-xs md:text-[13px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Don&apos;t waste your prime time scrolling reels while others are scripting the
          future.
        </motion.p>

        <motion.div
          className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-12 sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          <Button
            asChild
            size="lg"
            className="h-12 border-0 bg-white/95 px-8 font-semibold tracking-wide text-slate-950 shadow-lg shadow-purple-500/20 hover:bg-white"
          >
            <a href="#courses">Explore courses</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-white/40 bg-transparent px-8 font-semibold tracking-wide text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <a href="#mission">Join waitlist</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 flex justify-center px-4 pb-10 pt-2 sm:pb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
      >
        <div className="max-w-3xl rounded-full border border-white/85 px-5 py-3.5 text-center text-[11px] font-medium leading-relaxed text-white/95 shadow-[0_0_40px_rgba(255,255,255,0.06)] sm:px-10 sm:text-sm">
          <span className="font-semibold tracking-wide">MISSION:</span> Empowering
          Nepal&apos;s youth to dominate the global tech scene. No more excuses. Just code.
        </div>
      </motion.div>
    </section>
  );
};

export default LunaverseHero;
