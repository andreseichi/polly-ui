import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, ElementType } from "react";

const buttonStyles = cva(
  "box-border flex min-w-[120px] cursor-pointer items-center justify-center gap-2 px-0 py-4 rounded-sm text-center font-sans text-sm font-medium leading-tall disabled:cursor-not-allowed [&>svg]:w-4 [&>svg]:h-4",
  {
    variants: {
      variant: {
        primary:
          "bg-polly-500 text-white disabled:bg-gray-200 [&:not(:disabled)]:hover:bg-polly-300",
        secondary:
          "text-polly-300 border-[2px] border-solid border-polly-500 disabled:text-gray-200 disabled:border-gray-200 [&:not(:disabled)]:hover:bg-polly-500 [&:not(:disabled)]:hover:text-white",
        tertiary:
          "text-gray-100 disabled:text-gray-600 [&:not(:disabled)]:hover:text-white",
      },
      size: {
        sm: "h-[38px]",
        md: "h-[46px]",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {
  as?: ElementType;
}

export function Button({ variant, size, fullWidth, ...props }: Props) {
  return (
    <button className={buttonStyles({ variant, size, fullWidth })} {...props} />
  );
}
