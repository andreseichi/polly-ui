import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@polly-ui/react/dist";

export default {
  title: "UI/Typography/Text",
  component: Text,
  argTypes: {
    as: {
      options: ["span", "p", "strong", "b", "i", "em", "mark"],
      control: { type: "inline-radio" },
    },
    size: {
      options: [
        "xss",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children: "Hello, world!",
    size: "xss",
    as: "p",
  },
} satisfies Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Tag strong",
    as: "p",
  },
};
