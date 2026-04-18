import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ theme }) => {
  const isLight = theme === "light";
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwXLrYuhR7vPW7PfXD6LXGLJ4fZqxnenbtm-WMBnRoMATFfL2WOPr4O4HqxUR_SwP2nTg/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    Object.entries(formData).forEach(([k, v]) => form.append(k, v));
    try {
      await fetch(scriptURL, { method: "POST", body: form });
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const inputStyle = (isLight) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: isLight
      ? "1.5px solid #E5E7EB"
      : "1.5px solid rgba(255,255,255,0.1)",
    background: isLight ? "#F9FAFB" : "rgba(255,255,255,0.04)",
    color: isLight ? "#111827" : "#F9FAFB",
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
  });

  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      id='contact'
      style={{
        padding: "7rem 4rem",
        background: isLight ? "#F9FAFB" : "#0D0D14",
        transition: "background 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
            Get in touch
          </span>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              color: isLight ? "#111827" : "#F9FAFB",
              margin: "0 0 1rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Reach out to us
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: isLight ? "#6B7280" : "#9CA3AF",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.6,
            }}
          >
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          variants={itemVariants}
          style={{
            background: isLight ? "#FFFFFF" : "#13131C",
            border: isLight
              ? "1px solid #E5E7EB"
              : "1px solid rgba(255,255,255,0.07)",
            borderRadius: 24,
            padding: "2.5rem",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  margin: "0 auto 1rem",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: isLight ? "#111827" : "#F9FAFB",
                  fontFamily: "'DM Sans', sans-serif",
                  margin: "0 0 0.5rem",
                }}
              >
                Message sent!
              </h3>
              <p
                style={{
                  color: isLight ? "#6B7280" : "#9CA3AF",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                }}
              >
                We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSent(false)}
                style={{
                  marginTop: "1.5rem",
                  padding: "10px 22px",
                  borderRadius: 50,
                  border: "1.5px solid #2563EB",
                  background: "transparent",
                  color: "#2563EB",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: isLight ? "#6B7280" : "#9CA3AF",
                      marginBottom: 6,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Your name
                  </label>
                  <input
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    type='text'
                    placeholder='Yacine Benali'
                    required
                    style={inputStyle(isLight)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2563EB";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(37,99,235,0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isLight
                        ? "#E5E7EB"
                        : "rgba(255,255,255,0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: isLight ? "#6B7280" : "#9CA3AF",
                      marginBottom: 6,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    type='email'
                    placeholder='you@example.com'
                    required
                    style={inputStyle(isLight)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2563EB";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(37,99,235,0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isLight
                        ? "#E5E7EB"
                        : "rgba(255,255,255,0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: isLight ? "#6B7280" : "#9CA3AF",
                    marginBottom: 6,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell us about your store and what you need...'
                  required
                  rows={5}
                  style={{
                    ...inputStyle(isLight),
                    resize: "vertical",
                    minHeight: 140,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isLight
                      ? "#E5E7EB"
                      : "rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type='submit'
                disabled={loading}
                style={{
                  alignSelf: "flex-start",
                  padding: "13px 28px",
                  borderRadius: 50,
                  border: "none",
                  background: loading
                    ? isLight
                      ? "#D1D5DB"
                      : "#374151"
                    : "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  color: loading ? (isLight ? "#9CA3AF" : "#6B7280") : "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: loading
                    ? "none"
                    : "0 6px 20px rgba(37,99,235,0.35)",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform =
                      "scale(1.03) translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 28px rgba(37,99,235,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = loading
                    ? "none"
                    : "0 6px 20px rgba(37,99,235,0.35)";
                }}
              >
                {loading ? "Sending…" : "Send message →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
