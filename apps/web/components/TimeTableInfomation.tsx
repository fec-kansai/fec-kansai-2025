import { Button, Heading } from "@workspace/ui";

const TIME_TABLE_LINK = "https://fortee.jp/fec-kansai-2025/timetable";

export const TimeTableInfomation = () => {
  return (
    <section id="timetable" className="flex flex-col gap-10 items-center">
      <Heading>タイムテーブル</Heading>
      <Button
        className="w-full sm:w-auto py-2.5 px-10"
        variant="neon-pink"
        asChild
      >
        <a href={TIME_TABLE_LINK} target="_blank" rel="noreferrer">
          タイムテーブル
        </a>
      </Button>
    </section>
  );
};
