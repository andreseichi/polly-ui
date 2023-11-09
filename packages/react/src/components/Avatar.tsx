import * as AvatarRUI from "@radix-ui/react-avatar";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { User } from "@phosphor-icons/react";

const avatar = cva(
  "inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle",
  {
    variants: {
      size: {
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

export function Avatar({ src, name, size, ...props }: AvatarProps) {
  const [firstName, lastName] = name?.split(" ") || [];

  return (
    <AvatarRUI.Root className={twMerge(avatar({ size }))}>
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
}

export default Avatar;
