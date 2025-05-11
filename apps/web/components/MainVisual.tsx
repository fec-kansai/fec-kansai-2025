"use client";
import {
  KaiyukanIcon,
  OctopusIcon,
  TakoyakiBoxIcon,
  TakoyakiIcon,
  TowerOfSunIcon,
  TsuutenkakuIcon,
} from "@workspace/ui";
import { Logo } from "@workspace/ui/components/icons/ui/Logo";
import styles from "assets/css/neon.module.css";

// import { useEffect, useState } from "react";

// function getCountdown(targetDate: Date) {
//   const now = new Date();
//   const diff = targetDate.getTime() - now.getTime();
//   if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);
//   return { days, hours, minutes, seconds };
// }

export default function MainVisual() {
  //NOTE:開催日 2025年10月13日
  // const target = new Date("2025-10-13T10:00:00+09:00");
  // const [countdown, setCountdown] = useState(getCountdown(target));

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown(getCountdown(target));
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [target]);

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      {/* ロゴ中央やや上配置 */}
      <Logo className="md:w-[720px] w-[320px] h-auto drop-shadow-xl justify-center items-center" />
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* 左下端：たこ焼きボックス */}
        <div className="absolute left-[5%] md:left-[10%] bottom-[-35%] md:bottom-[-25%] w-[130px] md:w-[280px] animate-float6 -rotate-10">
          <TakoyakiBoxIcon className={styles["neon-icon"]} />
        </div>
        {/* 左上端：海遊館 */}
        <div className="absolute left-[7%] md:left-[9%] top-[-40%] md:top-[-25%] w-[120px] md:w-[262px] animate-float1 rotate-20">
          <KaiyukanIcon className={styles["neon-icon"]} />
        </div>
        {/* 中央上：タコ */}
        <div className="absolute left-[40%] top-[-43%] md:top-[-44%] w-[76px] md:w-[142px] animate-float5 -rotate-20">
          <OctopusIcon className={styles["neon-icon"]} />
        </div>
        {/* 右上端：通天閣 */}
        <div className="absolute right-[8%] md:right-[8%] bottom-[-20%] md:bottom-[-30%] w-[76px] md:w-[182px] animate-float4 -rotate-20">
          <TsuutenkakuIcon className={styles["neon-icon"]} />
        </div>
        {/* 右下端：太陽の塔 */}
        <div className="absolute right-[0%] md:right-[12%] top-[5%] md:top-[5%] w-[106px] md:w-[182px] animate-float5 rotate-20">
          <TowerOfSunIcon className={styles["neon-icon"]} />
        </div>
        {/* ミニたこ焼き1 */}
        <div className="absolute right-[20%] md:right-[10%] top-[25%] md:top-[14%] w-[56px] md:w-[122px] -rotate-10">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
        {/* ミニたこ焼き2 */}
        <div className="absolute left-[5%] md:left-[4%] top-[20%] md:top-[6%] w-[56px] md:w-[122px] -rotate-180">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
        {/* ミニたこ焼き3 */}
        <div className="absolute right-[30%] md:right-[35%] top-[-40%] md:top-[-36%] w-[56px] md:w-[122px] rotate-40">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
      </div>
      {/* カウントダウン */}
      {/* <div className="flex gap-4 z-10 mt-12">
        <CountdownBox value={countdown.days} label="日" />
        <CountdownBox value={countdown.hours} label="時間" />
        <CountdownBox value={countdown.minutes} label="分" />
        <CountdownBox value={countdown.seconds} label="秒" />
      </div> */}
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
                floodColor="#A855F7"
              />
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="6"
                floodColor="#A855F7"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}

//NOTE: unused?
// function CountdownBox({ value, label }: { value: number; label: string }) {
//   // 日付はそのまま、他は2桁0埋め
//   const displayValue =
//     label === "日" ? String(value) : String(value).padStart(2, "0");
//   return (
//     <div
//       className="flex flex-col items-center justify-center w-16 md:w-32 px-8 py-4 bg-black/80 border border-[rgba(168,85,247,0.3)] rounded-lg shadow-md backdrop-blur-sm"
//       style={{ boxShadow: "0 4px 16px 0 rgba(168,85,247,0.10)" }}
//     >
//       <span className="font-sans font-bold text-2xl md:text-3xl text-white tracking-widest select-none">
//         {displayValue}
//       </span>
//       <span className="font-sans text-xs md:text-sm text-[#9CA3AF] mt-1 select-none">
//         {label}
//       </span>
//     </div>
//   );
// }
