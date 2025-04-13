"use client";
import { FadeIn } from "@/utils/motion.transition";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string;
}

export const MotionTransition = ({ children, position, className }: Props) => {
  return (
    <motion.div
      variants={FadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};
