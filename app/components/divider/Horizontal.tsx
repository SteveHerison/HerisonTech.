import { cn } from "../../lib/utils";

type HorizontalProps = {
  className?: string;
};

export const Horizontal = ({ className }: HorizontalProps) => {
  return (
    <div
      className={cn("w-full my-8 border-b border-b-purple-950/10", className)}
    />
  );
};
