import type { Metadata } from "next";
import PythonLaunchpadOffer from "@/components/PythonLaunchpadOffer";

export const metadata: Metadata = {
  title: "Courses | lunaverse",
  description: "Learning path and course roadmap — Lunaverse.",
};

export default function CoursesPage() {
  return <PythonLaunchpadOffer />;
}
