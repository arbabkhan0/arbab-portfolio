import React, { useState } from "react";

const EmailIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const CONTACT_CARDS = [
  {
    id: "email",
    label: "Email",
    value: "arbabkhanshab@gmail.com",
    href: "mailto:arbabkhanshab@gmail.com",
    icon: <EmailIcon />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/arbabkhan0",
    href: "https://linkedin.com/in/arbabkhan0",
    icon: <LinkedInIcon />,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/arbabkhan0",
    href: "https://github.com/arbabkhan0",
    icon: <GitHubIcon />,
  },
];

const ContactCard = ({ label, value, href, icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 20px",
        background: hovered ? "#1e1e1e" : "#1a1a1a",
        border: `1.5px solid ${hovered ? "#E5091466" : "#2a2a2a"}`,
        borderRadius: 14,
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 0 0 1px #E5091422, 0 8px 32px #E5091820" : "none",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          background: hovered ? "#E50914" : "#E5091415",
          color: hovered ? "#fff" : "#E50914",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.3s ease",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            color: "#555",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 2,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 14,
            color: hovered ? "#fff" : "#bbb",
            fontWeight: 600,
            transition: "color 0.2s ease",
          }}
        >
          {value}
        </div>
      </div>
    </a>
  );
};

const INPUT_STYLE = {
  width: "100%",
  padding: "14px 16px",
  background: "#141414",
  border: "1.5px solid #2a2a2a",
  borderRadius: 10,
  color: "#fff",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:arbabkhanshab@gmail.com?subject=${encodeURIComponent(
      "Portfolio Contact from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const getFocusStyle = (field) =>
    focusedField === field
      ? { borderColor: "#E50914", boxShadow: "0 0 0 3px #E5091420" }
      : {};

  return (
    <section
      id="contact"
      style={{
        background: "#141414",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #E5091412 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #E5091410 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
        }}
      >
        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* ── Left: Big heading + contact cards ── */}
          <div>
            {/* Heading with red vertical bar */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 24 }}>
              <div
                style={{
                  width: 5,
                  height: 72,
                  background: "linear-gradient(180deg, #E50914, #ff4a4a88)",
                  borderRadius: 3,
                  flexShrink: 0,
                  marginTop: 4,
                }}
              />
              <h2
                style={{
                  fontSize: 46,
                  fontWeight: 900,
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-1px",
                  lineHeight: 1.15,
                }}
              >
                Let's Build
                <br />
                Something{" "}
                <span style={{ color: "#E50914" }}>Together</span>
              </h2>
            </div>

            <p
              style={{
                color: "#666",
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 380,
              }}
            >
              Open to full-time roles, freelance projects, and collaborations.
              Let's connect!
            </p>

            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CONTACT_CARDS.map((card) => (
                <ContactCard key={card.id} {...card} />
              ))}
            </div>

            {/* Available badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                padding: "14px 18px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)",
                borderRadius: 12,
              }}
            >
              <span style={{ position: "relative", display: "inline-flex" }}>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "#4ade80",
                    opacity: 0.75,
                    animation: "ping 1.5s infinite",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
              </span>
              <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 600 }}>
                Available for freelance &amp; full-time roles
              </span>
            </div>
          </div>

          {/* ── Right: Contact form ── */}
          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 20,
              padding: "40px 36px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: 800,
                margin: "0 0 28px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ✉ Send a Message
            </h3>

            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "64px 0",
                  textAlign: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                  }}
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#4ade80" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p style={{ color: "#4ade80", fontWeight: 700, fontSize: 18, margin: 0 }}>
                  Message Sent!
                </p>
                <p style={{ color: "#666", fontSize: 13, margin: 0 }}>
                  Opening your email client…
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="c-name"
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "#555",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: 8,
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="Your name"
                    style={{ ...INPUT_STYLE, ...getFocusStyle("name") }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="c-email"
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "#555",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: 8,
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="you@example.com"
                    style={{ ...INPUT_STYLE, ...getFocusStyle("email") }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="c-message"
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "#555",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    style={{
                      ...INPUT_STYLE,
                      resize: "none",
                      ...getFocusStyle("message"),
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  style={{
                    width: "100%",
                    padding: "15px 24px",
                    background: btnHovered ? "#b20710" : "#E50914",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 15,
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    transform: btnHovered ? "scale(1.02)" : "scale(1)",
                    boxShadow: btnHovered
                      ? "0 12px 30px #E5091840"
                      : "0 4px 16px #E5091820",
                    letterSpacing: 0.5,
                    fontFamily: "inherit",
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Ping animation for available badge */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @media (max-width: 768px) {
          #contact > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;