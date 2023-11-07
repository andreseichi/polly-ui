import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "@polly-ui/react/dist/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
