import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@polly-ui/react/dist";

export default {
  title: "UI/Form/Text Input",
  component: TextInput,
  argTypes: {
    variant: {
      options: ["sm", "md"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "md",
  },
  decorators: [
    (Story) => (
      <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Text as="label" size="sm">
          Email address
        </Text>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "type here",
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "tash.com/",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    prefix: "tash.com/",
    disabled: true,
  },
};
