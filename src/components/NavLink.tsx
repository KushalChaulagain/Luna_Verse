"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useLayoutEffect, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
};

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function hrefToPath(href: NavLinkProps["href"]): string {
  if (typeof href === "string") {
    const noQuery = href.split("?")[0] ?? href;
    const noHash = noQuery.split("#")[0] ?? noQuery;
    return normalizePath(noHash);
  }
  if (href && typeof href === "object" && "pathname" in href && typeof href.pathname === "string") {
    return normalizePath(href.pathname);
  }
  return "";
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
      setMounted(true);
    }, []);

    const path = hrefToPath(href);
    const isActive =
      mounted && path !== "" && normalizePath(pathname ?? "") === path;

    return (
      <Link
        ref={ref}
        href={href}
        data-active={isActive ? "true" : undefined}
        aria-current={isActive ? "page" : undefined}
        {...props}
        className={cn(className, isActive && activeClassName)}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
