import type { Meta, StoryObj } from "@storybook/react";
import {
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JsIcon,
  KaiyukanIcon,
  LaravelIcon,
  Logo,
  LogoHeader,
  OctopusIcon,
  PhpIcon,
  ReactIcon,
  TakoyakiBoxIcon,
  TakoyakiIcon,
  TowerOfSunIcon,
  TsuutenkakuIcon,
  VueIcon,
} from "@workspace/ui";
type ComponentType = typeof Logo;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Elements/Icon",
  component: Logo,
  args: {
    width: 240,
    height: 200,
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
  render: (args) => <Logo {...args} />,
} satisfies Meta<ComponentType>;
export default meta;

export const LogoIcon: Story = {
  render: (args) => (
    <div className="flex space-x-4 w-full">
      <Logo width={240} height={200} {...args} />
    </div>
  ),
};

export const LogoHeaderIcon: Story = {
  render: (args) => <LogoHeader {...args} />,
};

export const KaiyukanIconIcon: Story = {
  render: (args) => <KaiyukanIcon {...args} />,
};

export const OctopusIconIcon: Story = {
  render: (args) => <OctopusIcon {...args} />,
};

export const TakoyakiIconIcon: Story = {
  render: (args) => <TakoyakiIcon {...args} />,
};

export const TakoyakiBoxIconIcon: Story = {
  render: (args) => <TakoyakiBoxIcon {...args} />,
};

export const TowerOfSunIconIcon: Story = {
  render: (args) => <TowerOfSunIcon {...args} />,
};

export const TsuutenkakuIconIcon: Story = {
  render: (args) => <TsuutenkakuIcon {...args} />,
};

export const CssIconIcon: Story = {
  render: (args) => <CssIcon {...args} />,
};

export const JsIconIcon: Story = {
  render: (args) => <JsIcon {...args} />,
};

export const HtmlIconIcon: Story = {
  render: (args) => <HtmlIcon {...args} />,
};

export const FigmaIconIcon: Story = {
  render: (args) => <FigmaIcon {...args} />,
};

export const ReactIconIcon: Story = {
  render: (args) => <ReactIcon {...args} />,
};

export const LaravelIconIcon: Story = {
  render: (args) => <LaravelIcon {...args} />,
};

export const VueIconIcon: Story = {
  render: (args) => <VueIcon {...args} />,
};

export const PhpIconIcon: Story = {
  render: (args) => <PhpIcon {...args} />,
};
