import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | lunaverse",
  description: "Student portal — sign-in and progress tracking are on the way.",
};

export default function ProfilePage() {
  return (
    <section
      id="profile"
      className="relative z-10 mx-auto flex min-h-[50svh] max-w-lg flex-col justify-center px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] pt-6 text-center sm:px-6 sm:pb-6"
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
