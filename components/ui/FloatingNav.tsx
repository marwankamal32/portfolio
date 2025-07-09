"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    const previous = scrollYProgress.getPrevious() as number | undefined;
    const direction = previous !== undefined ? current - previous : 0;

    if (scrollYProgress.get() < 0.05) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.95,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000] px-6 py-3 items-center justify-center space-x-4",
          "rounded-xl border border-white/20 bg-white/10 backdrop-blur-md",
          "shadow-lg shadow-black/10",
          "dark:bg-neutral-900/50 dark:border-neutral-700/40",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-700 dark:text-neutral-200",
              "hover:text-neutral-900 dark:hover:text-white",
              "transition-colors duration-200"
            )}
            aria-label={navItem.name}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
