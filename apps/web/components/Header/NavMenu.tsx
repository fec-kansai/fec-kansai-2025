"use client";
import { HashLink } from "../Link";
import { getNavLinkClass, isCurrentPage } from "./navLinkStyle";
import { useAnchorLink } from "./useAnchorLink";

export function NavMenu({
  navLinks,
}: {
  navLinks: {
    name: string;
    href: string;
  }[];
}) {
  const currentPathname = useAnchorLink();
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li key={link.name} className="inline-block mr-4">
            <HashLink
              href={link.href}
              className={getNavLinkClass(
                isCurrentPage(link.href, currentPathname),
              )}
              aria-current={
                isCurrentPage(link.href, currentPathname) ? "page" : undefined
              }
            >
              {link.name}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
