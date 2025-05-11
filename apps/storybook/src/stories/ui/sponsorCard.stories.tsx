import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@workspace/ui";
import { SponsorCard } from "web/components/Sponsor/card";

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
      <div className="my-3">
        <Heading variant="secondary" className="text-center my-6">
          おおさかまいど
        </Heading>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[100%] mx-auto">
          {cardList.map(({ href, imageSrc, alt, size }) => {
            return (
              <li key={alt}>
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

export const SilverList: Story = {
  render: () => {
    const cardList = [
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
      {
        href: "https://miidas.co.jp/",
        imageSrc: "/sponsors/miidas.webp",
        alt: "ミイダス",
        size: "mini-takoyaki-silver",
      },
    ] as const;

    return (
      <div className="my-3">
        <Heading variant="secondary" className="text-center my-6">
          ミニたこやき
        </Heading>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] mx-auto">
          {cardList.map(({ href, imageSrc, alt, size }) => {
            return (
              <li key={alt}>
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
