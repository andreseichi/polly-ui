import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@polly-ui/react/dist";

export default {
  title: "UI/Typography/Heading",
  component: Heading,
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    children: "Hello, world!",
  },
} satisfies Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    children: "H1 heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "comes with `h2` tag as default, but can be changed to another heading tag with `as` prop",
      },
    },
  },
};
