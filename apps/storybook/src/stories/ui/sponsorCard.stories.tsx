import type { Meta, StoryObj } from "@storybook/react";
import { Heading, SponsorCard } from "@workspace/ui";

type ComponentType = typeof SponsorCard;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/SponsorCard",
  component: SponsorCard,
  args: {},
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {
  args: {
    href: "https://miidas.co.jp/",
    imageSrc: "/sponsors/miidas.webp",
    alt: "ミイダス",
  },
};

export const NotFoundImage: Story = {
  args: {
    href: "https://miidas.co.jp/",
    imageSrc: "/sponsors/miidasaaaaaaa.webp",
    alt: "ミイダス",
  },
};

export const PremiumList: Story = {
  render: () => {
    const cardList = [
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "naniwa-premium",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "naniwa-premium",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "naniwa-premium",
      },
    ] as const;

    return (
      <div className="flex flex-col gap-5 my-6">
        <Heading variant="secondary" className="text-center">
          なにわプレミア
        </Heading>
        <ul className="flex align-center justify-center">
          {cardList.map(({ href, imageSrc, alt, size }) => {
            return (
              <li key={alt} className="mx-6">
                <SponsorCard
                  href={href}
                  imageSrc={imageSrc}
                  alt={alt}
                  size={size}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
};

export const GoldList: Story = {
  render: () => {
    const cardList = [
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "osaka-maido-gold",
      },
    ] as const;

    return (
      <div className="flex flex-col gap-5 my-6">
        <Heading variant="secondary" className="text-center">
          おおさかまいど
        </Heading>
        <ul className="flex flex-wrap gap-3 align-center justify-center">
          {cardList.map(({ href, imageSrc, alt, size }) => {
            return (
              <li key={alt} className="mx-6">
                <SponsorCard
                  href={href}
                  imageSrc={imageSrc}
                  alt={alt}
                  size={size}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
};
