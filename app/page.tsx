"use client";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import DarkVeil from "./components/darkveil";
import About from "./components/about";
import Contact from "./components/contact";
import Profesional from "./components/profesional";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Content */}
      <main className="relative z-10 pt-24">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="professional">
          <Profesional />
        </section>

        <section id="projects">
          <Grid />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </div>
  );
}
