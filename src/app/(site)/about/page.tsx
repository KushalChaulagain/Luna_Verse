import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | lunaverse",
  description:
    "Lunaverse teaches Python through hands-on projects and community. Built for learners in Nepal and anyone ready to ship real work.",
};

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-2xl scroll-mt-24 px-4 pt-12 pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] text-center sm:scroll-mt-28 sm:px-6 sm:py-24 sm:text-left"
      aria-label="About Lunaverse"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90 mb-3">
        About us
      </p>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-6">
        Where code meets <span className="text-gradient">community</span>
      </h1>
      <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          Lunaverse is a learning space focused on Python projects you can show, not endless theory.
          We combine structured cohorts with a supportive community so you build habits, ship work,
          and grow with peers who care about getting better at the craft.
        </p>
        <p>
          Our flagship path starts with Python Launchpad: a short, intensive runway from zero to
          real projects and a portfolio piece you can share. Deeper tracks on automation and
          full-stack development unlock as you level up.
        </p>
        <p>
          We are built with Nepal&apos;s next-gen builders in mind. Accessible pricing, clear
          outcomes, and teaching that respects your time. Whether you are switching careers or
          leveling up, we are here to help you move from &quot;I studied&quot; to &quot;I shipped.&quot;
        </p>
      </div>
      <ul className="mt-10 text-left glass-card rounded-2xl p-6 sm:p-8 space-y-3 text-sm sm:text-base text-body">
        <li className="flex gap-3">
          <span className="text-primary font-mono text-xs shrink-0 mt-0.5">01</span>
          <span>
            <span className="font-medium text-foreground">Project-first.</span> Lessons tie to
            builds you can demo. Not only exercises in isolation.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-mono text-xs shrink-0 mt-0.5">02</span>
          <span>
            <span className="font-medium text-foreground">Community-backed.</span> Learn alongside
            others, share wins, and get unstuck faster.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-mono text-xs shrink-0 mt-0.5">03</span>
          <span>
            <span className="font-medium text-foreground">Roadmap you can trust.</span> One clear
            path now; advanced tracks roll out as you grow.
          </span>
        </li>
      </ul>
    </section>
  );
}
