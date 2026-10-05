import SectionBackground from "../Components/SectionBackgound";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";

// Timeline theme: green, to match the section heading (green-500).
// Darker green on light mode, brighter green on dark mode.
// Arbitrary hex classes work even if the Tailwind "accent" palette doesn't resolve.
const DATE_CLS = "text-[#16a34a] dark:text-[#4ade80]";
const LINE_CLS = "bg-[#22c55e]/30 dark:bg-[#22c55e]/35";
const NODE_RING = "border-[#22c55e]";
const NODE_FILL = "bg-[#22c55e]";
const NODE_GLOW = "shadow-[0_0_0_4px_rgba(34,197,94,0.22)]";

// Logo can be an image path/URL, a short text like "TCS", or missing.
const isImage = (v) =>
  typeof v === "string" &&
  /^(https?:|data:|\/|\.{1,2}\/)|\.(png|jpe?g|svg|webp|gif)$/i.test(v);

function Logo({ item, isWork }) {
  const alt = `${isWork ? item.company : item.institution} logo`;

  return (
    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/90 dark:bg-white/95 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden p-1.5">
      {isImage(item.logo) ? (
        <img
          src={item.logo}
          alt={alt}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="font-bold text-sm text-gray-800">
          {item.logo || (isWork ? item.company?.[0] : "🎓")}
        </span>
      )}
    </div>
  );
}

export default function Experience() {
  // One chronological list: work first, then education (same order as config)
  const items = [
    ...config.experience.map((job) => ({ kind: "work", key: job.id, ...job })),
    ...config.education.map((edu, i) => ({
      kind: "edu",
      key: `edu-${i}`,
      ...edu,
    })),
  ];

  return (
    <section
      id="experience"
      className="relative isolate py-24 md:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <SectionBackground variant="dots" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="section-label text-green-500 font-bold text-2xl">
              Experience
            </p>
            <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-green-500/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title">
            Where I've worked and what I've learned{" "}
            <span className="italic text-[#16a34a] dark:text-[#4ade80]">
              along the way.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10">
          {items.map((item, i) => {
            const isFirst = i === 0;
            const isLast = i === items.length - 1;
            const isWork = item.kind === "work";

            return (
              <Reveal key={item.key} delay={80 + i * 80}>
                <div className="grid grid-cols-[28px_1fr] md:grid-cols-[190px_40px_1fr] gap-x-3 md:gap-x-4">
                  {/* Date — desktop, right aligned */}
                  <div className="hidden md:block text-right pt-0.5">
                    <span className={`text-lg font-bold ${DATE_CLS}`}>
                      {item.period}
                    </span>
                  </div>

                  {/* Line + node */}
                  <div className="relative flex justify-center">
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${LINE_CLS} ${
                        isFirst ? "top-3" : "top-0"
                      } ${isLast ? "h-3" : "bottom-0"}`}
                    />
                    <span
                      aria-hidden="true"
                      className={`relative z-10 mt-1.5 w-3.5 h-3.5 rounded-full border-2 ${NODE_RING} ${
                        isFirst
                          ? `${NODE_FILL} ${NODE_GLOW}`
                          : "bg-gray-50 dark:bg-gray-950"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className={isLast ? "" : "pb-10"}>
                    {/* Date — mobile */}
                    <div
                      className={`md:hidden mb-2 text-base font-bold ${DATE_CLS}`}
                    >
                      {item.period}
                    </div>

                    <div className="card p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <div className="flex items-start gap-4 mb-5">
                        <Logo item={item} isWork={isWork} />

                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                            {isWork ? item.role : item.degree}
                          </h3>
                          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                            <span className="font-semibold text-gray-700 dark:text-gray-200">
                              {isWork ? item.company : item.institution}
                            </span>
                            <span className="text-gray-300 dark:text-gray-600">
                              •
                            </span>
                            <span className="text-gray-400 dark:text-gray-500">
                              {item.location}
                            </span>
                            {isWork && (
                              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700">
                                {item.type}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {isWork ? (
                        <ul className="flex flex-col gap-3">
                          {item.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                              <span
                                className={`mt-1 flex-shrink-0 ${DATE_CLS}`}
                              >
                                —
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, j) => (
                            <span key={j} className="tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
