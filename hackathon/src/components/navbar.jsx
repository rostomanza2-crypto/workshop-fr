import React from "react";
import Moon from "../assets/moon_icon.svg";
import Sun from "../assets/sun_icon.svg";
import Darklogo from "../assets/screen-removebg-preview (2).png";
import Lightlogo from "../assets/screen-removebg-preview (3).png";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const isLight = theme === "light";

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const navOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex justify-between px-20 h-18 w-full items-center fixed top-0 left-0 z-50 transition-all duration-300
      ${isLight ? "bg-white/70 text-gray-900" : "bg-gray-900/70 text-white"}`}
    >
      <div>
        <img
          src={`${isLight ? Darklogo : Lightlogo}`}
          className={`${isLight ? "w-58" : "w-60"}`}
          alt='logo'
        />
      </div>

      <div>
        <li className='flex gap-10 items-center list-none'>
          <a
            href='#home'
            onClick={(e) => scrollToSection(e, "home")}
            className={`text-[18px] hover:scale-110 transition-all duration-300 border-b-1 ${
              isLight ? "text-gray-600" : "text-white"
            }`}
          >
            Home
          </a>
          <a
            href='#about'
            onClick={(e) => scrollToSection(e, "about")}
            className={`text-[18px] hover:scale-110 transition-all duration-300 border-b-1 ${
              isLight ? "text-gray-600" : "text-white"
            }`}
          >
            About us
          </a>
          <a
            href='#features'
            onClick={(e) => scrollToSection(e, "features")}
            className={`text-[18px] hover:scale-110 transition-all duration-300 border-b-1 ${
              isLight ? "text-gray-600" : "text-white"
            }`}
          >
            Features
          </a>
          <a
            href='#testimonials'
            onClick={(e) => scrollToSection(e, "testimonials")}
            className={`text-[18px] hover:scale-110 transition-all duration-300 border-b-1 ${
              isLight ? "text-gray-600" : "text-white"
            }`}
          >
            Testimonials
          </a>
          <a
            href='#contact'
            onClick={(e) => scrollToSection(e, "contact")}
            className={`text-[18px] hover:scale-110 transition-all duration-300 border-b-1 ${
              isLight ? "text-gray-600" : "text-white"
            }`}
          >
            Contact us
          </a>
        </li>
      </div>

      <div className='flex gap-5 items-center'>
        <button
          onClick={() => setTheme(isLight ? "dark" : "light")}
          className={` border-1 rounded-full p-2 flex items-center justify-center hover:scale-110 transition-all duration-300 ${
            isLight ? "bg-white border-gray-600" : "bg-black border-gray-300"
          }`}
        >
          <img src={isLight ? Moon : Sun} alt='theme icon' />
        </button>

        <button
          className={`py-3 px-5 rounded-2xl hover:scale-110 transition-all duration-300 ${
            isLight ? "bg-blue-600 text-white" : "bg-blue-600 text-black"
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
