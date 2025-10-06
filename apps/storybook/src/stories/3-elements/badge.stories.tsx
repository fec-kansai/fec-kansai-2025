import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@workspace/ui";

type ComponentType = typeof Badge;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Elements/Badge",
  component: Badge,
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge />
      <Badge plan="mini-takoyaki" />
      <Badge plan="osaka-maido" />
      <Badge plan="student" />
      <Badge plan="name-card" />
      <Badge plan="name-rights" />
    </div>
  ),
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
