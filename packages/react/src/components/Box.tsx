import { cva } from "class-variance-authority";
import { ReactNode, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const boxStyles = cva(
  "mx-auto w-full rounded-md border-[1px] border-solid border-gray-600 bg-gray-800 p-4 shadow-lg",
);

export interface BoxProps extends ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function Box({ children, className, ...props }: BoxProps) {
  return (
    <div className={twMerge(boxStyles(), className)} {...props}>
      {children}
    </div>
  );
}
