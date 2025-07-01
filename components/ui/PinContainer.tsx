"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("rotateX(0deg) scale(1)");

  const onMouseEnter = () => {
    setTransform("rotateX(40deg) scale(0.95)");
  };

  const onMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "group/pin relative block w-full h-full cursor-pointer z-10",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ perspective: "1000px" }} className="relative w-full h-full">
        <div
          style={{ transform }}
          className="w-full p-4 flex flex-col justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden bg-[#0b0f1d] relative"
        >
          <div className={cn("relative z-10 w-full", className)}>
            {children}
          </div>
          <PinPerspective title={title} href={href} />
        </div>
      </div>
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 opacity-0 group-hover/pin:opacity-100 z-0 transition duration-500">
      <div className="relative w-full h-full">
        {/* 🔗 الرابط اللي يظهر فوق عند الـ hover */}
        {title && (
          <div className="absolute -top-5 inset-x-0 flex justify-center z-20">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex space-x-2 items-center rounded-full bg-zinc-900 py-1 px-4 text-xs text-white font-semibold shadow-lg ring-1 ring-white/10 hover:ring-white/30 transition"
            >
              <span>{title}</span>
            </a>
          </div>
        )}

        {/* 🔵 تأثير الجلو */}
        <div
          style={{ perspective: "1000px" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[10rem] w-[10rem] rounded-full bg-sky-500/[0.08]"
            />
          ))}
        </div>

        {/* ✨ شعاع الضوء */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-14 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-14" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full" />
        </>
      </div>
    </motion.div>
  );
};
