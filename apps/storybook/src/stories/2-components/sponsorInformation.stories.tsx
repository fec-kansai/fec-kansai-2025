import type { Meta, StoryObj } from "@storybook/react/*";
import { SponsorInformation } from "web/components/SponsorInformation";

type ComponentType = typeof SponsorInformation;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/SponsorInformation",
  component: SponsorInformation,
  args: {
    children: "テキストテキスト",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
} satisfies Meta<typeof SponsorInformation>;

export default meta;

export const Default: Story = {};
