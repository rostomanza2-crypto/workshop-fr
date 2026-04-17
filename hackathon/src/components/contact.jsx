import React, { useState } from "react";
import arrows from "../assets/arrow_icon.svg";
import arrowsblack from "../assets/arrow_black.svg";
import email from "../assets/email_icon.svg";
import person from "../assets/person_icon.svg";
import { motion } from "framer-motion";

const Contact = ({ theme }) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwXLrYuhR7vPW7PfXD6LXGLJ4fZqxnenbtm-WMBnRoMATFfL2WOPr4O4HqxUR_SwP2nTg/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      alert("message sent successfully");
    } catch (err) {
      console.error(err);
      alert("error sending message");
    } finally {
      setLoading(false);
    }
  };

  const arrowIcon = theme === "dark" ? arrows : arrowsblack;

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
      className='flex flex-col items-center py-10'
    >
      <motion.div
        variants={itemVariants}
        className='flex flex-col items-center justify-center'
      >
        <span
          className={`${
            theme === "dark" ? "text-white" : "text-blue-700"
          } text-6xl font-bold mb-5`}
        >
          Reach out to us
        </span>

        <span
          className={`${
            theme === "dark" ? "text-gray-200" : "text-gray-500"
          } text-center max-w-2xl`}
        >
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </span>
      </motion.div>

      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className='flex flex-col items-center mt-16'
      >
        <div className='flex items-center gap-5'>
          <div className='flex gap-2 flex-col'>
            <span
              className={`${
                theme === "dark" ? "text-white" : "text-gray-600"
              } text-base`}
            >
              Your name
            </span>

            <div
              className={`${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              } flex gap-2 border p-2 rounded-lg`}
            >
              <img src={person} alt='' className='px-2' />

              <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                type='text'
                placeholder='Enter your name'
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-700"
                } bg-transparent w-80 outline-none`}
              />
            </div>
          </div>

          <div className='flex gap-2 flex-col'>
            <span
              className={`${
                theme === "dark" ? "text-white" : "text-gray-600"
              } text-base`}
            >
              Email id
            </span>

            <div
              className={`${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              } flex gap-2 border p-2 rounded-lg`}
            >
              <img src={email} alt='' className='px-2' />

              <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                type='email'
                placeholder='Enter your email'
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-700"
                } bg-transparent w-80 outline-none`}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1 mt-5 w-full'>
          <span
            className={`${
              theme === "dark" ? "text-white" : "text-gray-600"
            } text-base`}
          >
            Message
          </span>

          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter your message'
            className={`${
              theme === "dark"
                ? "border-gray-500 text-white"
                : "border-gray-300 text-gray-700"
            } flex gap-2 border p-2 w-full outline-none h-50 rounded-lg bg-transparent`}
          ></textarea>

          <button
            type='submit'
            disabled={loading}
            className='flex items-center bg-blue-700 gap-2 px-4 py-2.5 rounded-full mt-5 hover:scale-105 transition-all duration-300 w-36 justify-center'
          >
            <span className='text-white'>
              {loading ? "Sending..." : "Connect"}
            </span>
            <img src={arrowIcon} alt='' className='hidden md:block' />
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
