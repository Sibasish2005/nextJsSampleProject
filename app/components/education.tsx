import React from "react";
import StaggerChild from "./staggeredChild";

export default function Education() {
  return (
    <div className="bg-white/10 rounded-4xl p-4 md:p-10">
      {/* EXPERIENCE */}
      <div className="mx-4 md:m-20 my-10">
        <StaggerChild>
          <div className="flex flex-col">
            <h1 className="text-white text-xl md:text-2xl p-4 font-bold">
              Experience
            </h1>

            <div className="w-full max-w-4xl rounded-2xl p-4 md:p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-600/20">
                {/* icon here */}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h2 className="text-white text-lg md:text-xl font-semibold">
                  Das Solutions{" "}
                  <span className="text-slate-400 text-sm">(Pursuing)</span>
                </h2>

                <span className="text-slate-400 text-sm mt-1">
                  2025 Feb – Now
                </span>

                <p className="text-slate-300 mt-2 text-sm md:text-base">
                  Web Developer Intern
                </p>
              </div>
            </div>
          </div>
        </StaggerChild>
      </div>

      {/* EDUCATION */}
      <div className="mx-4 md:m-20 my-10">
        <StaggerChild>
          <div className="flex flex-col">
            <h1 className="text-white text-xl md:text-2xl p-4 font-bold">
              Education
            </h1>

            <div className="w-full max-w-4xl rounded-2xl p-4 md:p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-600/20">
                <img
                  src="/mortarboard.png"
                  alt="education"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h2 className="text-white text-lg md:text-xl font-semibold">
                  NIELIT Agartala{" "}
                  <span className="text-slate-400 text-sm">(Pursuing)</span>
                </h2>

                <span className="text-slate-400 text-sm mt-1">
                  2023 – 2026
                </span>

                <p className="text-slate-300 mt-2 text-sm md:text-base">
                  Bachelor of Computer Applications (BCA)
                </p>
              </div>
            </div>
          </div>
        </StaggerChild>
      </div>
    </div>
  );
}
