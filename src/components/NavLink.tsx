"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

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
