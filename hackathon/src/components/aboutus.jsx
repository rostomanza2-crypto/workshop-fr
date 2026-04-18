import React from "react";
import screen from "../assets/screen.png";
import second from "../assets/yaw.png";
import third from "../assets/....png";
import { motion } from "framer-motion";

const sections = [
  {
    title: "The New Way to Shop",
    body: "We created AutoReply to bring you the freshest fits without the wait. Say goodbye to clunky websites — shop straight from our Instagram. Our system gives you instant info on prices, fast livraison, and immediate order confirmation 24/7. Just pick your style, drop us a DM, and we'll handle the rest.",
    img: screen,
    imgRight: true,
  },
  {
    title: "Effortless Style, Instant Service",
    body: "At AutoReply, we believe upgrading your wardrobe should be simple. That's why we operate directly through your messages. Browse our latest collections and let our automated system instantly confirm your order, secure your items, and give you all the delivery details you need. High-quality clothing, zero hassle.",
    img: second,
    imgRight: false,
  },
  {
    title: "Premium Fits, Delivered Fast",
    body: "Welcome to AutoReply. We're dedicated to bringing you top-tier clothing with the fastest checkout in the game. Forget waiting around for replies — our DM system lets you reserve your items, check shipping times, and confirm your order in seconds. Tap in, get styled, and get it delivered.",
    img: third,
    imgRight: true,
  },
];

const AboutUs = ({ theme }) => {
  const isLight = theme === "light";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id='about'
      style={{
        padding: "7rem 5rem",
        background: isLight ? "#FFFFFF" : "#08080C",
        transition: "background 0.3s ease",
        display: "flex",
        flexDirection: "column",
        gap: "7rem",
      }}
    >
      {/* Section header */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ textAlign: "center" }}
      >
        <motion.span
          variants={itemVariants}
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2563EB",
            marginBottom: "0.75rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Who we are
        </motion.span>
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-2px",
            color: isLight ? "#111827" : "#F9FAFB",
            margin: "0 0 1rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          About{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AutoReply
          </span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "1.1rem",
            color: isLight ? "#6B7280" : "#9CA3AF",
            maxWidth: 520,
            margin: "0 auto",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.65,
          }}
        >
          Built to help clothing sellers manage messages and orders on social
          media more efficiently.
        </motion.p>
      </motion.div>

      {/* Alternating feature rows */}
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            flexDirection: section.imgRight ? "row" : "row-reverse",
          }}
        >
          {/* Text side */}
          <motion.div
            variants={itemVariants}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Step badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                width: "fit-content",
                padding: "5px 12px",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "rgba(37,99,235,0.08)",
                color: "#2563EB",
                border: "1px solid rgba(37,99,235,0.2)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              0{idx + 1}
            </span>

            <h3
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: isLight ? "#111827" : "#F9FAFB",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.1,
              }}
            >
              {section.title}
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: isLight ? "#6B7280" : "#9CA3AF",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 480,
              }}
            >
              {section.body}
            </p>
          </motion.div>

          {/* Image side */}
          <motion.div
            variants={itemVariants}
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: isLight
                  ? "0 24px 60px rgba(37,99,235,0.12), 0 8px 20px rgba(0,0,0,0.08)"
                  : "0 24px 60px rgba(0,0,0,0.4)",
                border: isLight
                  ? "1px solid rgba(0,0,0,0.07)"
                  : "1px solid rgba(255,255,255,0.07)",
                transition: "transform 0.4s ease",
                maxWidth: 420,
                width: "100%",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "scale(1.03) translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1) translateY(0)")
              }
            >
              <img
                src={section.img}
                alt={section.title}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default AboutUs;
