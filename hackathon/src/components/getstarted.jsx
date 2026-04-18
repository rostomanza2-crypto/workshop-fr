import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TOTAL_STEPS = 4;

const chatMessages = [
  { from: "customer", text: "عندك هاد الهودي في مقاس M؟" },
  {
    from: "bot",
    text: "إيه، مقاس M كاين ✅ يناسب من 170 حتى 180 سم. تحب نحجزهولك؟",
  },
  { from: "customer", text: "بشحال؟" },
  { from: "bot", text: "بـ 4500 دج. التوصيل متاح في 48 ساعة 🚚" },
];

const clothingTypes = [
  { id: "mens", label: "Men's clothing", icon: "👔" },
  { id: "womens", label: "Women's clothing", icon: "👗" },
  { id: "streetwear", label: "Streetwear", icon: "🧢" },
  { id: "mixed", label: "Mixed store", icon: "🛍️" },
];

// ---------- Sub-components ----------

function ProgressBar({ step }) {
  const percent = step === 0 ? 0 : Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div
      style={{
        width: "100%",
        height: 3,
        background: "#F3F4F6",
        borderRadius: 99,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${percent}%`,
          background: "linear-gradient(90deg, #2563EB, #06B6D4)",
          borderRadius: 99,
          transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}

// -- Step 0: Entry --
function EntryScreen({ onStart }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "3rem 2rem 2.5rem",
        gap: "2rem",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 22,
            background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            boxShadow: "0 16px 40px rgba(37,99,235,0.35)",
          }}
        >
          🤖
        </div>
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#22C55E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 9,
            color: "#fff",
            fontWeight: 700,
            border: "2px solid #fff",
          }}
        >
          AI
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          maxWidth: 420,
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#2563EB",
            background: "rgba(37,99,235,0.08)",
            padding: "5px 12px",
            borderRadius: 100,
            border: "1px solid rgba(37,99,235,0.2)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          ⚡ Setup takes less than 2 minutes
        </span>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            color: "#111827",
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.1,
          }}
        >
          Set up your clothing store{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            chatbot
          </span>
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#6B7280",
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.65,
          }}
        >
          Automate orders, size questions, and product inquiries — in under 2
          minutes.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "13px 28px",
            borderRadius: 50,
            border: "2px solid #E5E7EB",
            background: "transparent",
            color: "#4B5563",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#9CA3AF";
            e.currentTarget.style.color = "#111827";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5E7EB";
            e.currentTarget.style.color = "#4B5563";
          }}
        >
          ← Go Back
        </button>

        <button
          onClick={onStart}
          style={{
            padding: "14px 32px",
            borderRadius: 50,
            border: "none",
            background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            boxShadow: "0 6px 24px rgba(37,99,235,0.4)",
            transition: "all 0.25s ease",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04) translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 10px 32px rgba(37,99,235,0.55)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.4)";
          }}
        >
          Start Setup →
        </button>
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {["Orders", "Sizing", "Delivery"].map((f) => (
          <span
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 13,
              color: "#9CA3AF",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ color: "#22C55E", fontWeight: 700 }}>✓</span> {f}
          </span>
        ))}
      </div>
    </div>
  );
}

// -- Step 1: Clothing type --
function StepOne({ selected, onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 0.35rem",
            letterSpacing: "-0.5px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          What do you sell?
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#9CA3AF",
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Select the category that best describes your store.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {clothingTypes.map((type) => {
          const isSelected = selected === type.label;
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.label)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "1.5rem 1rem",
                borderRadius: 16,
                border: isSelected
                  ? "2px solid #2563EB"
                  : "1.5px solid #E5E7EB",
                background: isSelected ? "rgba(37,99,235,0.05)" : "#FAFAFA",
                cursor: "pointer",
                transition: "all 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.borderColor = "#93C5FD";
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.borderColor = "#E5E7EB";
              }}
            >
              {isSelected && (
                <span
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
              )}
              <span style={{ fontSize: 28 }}>{type.icon}</span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: isSelected ? "#2563EB" : "#374151",
                  fontFamily: "'DM Sans', sans-serif",
                  textAlign: "center",
                }}
              >
                {type.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// -- Step 2: User info form --
function StepTwo({ formData, onChange }) {
  const fields = [
    {
      key: "firstName",
      label: "First Name",
      placeholder: "Yacine",
      type: "text",
      span: 1,
    },
    {
      key: "familyName",
      label: "Family Name",
      placeholder: "Benali",
      type: "text",
      span: 1,
    },
    {
      key: "storeName",
      label: "Store Name",
      placeholder: "MyFashion Store",
      type: "text",
      span: 2,
    },
    {
      key: "businessType",
      label: "Business Type",
      placeholder: "",
      type: "text",
      readOnly: true,
      span: 2,
    },
    {
      key: "email",
      label: "Email",
      placeholder: "you@example.com",
      type: "email",
      span: 1,
    },
    {
      key: "phone",
      label: "Phone Number",
      placeholder: "+213 6XX XXX XXX",
      type: "tel",
      span: 1,
    },
  ];

  const inputBase = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: "1.5px solid #E5E7EB",
    background: "#FAFAFA",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: "#111827",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 0.35rem",
            letterSpacing: "-0.5px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Tell us about your store
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#9CA3AF",
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          We'll personalize your chatbot based on your info.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.85rem",
        }}
      >
        {fields.map((f) => (
          <div
            key={f.key}
            style={{ gridColumn: f.span === 2 ? "1 / -1" : "auto" }}
          >
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#9CA3AF",
                marginBottom: 5,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {f.label}
            </label>
            <input
              type={f.type}
              value={formData[f.key] || ""}
              onChange={(e) => !f.readOnly && onChange(f.key, e.target.value)}
              readOnly={f.readOnly}
              placeholder={f.placeholder}
              style={{
                ...inputBase,
                background: f.readOnly ? "#F3F4F6" : "#FAFAFA",
                color: f.readOnly ? "#9CA3AF" : "#111827",
                cursor: f.readOnly ? "not-allowed" : "text",
              }}
              onFocus={(e) => {
                if (!f.readOnly) {
                  e.target.style.borderColor = "#2563EB";
                  e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                }
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#E5E7EB";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// -- Step 3: Chat Preview --
function ChatBubble({ msg, index }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 600 + 200);
    return () => clearTimeout(t);
  }, [index]);

  const isBot = msg.from === "bot";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        justifyContent: isBot ? "flex-start" : "flex-end",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      {isBot && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2563EB, #06B6D4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          🤖
        </div>
      )}
      <div
        style={{
          maxWidth: "75%",
          padding: "10px 14px",
          borderRadius: isBot ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          fontSize: 14,
          lineHeight: 1.55,
          fontFamily: "'DM Sans', sans-serif",
          background: isBot
            ? "#FFFFFF"
            : "linear-gradient(135deg, #2563EB, #06B6D4)",
          color: isBot ? "#374151" : "#fff",
          border: isBot ? "1px solid #E5E7EB" : "none",
          boxShadow: isBot
            ? "0 2px 8px rgba(0,0,0,0.06)"
            : "0 4px 12px rgba(37,99,235,0.3)",
          direction: "rtl",
          textAlign: "right",
        }}
      >
        {msg.text}
      </div>
      {!isBot && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#F3F4F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          🛒
        </div>
      )}
    </div>
  );
}

function StepThree() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 0.35rem",
            letterSpacing: "-0.5px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          See it in action 🔥
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#9CA3AF",
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Here's how your chatbot handles customer questions automatically.
        </p>
      </div>

      <div
        style={{
          borderRadius: 20,
          border: "1px solid #E5E7EB",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(37,99,235,0.1)",
        }}
      >
        {/* Chat header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            background: "#FFFFFF",
            borderBottom: "1px solid #F3F4F6",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2563EB, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            🤖
          </div>
          <div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#111827",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              autoReply
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: "#22C55E",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Online
              </span>
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 5 }}>
            {["#FCA5A5", "#FCD34D", "#86EFAC"].map((c, i) => (
              <span
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: c,
                  display: "block",
                }}
              />
            ))}
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "16px",
            background: "#F9FAFB",
            minHeight: 200,
          }}
        >
          {chatMessages.map((msg, i) => (
            <ChatBubble key={i} msg={msg} index={i} />
          ))}
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: "10px 14px",
            background: "#FFFFFF",
            borderTop: "1px solid #F3F4F6",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#F3F4F6",
              borderRadius: 12,
              padding: "9px 12px",
              fontSize: 13,
              color: "#9CA3AF",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Type a message…
          </div>
          <button
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, #2563EB, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width='14'
              height='14'
              fill='none'
              stroke='white'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// -- Step 4: Final --
function StepFour({ formData }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1.5rem",
        padding: "1.5rem 0",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 22,
          background: "linear-gradient(135deg, #22C55E, #06B6D4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          boxShadow: "0 16px 40px rgba(34,197,94,0.35)",
          animation: "bounce 1s ease infinite",
        }}
      >
        🚀
      </div>

      <div style={{ maxWidth: 380 }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 0.5rem",
            letterSpacing: "-0.8px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Your chatbot is ready!
        </h2>
        {formData.storeName && (
          <p
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#2563EB",
              margin: "0 0 0.5rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {formData.storeName}
          </p>
        )}
        <p
          style={{
            fontSize: 14,
            color: "#9CA3AF",
            margin: 0,
            lineHeight: 1.65,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Start automating your customer messages instantly — no technical
          skills required.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "100%",
          maxWidth: 300,
        }}
      >
        <button
          style={{
            padding: "14px",
            borderRadius: 50,
            border: "none",
            background: "linear-gradient(135deg, #2563EB, #06B6D4)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(37,99,235,0.4)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ✅ Activate My Chatbot
        </button>
        <button
          style={{
            padding: "13px",
            borderRadius: 50,
            border: "2px solid #2563EB",
            background: "transparent",
            color: "#2563EB",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(37,99,235,0.05)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🎁 Start Free Trial
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["Instant setup", "No code needed", "Cancel anytime"].map((t) => (
          <span
            key={t}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "#9CA3AF",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ color: "#22C55E" }}>✓</span> {t}
          </span>
        ))}
      </div>

      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
    </div>
  );
}

// ---------- Main ----------
export default function GetStarted() {
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    storeName: "",
    businessType: "",
    email: "",
    phone: "",
  });
  const [visible, setVisible] = useState(true);

  const goToStep = (next) => {
    setVisible(false);
    setTimeout(() => {
      setStep(next);
      setVisible(true);
    }, 300);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setFormData((p) => ({ ...p, businessType: type }));
  };

  const canProceedStep1 = selectedType !== "";
  const canProceedStep2 =
    formData.firstName &&
    formData.familyName &&
    formData.storeName &&
    formData.email;

  const btnStyle = (enabled) => ({
    width: "100%",
    padding: "13px",
    borderRadius: 50,
    border: "none",
    background: enabled
      ? "linear-gradient(135deg, #2563EB, #06B6D4)"
      : "#F3F4F6",
    color: enabled ? "#fff" : "#9CA3AF",
    fontSize: 15,
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    cursor: enabled ? "pointer" : "not-allowed",
    transition: "all 0.2s ease",
    boxShadow: enabled ? "0 4px 16px rgba(37,99,235,0.3)" : "none",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(37,99,235,0.06) 0%, transparent 70%), #F9FAFB",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 520 }}>
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 28,
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
          }}
        >
          {/* Top bar */}
          {step > 0 && (
            <div style={{ padding: "20px 24px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <button
                  onClick={() => goToStep(step - 1)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#9CA3AF",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9CA3AF")
                  }
                >
                  ← Back
                </button>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#9CA3AF",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Step <span style={{ color: "#2563EB" }}>{step}</span> /{" "}
                  {TOTAL_STEPS}
                </span>
              </div>
              <ProgressBar step={step} />
            </div>
          )}

          {/* Content */}
          <div
            style={{
              padding: "1.5rem 1.75rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {step === 0 && <EntryScreen onStart={() => goToStep(1)} />}

            {step === 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <StepOne selected={selectedType} onSelect={handleTypeSelect} />
                <button
                  disabled={!canProceedStep1}
                  onClick={() => canProceedStep1 && goToStep(2)}
                  style={btnStyle(canProceedStep1)}
                >
                  Continue →
                </button>
              </div>
            )}

            {step === 2 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <StepTwo
                  formData={formData}
                  onChange={(k, v) => setFormData((p) => ({ ...p, [k]: v }))}
                />
                <button
                  disabled={!canProceedStep2}
                  onClick={() => canProceedStep2 && goToStep(3)}
                  style={btnStyle(canProceedStep2)}
                >
                  Continue →
                </button>
              </div>
            )}

            {step === 3 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <StepThree />
                <button onClick={() => goToStep(4)} style={btnStyle(true)}>
                  Looks great! Continue →
                </button>
              </div>
            )}

            {step === 4 && <StepFour formData={formData} />}
          </div>
        </div>

        {step === 0 && (
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "#9CA3AF",
              marginTop: "1rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Trusted by 1,200+ clothing stores 🛍️
          </p>
        )}
      </div>
    </div>
  );
}
