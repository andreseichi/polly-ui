import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@polly-ui/react/dist";
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
} satisfies Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "click me",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "click me",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    disabled: true,
  },
};
