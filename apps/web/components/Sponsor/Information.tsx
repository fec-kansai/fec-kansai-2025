import { Button, Heading, Text } from "@workspace/ui";
import { SponsorCard } from "./card";

const INFORMATION_CONTENT =
  `フロントエンドカンファレンス関西では、共にイベントを盛り上げてくださるスポンサー企業様を募集しております。
協賛をご検討いただける皆さま向けに、イベントの概要やスポンサー特典、協賛プランなどをまとめた「スポンサー協賛資料」を公開しております。\r\n
ぜひご一読の上、ご検討いただけますと幸いです。
皆さまと共に、関西のコミュニティをさらに活性化できることを楽しみにしております。` as const;

interface SponsorInformationProps {
  docsLink: string;
  formLink: string;
  isExpired?: boolean;
}

function SponsorInformation({
  docsLink,
  formLink,
  isExpired,
}: SponsorInformationProps) {
  return (
    <section id="sponsor" className="flex flex-col gap-6 items-center">
      <Heading>スポンサー</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center my-0 md:mt-3 md:mb-10">
        <Button
          disabled={isExpired}
          className="w-full sm:w-auto"
          variant="neon-red"
          asChild
        >
          <a href={docsLink} target="_blank" rel="noreferrer">
            スポンサー協賛資料
          </a>
        </Button>
        <Button
          disabled={isExpired}
          className="w-full sm:w-auto"
          variant="neon-pink"
          asChild
        >
          <a href={formLink} target="_blank" rel="noreferrer">
            スポンサー募集フォーム
          </a>
        </Button>
      </div>
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
