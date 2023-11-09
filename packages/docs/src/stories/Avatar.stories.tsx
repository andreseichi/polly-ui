import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@polly-ui/react/dist";

export default {
  title: "UI/Data display/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    src: "https://github.com/andreseichi.png",
    alt: "André Tashiro",
  },
} satisfies Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const FallbackWithName: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    name: "André Tashiro",
  },
};

export const FallbackWithoutName: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
