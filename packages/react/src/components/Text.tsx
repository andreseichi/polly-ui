import { VariantProps, cva } from "class-variance-authority";
import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

const textStyles = cva("text-gray-100 leading-base m-0 font-sans", {
  variants: {
    size: {
      xss: "text-xss",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textStyles> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const Text = forwardRef(
  ({ size, as = "p", className, children, ...props }: TextProps) => {
    const Element = as;

    return (
      <Element className={cn(textStyles({ size }), className)} {...props}>
        {children}
      </Element>
    );
  },
);

Text.displayName = "Text";

export { Text };
