import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = ({ theme }) => {
  const isLight = theme === "light";
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const talk = [
    {
      name: "Amine Boukhalfa",
      title: "Saheb Page Fringue",
      message:
        "والله هذا الbot غير كلّي تعامل مع زبائني! حتى وقت ما نكونش present، يجاوب بدالي و يحكم الأمور. ما حضّرتش على sales ضايعة من بعدها 💪",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      initials: "AB",
      accent: "#2563EB",
      accentLight: "rgba(37,99,235,0.09)",
      stars: 5,
      tag: "أتمتة الطلبيات",
      metric: "ردود أسرع بـ 2×",
    },
    {
      name: "Selma Ouartsi",
      title: "Influencer & Revendeuse",
      message:
        "خدمة top macha'Allah 🔥 الزبائن يسقسيو على الأحجام والأسعار وهو يجاوبهم بالضبط. أنا ما عدتش نضيع وقتي في نفس الأسئلة كل يوم.",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      initials: "SO",
      accent: "#EC4899",
      accentLight: "rgba(236,72,153,0.09)",
      stars: 5,
      tag: "توفير وقت",
      metric: "‎-80% رسائل يدوية",
    },
    {
      name: "Yacine Terki",
      title: "Gérant Boutique Streetwear",
      message:
        "من وقت ما بدّلت هذا النظام، المبيعات تاعي زادو بزاف. الbot يفهم الزبون ويعاونه يختار مقاسه — كيما عندي vendeur حقيقي 24/7 😤",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
      initials: "YT",
      accent: "#06B6D4",
      accentLight: "rgba(6,182,212,0.09)",
      stars: 5,
      tag: "مبيعات نشطة",
      metric: "+40% conversions",
    },
    {
      name: "Rania Messaoud",
      title: "مسيّرة متجر أونلاين",
      message:
        "كنت نخسر زبائن بسبب ردود بطيئة. دروك الbot يرد في ثانية وحدة! ربحت وقت وكسبت ثقة الزبائن. نوصي بيه لكل واحد عندو page 👌",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      initials: "RM",
      accent: "#8B5CF6",
      accentLight: "rgba(139,92,246,0.09)",
      stars: 5,
      tag: "ردود فورية",
      metric: "< 1s response",
    },
    {
      name: "Khalil Zenati",
      title: "Drop Shipper",
      message:
        "صراحة ما توقّعتش يكون هكذا سهل. كليك وحدة وخلاص — الbot يتكفّل بالأسئلة، الطلبيات، حتى التأكيدات. أنا ما بقيتش نحتاج نكون online طول الوقت 🙏",
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
      initials: "KZ",
      accent: "#22C55E",
      accentLight: "rgba(34,197,94,0.09)",
      stars: 5,
      tag: "دائماً متاح",
      metric: "Always online",
    },
    {
      name: "Imane Bensalem",
      title: "Revendeuse Hijab & Mode",
      message:
        "الزبائنات تاعي راضيات بزاف! كل واحدة تسأل على اللون ولا المقاس، والbot يجاوب بالصح على طول. شعرت بالفرق من أول أسبوع 😍",
      photo: "https://randomuser.me/api/portraits/women/26.jpg",
      initials: "IB",
      accent: "#F59E0B",
      accentLight: "rgba(245,158,11,0.09)",
      stars: 5,
      tag: "رضا الزبائن",
      metric: "98% satisfaction",
    },
    {
      name: "Sofiane Hadjadj",
      title: "Entrepreneur E-commerce",
      message:
        "كنت نتصوّر لازم يكون معقّد — ولاكن لا، ضبّطتو في دقيقتين وكاين! الbot يحكم الفيس تاعي كيما nhuman. bravo على الفكرة هذي 👏",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      initials: "SH",
      accent: "#EF4444",
      accentLight: "rgba(239,68,68,0.09)",
      stars: 5,
      tag: "سهولة الإعداد",
      metric: "إعداد في دقيقتين",
    },
    {
      name: "Nadia Cherif",
      title: "Gérante Boutique Femmes",
      message:
        "الbot يكتب بالدارجة — الزبائن يحسّو راهو يهضرو مع واحد منهم! هذا اللي فرّق معايا أكثر. بيزنس تاعي زاد من بعد ما بدّلت 🤝",
      photo: "https://randomuser.me/api/portraits/women/57.jpg",
      initials: "NC",
      accent: "#14B8A6",
      accentLight: "rgba(20,184,166,0.09)",
      stars: 5,
      tag: "تواصل طبيعي",
      metric: "+35% retention",
    },
  ];

  const extendedTalk = [...talk, ...talk, ...talk];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationId;
    const scrollLoop = () => {
      if (!isPaused) {
        container.scrollLeft += 0.7;
        const loopPoint =
          container.children[talk.length]?.offsetLeft - container.offsetLeft;
        if (loopPoint && container.scrollLeft >= loopPoint) {
          container.scrollLeft -= loopPoint;
        }
      }
      animationId = requestAnimationFrame(scrollLoop);
    };
    animationId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, talk.length]);

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

  const stats = [
    { value: "1,200+", label: "Stores using AutoReply" },
    { value: "98%", label: "Satisfaction rate" },
    { value: "< 1s", label: "Average reply time" },
    { value: "3×", label: "More sales on average" },
  ];

  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id='testimonials'
      style={{
        padding: "7rem 0 5rem",
        background: isLight ? "#F9FAFB" : "#0D0D14",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      <motion.div
        variants={itemVariants}
        style={{
          textAlign: "center",
          marginBottom: "3.5rem",
          padding: "0 5rem",
        }}
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
          Social proof
        </span>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            color: isLight ? "#111827" : "#F9FAFB",
            margin: "0 0 1rem",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.1,
          }}
        >
          Loved by{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            clothing sellers
          </span>{" "}
          everywhere
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: isLight ? "#6B7280" : "#9CA3AF",
            maxWidth: 460,
            margin: "0 auto",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.65,
          }}
        >
          Real results from stores using AutoReply to handle customer messages,
          orders, and daily sales.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          display: "flex",
          margin: "0 5rem 3.5rem",
          background: isLight ? "#FFFFFF" : "#13131C",
          border: isLight
            ? "1px solid #E5E7EB"
            : "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "1.5rem 1rem",
              borderRight:
                i < stats.length - 1
                  ? isLight
                    ? "1px solid #E5E7EB"
                    : "1px solid rgba(255,255,255,0.07)"
                  : "none",
            }}
          >
            <p
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "-0.5px",
                background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontSize: 12,
                color: isLight ? "#9CA3AF" : "#6B7280",
                margin: "4px 0 0",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            zIndex: 2,
            pointerEvents: "none",
            background: isLight
              ? "linear-gradient(to right, #F9FAFB 20%, transparent)"
              : "linear-gradient(to right, #0D0D14 20%, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            zIndex: 2,
            pointerEvents: "none",
            background: isLight
              ? "linear-gradient(to left, #F9FAFB 20%, transparent)"
              : "linear-gradient(to left, #0D0D14 20%, transparent)",
          }}
        />
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIdx(null);
          }}
          style={{
            display: "flex",
            gap: "1.1rem",
            overflowX: "auto",
            padding: "1rem 5rem 2.5rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isPaused ? "grab" : "default",
            alignItems: "stretch",
          }}
        >
          {extendedTalk.map((t, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  minWidth: 248,
                  maxWidth: 248,
                  flexShrink: 0,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: isHovered
                    ? `1.5px solid ${t.accent}66`
                    : isLight
                      ? "1px solid #E5E7EB"
                      : "1px solid rgba(255,255,255,0.07)",
                  background: isLight ? "#FFFFFF" : "#13131C",
                  transition:
                    "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.25s ease",
                  transform: isHovered
                    ? "translateY(-10px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? isLight
                      ? `0 28px 56px rgba(0,0,0,0.11), 0 4px 16px ${t.accent}28`
                      : `0 28px 56px rgba(0,0,0,0.45), 0 4px 16px ${t.accent}44`
                    : isLight
                      ? "0 2px 8px rgba(0,0,0,0.04)"
                      : "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    background: `linear-gradient(160deg, ${t.accent}22 0%, ${t.accent}08 100%)`,
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: -30,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${t.accent}33 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${t.accent}, ${t.accent}55)`,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: t.accent,
                      background: isLight
                        ? "rgba(255,255,255,0.85)"
                        : "rgba(19,19,28,0.85)",
                      padding: "4px 9px",
                      borderRadius: 100,
                      fontFamily: "'DM Sans', sans-serif",
                      border: `1px solid ${t.accent}33`,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {t.tag}
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <svg
                        key={si}
                        width='10'
                        height='10'
                        viewBox='0 0 24 24'
                        fill={t.accent}
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                      </svg>
                    ))}
                  </div>
                  {/* Avatar circle */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translate(-50%, 40%)",
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: `3px solid ${isLight ? "#FFFFFF" : "#13131C"}`,
                      boxShadow: `0 0 0 3px ${t.accent}44, 0 8px 24px rgba(0,0,0,0.18)`,
                      background: t.accentLight,
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextSibling)
                          e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      style={{
                        display: "none",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        fontWeight: 800,
                        color: t.accent,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {t.initials}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: "2.6rem 1.25rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    flex: 1,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: isLight ? "#111827" : "#F9FAFB",
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: isLight ? "#9CA3AF" : "#6B7280",
                        margin: "3px 0 0",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {t.title}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: t.accent,
                        background: t.accentLight,
                        border: `1px solid ${t.accent}28`,
                        padding: "5px 14px",
                        borderRadius: 100,
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: "0.02em",
                      }}
                    >
                      ↑ {t.metric}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: 1,
                        background: isLight
                          ? "#F3F4F6"
                          : "rgba(255,255,255,0.06)",
                      }}
                    />
                    <svg
                      width='16'
                      height='12'
                      viewBox='0 0 28 20'
                      fill='none'
                      style={{ opacity: 0.25, flexShrink: 0 }}
                    >
                      <path
                        d='M0 20V12C0 5.333 3.333 1.333 10 0l1.5 2.5C8.167 3.667 6.333 5.667 6 8.5H11V20H0ZM17 20V12C17 5.333 20.333 1.333 27 0l1.5 2.5C25.167 3.667 23.333 5.667 23 8.5H28V20H17Z'
                        fill={t.accent}
                      />
                    </svg>
                    <div
                      style={{
                        flex: 1,
                        height: 1,
                        background: isLight
                          ? "#F3F4F6"
                          : "rgba(255,255,255,0.06)",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.845rem",
                      lineHeight: 1.75,
                      color: isLight ? "#4B5563" : "#D1D5DB",
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                      flex: 1,
                      direction: "rtl",
                    }}
                  >
                    {t.message}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                      paddingTop: "0.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: t.accentLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${t.accent}33`,
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width='9'
                        height='9'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke={t.accent}
                        strokeWidth='2.8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                        <polyline points='22 4 12 14.01 9 11.01' />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        color: isLight ? "#9CA3AF" : "#6B7280",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Verified customer
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{ textAlign: "center", marginTop: "2rem", padding: "0 5rem" }}
      >
        <p
          style={{
            fontSize: 14,
            color: isLight ? "#9CA3AF" : "#6B7280",
            fontFamily: "'DM Sans', sans-serif",
            margin: "0 0 1rem",
          }}
        >
          Join 1,200+ stores already automating their sales
        </p>
        <button
          onClick={() => (window.location.href = "/get-started")}
          style={{
            padding: "12px 28px",
            borderRadius: 50,
            border: "none",
            background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04) translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 10px 28px rgba(37,99,235,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)";
          }}
        >
          Get started free →
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
