import {
  Box,
  Text,
  Tooltip,
  TooltipContent,
  TooltipContentProps,
  TooltipProvider,
  TooltipTrigger,
} from "@polly-ui/react/dist";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "UI/Tooltip",
  component: TooltipContent,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
    side: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "inline-radio" },
    },
    hasArrow: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    side: "top",
    hasArrow: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Tooltip component is used to display additional information when hovering over a target element. It can be used with any element, but it is recommended to use it with a button or a link.`,
      },
    },
  },

  decorators: [
    (Story, props) => (
      <TooltipProvider>
        <Box
          style={{
            minHeight: "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip>
            <TooltipTrigger>
              <Text>hover me</Text>
            </TooltipTrigger>
            <Story args={props.args} />
          </Tooltip>
        </Box>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<TooltipContentProps>;

export const Primary: StoryObj<TooltipContentProps> = {
  render: (args) => (
    <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>
  ),
  args: {
    size: "lg",
    side: "top",
  },
};

export const HasArrow: StoryObj<TooltipContentProps> = {
  render: (args) => (
    <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>
  ),
  args: {
    size: "lg",
    side: "top",
    hasArrow: true,
  },
};

export const SmallTooltip: StoryObj<TooltipContentProps> = {
  render: (args) => (
    <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>
  ),
  args: {
    size: "sm",
    side: "top",
    hasArrow: true,
  },
};

export const SideTooltip: StoryObj<TooltipContentProps> = {
  render: (args) => (
    <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>
  ),
  args: {
    size: "md",
    side: "right",
    hasArrow: true,
  },
};
