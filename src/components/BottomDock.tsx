"use client";

import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { SITE_NAV_ITEMS } from "@/config/site-nav";
import { cn } from "@/lib/utils";

const BottomDock = () => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 bg-gradient-to-t from-background/90 via-background/55 to-transparent md:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      aria-label="Primary"
    >
      <div className="glass-card rounded-2xl px-1.5 sm:px-3 py-2 flex gap-0 sm:gap-1 shadow-2xl shadow-black/40 pointer-events-auto w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,24rem)] mx-3 sm:mx-4 mb-[max(0.75rem,env(safe-area-inset-bottom))] border-border/40">
        {SITE_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            className={cn(
              "group relative flex flex-1 flex-col items-center justify-center gap-0.5 sm:gap-1 min-w-[44px] min-h-[48px] sm:min-h-[52px] sm:min-w-[4rem] px-1.5 sm:px-3 py-2 rounded-xl border-b-2 border-transparent transition-colors",
              "hover:bg-muted/60 active:bg-muted/80",
            )}
            activeClassName="bg-muted/70 border-primary"
          >
            <item.icon
              className="h-6 w-6 sm:h-7 sm:w-7 text-foreground/70 group-hover:text-primary group-focus-visible:text-primary transition-colors group-data-[active=true]:text-primary"
              strokeWidth={1.75}
            />
            <span className="font-mono text-[11px] sm:text-xs text-foreground/85 group-hover:text-foreground transition-colors tracking-wide truncate max-w-full group-data-[active=true]:text-primary group-data-[active=true]:font-semibold">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomDock;
