"use client";
import { fadeUpAnimation } from "../../lib/animations";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
type TitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const TitleSection = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <motion.span
        className="font-semibold text-purple-950 text-sm"
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        className="text-xl"
        {...fadeUpAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  );
};
