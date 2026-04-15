"use client";

import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import WaitlistForm from "./WaitlistForm";
import BottomDock from "./BottomDock";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const MainContent = () => {
  return (
    <motion.div
      className="relative z-10 min-h-screen pb-36 sm:pb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
    >
      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-16 sm:pt-20 pb-14 sm:pb-20 max-w-5xl mx-auto text-center">
        <motion.p
          className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/90 mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lunaverse · Nepal
        </motion.p>
        <motion.h1
          className="text-foreground text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
        >
          The algorithm wants your time.{" "}
          <span className="text-gradient block sm:inline mt-1 sm:mt-0">
            Python wants your freedom.
          </span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Where code meets community. Built for Nepal&apos;s next-gen builders—structured paths,
          real projects, and a crew that ships.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <Button
            asChild
            size="lg"
            className="h-12 px-8 font-semibold tracking-wide glow-cyan shadow-lg shadow-primary/15"
          >
            <a href="#courses">Explore courses</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 border-border/80 bg-background/40 backdrop-blur-sm hover:bg-muted/50">
            <a href="#mission">Join waitlist</a>
          </Button>
        </motion.div>

        <motion.a
          href="#courses"
          className="inline-flex flex-col items-center gap-2 mt-14 sm:mt-16 text-muted-foreground hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70" aria-hidden />
        </motion.a>
      </section>

      <BentoGrid />
      <WaitlistForm />

      <section
        id="profile"
        className="px-4 sm:px-6 pb-6 max-w-lg mx-auto text-center"
        aria-label="Student profile"
      >
        <p className="text-sm text-muted-foreground">
          <span className="font-mono text-xs text-foreground/80 uppercase tracking-wider">
            Student portal
          </span>{" "}
          — sign-in and progress tracking are on the way.
        </p>
      </section>

      <BottomDock />
    </motion.div>
  );
};

export default MainContent;
