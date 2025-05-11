import DateAndVenue from "@/components/DateAndVenue";
import IgniteKansai from "@/components/IgniteKansai";
import MainVisual from "@/components/MainVisual";
import { SponsorInformation } from "@/components/SponsorInformation";
export default function Page() {
  return (
    <main className="flex-1">
      <MainVisual />
      <div className="mx-auto md:w-[1200px] w-full border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl my-8 p-4 bg-black/55">
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
