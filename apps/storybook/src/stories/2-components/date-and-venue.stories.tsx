import type { Meta, StoryObj } from "@storybook/react";
import DateAndVenue from "web/components/DateAndVenue";

type ComponentType = typeof DateAndVenue;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/DateAndVenue",
  component: DateAndVenue,
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
