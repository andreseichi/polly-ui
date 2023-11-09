import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@polly-ui/react/dist";

export default {
  title: "UI/Box",
  component: Box,
  argTypes: {
    children: {
      control: {
        type: "null",
      },
    },
  },
  args: {
    children: (
      <>
        <Text as="strong">Test Box</Text>
      </>
    ),
  },
} satisfies Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
