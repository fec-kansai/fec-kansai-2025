import { Button, Heading } from "@workspace/ui";

export const TimeTableInfomation = () => {
  return (
    <section id="timetable" className="flex flex-col gap-6 items-center">
      <Heading>タイムテーブル</Heading>
      <Button
        className="w-full sm:w-auto py-2.5 px-10"
        variant="neon-pink"
        asChild
      >
        <a
          href={"https://fortee.jp/fec-kansai-2025/timetable"}
          target="_blank"
          rel="noreferrer"
        >
          タイムテーブル
        </a>
      </Button>
    </section>
  );
};
