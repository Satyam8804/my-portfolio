import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";


const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactLinks = [
  {
    label: "Email",
    icon: "✉️",
    value: config.email,
    href: `mailto:${config.email}`,
  },
  {
    label: "Phone",
    icon: "📞",
    value: config.phone,
    href: `tel:${config.phone}`,
  },
  {
    label: "LinkedIn",
    icon: "💼",
    value: "linkedin.com/in/Satyam8804",
    href: config.social.linkedin,
  },
  {
    label: "GitHub",
    icon: "🐙",
    value: "github.com/Satyam8804",
    href: config.social.github,
  },
  {
    label: "LeetCode",
    icon: "⚡",
    value: "leetcode.com/Satyam8804",
    href: config.social.leetcode,
  },
];

export default function Contacts() {
  const formRef = useRef(null);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { name, email, subject, message } = fields;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields before sending.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  name,
          from_email: email,
          subject:    subject,
          message:    message,
          to_name:    config.name, // optional — use in template as {{to_name}}
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    }
  }

  const isSending = status === "sending";

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* ── Left: links ── */}
          <div>
            <Reveal>
              <p className="section-label">Get in touch</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Let's work
                <br />
                <span className="italic text-accent-600 dark:text-accent-400">
                  together.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                I'm currently open to new opportunities. Whether you have a
                project in mind, a question, or just want to say hi — my inbox
                is always open!
              </p>
            </Reveal>

            <div className="flex flex-col gap-1">
              {contactLinks.map((item, i) => (
                <Reveal key={item.label} delay={180 + i * 50}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 py-3 border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-base group-hover:bg-accent-50 dark:group-hover:bg-accent-600/10 group-hover:border-accent-200 dark:group-hover:border-accent-600/20 transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                    <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">
                      ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <Reveal delay={160}>
            <div className="card p-8">
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">
                Send a message
              </h3>

              {/* ── Success banner ── */}
              {status === "success" && (
                <div className="mb-5 flex items-center gap-3 rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                  <span>✅</span>
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}

              {/* ── Error banner ── */}
              {status === "error" && (
                <div className="mb-5 flex items-center gap-3 rounded-lg border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <form
                ref={formRef}
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={fields.subject}
                  onChange={handleChange}
                  disabled={isSending}
                />

                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={fields.message}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-500 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-accent-600 hover:bg-accent-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg text-sm transition-colors duration-200"
                >
                  {isSending ? "Sending…" : "Send Message →"}
                </button>
              </form>
            </div>
          </Reveal>

        </div>

        {/* ── Footer ── */}
        <Reveal delay={200}>
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-400 dark:text-gray-600">
            Built by{" "}
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              {config.name}
            </span>{" "}
            · {new Date().getFullYear()}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ── Reusable form field ── */
function FormField({ label, name, type, placeholder, value, onChange, disabled }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-500 transition-colors disabled:opacity-50"
      />
    </div>
  );
}