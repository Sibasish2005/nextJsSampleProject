"use client";

import { motion, type Variants } from "framer-motion";
import React, { type ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type EducationProps = {
  children: ReactNode;
};

export default function StaggerChild({ children }: EducationProps) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.3 }}
      className="space-y-4"
    >
      {React.Children.map(children, (child, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="bg-slate-900 p-4 px-20 rounded-xl hover:scale-105  transition-all duration-300
"
        >
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}
