"use client";
import { Link } from "../Link";
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
  console.log("currentPathname", currentPathname);

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
