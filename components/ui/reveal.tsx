"use client";

import { motion, type Variant } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  duration?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  duration = 0.7,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
};

export function StaggerGrid({
  children,
  className,
  staggerDelay = 0.08,
  initialDelay = 0,
  once = true,
}: StaggerGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemHidden: Variant = { opacity: 0, y: 24 };
const itemVisible: Variant = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.6, ease: EASE },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{ hidden: itemHidden, visible: itemVisible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
