import React from "react";
import StaggerChild from "./staggeredChild";

export default function Education() {
  return (
    <div className="bg-white/10 border border-gray-200 rounded-4xl p-20">
      <div className="m-50 my-10">
        <StaggerChild>
          <div className="flex flex-col">
            <h1 className="text-white text-2xl p-4 font-bold">Education</h1>
            <div
              className="
                w-full
                max-w-4xl
                rounded-2xl
                p-6
                shadow-lg
                flex
                items-center
                gap-6
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-full
                  bg-indigo-600/20
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-semibold">
                  NIELIT Agartala{" "}
                  <span className="text-slate-400">(Pursuing)</span>
                </h2>

                <span className="text-slate-400 text-sm mt-1">2023 – 2026</span>

                <p className="text-slate-300 mt-2">
                  Bachelor of Computer Applications (BCA)
                </p>
              </div>
            </div>
          </div>
        </StaggerChild>
      </div>
      <div className="m-50 my-10">
        <StaggerChild>
          <div className="flex flex-col">
            <h1 className="text-white text-2xl p-4 font-bold">Education</h1>
            <div
              className="
                w-full
                max-w-4xl
                rounded-2xl
                p-6
                shadow-lg
                flex
                items-center
                gap-6
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-full
                  bg-indigo-600/20
                "
              >
               <img src="/mortarboard.png" alt="" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-semibold">
                  NIELIT Agartala{" "}
                  <span className="text-slate-400">(Pursuing)</span>
                </h2>

                <span className="text-slate-400 text-sm mt-1">2023 – 2026</span>

                <p className="text-slate-300 mt-2">
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
