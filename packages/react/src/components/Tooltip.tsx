import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as TooltipRUI from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const TooltipProvider = TooltipRUI.Provider;

const Tooltip = TooltipRUI.Root;

const TooltipTrigger = TooltipRUI.Trigger;

const TooltipArrow = TooltipRUI.Arrow;

const tooltipStyles = cva(
  "z-50 overflow-hidden rounded-md select-none bg-gray-900 px-3 py-2 text-sm text-gray-100 shadow-md dark:bg-gray-100 dark:text-gray-900",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface TooltipContentProps
  extends ComponentPropsWithoutRef<typeof TooltipRUI.Content>,
    VariantProps<typeof tooltipStyles> {
  hasArrow?: boolean;
  distance?: "near" | "medium" | "far";
}

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipRUI.Content>,
  TooltipContentProps
>(
  (
    {
      className,
      distance = "medium",
      size,
      children,
      hasArrow = false,
      ...props
    },
    ref,
  ) => {
    const sideOffset = distance === "medium" ? 8 : distance === "near" ? 4 : 12;

    return (
      <TooltipRUI.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(tooltipStyles({ size }), className)}
        {...props}
      >
        {children}

        {hasArrow && (
          <TooltipArrow
            width={16}
            height={8}
            className="fill-gray-900 shadow-md"
          />
        )}
      </TooltipRUI.Content>
    );
  },
);

TooltipContent.displayName = TooltipRUI.Content.displayName;

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
};
