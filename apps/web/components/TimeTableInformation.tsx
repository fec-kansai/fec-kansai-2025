import { Button, Heading } from "@workspace/ui";

const TIME_TABLE_LINK = "https://fortee.jp/fec-kansai-2025/timetable";

export const TimeTableInformation = () => {
  return (
    <section id="timetable" className="flex flex-col gap-10 items-center">
      <Heading>タイムテーブル</Heading>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center my-0 md:mt-5 md:mb-10">
        <Button
          className="w-full sm:w-auto py-2.5 px-10"
          variant="neon-pink"
          asChild
        >
          <a href={TIME_TABLE_LINK} target="_blank" rel="noopener noreferrer">
            タイムテーブル
          </a>
        </Button>
      </div>
    </section>
  );
};
