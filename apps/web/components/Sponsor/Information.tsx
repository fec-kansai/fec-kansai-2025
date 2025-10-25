import { Heading, Text } from "@workspace/ui";
import { SponsorCard } from "./card";

const INFORMATION_CONTENT =
  `8月 29日（金）をもちまして、スポンサー募集を終了いたしました。
ご応募いただいた企業の皆さま、誠にありがとうございます！
` as const;

const maidoGold = [
  {
    id: "line-yahoo",
    href: "/sponsors/line-yahoo",
    imgSrc: "/sponsors/line-yahoo.png",
    alt: "LINEヤフー株式会社",
    size: "osaka-maido-gold",
    imgClassName: "",
  },
  {
    id: "kinto-technologies",
    href: "/sponsors/kinto-technologies",
    imgSrc: "/sponsors/KINTOtechnologies.svg",
    alt: "KINTOテクノロジーズ株式会社",
    size: "osaka-maido-gold",
    imgClassName: "p-4",
  },
  {
    id: "chot-inc",
    href: "/sponsors/chot-inc",
    imgSrc: "/sponsors/chot-inc.png",
    alt: "ちょっと株式会社",
    size: "osaka-maido-gold",
    imgClassName: "p-4",
  },
  {
    id: "kaonavi",
    href: "/sponsors/kaonavi",
    imgSrc: "/sponsors/kaonavi.png",
    alt: "株式会社カオナビ",
    size: "osaka-maido-gold",
    imgClassName: "",
  },
  {
    id: "kakehashi",
    href: "/sponsors/kakehashi",
    imgSrc: "/sponsors/kakehashi.png",
    alt: "株式会社カケハシ",
    size: "osaka-maido-gold",
    imgClassName: "p-2 pr-3.5 scale-145 hover:scale-150",
  },
  {
    id: "knowledge-work",
    href: "/sponsors/knowledge-work",
    imgSrc: "/sponsors/KnowledgeWork.png",
    alt: "株式会社ナレッジワーク",
    size: "osaka-maido-gold",
    imgClassName: "",
  },
] as const;

const miniTakoyakiSilver = [
  {
    id: "joint-crew",
    href: "/sponsors/joint-crew",
    imgSrc: "/sponsors/jointcrew.png",
    alt: "株式会社JOINT CREW",
    size: "mini-takoyaki-silver",
  },
] as const;

const namingRights = [
  {
    id: "knowledge-work",
    href: "/sponsors/knowledge-work",
    imgSrc: "/sponsors/KnowledgeWork.png",
    alt: "株式会社ナレッジワーク",
    size: "mini-takoyaki-silver",
  },
] as const;

const nameCards = [
  {
    id: "kakehashi",
    href: "/sponsors/kakehashi",
    imgSrc: "/sponsors/kakehashi.png",
    alt: "株式会社カケハシ",
    size: "mini-takoyaki-silver",
    imgClassName: "p-2 pr-3.5 scale-145 hover:scale-150",
  },
] as const;

const studentSupportPlan = [
  {
    id: "line-yahoo",
    href: "/sponsors/line-yahoo",
    imgSrc: "/sponsors/line-yahoo.png",
    alt: "LINEヤフー株式会社",
    size: "osaka-maido-gold",
    imgClassName: "",
  },
  {
    id: "cyber-agent",
    href: "/sponsors/cyber-agent",
    imgSrc: "/sponsors/CyberAgent.png",
    alt: "株式会社サイバーエージェント",
    size: "osaka-maido-gold",
    imgClassName: "p-2",
  },
] as const;

function SponsorInformation() {
  return (
    <section id="sponsor" className="flex flex-col gap-6 items-center">
      <Heading>スポンサー</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <div>
        <Heading variant="gold" className="text-center my-6">
          会場スポンサー
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          <SponsorCard
            href="/sponsors/miidas"
            imageSrc="/sponsors/miidas.webp"
            alt="ミイダス"
            size="venue-sponsor"
          />
        </div>
      </div>
      <div>
        <Heading variant="silver" className="text-center my-6">
          おおさかまいど
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {maidoGold.map(({ href, imgSrc, alt, size, imgClassName }) => (
            <SponsorCard
              key={alt}
              href={href}
              imageSrc={imgSrc}
              alt={alt}
              size={size}
              imgClassName={imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="bronze" className="text-center my-6">
          ミニたこやき
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {miniTakoyakiSilver.map(({ href, imgSrc, alt, size }) => (
            <SponsorCard
              key={alt}
              href={href}
              imageSrc={imgSrc}
              alt={alt}
              size={size}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="accent" className="text-center my-6">
          ネーミングライツ
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {namingRights.map(({ href, imgSrc, alt, size }) => (
            <SponsorCard
              key={alt}
              href={href}
              imageSrc={imgSrc}
              alt={alt}
              size={size}
              className=""
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="accent" className="text-center my-6">
          ネームカード
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {nameCards.map(({ href, imgSrc, alt, size, imgClassName }) => (
            <SponsorCard
              key={alt}
              href={href}
              imageSrc={imgSrc}
              alt={alt}
              size={size}
              imgClassName={imgClassName}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading variant="accent" className="text-center my-6">
          学生支援
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {studentSupportPlan.map(
            ({ href, imgSrc, alt, size, imgClassName }) => (
              <SponsorCard
                key={alt}
                href={href}
                imageSrc={imgSrc}
                alt={alt}
                size={size}
                imgClassName={imgClassName}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export { SponsorInformation };
