import { Heading, Text } from "@workspace/ui";
import { SponsorCard } from "./card";

const INFORMATION_CONTENT =
  `8月 29日（金）をもちまして、スポンサー募集を終了いたしました。
ご応募いただいた企業の皆さま、誠にありがとうございます！
` as const;

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
