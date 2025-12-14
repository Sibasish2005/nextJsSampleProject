"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-gradient-to-l from-sky-700 to-indigo-950 h-screen p-2 md:p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 rounded-4xl h-auto mx-8 md:mx-40 p-6 md:p-10  flex flex-col  mt-8"
      >
        <h1 className="text-3xl md:text-4xl text-yellow-500  md:m-6 font-bold">
          #Contact Us
        </h1>
        <label className=" flex items-center gap-2 font-bold text-lg p-2 ">
          <span className="text-white">Name</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <input
            type="text"
            placeholder="Enter first name"
            className="text-white col-span-1 row-span-1 py-1 border border-gray-500 rounded-lg  bg-white/10"
          />
          <input
            type="text"
            placeholder="Enter last name"
            className=" text-white col-span-1 row-span-1 py-1 border border-gray-500 rounded-lg  bg-white/10"
          />
        </div>
        <label className=" flex items-center gap-2 font-bold text-lg p-2 ">
          <span className="text-white">Email</span>
        </label>
        <div className="grid">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className=" text-white py-1 border border-gray-500 rounded-lg bg-white/10"
          />
        </div>
        <label className=" flex items-center gap-2 font-bold text-lg p-2">
          <span className="text-white">Feedback</span>
        </label>
        <div className="grid">
          <textarea
            name=""
            className="py-1 border border-gray-500 rounded-lg text-white  bg-white/10"
            id=""
          ></textarea>
        </div>
        <div className=" grid mt-10">
          <div className="flex justify-center ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-amber-600 text-white p-2 px-4 border border-gray-400 rounded-4xl font-bold"
            >
              Submit
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
