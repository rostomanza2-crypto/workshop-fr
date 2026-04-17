import React from "react";
import heroImg from "../assets/screen (1).png";
import { motion } from "framer-motion";

const Hero = ({ theme }) => {
  const isLight = theme === "light";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      id='home'
      className={`flex items-center w-full px-20 py-20 gap-10 transition-all duration-300 ${
        isLight ? "bg-white text-gray-700" : "bg-black text-gray-300"
      }`}
    >
      {/* TEXT SECTION */}
      {/* Removed motion and variants from this wrapper so the children get staggered individually */}
      <div className='w-1/2 flex flex-col gap-8'>
        <motion.span
          variants={itemVariants}
          className='text-7xl font-bold tracking-tight text-blue-600'
        >
          Always online, Always replying.
        </motion.span>

        <motion.span variants={itemVariants} className='text-4xl'>
          Automatically reply to messages on Instagram, messanger using a single
          intelligent system.
        </motion.span>

        <motion.span variants={itemVariants} className='text-[20px]'>
          Never miss a message again with smart automated responses across all
          social platforms.
        </motion.span>

        <motion.button
          variants={itemVariants}
          className={`py-3 px-5 rounded-2xl w-40 hover:scale-110 transition-all duration-300 ${
            isLight ? "bg-blue-600 text-white" : "bg-blue-600 text-black"
          }`}
        >
          Get Started
        </motion.button>
      </div>

      {/* IMAGE SECTION */}
      <motion.div variants={itemVariants} className='w-1/2 flex justify-center'>
        <img
          src={heroImg}
          alt='hero'
          className='hover:scale-105 transition-all duration-300 w-175 h-125 rounded-2xl'
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
