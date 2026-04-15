import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Mission | lunaverse",
  description: "Join the waitlist and the Lunaverse mission.",
};

export default function MissionPage() {
  return <WaitlistForm />;
}
