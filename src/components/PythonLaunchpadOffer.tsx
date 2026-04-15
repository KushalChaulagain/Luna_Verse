"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageCircle,
  MonitorPlay,
  Rocket,
  Users,
  Video,
} from "lucide-react";

const WA_DEFAULT = "9779861782755";

function enrollWhatsAppHref(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const waNumber = fromEnv || WA_DEFAULT;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi Lunaverse! I'd like to enroll in Python Launchpad  please share the next cohort dates and payment details.",
  )}`;
}

const learningOutcomes = [
  "Read and write Python with clear structure: functions, modules, and error handling you can explain to others.",
  "Work with real data files CSV/JSON, and simple REST APIs—without copy-pasting blindly.",
  "Automate repetitive tasks with scripts you can reuse at school, work, or your own projects.",
  "Ship three small but real projects: CLI tool, data/automation script, and a portfolio-ready capstone.",
  "Use Git and GitHub basics so your work is versioned, shareable, and employer-friendly.",
  "Debug methodically, read traceback and docs, and unblock yourself faster in a cohort setting.",
];

const curriculum = [
  {
    title: "Module 1 · Python foundations",
    duration: "Days 1–2",
    lessons: [
      "Setup, VS Code/Cursor, virtual environments, and running scripts",
      "Types, operators, strings, and control flow (loops & branches)",
      "Functions, scope, and writing readable small programs",
    ],
  },
  {
    title: "Module 2 · Data in the real world",
    duration: "Days 3–4",
    lessons: [
      "Lists, dicts, and structuring data for scripts",
      "Reading/writing files, CSV, and JSON",
      "Simple parsing, validation, and defensive coding habits",
    ],
  },
  {
    title: "Module 3 · APIs & integrations",
    duration: "Days 5–6",
    lessons: [
      "HTTP in plain language: requests, status codes, JSON responses",
      "Calling public APIs and handling errors gracefully",
      "Packaging a script into something others can run",
    ],
  },
  {
    title: "Module 4 · Projects & portfolio",
    duration: "Days 7–9",
    lessons: [
      "Project 1: CLI utility with clear UX and help text",
      "Project 2: automation or data workflow tied to your interests",
      "Project 3: capstone with README, demo, and stretch goals",
    ],
  },
  {
    title: "Module 5 · Ship & showcase",
    duration: "Day 10",
    lessons: [
      "Git workflow: commit, branch basics, pushing to GitHub",
      "README writing, screenshots, and how to present your work",
      "Roadmap: what to learn next (automation, web, interviews)",
    ],
  },
];

const requirements = [
  "No prior programming experience required—just willingness to practice daily.",
  "A laptop you can install Python and tools on (Windows, macOS, or Linux).",
  "Reliable internet for live sessions and uploads to GitHub.",
  "Roughly 2 hours/day outside class to finish exercises and project milestones.",
];

const included = [
  { icon: Video, label: "10 live sessions + session recordings" },
  { icon: MonitorPlay, label: "Starter templates & example repos" },
  { icon: Users, label: "Cohort Discord channel for questions" },
  { icon: MessageCircle, label: "Async feedback on project checkpoints" },
  { icon: Award, label: "Certificate of completion" },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PythonLaunchpadOffer() {
  const waHref = enrollWhatsAppHref();

  return (
    <section
      id="python-launchpad-offer"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] sm:scroll-mt-28 sm:px-6 sm:pb-16 min-w-0 overflow-x-hidden"
      aria-labelledby="python-launchpad-heading"
    >
      <Separator className="mb-8 sm:mb-12 bg-border/60" />

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_min(100%,340px)] lg:items-start lg:gap-12 min-w-0">
        <div className="order-2 min-w-0 lg:order-1">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fade}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90 mb-3">
              Flagship cohort
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary sm:h-11 sm:w-11">
                <Rocket className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h2
                id="python-launchpad-heading"
                className="text-[1.35rem] leading-snug sm:text-3xl font-bold tracking-tight text-foreground break-words min-w-0 flex-1"
              >
                Python Launchpad{" "}
                <span className="not-italic font-normal" aria-hidden>
                  🚀
                </span>
              </h2>
            </div>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-body mb-6">
              A 10-day intensive that takes you from zero to three shipped
              projects and a portfolio story you can show in
              interviews—structured like a serious online course, taught live
              with a cohort.
            </p>
            <ul className="flex flex-col gap-2 text-sm font-mono text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" aria-hidden />
                10 days · live cohort
              </li>
              <li className="flex items-center gap-2">
                <BookOpen
                  className="h-4 w-4 text-primary shrink-0"
                  aria-hidden
                />
                5 modules · 3 projects
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap
                  className="h-4 w-4 text-primary shrink-0"
                  aria-hidden
                />
                Beginner-friendly
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fade}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              What you&apos;ll learn
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {learningOutcomes.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-body"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-primary mt-0.5"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fade}
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Course content
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Expand each module to see topics
            </p>
            <Accordion
              type="single"
              collapsible
              className="glass-card rounded-2xl px-4 sm:px-5"
            >
              {curriculum.map((mod, i) => (
                <AccordionItem
                  key={mod.title}
                  value={`m-${i}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 w-full pr-2">
                      <span className="font-medium text-foreground break-words min-w-0">
                        {mod.title}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground shrink-0">
                        {mod.duration}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 border-l-2 border-primary/25 pl-4 ml-1">
                      {mod.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="text-sm text-body leading-relaxed"
                        >
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        <motion.aside
          className="order-1 min-w-0 lg:order-2 lg:sticky lg:top-28 lg:self-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
        >
          <div className="glass-card-elevated rounded-2xl p-5 sm:p-7 ring-1 ring-primary/20">
            <p className="font-mono text-[10px] uppercase tracking-wider text-primary mb-2">
              Open for enrollment
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
                NPR 1500
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Intro cohort pricing. Message us for payment options and upcoming
              start dates.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full font-semibold"
              asChild
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                Enroll via WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-center text-[11px] text-muted-foreground leading-snug">
              4.8/5 average rating · 500+ learners in the community
            </p>
            <Separator className="my-5 bg-border/50" />
            <ul className="space-y-2.5 text-xs text-body">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Full access to recordings for this cohort
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Project checkpoints & written feedback
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Certificate when you complete the track
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
