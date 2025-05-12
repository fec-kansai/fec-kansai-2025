import type { Meta, StoryObj } from "@storybook/react";
import Footer from "web/components/Footer";

type ComponentType = typeof Footer;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
