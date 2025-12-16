"use client";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Particles from "./components/particleBackround";
import Education from "./components/education";
import DarkVeil from "./components/darkveil";
import { motion } from "framer-motion";
import About from "./about/about";
import Contact from "./contact/contact";
import Profesional from "./components/profesional";

export default function Page() {
  return (
    <div className="relative min-h-screen h-auto overflow-hidden ">
      <div className="absolute inset-0 z-0 ">
        <DarkVeil />
      </div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      
      <main className="relative z-10 pt-20">
        <Hero />
        <About/>
        <Profesional/>
        <Grid />
        <Contact/>
        
      </main>
    </div>
  );
}
