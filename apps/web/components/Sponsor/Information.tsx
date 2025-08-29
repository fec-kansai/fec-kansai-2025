import { Heading, Text } from "@workspace/ui";
import { SponsorCard } from "./card";

const INFORMATION_CONTENT =
  `フロントエンドカンファレンス関西では、共にイベントを盛り上げてくださるスポンサー企業様を募集しております。
協賛をご検討いただける皆さま向けに、イベントの概要やスポンサー特典、協賛プランなどをまとめた「スポンサー協賛資料」を公開しております。\r\n
ぜひご一読の上、ご検討いただけますと幸いです。
皆さまと共に、関西のコミュニティをさらに活性化できることを楽しみにしております。` as const;

function SponsorInformation() {
  return (
    <section id="sponsor" className="flex flex-col gap-6 items-center">
      <Heading>スポンサー</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <Heading variant="secondary" className="text-center">
        会場スポンサー
      </Heading>
      <div className="flex flex-wrap gap-6 justify-center">
        <SponsorCard
          href="https://careers.miidas.co.jp/tech/"
          imageSrc="/sponsors/miidas.webp"
          alt="ミイダス"
          size="venue-sponsor"
        />
      </div>
    </section>
  );
}

export { SponsorInformation };
