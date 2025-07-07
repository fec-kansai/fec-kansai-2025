import type { Meta, StoryObj } from "@storybook/react";
import { SponsorCard } from "web/components/Sponsor/card";

type ComponentType = typeof SponsorCard;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Elements/SponsorCard",
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
  parameters: {
    layout: "padded",
  },
  render: (args) => {
    return (
      <div className="flex h-screen max-w-full">
        <SponsorCard {...args} />
      </div>
    );
  },
};

export const NotFoundImage: Story = {
  args: {
    href: "https://miidas.co.jp/",
    imageSrc: "/sponsors/miidasaaaaaaa.webp",
    alt: "ミイダス",
  },
};
