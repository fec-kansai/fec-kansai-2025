"use client";

import { usePathname } from "next/navigation";

const navLinks = [
  { name: "概要", href: "/" },
  { name: "チケット", href: "/tickets" },
  { name: "スピーカー", href: "/speakers" },
  { name: "スケジュール", href: "/schedule" },
  { name: "スポンサー", href: "/sponsors" },
  { name: "会場", href: "/venue" },
];

export function getNavLinks() {
  const pathname = usePathname();
  const navLinksisActive = navLinks.map((link) => ({
    ...link,
    isActive: pathname === link.href,
  }));

  return navLinksisActive;
}
