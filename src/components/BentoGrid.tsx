"use client";

import { motion } from "framer-motion";
import { Rocket, Cog, Building2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Rocket,
    title: "Python Launchpad",
    titleEmoji: "🚀",
    description: "10-day intensive. Zero to code. Three shipped projects and a portfolio you can show.",
    status: "live" as const,
    span: "lg:col-span-2",
  },
  {
    icon: Cog,
    title: "The Automation Engine",
    titleEmoji: "⚙️",
    description: "Custom agents, scripts, and integrations—so repetitive work runs without you.",
    status: "coming" as const,
    eta: "30 days",
    span: "lg:col-span-1",
  },
  {
    icon: Building2,
    title: "Full-Stack Architect",
    titleEmoji: "🏗️",
    description: "Modern web stack, APIs, and deployment—build apps that scale with real users.",
    status: "coming" as const,
    eta: "60 days",
    span: "lg:col-span-1",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const BentoGrid = () => {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto scroll-mt-24 sm:scroll-mt-28" id="courses">
      <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90 mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Learning path
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The <span className="text-gradient">roadmap</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          One flagship cohort live today. Deeper tracks unlock as you level up—no noise, just the
          skills employers and founders actually use.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 auto-rows-fr"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {features.map((f) => {
          const isLive = f.status === "live";
          return (
            <motion.article
              key={f.title}
              className={[
                "glass-card rounded-2xl p-6 sm:p-8 flex flex-col min-h-[200px] relative overflow-hidden transition-shadow duration-300",
                "hover:shadow-lg hover:shadow-primary/5",
                f.span,
                isLive ? "ring-1 ring-primary/25" : "border-dashed border-muted-foreground/20",
              ].join(" ")}
              variants={item}
            >
              {!isLive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
              )}

              <div className="flex items-start justify-between gap-3 mb-5">
                <div
                  className={[
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                    isLive ? "bg-primary/15 text-primary" : "bg-muted/60 text-muted-foreground",
                  ].join(" ")}
                >
                  <f.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                {isLive ? (
                  <Badge className="font-mono text-[10px] uppercase tracking-wider bg-primary/20 text-primary hover:bg-primary/25 border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Enrolling
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="font-mono text-[10px] uppercase tracking-wider bg-muted/80 text-muted-foreground border-border/60"
                  >
                    Soon · {f.eta}
                  </Badge>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 tracking-tight">
                {f.title}{" "}
                <span className="not-italic" aria-hidden>
                  {f.titleEmoji}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.description}</p>

              {isLive && (
                <div className="mt-6 pt-5 border-t border-border/50 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-mono text-[11px] text-primary tracking-wide uppercase">
                    ● Open for enrollment
                  </span>
                  <a
                    href="#mission"
                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Reserve a seat
                  </a>
                </div>
              )}
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
