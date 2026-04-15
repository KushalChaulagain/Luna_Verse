"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WarpEffect from "./WarpEffect";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [warping, setWarping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleDiscord = () => {
    setWarping(true);
    setTimeout(() => {
      window.open("https://discord.gg/lunaverse", "_blank");
      setWarping(false);
    }, 1500);
  };

  return (
    <>
      {warping && <WarpEffect />}
      <section
        className="px-4 sm:px-6 py-16 sm:py-24 max-w-xl mx-auto text-center scroll-mt-28"
        id="mission"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90 mb-3">
                Mission
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3">
                Join the <span className="text-gradient">waitlist</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
                Be the first in line. Limited seats for the Python Launchpad cohort.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-muted/50 border-border font-mono text-sm h-12"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-6 font-semibold tracking-wide glow-cyan glow-cyan-pulse shrink-0"
                >
                  Get notified
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-8"
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3">
                You&apos;re on the list
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                We&apos;ll email you before doors open. Jump into Discord now to meet the community.
              </p>
              <Button
                onClick={handleDiscord}
                className="font-semibold tracking-wide glow-cyan glow-cyan-pulse px-8 h-12"
              >
                Join Discord
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default WaitlistForm;
