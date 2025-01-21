"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="px-3 py-1 text-sm text-purple-500 rounded-lg shadow-md bg-purple-950 shadow-purple-950/80"
      {...props}
    >
      {name}
    </motion.span>
  );
};
