import { Check } from "@phosphor-icons/react";
import * as CheckboxRUI from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const checkbox = cva(
  [
    "rounded-xs leading-[0] cursor-pointer box-border bg-gray-900 flex items-center justify-center border-[2px] border-solid border-gray-900 data-[state=checked]:bg-polly-300",
    "focus:border-polly-300",
  ],
  {
    variants: {
      size: {
        sm: ["w-4", "h-4"],
        md: ["w-6", "h-6"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface CheckboxProps
  extends CheckboxRUI.CheckboxProps,
    VariantProps<typeof checkbox> {}

export const Checkbox = ({ size, ...props }: CheckboxProps) => {
  return (
    <CheckboxRUI.Root className={twMerge(checkbox({ size }))} {...props}>
      <CheckboxRUI.Indicator className="h-4 w-4 fill-white" asChild>
        <Check weight="bold" />
      </CheckboxRUI.Indicator>
    </CheckboxRUI.Root>
  );
};
