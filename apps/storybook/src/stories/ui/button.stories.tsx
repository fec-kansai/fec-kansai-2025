import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@workspace/ui";

type ComponentType = typeof Button;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "default",
    size: "lg",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<ComponentType>;

export default meta;

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
