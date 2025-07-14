import type { Meta, StoryObj } from "@storybook/react/*";
import { ProposalInformation } from "web/components/ProposalInformation";

type ComponentType = typeof ProposalInformation;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/ProposalInformation",
  component: ProposalInformation,
} satisfies Meta<typeof ProposalInformation>;

export default meta;

export const Default: Story = {};
