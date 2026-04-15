"use client";

import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import WaitlistForm from "./WaitlistForm";
import BottomDock from "./BottomDock";
import LunaverseHero from "./LunaverseHero";
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
      <LunaverseHero />

      <div className="relative z-10 flex justify-center px-4 pb-6">
        <motion.a
          href="#courses"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary text-xs font-mono uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70" aria-hidden />
        </motion.a>
      </div>

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
