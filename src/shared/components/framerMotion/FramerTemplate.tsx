"use client";
import { motion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
  style: string;
  initial?: { opacity?: number; y?: number };
  animate?: { opacity?: number; y?: number };
}

export default function TemplateFramer({
  children,
  style,
  initial,
  animate,
}: TemplateProps) {
  return (
    <motion.div initial={initial} animate={animate} className={style}>
      {children}
    </motion.div>
  );
}
