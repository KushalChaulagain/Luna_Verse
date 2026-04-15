import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | lunaverse",
  description: "Student portal — sign-in and progress tracking are on the way.",
};

export default function ProfilePage() {
  return (
    <section
      id="profile"
      className="relative z-10 min-h-[50svh] flex flex-col justify-center px-4 sm:px-6 pb-6 max-w-lg mx-auto text-center"
      aria-label="Student profile"
    >
      <p className="text-sm text-muted-foreground">
        <span className="font-mono text-xs text-foreground/80 uppercase tracking-wider">
          Student portal
        </span>{" "}
        — sign-in and progress tracking are on the way.
      </p>
    </section>
  );
}
