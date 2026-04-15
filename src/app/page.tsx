"use client";

import { useState } from "react";
import Starfield from "@/components/Starfield";
import PortalHero from "@/components/PortalHero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [portalSlideProgress, setPortalSlideProgress] = useState(0);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield slideProgress={portalSlideProgress} />
      <PortalHero
        onUnlock={() => router.push("/home")}
        onSlideProgress={setPortalSlideProgress}
      />
    </div>
  );
}
