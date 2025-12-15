"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Grid() {
  return (
    <div className="bg-white/6 rounded-4xl md:mx-30 pb-10">
      {/* Title */}
      <div className="flex flex-col items-center pb-10 group">
        <h1 className="text-yellow-600 text-4xl pt-10 font-bold">
          My Projects
        </h1>
        <span className="mt-2 w-0 h-1 bg-amber-500 transition-all duration-300 group-hover:w-40" />
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-40">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="h-[240px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/nextjs.png')" }}
        />

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="h-[240px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/stopwatch.png')" }}
        />

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="h-[240px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/AngularPortfolio.png')" }}
        />

        {/* Project 4 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="h-[240px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/CollegeManagement.png')" }}
        />
      </div>
    </div>
  );
}
