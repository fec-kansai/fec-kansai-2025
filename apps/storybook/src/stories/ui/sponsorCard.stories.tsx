import type { Meta, StoryObj } from "@storybook/react";
import { SponsorCard } from "@workspace/ui";

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
    href: "#",
    imageSrc: "/sponsors/miidas.webp",
  },
};
