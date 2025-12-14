import React from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";

export default function Page() {
  return (
    <div className=" bg-gradient-to-l from-sky-700 to-indigo-950">
      <Hero />
      <Grid/>
    </div>
  );
}
