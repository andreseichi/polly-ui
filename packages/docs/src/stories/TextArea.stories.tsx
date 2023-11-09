import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@polly-ui/react/dist";

export default {
  title: "UI/Form/Text Area",
  component: TextArea,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => (
      <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Text size="sm">Observations</Text>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add obersations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: "type here",
  },
};
