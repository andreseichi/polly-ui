import type { StoryObj, Meta } from "@storybook/react";
import { Button, Props } from "@polly-ui/react/dist";

export default {
  title: "UI/Form/Button",
  component: Button,
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
  },
  args: {
    children: "click me",
    intent: "primary",
  },
} satisfies Meta<Props>;

export const Primary: StoryObj<Props> = {
  args: {
    intent: "primary",
  },
};
