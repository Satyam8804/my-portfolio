import config from "../portfolio.config";
import Capsule from "../utils/Capsule";
import Reveal from "../utils/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label ">What I work with</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title ">Technical Skills</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.skills.map((group, i) => (
            <Reveal key={i} delay={100 + i * 60}>
              <div className="card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-600/10 border border-accent-200 dark:border-accent-600/20 flex items-center justify-center text-xl flex-shrink-0"
                    aria-hidden="true"
                  >
                    {group.icon}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <Capsule key={j} className="tag" skill={skill} isSkill/>
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