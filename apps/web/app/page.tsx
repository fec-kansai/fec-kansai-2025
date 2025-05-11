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
      <div className="md:inline hidden absolute left-[0%] top-[10%] w-[76px] md:w-[182px] animate-float5 rotate-20">
        <TsuutenkakuIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute left-[10%] top-[50%] w-[76px] md:w-[182px] animate-float5 rotate-20">
        <TowerOfSunIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[3%] top-[15%] w-[76px] md:w-[182px] animate-float5 -rotate-10">
        <OctopusIcon className={styles["neon-icon"]} />
      </div>
      <div className="md:inline hidden absolute right-[8%] top-[70%] w-[76px] md:w-[182px] animate-float5 -rotate-20">
        <TakoyakiBoxIcon className={styles["neon-icon"]} />
      </div>
      <div className="mx-auto md:w-[1200px] w-full border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl my-8 p-4 bg-black/55 z-10">
        <div className="my-8">
          <IgniteKansai />
        </div>
        <div className="my-8">
          <DateAndVenue />
        </div>
        <div className="my-8">
          <SponsorInformation />
        </div>
      </div>
    </main>
  );
}
