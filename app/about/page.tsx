"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Page() {
  return (
    <div className=" bg-gradient-to-l from-sky-700 to-indigo-950 h-auto p-5 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/4 h-[98%] rounded-3xl   "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40">
          <div className="col-span-1 row-span-1 m-10 flex items-center ">
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl text-white pl-16 md:pl-40 pt-10"
              >
                <TypeAnimation
                  sequence={["Hello!", 1500, "", 1500]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="text-4xl md:text-7xl font-bold text-yellow-500 mt-3"
                />
              </motion.span>
              <div className="flex flex-col items-center">
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
                  className="pr-20 text-lg md:text-xl text-sky-400 font-bold mt-3"
                />
              </div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-lg text-white mt-20 "
              >
                I’m Sibasish Chakraborti, a frontend & full-stack web developer
                with hands-on experience building modern, responsive
                applications using Next.js, React, Angular, Tailwind CSS, and
                smooth animations with Framer Motion.On the backend, I work with
                Node.js, Express, and MongoDB to create scalable and reliable
                APIs and full-stack solutions.
              </motion.span>
            </div>
          </div>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ scale: 1 }}
            transition={{duration:0.4}}
            className=" col-span-1 row-span-1 ml-30 m-20 rounded-3xl "
          >
            <img
              className="h-auto mt-10 rounded-3xl "
              src="/aboutSection.png"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
