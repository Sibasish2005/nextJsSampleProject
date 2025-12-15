"use client"
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Particles from "./components/particleBackround";
import Education from "./components/education";
import DarkVeil from "./components/darkveil";


export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-0 ">
              <DarkVeil/>
            </div>
      {/* Background particles */}
      
     

      {/* Navbar  */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Content*/}
      <main className="relative z-10 pt-20">
        <Hero />
        <Grid />
       
        
      
        
      </main>

      



    </div>
  );
}
