import config from "../portfolio.config";
import Reveal from "../utils/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label">About Me</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title">
            A developer who loves building things that work{" "}
            <span className="italic text-accent-600 dark:text-accent-400">really well.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <Reveal delay={120}>
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {config.about}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={config.social.github}    target="_blank" rel="noreferrer" className="btn-outline text-sm">GitHub ↗</a>
                <a href={config.social.portfolio}  target="_blank" rel="noreferrer" className="btn-outline text-sm">Portfolio ↗</a>
                <a href={config.social.leetcode}   target="_blank" rel="noreferrer" className="btn-outline text-sm">LeetCode ↗</a>
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {[
              { label: "📧 Email",    value: config.email,    href: `mailto:${config.email}` },
              { label: "📞 Phone",    value: config.phone,    href: `tel:${config.phone}` },
              { label: "📍 Location", value: config.location, href: null },
            ].map((item, i) => (
              <Reveal key={item.label} delay={140 + i * 55}>
                <div className="card p-5 hover:shadow-sm">
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-900 dark:text-white font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-900 dark:text-white font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}

            {config.education.map((edu, i) => (
              <Reveal key={i} delay={310 + i * 55}>
                <div className="card p-5 hover:shadow-sm">
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide">
                    🎓 Education
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {edu.institution}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {edu.degree}
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                    {edu.period} · {edu.location}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}