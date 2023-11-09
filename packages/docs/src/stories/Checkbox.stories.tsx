import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@polly-ui/react/dist";

export default {
  title: "UI/Form/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: { type: "inline-radio" },
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Story />
        <Text as="label" size="sm">
          Accept terms of use
        </Text>
      </Box>
    ),
  ],
} satisfies Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
