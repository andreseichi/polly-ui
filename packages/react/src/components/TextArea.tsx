import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const textAreaStyles = cva([
  "text box-border min-h-[80] w-full resize-y rounded-sm border-[2px] border-solid border-gray-900 bg-gray-900 px-4 py-3 font-sans text-sm font-regular text-white focus:border-polly-300 focus:outline-none",
  "disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400",
]);

export interface TextAreaProps
  extends ComponentProps<"textarea">,
    VariantProps<typeof textAreaStyles> {}

export function TextArea({ ...props }: TextAreaProps) {
  return <textarea className={twMerge(textAreaStyles())} {...props} />;
}
