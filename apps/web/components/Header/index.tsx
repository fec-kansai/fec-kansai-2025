import { LogoHeader } from "@workspace/ui";
import { Link } from "../Link";

// const navLinks = [
//   { name: "概要", href: "#ignite-kansai" },
//   // { name: "チケット", href: "/tickets" },
//   // { name: "スピーカー", href: "/speakers" },
//   { name: "開催日程", href: "#schedule" },
//   { name: "スポンサー", href: "#sponsors" },
//   // { name: "会場", href: "/venue" },
// ];

export default function Header() {
  return (
    <header className="w-full flex md:justify-between justify-center items-center px-4 py-2 shadow-sm bg-zinc-900 text-white sticky top-0 z-50">
      <Link
        href="/"
        aria-label="フロントエンドカンファレンス関西2025 トップページ"
      >
        <LogoHeader width={180} height={37} />
      </Link>

      {/* <MobileNavMenu navLinks={navLinks} />

      <NavMenu navLinks={navLinks} /> */}
    </header>
  );
}
