"use client";
import { usePathname } from "next/navigation";
import { Link } from "../Link";
import { getNavLinkClass, isCurrentPage } from "./navLinkStyle";

export function NavMenu({
  navLinks,
}: {
  navLinks: {
    name: string;
    href: string;
  }[];
}) {
  const currentPathname = usePathname();
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li key={link.name} className="inline-block mr-4">
            <Link
              href={link.href}
              className={getNavLinkClass(
                isCurrentPage(link.href, currentPathname),
              )}
              aria-current={
                isCurrentPage(link.href, currentPathname) ? "page" : undefined
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
