import DateAndVenue from "@/components/DateAndVenue";
import IgniteKansai from "@/components/IgniteKansai";
import MainVisual from "@/components/MainVisual";
import { SponsorInformation } from "@/components/SponsorInformation";
export default function Page() {
  return (
    <main className="flex-1">
      <MainVisual />
      <div className="">
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
