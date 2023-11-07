import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  "px-4 rounded-md font-sans text-md leading-tall items-center justify-center flex py-2 rounded font-medium",
  {
    variants: {
      intent: {
        primary: "bg-polly-200 text-black",
        secondary: "bg-gray-200 text-gray-900",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

export interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, ...props }: Props) {
  return <button className={buttonStyles({ intent, fullWidth })} {...props} />;
}
