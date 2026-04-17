import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Features from "./components/features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={`${theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <div className='pt-18'>
        <Hero theme={theme} />
        <Aboutus theme={theme} />
        <Features theme={theme} />
        <Testimonials theme={theme} />
        <Contact theme={theme} />
      </div>
    </div>
  );
};

export default App;
