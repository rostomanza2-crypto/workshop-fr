import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  const isLight = theme === "light";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const navColumns = [
    {
      title: "Product",
      links: [
        { label: "Home", href: "/" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Get Started", href: "/get-started" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
        { label: "Press Kit", href: "#press" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "FAQ", href: "#faq" },
        { label: "API Docs", href: "#docs" },
        { label: "Status", href: "#status" },
        { label: "Community", href: "#community" },
      ],
    },
  ];

  const socials = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com",
      color: "#E1306C",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
          <circle cx='12' cy='12' r='4' />
          <circle cx='17.5' cy='6.5' r='1' fill='currentColor' stroke='none' />
        </svg>
      ),
    },
    {
      id: "twitter",
      label: "X / Twitter",
      href: "https://twitter.com",
      color: "#1DA1F2",
      icon: (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com",
      color: "#1877F2",
      icon: (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "#0A66C2",
      icon: (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      ),
    },
  ];

  const bg = isLight ? "#F9FAFB" : "#0D0D14";
  const cardBg = isLight ? "#FFFFFF" : "#13131C";
  const borderColor = isLight ? "#E5E7EB" : "rgba(255,255,255,0.07)";
  const textPrimary = isLight ? "#111827" : "#F9FAFB";
  const textSecondary = isLight ? "#6B7280" : "#9CA3AF";
  const textMuted = isLight ? "#9CA3AF" : "#6B7280";

  return (
    <footer
      style={{
        background: bg,
        borderTop: `1px solid ${borderColor}`,
        fontFamily: "'DM Sans', sans-serif",
        transition: "background 0.3s ease",
      }}
    >
      {/* Top gradient accent line */}
      <div
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, #2563EB 0%, #06B6D4 50%, #2563EB 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .footer-link {
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .footer-link:hover {
          transform: translateX(3px);
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .footer-top { flex-direction: column !important; gap: 3rem !important; }
          .footer-bottom { flex-direction: column !important; gap: 1rem !important; text-align: center; }
          .footer-bottom-links { justify-content: center !important; }
          .footer-main { padding: 3rem 1.5rem !important; }
          .footer-newsletter { max-width: 100% !important; }
          .footer-brand { max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .newsletter-row { flex-direction: column !important; }
          .newsletter-row input, .newsletter-row button { width: 100% !important; }
        }
      `}</style>

      {/* Main body */}
      <div
        className='footer-main'
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "5rem 2.5rem 3rem",
        }}
      >
        {/* Top section: Brand + Nav columns */}
        <div
          className='footer-top'
          style={{
            display: "flex",
            gap: "4rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
          }}
        >
          {/* Brand column */}
          <div
            className='footer-brand'
            style={{ minWidth: 260, maxWidth: 300, flex: "0 0 auto" }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: textPrimary,
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AutoReply
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: 14,
                color: textSecondary,
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              The smartest AI chatbot for Algerian clothing stores. Automate
              replies, close more sales, and sleep better — all in under 2
              minutes of setup.
            </p>

            {/* Contact emails */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: "1.75rem",
              }}
            >
              {[
                { icon: "✉️", text: "support@autoreply.dz" },
                { icon: "✉️", text: "business@autoreply.dz" },
              ].map((c) => (
                <a
                  key={c.text}
                  href={`mailto:${c.text}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: textSecondary,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#2563EB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = textSecondary)
                  }
                >
                  <span>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={s.label}
                  onMouseEnter={() => setHoveredSocial(s.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    border: `1px solid ${hoveredSocial === s.id ? s.color + "66" : borderColor}`,
                    background:
                      hoveredSocial === s.id
                        ? isLight
                          ? `${s.color}12`
                          : `${s.color}20`
                        : cardBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: hoveredSocial === s.id ? s.color : textMuted,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    transform:
                      hoveredSocial === s.id ? "translateY(-2px)" : "none",
                    boxShadow:
                      hoveredSocial === s.id
                        ? `0 6px 16px ${s.color}30`
                        : "none",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div
            className='footer-grid'
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "3rem",
              flex: 1,
            }}
          >
            {navColumns.map((col) => (
              <div key={col.title}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#2563EB",
                    marginBottom: "1.1rem",
                  }}
                >
                  {col.title}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {col.links.map((link) => {
                    const key = `${col.title}-${link.label}`;
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className='footer-link'
                          onMouseEnter={() => setHoveredLink(key)}
                          onMouseLeave={() => setHoveredLink(null)}
                          style={{
                            fontSize: 14,
                            color:
                              hoveredLink === key ? "#2563EB" : textSecondary,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            transition: "color 0.2s ease, transform 0.2s ease",
                            transform:
                              hoveredLink === key ? "translateX(3px)" : "none",
                          }}
                        >
                          {hoveredLink === key && (
                            <span style={{ fontSize: 10, color: "#2563EB" }}>
                              →
                            </span>
                          )}
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <div
          className='footer-newsletter'
          style={{
            background: isLight
              ? "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(6,182,212,0.05) 100%)"
              : "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(6,182,212,0.08) 100%)",
            border: `1px solid ${isLight ? "rgba(37,99,235,0.12)" : "rgba(37,99,235,0.2)"}`,
            borderRadius: 20,
            padding: "2rem 2.5rem",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 260px" }}>
            <p
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: textPrimary,
                margin: "0 0 4px",
                letterSpacing: "-0.3px",
              }}
            >
              Stay in the loop 📬
            </p>
            <p style={{ fontSize: 13, color: textSecondary, margin: 0 }}>
              Tips, new features, and exclusive offers for store owners.
            </p>
          </div>

          <div style={{ flex: "1 1 320px", maxWidth: 420 }}>
            {subscribed ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 50,
                  padding: "12px 20px",
                }}
              >
                <span style={{ fontSize: 18 }}>✅</span>
                <span
                  style={{ fontSize: 14, fontWeight: 600, color: "#22C55E" }}
                >
                  You're subscribed! Yatikom saha 🎉
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className='newsletter-row'
                style={{ display: "flex", gap: 8 }}
              >
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='your@email.com'
                  required
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 50,
                    border: `1.5px solid ${borderColor}`,
                    background: cardBg,
                    color: textPrimary,
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                  onBlur={(e) => (e.target.style.borderColor = borderColor)}
                />
                <button
                  type='submit'
                  style={{
                    padding: "12px 22px",
                    borderRadius: 50,
                    border: "none",
                    background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(37,99,235,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(37,99,235,0.35)";
                  }}
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ height: 1, background: borderColor, marginBottom: "2rem" }}
        />

        {/* Bottom bar */}
        <div
          className='footer-bottom'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: 13, color: textMuted, margin: 0 }}>
            © {new Date().getFullYear()} AutoReply. All rights reserved. Made
            with ❤️ in Algeria 🇩🇿
          </p>

          <div
            className='footer-bottom-links'
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href='#'
                  style={{
                    fontSize: 13,
                    color: textMuted,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#2563EB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = textMuted)
                  }
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
