import { Button, Heading, Text } from "@workspace/ui";

const TIME_TABLE_CONTENT =
  `フロントエンドカンファレンス関西 2025 のタイムテーブルは、最新トレンドから実務に役立つ内容まで、多彩なセッションが揃っています。
オープニングは、Sakito さんによる基調講演からスタート。どんな話が飛び出すのか、今から楽しみです。

セッションの合間には交流やリフレッシュの時間も用意されており、他の参加者とのつながりも深められます。
タイムテーブルをチェックして、気になるセッションを見つけましょう！` as const;

const TIME_TABLE_LINK = "https://fortee.jp/fec-kansai-2025/timetable";

export const TimeTableInformation = () => {
  return (
    <section id="timetable" className="flex flex-col gap-10 items-center">
      <Heading>タイムテーブル</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {TIME_TABLE_CONTENT}
      </Text>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center my-0 md:mt-5 md:mb-10">
        <Button
          className="w-full sm:w-auto py-2.5 px-10"
          variant="neon-pink"
          asChild
        >
          <a href={TIME_TABLE_LINK} target="_blank" rel="noopener noreferrer">
            タイムテーブルを見る
          </a>
        </Button>
      </div>
    </section>
  );
};
