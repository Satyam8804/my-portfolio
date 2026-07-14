import { useEffect, useState } from "react";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";
import VisitorCounter from "../Components/VisitorCounter";

const BASE = "https://alfa-leetcode-api.onrender.com";

export default function Home() {
  const initials = config.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  const [lcData, setLcData] = useState(null);
  const [lcLoading, setLcLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE}/satyam_8804/profile`)
      .then((r) => r.json())
      .then((d) => {
        setLcData(d);
        setLcLoading(false);
      })
      .catch(() => setLcLoading(false));
  }, []);

  console.log(lcData);

  // ── Solved counts ──────────────────────────────────────────
  const getAc = (diff) =>
    lcData?.matchedUserStats?.acSubmissionNum?.find(
      (d) => d.difficulty === diff
    )?.count ?? null;

  const totalSolved = getAc("All");
  const easySolved = getAc("Easy");
  const mediumSolved = getAc("Medium");
  const hardSolved = getAc("Hard");

  const totalQ = lcData?.totalQuestions ?? null;
  const totalE = lcData?.totalEasy ?? null;
  const totalM = lcData?.totalMedium ?? null;
  const totalH = lcData?.totalHard ?? null;

  const r = 42;
  const C = 2 * Math.PI * r;
  const GAP = 10;
  const seg = C / 3 - GAP;

  // solved arc = (solved/total) * seg
  const easyFill = totalE ? (easySolved / totalE) * seg : 0;
  const medFill = totalM ? (mediumSolved / totalM) * seg : 0;
  const hardFill = totalH ? (hardSolved / totalH) * seg : 0;

  const topOffset = -(C * 0.25); // start from top

  const easyOff = topOffset;
  const medOff = topOffset - C / 3;
  const hardOff = topOffset - (C / 3) * 2;

  const difficulties = [
    {
      label: "Easy",
      solved: easySolved,
      total: totalE,
      color: "#00b8a3",
      bg: "rgba(0,184,163,0.1)",
      textColor: "#00b8a3",
    },
    {
      label: "Medium",
      solved: mediumSolved,
      total: totalM,
      color: "#ffc01e",
      bg: "rgba(255,192,30,0.1)",
      textColor: "#ffc01e",
    },
    {
      label: "Hard",
      solved: hardSolved,
      total: totalH,
      color: "#ef4743",
      bg: "rgba(239,71,67,0.1)",
      textColor: "#ef4743",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center pt-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <VisitorCounter />
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* ── Text ── */}
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 bg-accent-50 dark:bg-accent-600/10 text-accent-600 dark:text-accent-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-accent-200 dark:border-accent-600/25">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Hi, I'm{" "}
                <span className="text-accent-600 dark:text-accent-400 italic">
                  {config.name.split(" ")[0]}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                {config.title}
              </h2>
            </Reveal>

            <Reveal delay={240}>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                {config.tagline}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-wrap gap-4 mb-16">
                <a href="#projects" className="btn-primary">
                  View Projects →
                </a>
                <a href="#contact" className="btn-outline">
                  Get in Touch
                </a>

                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex items-center gap-2"
                >
                  <GithubIcon /> GitHub
                </a>

                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex items-center gap-2"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </Reveal>

            {/* ── Stats ── */}
            <Reveal delay={400}>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  {/* Projects Built */}
                  <div className="flex flex-col min-w-[80px]">
                    <span className="font-display text-3xl font-bold text-gray-900 dark:text-white">
                      {10}+
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 whitespace-nowrap">
                      Projects Built
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block self-stretch w-px bg-gray-200 dark:bg-gray-800" />

                  <div className="flex flex-col gap-2">
                    {/* Title */}

                    <a
                      href={config.social.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 group w-fit"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 95 111"
                        fill="none"
                      >
                        <path
                          d="M68.5 14.5L37 46"
                          stroke="#ffc01e"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M22 61.5C22 61.5 17.5 61.5 14.5 64.5C11.5 67.5 11.5 72 11.5 72C11.5 72 11.5 76.5 14.5 79.5C17.5 82.5 22 82.5 22 82.5H52.5"
                          stroke="#808080"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M45 46L68.5 69.5C68.5 69.5 74 75 70 81C66 87 58.5 85.5 58.5 85.5L37 107"
                          stroke="#ffa116"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-lg font-semibold text-gray-400 group-hover:text-gray-200 transition-colors">
                        satyam_8804
                      </span>
                      <span className="text-gray-600 text-xs">↗</span>
                    </a>
                    <div className="flex items-center gap-4 bg-gray-900 border border-gray-700/50 rounded-2xl px-4 py-3 flex-1 min-w-[260px] max-w-[380px]">
                      {/* Ring */}
                      <div
                        className="relative shrink-0"
                        style={{ width: 96, height: 96 }}
                      >
                        <svg width="96" height="96" viewBox="0 0 100 100">
                          {/* ── Light tracks (total available) ── */}
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#00b8a320"
                            strokeWidth="7"
                            strokeDasharray={`${seg} ${C - seg}`}
                            strokeDashoffset={easyOff}
                            strokeLinecap="round"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#ffc01e20"
                            strokeWidth="7"
                            strokeDasharray={`${seg} ${C - seg}`}
                            strokeDashoffset={medOff}
                            strokeLinecap="round"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#ef474320"
                            strokeWidth="7"
                            strokeDasharray={`${seg} ${C - seg}`}
                            strokeDashoffset={hardOff}
                            strokeLinecap="round"
                          />

                          {/* ── Dark filled arcs (solved) — drawn on top ── */}
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#00b8a3"
                            strokeWidth="7"
                            strokeDasharray={`${easyFill} ${C - easyFill}`}
                            strokeDashoffset={easyOff}
                            strokeLinecap="round"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#ffc01e"
                            strokeWidth="7"
                            strokeDasharray={`${medFill} ${C - medFill}`}
                            strokeDashoffset={medOff}
                            strokeLinecap="round"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#ef4743"
                            strokeWidth="7"
                            strokeDasharray={`${hardFill} ${C - hardFill}`}
                            strokeDashoffset={hardOff}
                            strokeLinecap="round"
                          />
                        </svg>
                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
                          {lcLoading ? (
                            <span className="text-xs text-gray-500 animate-pulse">
                              ...
                            </span>
                          ) : (
                            <>
                              <span className="text-lg font-bold text-white leading-none">
                                {totalSolved ?? "—"}
                              </span>
                              <span className="text-[9px] text-gray-400 leading-none">
                                /{totalQ?.toLocaleString() ?? "—"}
                              </span>
                              <span className="text-[9px] text-green-400 leading-none mt-0.5">
                                ✓ Solved
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Difficulty pills */}
                      <div className="flex flex-col gap-1.5 flex-1">
                        {difficulties.map(
                          ({ label, solved, total, bg, textColor }) => (
                            <div
                              key={label}
                              className="flex items-center justify-between rounded-lg px-3 py-1.5"
                              style={{ background: bg }}
                            >
                              <span
                                className="text-[11px] font-semibold"
                                style={{ color: textColor }}
                              >
                                {label}
                              </span>
                              <span className="text-sm font-bold text-white">
                                {lcLoading ? (
                                  <span className="text-gray-500 animate-pulse text-xs">
                                    —
                                  </span>
                                ) : (
                                  <>
                                    {solved ?? "—"}
                                    <span className="text-gray-500 font-normal text-xs">
                                      /{total?.toLocaleString() ?? "—"}
                                    </span>
                                  </>
                                )}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Avatar ── */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-4">
              <div className="relative" style={{ width: 260, height: 260 }}>
                {/* Animated rings */}
                <div
                  className="absolute rounded-full border-2 border-accent-400/25 dark:border-accent-500/25"
                  style={{ inset: -6, animation: "hspin 12s linear infinite" }}
                />
                <div
                  className="absolute rounded-full border border-dashed border-accent-400/15 dark:border-accent-500/15"
                  style={{
                    inset: -14,
                    animation: "hspin 20s linear infinite reverse",
                  }}
                />

                {/* Photo or initials */}
                {config.avatarUrl ? (
                  <img
                    src={config.avatarUrl}
                    alt={config.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl"
                    style={{ width: 260, height: 260 }}
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-full bg-accent-50 dark:bg-accent-600/10 border-4 border-white dark:border-gray-900 shadow-xl flex flex-col items-center justify-center gap-2 overflow-hidden relative"
                    style={{ width: 260, height: 260 }}
                  >
                    <div className="absolute w-28 h-28 rounded-full bg-accent-400/10 blur-3xl top-4 right-4" />
                    <div className="absolute w-20 h-20 rounded-full bg-accent-600/10 blur-2xl bottom-8 left-4" />
                    <span className="text-6xl font-black text-accent-600 dark:text-accent-400 leading-none z-10">
                      {initials}
                    </span>
                    <span className="text-xs font-medium text-gray-400 dark:text-gray-500 z-10">
                      Set avatarUrl in config
                    </span>
                  </div>
                )}

                {/* Location chip */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold shadow-md">
                  📍 {config.location}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`@keyframes hspin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
