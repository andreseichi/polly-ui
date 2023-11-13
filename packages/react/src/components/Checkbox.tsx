import { cn } from "@/lib/utils";
import { Check } from "@phosphor-icons/react";
import * as CheckboxRUI from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const checkbox = cva(
  [
    "rounded-xs leading-[0] cursor-pointer box-border bg-gray-900 flex items-center justify-center border-[2px] border-solid border-gray-900",
    "focus:border-polly-300 data-[state=checked]:bg-polly-300 data-[state=checked]:border-polly-300",
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
  extends ComponentPropsWithoutRef<typeof CheckboxRUI.Root>,
    VariantProps<typeof checkbox> {}

const Checkbox = forwardRef<ElementRef<typeof CheckboxRUI.Root>, CheckboxProps>(
  ({ size, ...props }, ref) => {
    return (
      <CheckboxRUI.Root className={cn(checkbox({ size }))} ref={ref} {...props}>
        <CheckboxRUI.Indicator className="h-4 w-4 fill-white" asChild>
          <Check weight="bold" />
        </CheckboxRUI.Indicator>
      </CheckboxRUI.Root>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
