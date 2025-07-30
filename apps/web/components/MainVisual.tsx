"use client";
import {
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JsIcon,
  KaiyukanIcon,
  LaravelIcon,
  OctopusIcon,
  PhpIcon,
  ReactIcon,
  TakoyakiBoxIcon,
  TakoyakiIcon,
  TowerOfSunIcon,
  TsuutenkakuIcon,
  VueIcon,
} from "@workspace/ui";
import styles from "assets/css/neon.module.css";

export default function MainVisual() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      {/* アイコンの基準となる固定サイズの親要素 */}
      <div className="relative w-[720px] h-[440px]">
        {/* ロゴ中央配置（レスポンシブサイズ） */}
        <img
          src="/logo_w.png"
          alt="Logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-180 h-auto drop-shadow-xl z-10"
        />

        {/* アイコン群 - 固定サイズの親要素を基準にした相対位置 */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 左下端：たこ焼きボックス */}
          <div className="absolute left-[27%] md:left-[-40%] bottom-[-90%] md:bottom-[-75%] w-32 md:w-40 animate-float6 -rotate-10">
            <TakoyakiBoxIcon className={styles["neon-icon"]} />
          </div>
          {/* 左上端：海遊館 */}
          <div className="absolute left-[30%] md:left-[-40%] top-[-90%] md:top-[-70%] w-30 md:w-48 animate-float1 rotate-20">
            <KaiyukanIcon className={styles["neon-icon"]} />
          </div>
          {/* 左上中央：CSS */}
          <div className="absolute left-[55%] md:left-[-5%] top-[-45%] md:top-[-75%] w-24 md:w-30 animate-float2 -rotate-10">
            <CssIcon className={styles["neon-icon"]} />
          </div>
          {/* 中央上：React */}
          <div className="absolute left-[25%] md:left-[40%] top-[-50%] md:top-[-60%] w-24 md:w-30 animate-float3 rotate-10">
            <ReactIcon className={styles["neon-icon"]} />
          </div>
          {/* 右上：Figma */}
          <div className="absolute right-[35%] md:right-[-14%] top-[-115%] md:top-[-85%] w-24 md:w-30 animate-float2 rotate-20">
            <FigmaIcon className={styles["neon-icon"]} />
          </div>
          {/* 左中央：HTML */}
          <div className="hidden md:block absolute left-[-30%] top-[-25%] w-19 md:w-30 animate-float5 -rotate-20">
            <HtmlIcon className={styles["neon-icon"]} />
          </div>
          {/* 左下：JS */}
          <div className="absolute left-[58%] md:left-[-8%] bottom-[-50%] md:bottom-[-63%] w-19 md:w-30 animate-float4 rotate-20">
            <JsIcon className={styles["neon-icon"]} />
          </div>
          {/* 下：PHP */}
          <div className="absolute left-[25%] md:left-[20%] bottom-[-75%] md:bottom-[-40%] w-19 md:w-38 animate-float5 -rotate-20">
            <PhpIcon className={styles["neon-icon"]} />
          </div>
          {/* 右下：Vue */}
          <div className="absolute right-[58%] md:right-[0%] top-[38%] md:top-[50%] w-19 md:w-38 animate-float4 -rotate-10">
            <VueIcon className={styles["neon-icon"]} />
          </div>
          {/* 右：Laravel */}
          <div className="absolute right-[26%] md:right-[-25%] top-[65%] md:top-[-10%] w-19 md:w-38 animate-float6 rotate-20">
            <LaravelIcon className={styles["neon-icon"]} />
          </div>
          {/* 中央上：タコ */}
          <div className="absolute left-[45%] md:left-[55%] top-[-8%] md:top-[10%] w-19 md:w-38 animate-float5 -rotate-20">
            <OctopusIcon className={styles["neon-icon"]} />
          </div>
          {/* 右上端：通天閣 */}
          <div className="absolute right-[25%] md:right-[-45%] bottom-[-80%] md:bottom-[-90%] w-19 md:w-38 animate-float4 -rotate-20">
            <TsuutenkakuIcon className={styles["neon-icon"]} />
          </div>
          {/* 右下端：太陽の塔 */}
          <div className="absolute right-[27%] md:right-[-40%] top-[-30%] md:top-[-35%] w-26 md:w-48 animate-float5 rotate-20">
            <TowerOfSunIcon className={styles["neon-icon"]} />
          </div>
          {/* ミニたこ焼き1 */}
          <div className="absolute left-[50%] md:left-[9%] top-[55%] md:top-[40%] w-14 md:w-20 -rotate-10">
            <TakoyakiIcon className={styles["neon-icon"]} />
          </div>
          {/* ミニたこ焼き2 */}
          <div className="absolute left-[27%] md:left-[-45%] top-[0%] md:top-[-40%] w-14 md:w-20 -rotate-180">
            <TakoyakiIcon className={styles["neon-icon"]} />
          </div>
          {/* ミニたこ焼き3 */}
          <div className="absolute right-[43%] md:right-[17%] top-[-70%] md:top-[-75%] w-14 md:w-20 rotate-40">
            <TakoyakiIcon className={styles["neon-icon"]} />
          </div>
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
