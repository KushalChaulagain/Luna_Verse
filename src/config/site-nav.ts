import type { LucideIcon } from "lucide-react";
import { BookOpen, Home, Users } from "lucide-react";

export type SiteNavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SITE_NAV_ITEMS: SiteNavItem[] = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: BookOpen, label: "Courses", href: "/courses" },
  { icon: Users, label: "About us", href: "/about" },
];
