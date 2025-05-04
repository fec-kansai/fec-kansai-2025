import type { Meta, StoryObj } from "@storybook/react/*";
import { Link } from "web/components/Link";

type ComponentType = typeof Link;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Link",
  component: Link,
  args: {
    children: "テキストテキスト",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
} satisfies Meta<typeof Link>;

export default meta;

export const Default: Story = {};
