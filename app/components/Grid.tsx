"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Grid() {
  return (
    <div
      className=" bg-white/6 rounded-4xl md:mx-30 pb-10
 "
    >
      <div className="grid">
        <div className="flex flex-col items-center pb-10 group">
          <h1 className="text-yellow-600 text-4xl pt-10 font-bold">My projects</h1>

          <span
            className="
        mt-2
        w-0
        h-1
        bg-amber-500
        transition-all
        duration-300
        group-hover:w-40
        
      "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] gap-4 mx-6 md:mx-40 ">
        <motion.div
          id="large_grid"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{amount:0.3}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 md:row-span-2 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/nextjs.png')" }}
        > 
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{amount:0.3}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 md:row-span-2 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/stopwatch.png')" }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{amount:0.3}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/AngularPortfolio.png')" }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{amount:0.3}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/project1.jpg')" }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{amount:0.3}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:col-span-4 rounded-2xl m-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/CollegeManagement.png')" }}
        ></motion.div>
      </div>
    </div>
  );
}
