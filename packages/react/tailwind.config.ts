import { extendTailwindMerge } from "tailwind-merge";

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@polly-ui/tokens";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        gray: {
          100: colors.gray100,
          200: colors.gray200,
          400: colors.gray400,
          500: colors.gray500,
          600: colors.gray600,
          700: colors.gray700,
          800: colors.gray800,
          900: colors.gray900,
        },
        polly: {
          200: colors.polly200,
          300: colors.polly300,
          500: colors.polly500,
          700: colors.polly700,
          900: colors.polly900,
        },
      },
    },
    fontFamily: {
      sans: [fonts.default],
    },
    fontSize: {
      ...fontSizes,
    },
    fontWeight: {
      ...fontWeights,
    },
    lineHeight: {
      ...lineHeights,
    },
    borderRadius: {
      ...radii,
    },
    spacing: {
      ...space,
    },
  },
  plugins: [],
};

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": Object.keys(fontSizes).map((key) => `text-${key}`),
      "font-weight": Object.keys(fontWeights).map((key) => `font-${key}`),
      leading: Object.keys(lineHeights).map((key) => `leading-${key}`),
      rounded: Object.keys(radii).map((key) => `rounded-${key}`),
    },
  },
});

export default config;
