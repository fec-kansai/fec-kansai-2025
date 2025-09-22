import type { Meta, StoryObj } from "@storybook/react/*";
import { KeynoteSpeechSection } from "web/components/KeynoteSpeechSection";

type ComponentType = typeof KeynoteSpeechSection;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/KeynoteSpeechSection",
  component: KeynoteSpeechSection,
} satisfies Meta<typeof KeynoteSpeechSection>;

export default meta;

export const Default: Story = {};
