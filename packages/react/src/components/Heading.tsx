import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";

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

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingStyles> {
  as?: ElementType;
  children: ReactNode;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ size, as = "h2", children, ...props }, ref) => {
    const Element = as;

    return (
      <Element className={cn(headingStyles({ size }))} ref={ref} {...props}>
        {children}
      </Element>
    );
  },
);

Heading.displayName = "Heading";

export { Heading };
