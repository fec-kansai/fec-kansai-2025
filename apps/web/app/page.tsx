import DateAndVenue from "@/components/DateAndVenue";
import IgniteKansai from "@/components/IgniteKansai";
import MainVisual from "@/components/MainVisual";
import { ProposalInformation } from "@/components/ProposalInformation";
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
      {/* icons */}
      <div className="md:inline hidden absolute left-[0%] top-[30%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
        <TsuutenkakuIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute left-[0%] top-[85%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
        <PhpIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[1%] top-[25%] w-[76px] md:w-[182px] animate-float5 -rotate-350 -z-10">
        <OctopusIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[0%] top-[57%] w-[76px] md:w-[182px] animate-float5 -rotate-20 -z-10">
        <TakoyakiIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute left-[2%] top-[25%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
        <CssIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute left-[2%] top-[33%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
        <HtmlIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute left-[2%] top-[65%] w-[76px] md:w-[182px] animate-float5 rotate-350 -z-10">
        <FigmaIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[3%] top-[20%] w-[76px] md:w-[182px] animate-float5 rotate-0 -z-10">
        <ReactIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[4%] top-[42%] w-[76px] md:w-[182px] animate-float5 rotate-350 -z-10">
        <JsIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[4%] top-[73%] w-[76px] md:w-[182px] animate-float5 rotate-10 -z-10">
        <VueIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[1%] top-[83%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
        <LaravelIcon className={styles["neon-icon"]} />
      </div>
      <div className="flex flex-col mx-4 md:mx-auto md:max-w-4xl border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl mt-10 mb-20 px-6 py-10  gap-20 bg-black/55 z-10">
        <IgniteKansai />
        <DateAndVenue />
        <ProposalInformation />
        <SponsorInformation />
      </div>
    </main>
  );
}
