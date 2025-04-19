"use client";
import { useEffect, useState } from "react";

function getCountdown(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function MainVisual() {
  // 仮の開催日: 2025-08-22 10:00:00
  const target = new Date("2025-08-22T10:00:00+09:00");
  const [countdown, setCountdown] = useState(getCountdown(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <section
      className="relative w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "64px" }} // ヘッダー分の余白を上部に確保
    >
      {/* メインビジュアル背景画像（フルサイズ・透過なし） */}
      <img
        src="/mainvisual-bg.png"
        alt="メインビジュアル背景"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* カウントダウンをさらに下に配置 */}
      <div className="flex gap-4 z-10 mt-32 md:mt-90">
        <CountdownBox value={countdown.days} label="日" />
        <CountdownBox value={countdown.hours} label="時間" />
        <CountdownBox value={countdown.minutes} label="分" />
        <CountdownBox value={countdown.seconds} label="秒" />
      </div>
      {/* スクロールダウンコンテンツ（ネオン風アニメーション・下部に配置） */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 mb-6">
        <span className="text-white text-base md:text-lg font-medium mb-1">
          Scroll Down
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="下向き矢印"
        >
          <title>下向き矢印</title>
          <polygon
            className="neon-flicker"
            points="12,18 6,10 18,10"
            fill="#A855F7"
            filter="url(#neon)"
          />
          <defs>
            <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2"
                flood-color="#A855F7"
              />
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="6"
                flood-color="#A855F7"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <style jsx global>{`
        .neon-flicker {
          animation: neon-flicker 4.5s infinite alternate;
        }
        @keyframes neon-flicker {
          0% { opacity: 1; filter: drop-shadow(0 0 6px #A855F7) drop-shadow(0 0 12px #A855F7); }
          10% { opacity: 0.7; filter: drop-shadow(0 0 8px #A855F7); }
          20% { opacity: 1; filter: drop-shadow(0 0 10px #A855F7); }
          30% { opacity: 0.8; filter: drop-shadow(0 0 6px #A855F7); }
          40% { opacity: 1; filter: drop-shadow(0 0 16px #A855F7); }
          50% { opacity: 0.6; filter: drop-shadow(0 0 8px #A855F7); }
          60% { opacity: 1; filter: drop-shadow(0 0 12px #A855F7); }
          70% { opacity: 0.7; filter: drop-shadow(0 0 6px #A855F7); }
          80% { opacity: 1; filter: drop-shadow(0 0 18px #A855F7); }
          90% { opacity: 0.8; filter: drop-shadow(0 0 8px #A855F7); }
          100% { opacity: 1; filter: drop-shadow(0 0 12px #A855F7); }
        }
      `}</style>
    </section>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  // 日付はそのまま、他は2桁0埋め
  const displayValue =
    label === "日" ? String(value) : String(value).padStart(2, "0");
  return (
    <div
      className="flex flex-col items-center justify-center w-32 px-8 py-4 bg-black/80 border border-[rgba(168,85,247,0.3)] rounded-lg shadow-md backdrop-blur-sm"
      style={{ boxShadow: "0 4px 16px 0 rgba(168,85,247,0.10)" }}
    >
      <span className="font-sans font-bold text-2xl md:text-3xl text-white tracking-widest select-none">
        {displayValue}
      </span>
      <span className="font-sans text-xs md:text-sm text-[#9CA3AF] mt-1 select-none">
        {label}
      </span>
    </div>
  );
}
