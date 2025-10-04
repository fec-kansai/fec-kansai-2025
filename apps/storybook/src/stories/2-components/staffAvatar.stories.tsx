import type { Meta, StoryObj } from "@storybook/react/*";
import { StaffInformation } from "web/components/StaffInformation";

type ComponentType = typeof StaffInformation;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/StaffInformation",
  component: StaffInformation,
  args: {},
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
