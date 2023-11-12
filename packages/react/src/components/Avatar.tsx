import { cn } from "@/lib/utils";
import { User } from "@phosphor-icons/react";
import * as AvatarRUI from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const avatar = cva(
  "inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle",
  {
    variants: {
      size: {
        lg: ["h-16", "w-16", "text-lg"],
        md: ["h-12", "w-12", "text-md"],
        sm: ["h-8", "w-8", "text-sm"],
        xs: ["h-6", "w-6", "text-xs"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface AvatarProps
  extends AvatarRUI.AvatarImageProps,
    VariantProps<typeof avatar> {
  name?: string;
}

const Avatar = forwardRef(({ src, name, size, ...props }: AvatarProps) => {
  const [firstName, lastName] = name?.split(" ") || [];

  return (
    <AvatarRUI.Root className={cn(avatar({ size }))}>
      <AvatarRUI.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={src || undefined}
        alt={name}
        {...props}
      />
      <AvatarRUI.Fallback
        className="leading-1 flex h-full w-full items-center justify-center bg-gray-100 font-medium text-gray-800"
        delayMs={600}
      >
        {name ? (
          <>
            {firstName?.[0]}
            {lastName?.[0]}
          </>
        ) : (
          <User className="h-6 w-6" />
        )}
      </AvatarRUI.Fallback>
    </AvatarRUI.Root>
  );
});

Avatar.displayName = "Avatar";

export { Avatar };
