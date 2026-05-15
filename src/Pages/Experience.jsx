import config from "../portfolio.config";
import Reveal from "../utils/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label">Where I've worked</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <div className="flex flex-col gap-6">

          {/* ── Work experience ── */}
          {config.experience.map((job, i) => (
            <Reveal key={job.id} delay={80 + i * 80}>
              <div className="card p-8 hover:shadow-md transition-all duration-200">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">

                  {/* Left meta */}
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent-50 dark:bg-accent-600/10 border border-accent-200 dark:border-accent-600/20 flex items-center justify-center font-bold text-accent-600 dark:text-accent-400 text-sm mb-4">
                      {job.logo}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      {job.period}
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                      {job.company}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {job.location}
                    </div>
                    <span className="inline-block mt-2 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700">
                      {job.type}
                    </span>
                  </div>

                  {/* Right content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {job.role}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {job.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          <span className="text-accent-600 dark:text-accent-400 mt-1 flex-shrink-0">
                            —
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* ── Education ── */}
          {config.education.map((edu, i) => (
            <Reveal key={i} delay={80 + (config.experience.length + i) * 80}>
              <div className="card p-8 hover:shadow-md transition-all duration-200">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">

                  {/* Left meta */}
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl mb-4">
                      🎓
                    </div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      {edu.period}
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                      {edu.institution}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {edu.location}
                    </div>
                  </div>

                  {/* Right content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, j) => (
                        <span key={j} className="tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}