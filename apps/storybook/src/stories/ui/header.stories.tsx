import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@workspace/ui"; // Header を適切なパスでインポートしてください

type ComponentType = typeof Header;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Header",
  component: Header,
  args: {
    size: "md",
  },
  argTypes: {},
} satisfies Meta<ComponentType>;

export default meta;

export const Normal: Story = {
  render: () => {
    // body の padding をリセット
    if (typeof document !== "undefined") {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    }

    return (
      <>
        <Header
          navLinks={[
            { name: "概要", href: "#", isDisabled: false, isActive: true },
            { name: "チケット", href: "#", isDisabled: false, isActive: false },
            {
              name: "スピーカー",
              href: "#",
              isDisabled: false,
              isActive: false,
            },
            {
              name: "スケジュール",
              href: "#",
              isDisabled: false,
              isActive: false,
            },
            {
              name: "スポンサー",
              href: "#",
              isDisabled: false,
              isActive: false,
            },
            { name: "会場", href: "#", isDisabled: false, isActive: false },
          ]}
        />
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    // body の padding をリセット
    if (typeof document !== "undefined") {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    }

    return (
      <>
        <Header
          navLinks={[
            { name: "概要", href: "#", isDisabled: true, isActive: true },
            { name: "チケット", href: "#", isDisabled: true, isActive: false },
            {
              name: "スピーカー",
              href: "#",
              isDisabled: true,
              isActive: false,
            },
            {
              name: "スケジュール",
              href: "#",
              isDisabled: true,
              isActive: false,
            },
            {
              name: "スポンサー",
              href: "#",
              isDisabled: true,
              isActive: false,
            },
            { name: "会場", href: "#", isDisabled: true, isActive: false },
          ]}
        />
      </>
    );
  },
};

export const ActiveTicket: Story = {
  render: () => {
    // body の padding をリセット
    if (typeof document !== "undefined") {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    }

    return (
      <>
        <Header
          navLinks={[
            { name: "概要", href: "#", isDisabled: false, isActive: false },
            { name: "チケット", href: "#", isDisabled: false, isActive: true },
            {
              name: "スピーカー",
              href: "#",
              isDisabled: false,
              isActive: false,
            },
            {
              name: "スケジュール",
              href: "#",
              isDisabled: false,
              isActive: false,
            },
            {
              name: "スポンサー",
              href: "#",
              isDisabled: false,
              isActive: false,
            },
            { name: "会場", href: "#", isDisabled: false, isActive: false },
          ]}
        />
      </>
    );
  },
};
