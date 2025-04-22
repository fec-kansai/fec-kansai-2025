import { LogoHeader } from "@workspace/ui";
import { Button } from "@workspace/ui/components/button";

const navLinks = [
  { label: "概要", href: "#about" },
  { label: "チケット", href: "#ticket" },
  { label: "スピーカー", href: "#speakers" },
  { label: "スケジュール", href: "#schedule" },
  { label: "スポンサー", href: "#sponsors" },
  { label: "会場", href: "#venue" },
];

export default function Header() {
  return (
    <header className="w-full bg-black/50 border-b border-purple-300/20 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* ロゴ画像 */}
        <LogoHeader className="w-50 md:h-8 h-10" />
        {/* ナビゲーション */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* チケット購入ボタン */}
        <div className="ml-4">
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md rounded-md px-4 py-2"
          >
            チケット購入
          </Button>
        </div>
      </div>
    </header>
  );
}
