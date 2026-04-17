import React from "react";
import screen from "../assets/screen.png";
import second from "../assets/yaw.png";
import third from "../assets/....png";
import { motion } from "framer-motion";

const AboutUs = ({ theme }) => {
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
    <div
      id='about'
      className={`flex items-center flex-col px-20 justify-center py-20 transition-all duration-300 gap-60 ${
        isLight ? "bg-white text-gray-700" : "bg-black text-white"
      } `}
    >
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className='flex flex-col items-center'
      >
        <motion.span
          variants={itemVariants}
          className='text-7xl font-bold -mb-30 hover:scale-110 transition-all duration-300 text-blue-600'
        >
          About us
        </motion.span>
        <motion.span
          variants={itemVariants}
          className={`${isLight ? "text-gray-700" : "text-gray-400"} -my-20 -mb-30 mt-36`}
        >
          Built to help clothing sellers manage messages and orders on social
          media more efficiently.
        </motion.span>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className='flex gap-10 justify-around items-center mt--10'
      >
        <motion.div
          variants={itemVariants}
          className='flex flex-col gap-5 w-1/2 '
        >
          <span className='text-5xl font-bold tracking-tight text-blue-600'>
            The New Way to Shop
          </span>

          <span
            className={`text-2xl text-pretty ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            We created AutoReply to bring you the freshest fits without the
            wait. Say goodbye to clunky websites—shop straight from our
            Instagram. Our system gives you instant info on prices, fast
            livraison, and immediate order confirmation 24/7. Just pick your
            style, drop us a DM, and we'll handle the rest.
          </span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src={screen}
            alt=''
            className='w-[400px] h-[400px] rounded-full hover:scale-110 transition-all duration-300'
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className='flex gap-10 justify-around items-center'
      >
        <motion.div variants={itemVariants}>
          <img
            src={second}
            alt=''
            className='w-[400px] h-[400px] rounded-full hover:scale-110 transition-all duration-300'
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='flex flex-col gap-5 w-1/2'
        >
          <span className='text-5xl font-bold tracking-tight text-blue-600'>
            Effortless Style, Instant Service
          </span>

          <span
            className={`text-2xl text-pretty ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            At AutoReply, we believe upgrading your wardrobe should be simple.
            That’s why we operate directly through your messages. Browse our
            latest collections and let our automated system instantly confirm
            your order, secure your items, and give you all the delivery details
            you need. High-quality clothing, zero hassle.
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className='flex gap-10 justify-around items-center'
      >
        <motion.div
          variants={itemVariants}
          className='flex flex-col gap-5 w-1/2'
        >
          <span className='text-5xl font-bold tracking-tight text-blue-600'>
            Premium Fits, Delivered Fast
          </span>

          <span
            className={`text-2xl text-pretty ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Welcome to AutoReply. We’re dedicated to bringing you top-tier
            clothing with the fastest checkout in the game. Forget waiting
            around for replies—our DM system lets you reserve your items, check
            shipping times, and confirm your order in seconds. Tap in, get
            styled, and get it delivered.
          </span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src={third}
            alt=''
            className='w-[400px] h-[400px] rounded-full hover:scale-110 transition-all duration-300'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
