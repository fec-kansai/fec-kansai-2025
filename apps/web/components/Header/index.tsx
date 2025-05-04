import { LogoHeader } from "@workspace/ui";
import { Link } from "../Link";
import { MobileNavMenu } from "./MobileNavMenu";
import { getNavLinkClass } from "./navLinkStyle";

const navLinks = [
  { name: "概要", href: "#", isActive: true },
  { name: "チケット", href: "#", isActive: false },
  { name: "スピーカー", href: "#", isActive: false },
  { name: "スケジュール", href: "#", isActive: false },
  { name: "スポンサー", href: "#", isActive: false },
  { name: "会場", href: "#", isActive: false },
];

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2 shadow-sm bg-zinc-900 text-white">
      <Link href="/">
        <LogoHeader
          width={180}
          height={37}
          aria-label="フロントエンドカンファレンス関西 2025のロゴ"
        />
      </Link>

      <MobileNavMenu navLinks={navLinks} />

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
    </header>
  );
}
