'use client'
import { motion } from "framer-motion";
import React from "react";

export default function Grid() {
  return (
    <div className="bg-gradient-to-l from-sky-700 to-indigo-950 
 ">
        

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] gap-4 mx-6 md:mx-40 ">

       <motion.div id="large_grid"
       initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{scale:0.9}}
        transition={{ duration:0.5 }}
        className="md:col-span-8 md:row-span-2 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/project1.jpg')", }}
      >

      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{scale:0.9}}
        transition={{ duration:0.5 }}
        className="md:col-span-4 md:row-span-2 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/project2.jpg')", }}
      ></motion.div>

      <motion.div
      initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{scale:0.9}}
        transition={{duration:0.5}}
        className="md:col-span-4 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Project-1.jpg')", }}
      ></motion.div>

      <motion.div
      initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{scale:0.9}}
        transition={{duration:0.5}}
        className="md:col-span-4 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/project1.jpg')", }}
      ></motion.div>

      <motion.div
      initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{scale:0.9}}
        className="md:col-span-4 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/project1.jpg')", }}
      ></motion.div>

      </div>
    </div>
  );
}

