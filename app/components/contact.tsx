"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full  flex justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-3xl
          mx-6
          rounded-3xl
          
          bg-white/6
          backdrop-blur-xl
          p-8 md:p-12
        
        "
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Me
          </h2>
          <p className="text-white/70 mt-2">
           Contact me if you have any Query
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full rounded-xl
                bg-black/30
                border border-white/20
                px-4 py-3
                text-white
                outline-none
                focus:border-white/50
                transition
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full rounded-xl
                bg-black/30
                border border-white/20
                px-4 py-3
                text-white
                outline-none
                focus:border-white/50
                transition
              "
            />
          </div>

          <textarea
            rows={5}
            placeholder="Your Message"
            className="
              w-full rounded-xl
              bg-black/30
              border border-white/20
              px-4 py-3
              text-white
              outline-none
              focus:border-white/50
              transition
              resize-none
            "
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full
              rounded-xl
              bg-white text-black
              font-semibold
              py-3
              transition
             
            "
            type="button"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
