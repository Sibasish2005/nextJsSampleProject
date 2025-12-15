"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import DarkVeil from "./darkveil";

export default function Hero() {
  return (
    <div
      className=" relative overflow-hidden h-screen"
    >
      

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between h-full px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:ml-20 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full"
        >
          <h1 className="text-4xl md:text-6xl text-white">Hi,</h1>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            I'm
            <span className="">
              {" "}
              <TypeAnimation
                sequence={["Sibasish  Chakraborti", 1500, "", 800]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="text-4xl md:text-6xl text-yellow-600 mt-3"
              />
            </span>
           
          </h1>

          {/* used react-type-animation */}
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
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl text-sky-400 mt-3"
          />
        </motion.div>
      </div>
    </div>
  );
}
