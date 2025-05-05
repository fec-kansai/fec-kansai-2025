import { LogoHeader } from "@workspace/ui";
import { Link } from "../Link";
import { MobileNavMenu } from "./MobileNavMenu";
import { NavMenu } from "./NavMenu";

const navLinks = [
  { name: "概要", href: "/" },
  // { name: "チケット", href: "/tickets" },
  // { name: "スピーカー", href: "/speakers" },
  { name: "スケジュール", href: "#schedule" },
  { name: "スポンサー", href: "#sponsors" },
  // { name: "会場", href: "/venue" },
];

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2 shadow-sm bg-zinc-900 text-white">
      <Link
        href="/"
        aria-label="フロントエンドカンファレンス関西2025 トップページ"
      >
        <LogoHeader width={180} height={37} />
      </Link>

      <MobileNavMenu navLinks={navLinks} />

      <NavMenu navLinks={navLinks} />
    </header>
  );
}
