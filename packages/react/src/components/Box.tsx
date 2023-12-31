import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

const boxStyles = cva(
  "mx-auto w-full rounded-md border-[1px] border-solid border-gray-600 bg-gray-800 p-6 shadow-lg",
);

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <div className={cn(boxStyles(), props.className)} ref={ref} {...props}>
      {props.children}
    </div>
  );
});

Box.displayName = "Box";

export { Box };
