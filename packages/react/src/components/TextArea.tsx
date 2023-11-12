import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { TextareaHTMLAttributes, forwardRef } from "react";

const textAreaStyles = cva([
  "text box-border min-h-[80] w-full resize-y rounded-sm border-[2px] border-solid border-gray-900 bg-gray-900 px-4 py-3 font-sans text-sm font-regular text-white focus:border-polly-300 focus:outline-none",
  "disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400",
]);

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaStyles> {}

const TextArea = forwardRef(({ ...props }: TextAreaProps) => {
  return <textarea className={cn(textAreaStyles())} {...props} />;
});

TextArea.displayName = "TextArea";

export { TextArea };
