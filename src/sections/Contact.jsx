import React, { useState } from "react";

const EmailIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "arbabkhanshab@gmail.com",
    href: "mailto:arbabkhanshab@gmail.com",
    icon: <EmailIcon />,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/arbabkhan0",
    href: "https://github.com/arbabkhan0",
    icon: <GitHubIcon />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/arbabkhan0",
    href: "https://linkedin.com/in/arbabkhan0",
    icon: <LinkedInIcon />,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use mailto as the fallback action
    const mailtoUrl = `mailto:arbabkhanshab@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-[#141414] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#E50914]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Form & Headings */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-400">
                remarkable
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Open to exciting opportunities — full-time, freelance, or just a good conversation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[#1a1a1a]/80 border border-[#2a2a2a] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#E50914] focus:bg-[#1a1a1a] transition-all duration-300 placeholder:text-gray-600 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-[#1a1a1a]/80 border border-[#2a2a2a] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#E50914] focus:bg-[#1a1a1a] transition-all duration-300 placeholder:text-gray-600 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative group">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full bg-[#1a1a1a]/80 border border-[#2a2a2a] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#E50914] focus:bg-[#1a1a1a] transition-all duration-300 placeholder:text-gray-600 shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-2 relative group">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-[#1a1a1a]/80 border border-[#2a2a2a] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#E50914] focus:bg-[#1a1a1a] transition-all duration-300 resize-none placeholder:text-gray-600 shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E50914] to-red-600 text-white font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_30px_rgba(229,9,20,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mt-4"
              >
                Send Message <SendIcon />
              </button>
            </form>
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col justify-center gap-4 lg:pl-10">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                {...(link.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-[#1a1a1a]/40 border border-[#2a2a2a] hover:border-[#E50914]/50 hover:bg-[#1a1a1a]/80 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-[#141414] border border-[#2F2F2F] group-hover:border-[#E50914] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#E50914]/10 transition-colors duration-300 flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">
                    {link.label}
                  </div>
                  <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-sm md:text-base break-all">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Status Card */}
            <div className="mt-2 group flex items-center gap-5 p-6 rounded-2xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300">
              <div className="w-14 flex items-center justify-center flex-shrink-0">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="text-green-500 font-bold tracking-wide mb-1">
                  Available for work
                </div>
                <div className="text-green-500/60 text-sm">
                  India (IST) — Remote / Hybrid
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;