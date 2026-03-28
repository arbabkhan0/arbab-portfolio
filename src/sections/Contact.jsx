import React, { useState } from "react";

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "arbabkhanshab@gmail.com",
    href: "mailto:arbabkhanshab@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 8865921538",
    href: "tel:+918865921538",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Punjab, India (LPU)",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/arbabkhan0",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/arbabkhan0",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with form data prefilled
    const mailtoUrl = `mailto:arbabkhanshab@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#141414]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Get In <span className="text-[#E50914]">Touch</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-md">
            Open to opportunities, collaborations, and tech discussions. Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Left panel ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact info */}
            <div className="space-y-3">
              {CONTACT_INFO.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#2F2F2F]
                    hover:border-[#E50914]/40 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 flex items-center justify-center
                    text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors mt-0.5">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-semibold">
                Find Me On
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-[#2F2F2F]
                      hover:bg-[#E50914] hover:border-[#E50914] text-gray-400 hover:text-white
                      flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Available badge */}
            <div className="flex items-center gap-3 p-4 bg-green-900/20 border border-green-800/40 rounded-xl">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-green-400 text-sm font-medium">
                Available for freelance & full-time roles
              </span>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:col-span-3 bg-[#1a1a1a] border border-[#2F2F2F] rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-400 font-bold text-lg">Message Sent!</p>
                <p className="text-gray-400 text-sm mt-1">Opening your email client…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Arbab Khan"
                      className="w-full px-4 py-3 bg-[#141414] border border-[#2F2F2F] rounded-xl text-white
                        placeholder-gray-600 text-sm
                        focus:outline-none focus:ring-2 focus:ring-[#E50914]/50 focus:border-[#E50914]/60
                        transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-[#141414] border border-[#2F2F2F] rounded-xl text-white
                        placeholder-gray-600 text-sm
                        focus:outline-none focus:ring-2 focus:ring-[#E50914]/50 focus:border-[#E50914]/60
                        transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Let's collaborate on..."
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2F2F2F] rounded-xl text-white
                      placeholder-gray-600 text-sm
                      focus:outline-none focus:ring-2 focus:ring-[#E50914]/50 focus:border-[#E50914]/60
                      transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2F2F2F] rounded-xl text-white
                      placeholder-gray-600 text-sm resize-none
                      focus:outline-none focus:ring-2 focus:ring-[#E50914]/50 focus:border-[#E50914]/60
                      transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E50914] hover:bg-[#b20710] text-white font-bold py-3.5 px-6
                    rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100
                    shadow-lg shadow-[#E50914]/20 focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;