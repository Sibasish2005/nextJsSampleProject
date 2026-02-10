"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      alert("Message sent successfully ✅");
      setData({ name: "", email: "", message: "" });
    } catch (error: any) {
      alert(error.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full flex justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-3xl mx-6
          rounded-3xl
          bg-white/10
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
            Contact me if you have any query
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="
                w-full rounded-xl
                bg-black/30
                border border-white/20
                px-4 py-3
                text-white
                outline-none
                focus:border-white/50
              "
            />

            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="
                w-full rounded-xl
                bg-black/30
                border border-white/20
                px-4 py-3
                text-white
                outline-none
                focus:border-white/50
              "
            />
          </div>

          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            required
            className="
              w-full rounded-xl
              bg-black/30
              border border-white/20
              px-4 py-3
              text-white
              outline-none
              focus:border-white/50
              resize-none
            "
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            type="submit"
            className="
              w-full rounded-xl
              bg-white text-black
              font-semibold py-3
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
