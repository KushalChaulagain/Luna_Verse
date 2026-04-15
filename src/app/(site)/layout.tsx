"use client";

import Starfield from "@/components/Starfield";
import BottomDock from "@/components/BottomDock";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-[calc(9rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(10rem+env(safe-area-inset-bottom,0px))]">
      <Starfield slideProgress={0} />
      <div className="relative z-10">{children}</div>
      <BottomDock />
    </div>
  );
}
