import type { StoryObj, Meta } from "@storybook/react";
import { Button, Props } from "@polly-ui/react/dist";
import { ArrowRight } from "@phosphor-icons/react";

export default {
  title: "UI/Form/Button",
  component: Button,
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
    onClick: {
      action: "clicked",
    },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "click me",
    variant: "primary",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<Props>;

export const Primary: StoryObj<Props> = {};

export const Secondary: StoryObj<Props> = {
  args: {
    variant: "secondary",
    children: "click me",
  },
};

export const Tertiary: StoryObj<Props> = {
  args: {
    variant: "tertiary",
    children: "click me",
  },
};

export const Small: StoryObj<Props> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<Props> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<Props> = {
  args: {
    variant: "primary",
    disabled: true,
  },
};
