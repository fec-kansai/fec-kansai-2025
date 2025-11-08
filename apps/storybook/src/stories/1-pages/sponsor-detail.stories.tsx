import type { Meta, StoryObj } from "@storybook/react/*";
import SponsorDetail from "web/app/sponsors/[sponsorId]/page";

type ComponentType = typeof SponsorDetail;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Pages/SponsorDetail",
  component: SponsorDetail,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
