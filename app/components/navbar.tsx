"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-4 z-50 flex justify-center w-full">
      <div className="  bg-neutral-900/60
          backdrop-blur-sm
          text-white
          px-6 py-3
          border border-neutral-700
          rounded-full">
        <ul className="flex flex-row gap-6 text-lg font-bold">

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#home" className="px-3 py-1">
              Home
            </a>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" className="px-3 py-1">
              About Me
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#professional" className="px-3 py-1">
              Academics
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#projects" className="px-3 py-1">
              Projects
            </a>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#contact" className="px-3 py-1">
              Contact
            </a>
          </motion.li>

        </ul>
      </div>
    </nav>
  );
}
