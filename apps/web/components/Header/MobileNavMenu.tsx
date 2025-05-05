"use client";
import { cn } from "@workspace/ui/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link } from "../Link";
import { getNavLinkClass, isCurrentPage } from "./navLinkStyle";

export function MobileNavMenu({
  navLinks,
}: {
  navLinks: {
    name: string;
    href: string;
  }[];
}) {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="block lg:hidden p-2"
        onClick={() => setIsMenuOpen(true)}
        aria-expanded={isMenuOpen}
        aria-label="サイドバーを開く"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 h-auto w-[150px] bg-black p-4 z-50 transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        inert={!isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="absolute top-2 right-4 p-2 w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
          aria-label="サイドバーを閉じる"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <nav>
          <ul className="mt-12 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={getNavLinkClass(
                    isCurrentPage(link.href, pathName),
                  )}
                  aria-current={
                    isCurrentPage(link.href, pathName) ? "page" : undefined
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
