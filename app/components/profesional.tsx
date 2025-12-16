import React from "react";
import { motion } from "framer-motion";

export default function Profesional() {
  return (
    <section className="p-4 md:p-10 md:mx-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-10 rounded-2xl md:p-20 bg-white/3"
      >
        {/* Education */}
        <div className="flex flex-col bg-slate-900/40 rounded-3xl p-10">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-white/60 hover:text-white transition">
            Education
          </h1>

          <ul className="mt-8 space-y-4">
            <li>
              <div className="flex gap-4 sm:gap-6 p-4 md:p-6 rounded-2xl bg-slate-900/50 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-600/20">
                  <img
                    src="/mortarboard.png"
                    alt="education"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </div>

                <div>
                  <h2 className="text-white text-lg md:text-xl font-semibold">
                    NIELIT Agartala{" "}
                    <span className="text-slate-400 text-sm">(Pursuing)</span>
                  </h2>
                  <span className="block text-slate-400 text-sm">
                    2023 – 2026
                  </span>
                  <p className="text-slate-300 mt-2 text-sm md:text-base">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="flex flex-col bg-slate-900/40 rounded-3xl p-10">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-white/60 hover:text-white transition">
            Experience
          </h1>

          <ul className="mt-8 space-y-4">
            <li>
              <div className="flex gap-4 sm:gap-6 p-4 md:p-6 rounded-2xl bg-slate-900/50 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-600/20">
                  <img
                    src="/mortarboard.png"
                    alt="experience"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </div>

                <div>
                  <h2 className="text-white text-lg md:text-xl font-semibold">
                   Das Solutions
                  </h2>
                  <span className="block text-slate-400 text-sm">
                   feb 2025 – Now
                  </span>
                  <p className="text-slate-300 mt-2 text-sm md:text-base">
                    Web developer Intern
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
