"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="h-auto px-4 md:px-30 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{amount:0.3}}
        transition={{ duration: 0.5 }}
        className="bg-white/4 h-auto rounded-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40">
          {/* TEXT SECTION */}
          <div className="col-span-1 m-4 md:m-10 flex items-center">
            <div className="flex flex-col w-full">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-6 md:pt-10 text-center md:text-left"
              >
                <TypeAnimation
                  sequence={["Hello!", 1500, "", 1500]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="text-4xl md:text-7xl font-bold text-yellow-500"
                />
              </motion.span>

              <div className="flex justify-center md:justify-start mt-3">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1500,
                    "Frontend Developer",
                    1500,
                    "MEAN Developer",
                    1500,
                    "Tech Enthusiast",
                    1500,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="text-lg md:text-xl text-sky-400 font-bold"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-base md:text-lg text-white mt-8 md:mt-20"
              >
                I’m Sibasish Chakraborti, a frontend & full-stack web developer
                with hands-on experience building modern, responsive
                applications using Next.js, React, Angular, Tailwind CSS, and
                smooth animations with Framer Motion. On the backend, I work
                with Node.js, Express, and MongoDB to create scalable and
                reliable APIs and full-stack solutions.
              </motion.p>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{amount:0.3}}
            transition={{ duration: 0.4 }}
            className="col-span-1 flex justify-center items-center m-4 md:m-20"
          >
            <img
              className="w-full max-w-sm md:max-w-md rounded-3xl"
              src="/userAbout.png"
              alt="About"
            />
          </motion.div>
        </div>
      </motion.div>

      
    </div>
  );
}
