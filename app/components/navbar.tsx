"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#professional", label: "Academics" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 z-50 w-full flex justify-center">
      <div
        className="
          bg-neutral-900/60
          backdrop-blur-sm
          text-white
          px-4 py-3
          border border-neutral-700
          rounded-full
          w-[90%] md:w-auto
        "
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-6 text-lg font-bold">
          {links.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={link.href} className="px-3 py-1">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-20
              bg-neutral-900/90
              backdrop-blur-md
              border border-neutral-700
              rounded-2xl
              w-[90%]
              md:hidden
            "
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-bold">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-1 block text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
