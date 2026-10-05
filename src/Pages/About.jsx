import { useState } from "react";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";
import SectionBackground from "../Components/SectionBackgound";

/* ---------- small helpers ---------- */

const Icon = ({ d, className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const ICONS = {
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  cap: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5",
  github:
    "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
  code: "m16 18 6-6-6-6M8 6l-6 6 6 6",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
};

/* one numbered line of the "code" window */
const Line = ({ n, indent = 0, children }) => (
  <div className="flex group/line hover:bg-white/[0.04] transition-colors rounded-sm">
    <span className="w-8 shrink-0 select-none text-right pr-3 text-gray-600 group-hover/line:text-gray-400 transition-colors">
      {n}
    </span>
    <div
      style={{ paddingLeft: `${indent * 1.25}rem` }}
      className="min-w-0 break-words"
    >
      {children}
    </div>
  </div>
);

const Key = ({ children }) => (
  <span className="text-accent-400">"{children}"</span>
);
const Punct = ({ children }) => (
  <span className="text-gray-500">{children}</span>
);
const Str = ({ children }) => (
  <span className="text-emerald-400">{children}</span>
);

/* ---------- component ---------- */

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const edu = config.education[0];

  return (
    <section
      id="about"
      className="relative isolate py-24 md:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionBackground variant="dots" />

      {/* soft ambient glows (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-500/10 dark:bg-green-500/10 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl -z-10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="section-label text-green-500 font-bold text-2xl">
              About Me
            </p>
            <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-green-500/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title">
            A developer who loves building things that work{" "}
            <span className="italic text-accent-600 dark:text-accent-400">
              really well.
            </span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
          {/* ---------- Left: prose ---------- */}
          <Reveal delay={120}>
            <div>
              {/* open-to-work badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>

              {/* about text with accent bar */}
              <div className="relative pl-6 border-l-2 border-green-500/70">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {config.about}
                </p>
              </div>

              {/* quick facts */}
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/50 hover:shadow-md">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                    <Icon d={ICONS.pin} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Based in
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {config.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/50 hover:shadow-md">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                    <Icon d={ICONS.cap} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Studied at
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* links */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm inline-flex items-center gap-2"
                >
                  <Icon d={ICONS.github} />
                  GitHub ↗
                </a>
                <a
                  href={config.social.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm inline-flex items-center gap-2"
                >
                  <Icon d={ICONS.code} />
                  LeetCode ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* ---------- Right: profile.json ---------- */}
          <Reveal delay={160}>
            <div className="relative group">
              {/* glow behind the window */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-green-500/40 via-accent-500/20 to-emerald-400/40 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80"
              />

              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl shadow-black/10 transition-transform duration-500 group-hover:-translate-y-1">
                {/* window chrome */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="w-3 h-3 rounded-full bg-red-400/90" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/90" />
                  <span className="w-3 h-3 rounded-full bg-green-400/90" />
                  <span className="ml-3 inline-flex items-center gap-2 rounded-md bg-white/70 dark:bg-gray-900/60 px-3 py-1 text-xs font-mono text-gray-500 dark:text-gray-400">
                    <span className="text-accent-500">{"{}"}</span>
                    profile.json
                  </span>
                </div>

                {/* code body */}
                <div className="bg-gray-950 px-3 sm:px-5 py-6 font-mono text-[13px] leading-7 overflow-x-auto">
                  <Line n={1}>
                    <Punct>{"{"}</Punct>
                  </Line>

                  <Line n={2} indent={1}>
                    <Key>email</Key>
                    <Punct>: </Punct>
                    <button
                      onClick={copyEmail}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-dotted underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm text-left"
                      title="Click to copy"
                    >
                      "{config.email}"
                    </button>
                    <Punct>,</Punct>
                    {copied && (
                      <span className="ml-2 text-[11px] text-accent-400 align-middle">
                        copied ✓
                      </span>
                    )}
                  </Line>

                  <Line n={3} indent={1}>
                    <Key>phone</Key>
                    <Punct>: </Punct>
                    <a
                      href={`tel:${config.phone}`}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      "{config.phone}"
                    </a>
                    <Punct>,</Punct>
                  </Line>

                  <Line n={4} indent={1}>
                    <Key>location</Key>
                    <Punct>: </Punct>
                    <Str>"{config.location}"</Str>
                    <Punct>,</Punct>
                  </Line>

                  <Line n={5} indent={1}>
                    <Key>education</Key>
                    <Punct>{": {"}</Punct>
                  </Line>
                  <Line n={6} indent={2}>
                    <Key>degree</Key>
                    <Punct>: </Punct>
                    <Str>"{edu.degree}"</Str>
                    <Punct>,</Punct>
                  </Line>
                  <Line n={7} indent={2}>
                    <Key>institution</Key>
                    <Punct>: </Punct>
                    <Str>"{edu.institution}"</Str>
                    <Punct>,</Punct>
                  </Line>
                  <Line n={8} indent={2}>
                    <Key>period</Key>
                    <Punct>: </Punct>
                    <Str>"{edu.period}"</Str>
                  </Line>
                  <Line n={9} indent={1}>
                    <Punct>{"},"}</Punct>
                  </Line>

                  <Line n={10} indent={1}>
                    <Key>status</Key>
                    <Punct>: </Punct>
                    <span className="inline-flex items-center gap-2 rounded bg-emerald-500/10 px-2 text-emerald-300">
                      "open_to_work"
                    </span>
                    <span className="inline-block w-2 h-4 bg-accent-400 ml-1 align-middle animate-pulse" />
                  </Line>

                  <Line n={11}>
                    <Punct>{"}"}</Punct>
                  </Line>
                </div>

                {/* status bar */}
                <div className="flex items-center justify-between bg-gray-900 border-t border-gray-800 px-4 py-2 text-[11px] font-mono text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    JSON
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
