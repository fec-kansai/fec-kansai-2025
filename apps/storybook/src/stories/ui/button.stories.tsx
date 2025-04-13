import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@workspace/ui/components/button";

type ComponentType = typeof Button;
type Story = StoryObj<ComponentType>;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  render: (args) => <Button {...args}>テストABC</Button>,
} satisfies Meta<ComponentType>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    size: "lg",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
  },
};
