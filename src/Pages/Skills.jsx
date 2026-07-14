import SectionBackground from "../Components/SectionBackgound.jsx";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <SectionBackground variant="dots" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-4">
          <Reveal>
            <p className="section-label text-sm">What I work with</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="section-title font-bold text-green-500">
              Technical Skills
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.skills.map((group, i) => (
            <Reveal key={i} delay={100 + i * 60}>
              <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 h-full overflow-hidden hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300">
                {/* accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-accent-50 dark:group-hover:bg-accent-500/10 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {group.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md hover:bg-accent-100 dark:hover:bg-accent-500/15 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
