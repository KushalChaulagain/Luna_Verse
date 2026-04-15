"use client";

import BottomDock from "@/components/BottomDock";
import SiteHeader from "@/components/SiteHeader";
import Starfield from "@/components/Starfield";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-0 max-md:pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))]">
      <Starfield slideProgress={0} />
      <SiteHeader />
      <div className="relative z-10 pt-[calc(3.5rem+env(safe-area-inset-top,0px))]">
        {children}
      </div>
      <BottomDock />
    </div>
  );
}
