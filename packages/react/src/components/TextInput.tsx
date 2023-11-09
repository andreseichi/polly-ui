import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const textInputStyles = cva([
  "bg-gray-900 py-3 px-4 rounded-sm font-sans text box-border border-[2px] border-solid border-gray-900 flex align-baseline",
  "[&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50 [&:has(input:focus)]:border-polly-300",
]);

export interface TextInputProps
  extends ComponentProps<"input">,
    VariantProps<typeof textInputStyles> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <div className={twMerge(textInputStyles())}>
      {!!prefix && (
        <span className="font-sans text-sm font-regular text-gray-400">
          {prefix}
        </span>
      )}

      <input
        type="text"
        aria-label={props["aria-label"]}
        className="w-full border-none bg-transparent font-sans text-sm font-regular text-white placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  );
}
