import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

import { InputHTMLAttributes, forwardRef } from "react";

const textInputStyles = cva(
  [
    "bg-gray-900 rounded-sm font-sans text box-border border-[2px] border-solid border-gray-900 flex items-center",
    "[&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50 [&:has(input:focus)]:border-polly-300",
  ],
  {
    variants: {
      variant: {
        sm: "py-2 px-3",
        md: "py-3 px-4",
      },
    },
    defaultVariants: {
      variant: "md",
    },
  },
);

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputStyles> {
  prefix?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, variant, type, ...props }, ref) => {
    return (
      <div className={cn(textInputStyles({ variant }))}>
        {!!prefix && (
          <span className="font-sans text-sm font-regular text-gray-400">
            {prefix}
          </span>
        )}

        <input
          type={type}
          ref={ref}
          aria-label={props["aria-label"]}
          className="w-full border-none bg-transparent font-sans text-sm font-regular text-white placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
          {...props}
        />
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
