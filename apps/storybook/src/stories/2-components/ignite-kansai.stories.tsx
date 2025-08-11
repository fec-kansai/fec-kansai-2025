import type { Meta, StoryObj } from "@storybook/react";
import IgniteKansai from "web/components/IgniteKansai";

type ComponentType = typeof IgniteKansai;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/IgniteKansai",
  component: IgniteKansai,
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
