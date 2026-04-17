import React from "react";
import { motion } from "framer-motion";

const Features = ({ theme }) => {
  const isLight = theme === "light";

  const features = [
    {
      label: "AI",
      title: "Smart AI Conversations",
      desc: "AutoReply understands customer messages instantly and replies like a real sales assistant across all platforms.",
    },
    {
      label: "24/7",
      title: "Full Order Automation",
      desc: "Collects name, phone, product, size, color, and delivery info automatically and confirms orders without human work.",
    },
    {
      label: "FIT",
      title: "Clothing Intelligence",
      desc: "Recommends the perfect size based on height and weight to reduce returns and improve customer satisfaction.",
    },
    {
      label: "FAST",
      title: "24/7 Instant Replies",
      desc: "Never miss a customer. AutoReply responds instantly at any time across Instagram, WhatsApp, Messenger, and Telegram.",
    },
  ];

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
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      id='features'
      className={`w-full py-30 px-6 transition-all duration-300 ${
        isLight ? "bg-white text-gray-700" : "bg-black text-white"
      }`}
    >
      <motion.div
        variants={itemVariants}
        className='max-w-6xl mx-auto text-center mb-12'
      >
        <h2 className='text-7xl font-bold mb-8 hover:scale-110 transition-all duration-300 text-blue-600'>
          Features
        </h2>

        <p className={`${isLight ? "text-gray-700" : "text-gray-400"}`}>
          Everything you need to turn chats into sales automatically.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'
      >
        {features.map((feature, idx) => {
          return (
            <motion.div
              variants={itemVariants}
              key={idx}
              className={`rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 border hover:scale-110 transition-all duration-300 ${
                isLight
                  ? "bg-white border-blue-600"
                  : "bg-gray-900 border-blue-600"
              }`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-sm font-bold ${
                  isLight
                    ? "bg-gray-100 text-gray-700"
                    : "bg-gray-800 text-white"
                }`}
              >
                {feature.label}
              </div>

              <h3 className='text-lg font-semibold mb-2 text-blue-600'>
                {feature.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  isLight ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Features;
