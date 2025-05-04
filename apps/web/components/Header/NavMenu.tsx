"use client";
import { Link } from "../Link";
import { getNavLinks } from "./getNavLinks";
import { getNavLinkClass } from "./navLinkStyle";

export function NavMenu() {
  const navLinks = getNavLinks();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li key={link.name} className="inline-block mr-4">
            <Link
              href={link.href}
              className={getNavLinkClass(link.isActive)}
              aria-current={link.isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
