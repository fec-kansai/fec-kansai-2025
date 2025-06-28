"use client";
import {
  CssIcon,
  KaiyukanIcon,
  OctopusIcon,
  TakoyakiBoxIcon,
  TakoyakiIcon,
  TowerOfSunIcon,
  TsuutenkakuIcon,
} from "@workspace/ui";
import styles from "assets/css/neon.module.css";

export default function MainVisual() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      {/* ロゴ中央やや上配置 */}
      <img
        src="/logo_w.png"
        alt="Logo"
        className="w-[80%] max-w-120 lg:max-w-180 h-auto drop-shadow-xl justify-center items-center"
      />
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* 左下端：たこ焼きボックス */}
        <div className="absolute left-[5%] md:left-[10%] bottom-[-25%] md:bottom-[-25%] w-32 md:w-50 animate-float6 -rotate-10">
          <TakoyakiBoxIcon className={styles["neon-icon"]} />
        </div>
        {/* 左上端：海遊館 */}
        <div className="absolute left-[7%] md:left-[0%] top-[-20%] md:top-[-25%] w-30 md:w-58 animate-float1 rotate-20">
          <KaiyukanIcon className={styles["neon-icon"]} />
        </div>
        {/* 左上中央：CSS */}
        <div className="absolute left-[50%] md:left-[25%] top-[-2%] md:top-[-40%] w-24 md:w-48 animate-float2 -rotate-10">
          <CssIcon className={styles["neon-icon"]} />
        </div>
        {/* 中央上：タコ */}
        <div className="hidden md:block absolute left-[40%] top-[-23%] md:top-[-44%] w-19 md:w-38 animate-float5 -rotate-20">
          <OctopusIcon className={styles["neon-icon"]} />
        </div>
        {/* 右上端：通天閣 */}
        <div className="absolute right-[8%] bottom-[-30%] md:bottom-[-25%] w-19 md:w-38 animate-float4 -rotate-20">
          <TsuutenkakuIcon className={styles["neon-icon"]} />
        </div>
        {/* 右下端：太陽の塔 */}
        <div className="absolute right-[0%] md:right-[12%] top-[5%] md:top-[5%] w-26 md:w-48 animate-float5 rotate-20">
          <TowerOfSunIcon className={styles["neon-icon"]} />
        </div>
        {/* ミニたこ焼き1 */}
        <div className="absolute right-[20%] md:right-[10%] top-[25%] md:top-[14%] w-14 md:w-30 -rotate-10">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
        {/* ミニたこ焼き2 */}
        <div className="absolute left-[5%] md:left-[4%] top-[20%] md:top-[6%] w-14 md:w-30 -rotate-180">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
        {/* ミニたこ焼き3 */}
        <div className="absolute right-[30%] md:right-[35%] top-[-20%] md:top-[-36%] w-14 md:w-30 rotate-40">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
      </div>
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
