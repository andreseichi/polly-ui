import { Box, MultiStep, MultiStepProps } from "@polly-ui/react/dist";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "UI/Form/MultiStep",
  component: MultiStep,
  args: {
    currentStep: 1,
    totalSteps: 4,
  },
  decorators: [
    (Story) => (
      <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const HalfFull: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
    totalSteps: 4,
  },
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    totalSteps: 4,
  },
};
