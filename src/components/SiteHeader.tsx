"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { SITE_NAV_ITEMS } from "@/config/site-nav";
import { cn } from "@/lib/utils";

const SiteHeader = () => {
  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex h-[calc(3.5rem+env(safe-area-inset-top,0px))] items-center justify-between gap-4 border-b border-border/30 px-4 pt-[env(safe-area-inset-top,0px)] sm:px-6",
        "glass-card rounded-none border-x-0 border-t-0",
      )}
    >
      <Link
        href="/home"
        className="flex shrink-0 items-center gap-2 rounded-md outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          src="/final_logo.png"
          alt="Lunaverse"
          width={44}
          height={44}
          className="h-9 w-9 select-none object-contain sm:h-10 sm:w-10"
          unoptimized
          priority
        />
        <span className="font-sans text-sm font-semibold tracking-tight text-foreground sm:text-base">
          Lunaverse
        </span>
      </Link>
      <nav
        className="hidden items-center gap-1 sm:gap-2 md:flex"
        aria-label="Primary"
      >
        {SITE_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "flex items-center gap-1.5 sm:px-3",
            )}
            activeClassName="bg-muted/70 text-primary"
          >
            <item.icon className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
