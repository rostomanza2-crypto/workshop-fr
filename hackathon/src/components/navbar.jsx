import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"; // Added useLocation

import Moon from "../assets/moon_icon.svg";
import Sun from "../assets/sun_icon.svg";
import Darklogo from "../assets/screen-removebg-preview (2).png";
import Lightlogo from "../assets/screen-removebg-preview (3).png";

const Navbar = ({ theme, setTheme }) => {
  const isLight = theme === "light";
  const navigate = useNavigate();
  const location = useLocation(); // Gets current route path
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navOffset, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About us", id: "about" },
    { label: "Features", id: "features" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact us", id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4rem",
        height: "72px",
        transition: "all 0.4s ease",
        background: scrolled
          ? isLight
            ? "rgba(255,255,255,0.85)"
            : "rgba(8,8,12,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? isLight
            ? "1px solid rgba(0,0,0,0.07)"
            : "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      {/* Clickable Logo wordmark linking to home */}
      <Link
        to='/'
        onClick={(e) => {
          // If we are already on the home page, just scroll to top smoothly
          if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
            <path
              d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'
              fill='white'
              opacity='0.9'
            />
          </svg>
        </div>
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: isLight ? "#111827" : "#F9FAFB",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          AutoReply
        </span>
      </Link>

      {/* Nav Links */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: isLight ? "#4B5563" : "#9CA3AF",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
              onMouseLeave={(e) =>
                (e.target.style.color = isLight ? "#4B5563" : "#9CA3AF")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(isLight ? "dark" : "light")}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: isLight
              ? "1px solid #E5E7EB"
              : "1px solid rgba(255,255,255,0.12)",
            background: isLight ? "#F9FAFB" : "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontSize: 16,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isLight ? "🌙" : "☀️"}
        </button>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/get-started")}
          style={{
            padding: "10px 22px",
            borderRadius: 50,
            border: "none",
            background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "all 0.25s ease",
            boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(37, 99, 235, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px rgba(37, 99, 235, 0.35)";
          }}
        >
          Get Started →
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
