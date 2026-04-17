import React, { useEffect, useRef, useState } from "react";
import john from "../assets/Jon_Snow_Season_8.png";
import michal from "../assets/Micheal_Scofield.webp";
import ramiz from "../assets/ramiz.jpg";
import jamal from "../assets/jamal balmadi.jpg";
import { motion } from "framer-motion";

const Testimonials = ({ theme }) => {
  const isLight = theme === "light";
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const talk = [
    {
      name: "ramiz zerrouki",
      title: "Professional Footballer",
      message:
        "This bot completely changed how I handle my clothing page. I don’t waste time answering the same questions over and over about prices and sizes anymore. It replies instantly and keeps my customers engaged even when I’m busy.",
      photo: ramiz,
    },
    {
      name: "micheal scofield",
      title: "Professional Prison Escaper",
      message:
        "I’ve been able to manage orders way more smoothly since using this. It automatically confirms purchases and organizes everything in chat so I don’t lose track of customers or miss any sales.",
      photo: michal,
    },
    {
      name: "Jamal Balmadi",
      title: "CEO of Company",
      message:
        "What I like most is that I don’t have to stay online all the time anymore. Even when I’m offline, the bot responds to messages and handles basic customer requests, which honestly helped me sell more without extra effort.",
      photo: jamal,
    },
    {
      name: "John Snow",
      title: "King of the North",
      message:
        "Since I started using this bot, my response time dropped to almost zero. Customers get instant replies about products and orders, and I no longer feel overwhelmed during busy hours. It basically runs the chat side of my business for me.",
      photo: john,
    },
  ];

  const extendedTalk = [...talk, ...talk];

  const sectionBg = isLight ? "bg-white" : "bg-black";
  const textMain = isLight ? "text-gray-700" : "text-gray-300";
  const textSub = isLight ? "text-gray-700" : "text-gray-300";
  const borderColor = isLight ? "border-blue-600" : "border-blue-600";

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 1;

    const scrollLoop = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        const loopPoint =
          container.children[talk.length].offsetLeft - container.offsetLeft;

        if (container.scrollLeft >= loopPoint) {
          container.scrollLeft -= loopPoint;
        }
      }
      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, talk.length]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const loopPoint =
      container.children[talk.length].offsetLeft - container.offsetLeft;

    if (container.scrollLeft >= loopPoint) {
      container.scrollLeft -= loopPoint;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += loopPoint;
    }
  };

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
      id='testimonials'
      className={`flex justify-center py-20 flex-col items-center gap-6 text-center overflow-hidden scroll-mt-24 ${sectionBg}`}
    >
      <motion.span
        variants={itemVariants}
        className='text-7xl font-bold transition-all duration-300 text-blue-600'
      >
        Testimonials
      </motion.span>

      <motion.span
        variants={itemVariants}
        className={`${textSub} px-4 max-w-2xl`}
      >
        What sellers say about using our chatbot to handle customer messages,
        orders, and daily sales more efficiently.
      </motion.span>

      <motion.div
        variants={itemVariants}
        className='w-full max-w-6xl mt-10 px-4'
      >
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onScroll={handleScroll}
          className='flex gap-10 overflow-x-auto py-4 px-2'
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {extendedTalk.map((testimonial, index) => (
            <div
              key={index}
              className='min-w-[calc(50%-1.25rem)] shrink-0 flex justify-center'
            >
              <div
                className={`flex items-center justify-center border-2 ${borderColor} rounded-lg gap-6 px-4 py-4 w-full h-full transition-all duration-300 ease-in-out hover:scale-105 `}
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className='w-30 h-30 rounded-full object-cover shrink-0'
                />

                <div className='w-80 flex flex-col gap-3 text-left'>
                  <p className={`${textMain} italic border-b pb-2`}>
                    "{testimonial.message}"
                  </p>

                  <div className='flex flex-col items-start'>
                    <p className={`text-sm font-semibold text-blue-600`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs ${textSub}`}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
