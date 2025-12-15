"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" fixed flex justify-center w-full mt-4">
      <div
        id="links"
        className=" bg-gray-400/10 text-white p-4  border border-gray-500 rounded-4xl"
      >
        <ul className="flex flex-row gap-2 text-lg font-bold">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{scale:0.9}}>
            <Link href="/" className="p-2">
              Home
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{duration:0.3}}>
            <Link href="/about" className="p-2">
              About Me
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/contact" className="p-2">
              Contact Us
            </Link>
          </motion.li>

          
        </ul>
      </div>
    </nav>
  );
}
