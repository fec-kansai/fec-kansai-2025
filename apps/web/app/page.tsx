import DateAndVenue from "@/components/DateAndVenue";
import IgniteKansai from "@/components/IgniteKansai";
import MainVisual from "@/components/MainVisual";
import { SponsorInformation } from "@/components/SponsorInformation";
import {
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JsIcon,
  LaravelIcon,
  OctopusIcon,
  PhpIcon,
  ReactIcon,
  TakoyakiIcon,
  TsuutenkakuIcon,
  VueIcon,
} from "@workspace/ui";
import styles from "assets/css/neon.module.css";

export default function Page() {
  return (
    <main className="flex-1 relative overflow-hidden">
      <MainVisual />
      <div className="relative flex flex-col mx-4 md:mx-auto md:max-w-4xl border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl mt-10 mb-20 px-6 py-10  gap-20 bg-black/55 z-10">
        {/* icons */}
        <div className="md:inline hidden absolute left-[-30%] top-[15%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
          <TsuutenkakuIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute left-[-31%] top-[84%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
          <PhpIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-29.5%] top-[4.5%] w-[76px] md:w-[182px] animate-float5 -rotate-350 -z-10">
          <OctopusIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-31%] top-[47%] w-[76px] md:w-[182px] animate-float5 -rotate-20 -z-10">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute left-[-27.5%] top-[4.55%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
          <CssIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute left-[-28%] top-[15%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
          <HtmlIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute left-[-28%] top-[57.5%] w-[76px] md:w-[182px] animate-float5 rotate-350 -z-10">
          <FigmaIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-26%] top-[-2%] w-[76px] md:w-[182px] animate-float5 rotate-0 -z-10">
          <ReactIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-25%] top-[27%] w-[76px] md:w-[182px] animate-float5 rotate-350 -z-10">
          <JsIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-25%] top-[68%] w-[76px] md:w-[182px] animate-float5 rotate-10 -z-10">
          <VueIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-29%] top-[81%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
          <LaravelIcon className={styles["neon-icon"]} />
        </div>
        <IgniteKansai />
        <DateAndVenue />
        <SponsorInformation />
      </div>
    </main>
  );
}
