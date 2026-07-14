import { useState } from "react";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";
import SectionBackground from "../Components/SectionBackgound";

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
      className="relative isolate py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionBackground variant="dots" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label text-green-500 font-bold text-2xl">
            About Me
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title">
            A developer who loves building things that work{" "}
            <span className="italic text-accent-600 dark:text-accent-400">
              really well.
            </span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-4">
          {/* Left — prose */}
          <Reveal delay={120}>
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {config.about}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm"
                >
                  GitHub ↗
                </a>
                <a
                  href={config.social.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm"
                >
                  Portfolio ↗
                </a>
                <a
                  href={config.social.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm"
                >
                  LeetCode ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — profile as data object */}
          <Reveal delay={160}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
              {/* window chrome */}
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs font-mono text-gray-400 dark:text-gray-500">
                  profile.json
                </span>
              </div>

              <div className="bg-gray-950 px-6 py-6 font-mono text-[13px] leading-7">
                <div className="text-gray-500">{"{"}</div>

                <div className="pl-4">
                  <span className="text-accent-400">"email"</span>
                  <span className="text-gray-500">: </span>
                  <button
                    onClick={copyEmail}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-dotted underline-offset-4"
                    title="Click to copy"
                  >
                    "{config.email}"
                  </button>
                  <span className="text-gray-500">,</span>
                  {copied && (
                    <span className="ml-2 text-[11px] text-accent-400 align-middle">
                      copied ✓
                    </span>
                  )}
                </div>

                <div className="pl-4">
                  <span className="text-accent-400">"phone"</span>
                  <span className="text-gray-500">: </span>
                  <a
                    href={`tel:${config.phone}`}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    "{config.phone}"
                  </a>
                  <span className="text-gray-500">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-accent-400">"location"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400">"{config.location}"</span>
                  <span className="text-gray-500">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-accent-400">"education"</span>
                  <span className="text-gray-500">{": {"}</span>
                </div>
                <div className="pl-8">
                  <span className="text-accent-400">"degree"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400">"{edu.degree}"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-accent-400">"institution"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400">"{edu.institution}"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-accent-400">"period"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400">"{edu.period}"</span>
                </div>
                <div className="pl-4 text-gray-500">{"},"}</div>

                <div className="pl-4">
                  <span className="text-accent-400">"status"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400">"open_to_work"</span>
                  <span className="inline-block w-2 h-4 bg-accent-400 ml-1 align-middle animate-pulse" />
                </div>

                <div className="text-gray-500">{"}"}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
