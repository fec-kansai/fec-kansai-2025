import {
  SPONSORS,
  SPONSOR_BASIC_PLANS,
  SPONSOR_OPTION_PLANS,
} from "@/consts/sponsors";
import { Heading, Text } from "@workspace/ui";
import { SponsorCard } from "./card";

const INFORMATION_CONTENT =
  `8月 29日（金）をもちまして、スポンサー募集を終了いたしました。
ご応募いただいた企業の皆さま、誠にありがとうございます！
` as const;

// 定義済み定数（SPONSORS）から各セクションの表示対象を抽出
const venueSponsors = SPONSORS.filter(
  (s) => s.basicPlan === SPONSOR_BASIC_PLANS.VENUE,
);

const osakaMaidoSponsors = SPONSORS.filter(
  (s) => s.basicPlan === SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
);

const miniTakoyakiSponsors = SPONSORS.filter(
  (s) => s.basicPlan === SPONSOR_BASIC_PLANS.MINI_TAKOYAKI,
);

const namingRightsSponsors = SPONSORS.filter(
  (s) => s.optionPlan === SPONSOR_OPTION_PLANS.NAME_RIGHTS,
);

const nameCardSponsors = SPONSORS.filter(
  (s) => s.optionPlan === SPONSOR_OPTION_PLANS.NAME_CARD,
);

const studentSupportSponsors = SPONSORS.filter(
  (s) => s.optionPlan === SPONSOR_OPTION_PLANS.STUDENT,
);

function OfficialSponsorInformation() {
  return (
    <section id="official-sponsor" className="flex flex-col gap-6 items-center">
      <Heading>スポンサー</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <div>
        <Heading variant="gold" className="text-center my-6">
          会場スポンサー
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {venueSponsors.map((s) => (
            <SponsorCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              imageSrc={s.image}
              alt={s.name}
              size="venue-sponsor"
              imgClassName={s.imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="silver" className="text-center my-6">
          おおさかまいど
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {osakaMaidoSponsors.map((s) => (
            <SponsorCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              imageSrc={s.image}
              alt={s.name}
              size="osaka-maido-gold"
              imgClassName={s.imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="bronze" className="text-center my-6">
          ミニたこやき
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {miniTakoyakiSponsors.map((s) => (
            <SponsorCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              imageSrc={s.image}
              alt={s.name}
              size="mini-takoyaki-silver"
              imgClassName={s.imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="accent" className="text-center my-6">
          ネーミングライツ
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {namingRightsSponsors.map((s) => (
            <SponsorCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              imageSrc={s.image}
              alt={s.name}
              size="mini-takoyaki-silver"
              imgClassName={s.imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="accent" className="text-center my-6">
          ネームカード
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {nameCardSponsors.map((s) => (
            <SponsorCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              imageSrc={s.image}
              alt={s.name}
              size="mini-takoyaki-silver"
              imgClassName={s.imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="accent" className="text-center my-6">
          学生支援
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {studentSupportSponsors.map((s) => (
            <SponsorCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              imageSrc={s.image}
              alt={s.name}
              size="osaka-maido-gold"
              imgClassName={s.imgClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { OfficialSponsorInformation };
