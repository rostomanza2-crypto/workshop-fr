import React from "react";
import { motion } from "framer-motion";

const Features = ({ theme }) => {
  const isLight = theme === "light";

  const features = [
    {
      icon: "✦",
      label: "AI",
      title: "Smart AI Conversations",
      desc: "AutoReply understands customer messages instantly and replies like a real sales assistant across all platforms.",
      accent: "#2563EB",
      accentBg: "rgba(37,99,235,0.08)",
    },
    {
      icon: "⚡",
      label: "24/7",
      title: "Full Order Automation",
      desc: "Collects name, phone, product, size, color, and delivery info automatically — confirms orders without human work.",
      accent: "#06B6D4",
      accentBg: "rgba(6,182,212,0.08)",
    },
    {
      icon: "◈",
      label: "FIT",
      title: "Clothing Intelligence",
      desc: "Recommends the perfect size based on height and weight to reduce returns and improve customer satisfaction.",
      accent: "#8B5CF6",
      accentBg: "rgba(139,92,246,0.08)",
    },
    {
      icon: "◎",
      label: "FAST",
      title: "24/7 Instant Replies",
      desc: "Never miss a customer. AutoReply responds instantly at any time across Instagram, WhatsApp, Messenger, and Telegram.",
      accent: "#22C55E",
      accentBg: "rgba(34,197,94,0.08)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      id='features'
      style={{
        padding: "7rem 4rem",
        background: isLight ? "#F9FAFB" : "#0D0D14",
        transition: "background 0.3s ease",
      }}
    >
      {/* Section header */}
      <motion.div
        variants={itemVariants}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <span
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
          What we offer
        </span>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            color: isLight ? "#111827" : "#F9FAFB",
            margin: "0 0 1rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Everything you need to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            turn chats into sales.
          </span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: isLight ? "#6B7280" : "#9CA3AF",
            maxWidth: 480,
            margin: "0 auto",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.6,
          }}
        >
          Automate replies, orders, and customer support — all from one
          intelligent system.
        </p>
      </motion.div>

      {/* Feature cards grid - Now a motion.div to continue the animation chain */}
      <motion.div
        variants={containerVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            style={{
              background: isLight ? "#FFFFFF" : "#13131C",
              border: isLight
                ? "1px solid #E5E7EB"
                : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: "2rem 1.75rem",
              cursor: "default",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = isLight
                ? `0 20px 40px rgba(0,0,0,0.08)`
                : `0 20px 40px rgba(0,0,0,0.35)`;
              e.currentTarget.style.borderColor = feature.accent + "55";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = isLight
                ? "#E5E7EB"
                : "rgba(255,255,255,0.07)";
            }}
          >
            {/* Icon badge */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: feature.accentBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                marginBottom: "1.25rem",
                color: feature.accent,
                border: `1px solid ${feature.accent}22`,
              }}
            >
              {feature.icon}
            </div>

            {/* Label chip */}
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: feature.accent,
                background: feature.accentBg,
                padding: "3px 8px",
                borderRadius: 100,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {feature.label}
            </span>

            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: isLight ? "#111827" : "#F9FAFB",
                margin: "0.75rem 0 0.5rem",
                letterSpacing: "-0.3px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: isLight ? "#6B7280" : "#9CA3AF",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
