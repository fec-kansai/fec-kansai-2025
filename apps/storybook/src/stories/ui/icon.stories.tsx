import type { Meta, StoryObj } from "@storybook/react";
import {
  KaiyukanIcon,
  Logo,
  LogoHeader,
  OctopusIcon,
  TakoyakiBoxIcon,
  TakoyakiIcon,
  TowerOfSunIcon,
  TsuutenkakuIcon,
} from "@workspace/ui";
type ComponentType = typeof Logo;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Icon",
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
