"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, Target, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: BookOpen, label: "Courses", href: "#courses" },
  { icon: Target, label: "Mission", href: "#mission" },
  { icon: User, label: "Profile", href: "#profile" },
];

const BottomDock = () => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 bg-gradient-to-t from-background/90 via-background/55 to-transparent"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      aria-label="Primary"
    >
      <div className="glass-card rounded-2xl px-2 sm:px-3 py-2 flex gap-0.5 sm:gap-1 shadow-2xl shadow-black/40 pointer-events-auto max-w-[min(100%,24rem)] mx-4 mb-4 border-border/40">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 min-w-[3.5rem] sm:min-w-[4rem] px-2 sm:px-3 py-2 rounded-xl hover:bg-muted/60 active:bg-muted/80 transition-colors group"
          >
            <item.icon
              className="w-5 h-5 text-muted-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors"
              strokeWidth={1.75}
            />
            <span className="font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition-colors tracking-wider">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomDock;
