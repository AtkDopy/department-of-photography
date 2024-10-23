import Hero from "./Hero";
import Gallery from "./Gallery";
import About from "./Memories";
import Por from "./Por";

import React from "react";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Por />
      <Gallery />
    </div>
  );
}

export default Home;
