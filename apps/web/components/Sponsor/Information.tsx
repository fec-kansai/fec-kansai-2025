import { Heading } from "@workspace/ui";
import { SponsorCard } from "./card";

const maidoGold = [
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "LINEヤフー株式会社",
    size: "osaka-maido-gold",
  },
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "KINTOテクノロジーズ株式会社",
    size: "osaka-maido-gold",
  },
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "ちょっと株式会社",
    size: "osaka-maido-gold",
  },
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "株式会社カオナビ",
    size: "osaka-maido-gold",
  },
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "株式会社カケハシ",
    size: "osaka-maido-gold",
  },
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "株式会社ナレッジワーク",
    size: "osaka-maido-gold",
  },
] as const;

const miniTakoyakiSilver = [
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "株式会社JOINT CREW",
    size: "mini-takoyaki-silver",
  },
  {
    href: "https://careers.miidas.co.jp/tech/",
    imgSrc: "/sponsors/miidas.webp",
    alt: "株式会社サイバーエージェント",
    size: "mini-takoyaki-silver",
  },
] as const;

function SponsorInformation() {
  return (
    <section id="sponsor" className="flex flex-col gap-6 items-center">
      <Heading>スポンサー</Heading>
      <div>
        <Heading variant="gold" className="text-center my-6">
          おおさかまいど
        </Heading>
        <div className="flex flex-wrap gap-6 justify-center">
          {maidoGold.map(({ href, imgSrc, alt, size }) => (
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
        <Heading variant="silver" className="text-center my-6">
          ミニたこ焼き
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
        <Heading variant="bronze" className="text-center my-6">
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
      </div>
    </section>
  );
}

export { SponsorInformation };
