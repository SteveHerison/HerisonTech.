import { cn } from "../../lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center hover:text-purple-950 gap-2 transition-colors"
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
