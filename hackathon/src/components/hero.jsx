import React from "react";
import heroImg from "../assets/screen (1).png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = ({ theme }) => {
  const isLight = theme === "light";
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } },
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
    <motion.section
      initial='hidden'
      animate='show'
      variants={containerVariants}
      id='home'
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 5rem",
        gap: "4rem",
        background: isLight
          ? "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(37,99,235,0.06) 0%, transparent 70%), #ffffff"
          : "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(6,182,212,0.08) 0%, transparent 70%), #08080C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: isLight
            ? "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Left content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          zIndex: 1,
        }}
      >
        {/* Pill badge */}
        <motion.div variants={itemVariants}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              fontFamily: "'DM Sans', sans-serif",
              textTransform: "uppercase",
              background: isLight
                ? "rgba(37,99,235,0.08)"
                : "rgba(6,182,212,0.12)",
              color: isLight ? "#2563EB" : "#22D3EE",
              border: isLight
                ? "1px solid rgba(37,99,235,0.2)"
                : "1px solid rgba(6,182,212,0.25)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
                boxShadow: "0 0 6px #22C55E",
              }}
            />
            AI-Powered · Instant Replies
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-2px",
            color: isLight ? "#111827" : "#F9FAFB",
            fontFamily: "'DM Sans', sans-serif",
            margin: 0,
          }}
        >
          Always online,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            always replying.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.65,
            color: isLight ? "#6B7280" : "#9CA3AF",
            maxWidth: 480,
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Automatically reply to messages on Instagram &amp; Messenger using a
          single intelligent system. Never miss a sale again.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <button
            onClick={() => navigate("/get-started")}
            style={{
              padding: "14px 28px",
              borderRadius: 50,
              border: "none",
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              letterSpacing: "0.01em",
              boxShadow: "0 6px 24px rgba(37,99,235,0.4)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04) translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 10px 32px rgba(37,99,235,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(37,99,235,0.4)";
            }}
          >
            Get Started →
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            style={{
              padding: "14px 24px",
              borderRadius: 50,
              border: isLight
                ? "1.5px solid #E5E7EB"
                : "1.5px solid rgba(255,255,255,0.12)",
              background: "transparent",
              color: isLight ? "#374151" : "#D1D5DB",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2563EB";
              e.currentTarget.style.color = "#2563EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isLight
                ? "#E5E7EB"
                : "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = isLight ? "#374151" : "#D1D5DB";
            }}
          >
            See Features
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "0.5rem",
          }}
        >
          <div style={{ display: "flex" }}>
            {["#2563EB", "#06B6D4", "#8B5CF6", "#22C55E"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: c,
                  border: isLight ? "2px solid #fff" : "2px solid #08080C",
                  marginLeft: i ? -8 : 0,
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontSize: 13,
              color: isLight ? "#6B7280" : "#9CA3AF",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <strong style={{ color: isLight ? "#111827" : "#F9FAFB" }}>
              1,200+
            </strong>{" "}
            clothing stores trust AutoReply
          </span>
        </motion.div>
      </div>

      {/* Right: Hero image */}
      <motion.div
        variants={itemVariants}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: isLight
              ? "0 30px 80px rgba(37,99,235,0.18), 0 8px 24px rgba(0,0,0,0.1)"
              : "0 30px 80px rgba(6,182,212,0.2), 0 8px 24px rgba(0,0,0,0.4)",
            border: isLight
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.08)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02) translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
          }}
        >
          <img
            src={heroImg}
            alt='AutoReply dashboard preview'
            style={{
              display: "block",
              width: "100%",
              maxWidth: 560,
              height: "auto",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
