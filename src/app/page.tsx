"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Starfield from "@/components/Starfield";
import PortalHero from "@/components/PortalHero";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalSlideProgress, setPortalSlideProgress] = useState(0);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield slideProgress={portalOpen ? 0 : portalSlideProgress} />
      <AnimatePresence>
        {!portalOpen && (
          <PortalHero
            onUnlock={() => setPortalOpen(true)}
            onSlideProgress={setPortalSlideProgress}
          />
        )}
      </AnimatePresence>
      {portalOpen && <MainContent />}
    </div>
  );
}
