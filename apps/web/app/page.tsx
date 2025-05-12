import DateAndVenue from "@/components/DateAndVenue";
import IgniteKansai from "@/components/IgniteKansai";
import MainVisual from "@/components/MainVisual";
import { SponsorInformation } from "@/components/SponsorInformation";
import {
  OctopusIcon,
  TakoyakiBoxIcon,
  TowerOfSunIcon,
  TsuutenkakuIcon,
} from "@workspace/ui";
import styles from "assets/css/neon.module.css";

export default function Page() {
  return (
    <main className="flex-1 relative overflow-hidden">
      <MainVisual />
      {/* icons */}
      <div className="md:inline hidden absolute left-[0%] top-[24%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
        <TsuutenkakuIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute left-[5%] top-[71%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
        <TowerOfSunIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[3%] top-[15%] w-[76px] md:w-[182px] animate-float5 -rotate-10 -z-10">
        <OctopusIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[8%] top-[57%] w-[76px] md:w-[182px] animate-float5 -rotate-20 -z-10">
        <TakoyakiBoxIcon className={styles["neon-icon"]} />
      </div>
      <div className="flex flex-col mx-4 md:mx-auto md:max-w-4xl border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl mt-10 mb-20 px-6 py-10  gap-20 bg-black/55 z-10">
        <IgniteKansai />
        <DateAndVenue />
        <SponsorInformation />
      </div>
    </main>
  );
}
