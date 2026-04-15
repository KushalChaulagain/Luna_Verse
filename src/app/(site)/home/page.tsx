import type { Metadata } from "next";
import LunaverseHero from "@/components/LunaverseHero";

export const metadata: Metadata = {
  title: "Home | lunaverse",
  description: "Where code meets community. Built for Nepal's next-gen builders.",
};

export default function HomePage() {
  return <LunaverseHero />;
}
