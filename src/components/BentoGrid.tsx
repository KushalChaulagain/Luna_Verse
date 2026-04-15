"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Cog, Building2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Python Launchpad",
    titleEmoji: "🚀",
    description:
      "Zero → shipped projects in 10 days: Python, automation, APIs, and a portfolio you can demo.",
    status: "live" as const,
    icon: Rocket,
    span: "lg:col-span-2",
  },
  {
    title: "Automation & data tracks",
    titleEmoji: "⚙️",
    description:
      "Deeper workflows around scraping, scheduling, and data pipelines—after Launchpad.",
    status: "soon" as const,
    eta: "Next",
    icon: Cog,
    span: "",
  },
  {
    title: "Founder stack lab",
    titleEmoji: "🏢",
    description:
      "Ship small products end-to-end: APIs, lightweight backends, and deployment basics.",
    status: "soon" as const,
    eta: "2026",
    icon: Building2,
    span: "",
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
    <section
      className="mx-auto max-w-5xl scroll-mt-24 px-4 pt-5 pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] sm:scroll-mt-28 sm:px-6 sm:pt-10 sm:pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))]"
      id="courses"
    >
      <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-0.5">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90 mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Learning path
        </motion.p>
        <motion.h2
          className="text-[1.65rem] leading-tight sm:text-4xl font-bold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The <span className="text-gradient">roadmap</span>
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg font-medium leading-[1.5] text-body"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          One flagship cohort live today. Deeper tracks unlock as you level up. No noise, just the
          skills employers and founders actually use.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 auto-rows-fr min-w-0"
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
                "glass-card-elevated rounded-2xl p-5 sm:p-8 flex flex-col min-h-[180px] sm:min-h-[200px] relative overflow-hidden transition-shadow duration-300",
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
                  <Badge className="font-mono font-medium text-[10px] uppercase tracking-wider bg-primary/20 text-primary hover:bg-primary/25 border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Enrolling
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="font-mono font-medium text-[10px] uppercase tracking-wider bg-muted/80 text-muted-foreground border-border/60"
                  >
                    Soon · {f.eta}
                  </Badge>
                )}
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2 tracking-tight break-words">
                {f.title}{" "}
                <span className="not-italic" aria-hidden>
                  {f.titleEmoji}
                </span>
              </h3>
              <p className="text-base font-medium leading-[1.5] text-body flex-1">{f.description}</p>

              {isLive && (
                <div className="mt-6 pt-5 border-t border-border/50 flex flex-col gap-4">
                  <p className="text-sm font-medium leading-relaxed text-body/95 text-center sm:text-left">
                    <span className="text-foreground">4.8/5</span> average rating · Join{" "}
                    <span className="text-foreground">500+</span> learners
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono font-medium text-[11px] text-primary tracking-wide uppercase">
                      ● Open for enrollment
                    </span>
                    <Link
                      href="#python-launchpad-offer"
                      className="text-sm font-medium text-primary hover:underline underline-offset-4 text-center sm:text-right"
                    >
                      Full syllabus &amp; offer →
                    </Link>
                  </div>
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
