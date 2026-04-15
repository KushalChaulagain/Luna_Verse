import type { Metadata } from "next";
import BentoGrid from "@/components/BentoGrid";

export const metadata: Metadata = {
  title: "Courses | lunaverse",
  description: "Learning path and course roadmap — Lunaverse.",
};

export default function CoursesPage() {
  return <BentoGrid />;
}
