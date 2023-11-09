import { VariantProps, cva } from "class-variance-authority";
import { ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const headingStyles = cva("leading-shorter m-0 font-sans text-gray-100", {
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-4xl",
      xl: "text-5xl",
      "2xl": "text-6xl",
      "3xl": "text-7xl",
      "4xl": "text-8xl",
      "5xl": "text-9xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface HeadingProps extends VariantProps<typeof headingStyles> {
  as?: ElementType;
  children: ReactNode;
}

export function Heading({ size, as = "h2", children }: HeadingProps) {
  const Element = as;

  return (
    <Element className={twMerge(headingStyles({ size }))}>{children}</Element>
  );
}
