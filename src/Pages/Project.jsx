import { useState, useEffect, useRef, useCallback } from "react";
import config from "../portfolio.config";
import Reveal from "../utils/Reveal";
import Capsule from "../utils/Capsule";
import SectionBackground from "../Components/SectionBackgound";

export default function Projects() {
  const featured = config.projects.find((p) => p.featured);
  const rest = config.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionBackground variant="dots" />

      <div className="relative z-10 max-w-6xl mx-auto px-2">
        <Reveal>
          <p className="section-label font-extrabold">What I've built</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="section-title font-extrabold text-green-400">
            Projects
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {/* Featured project */}
          {featured && (
            <Reveal delay={100}>
              <div className="card p-4 rounded bg-accent-50 dark:bg-accent-600/5 border-accent-200 dark:border-accent-600/20 hover:shadow-lg transition-all duration-200">
                <DevicePair project={featured} featured />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 bg-accent-100 dark:bg-accent-600/10 px-3 py-1 rounded-full border border-accent-200 dark:border-accent-600/20 mb-3">
                      ⭐ Featured
                    </span>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                        {featured.title}
                      </h3>
                      <StatusBadge status={featured.status} />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {featured.subtitle}
                    </p>
                  </div>
                  <ProjectLinks project={featured} />
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.techStack.map((tech, i) => (
                    <Capsule key={i} className="tag" skill={tech} />
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Other projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={80 + i * 80}>
                <div className="hover:rounded card p-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                  <DevicePair project={project} />

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <StatusBadge status={project.status} />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {project.subtitle}
                      </p>
                    </div>
                    <ProjectLinks project={project} />
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Capsule key={i} className="tag" skill={tech} />
                    ))}
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

/* ─────────────────────────────────────────────────────────────
   DevicePair
   Shows MacBook (desktop slides) + iPhone (mobile slides)
   side by side. Falls back to the same slides if mobile
   thumbnails are not provided separately.
───────────────────────────────────────────────────────────── */
function DevicePair({ project, featured = false }) {
  const macW = featured ? 340 : 262;
  const iphW = featured ? 92 : 72;
  const macScreenH = Math.round(macW * 0.575);
  const iphScreenH = Math.round(iphW * 2.12);

  // Natural width of both devices together (minus 18px overlap)
  const naturalW = macW + iphW - 18;
  const naturalH = macScreenH + 52; // screen + stand height

  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width;
      setScale(available < naturalW ? available / naturalW : 1);
    });
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, [naturalW]);

  // Support both old array format and new { desktop, mobile } format
  const thumbs = project.thumbnails;
  const desktopSlides = Array.isArray(thumbs) ? thumbs : thumbs?.desktop ?? [];
  const mobileSlides = Array.isArray(thumbs)
    ? thumbs
    : thumbs?.mobile ?? desktopSlides;

  if (project.mobileOnly) {
    return (
      <div className="flex items-end justify-center mb-6">
        <IphoneFrame width={120}>
          <ThumbnailSlider
            slides={mobileSlides}
            uid={`${project.id}-m`}
            height={Math.round(120 * 2.12)}
            thumbColors={project.thumbColors}
            title={project.title}
            compact
          />
        </IphoneFrame>
      </div>
    );
  }

  return (
    // Outer div: measures available width, clips any overflow
    <div
      ref={wrapRef}
      className={`w-full items-center justify-center overflow-hidden mb-6 ${
        featured ? `-ml-7` : ``
      }`}
      style={{ height: naturalH * scale }}
    >
      <div
        className={`select-none flex items-center justify-center `}
        style={{
          width: naturalW,
          height: naturalH,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          // collapse the extra vertical space that scale creates
          marginBottom: naturalH * (scale - 1),
          margin: "0 auto",
        }}
      >
        {/* MacBook */}
        <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
          <MacbookFrame width={macW}>
            <ThumbnailSlider
              slides={desktopSlides}
              uid={`${project.id}-d`}
              height={macScreenH}
              thumbColors={project.thumbColors}
              thumbIcon={project.thumbIcon}
              title={project.title}
            />
          </MacbookFrame>
        </div>

        {/* iPhone — overlaps MacBook slightly */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginBottom: 10,
            flexShrink: 0,
          }}
          className={` ${featured ? `-ml-25` : `-ml-10`}`}
        >
          <IphoneFrame width={iphW}>
            <ThumbnailSlider
              slides={mobileSlides}
              uid={`${project.id}-m`}
              height={iphScreenH}
              thumbColors={project.thumbColors}
              thumbIcon={project.thumbIcon}
              title={project.title}
              compact
            />
          </IphoneFrame>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MacbookFrame
   CSS-only MacBook Pro shell. Pass screen content as children.
───────────────────────────────────────────────────────────── */
function MacbookFrame({ children, width }) {
  const footW = Math.round(width * 1.08);
  const bodyH = Math.round(width * 0.048);
  const cameraSize = Math.max(4, Math.round(width * 0.016));

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Lid / screen */}
      <div
        style={{
          width,
          background: "#111114",
          borderRadius: "10px 10px 0 0",
          border: "1.5px solid #3c3c46",
          borderBottom: "none",
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
        }}
      >
        {/* Top bezel + camera */}
        <div
          style={{
            height: 18,
            background: "#111114",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: cameraSize,
              height: cameraSize,
              borderRadius: "50%",
              background: "#2a2a34",
              border: "0.5px solid #444",
            }}
          />
        </div>

        {/* Screen */}
        <div style={{ width: "100%", height: undefined, overflow: "hidden" }}>
          {children}
        </div>

        {/* Bottom screen bezel */}
        <div style={{ height: 10, background: "#111114" }} />
      </div>

      {/* Hinge line */}
      <div
        style={{
          width: footW,
          height: 3,
          background: "#222228",
          borderLeft: "1.5px solid #3c3c46",
          borderRight: "1.5px solid #3c3c46",
        }}
      />

      {/* Body / keyboard area */}
      <div
        style={{
          width: footW,
          height: bodyH,
          background: "linear-gradient(180deg,#28282f 0%,#1e1e24 100%)",
          borderRadius: "0 0 8px 8px",
          border: "1.5px solid #3c3c46",
          borderTop: "none",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 5,
        }}
      >
        {/* Trackpad */}
        <div
          style={{
            width: Math.round(footW * 0.22),
            height: Math.round(bodyH * 0.35),
            background: "#232329",
            borderRadius: 3,
            border: "0.5px solid #3c3c46",
          }}
        />
      </div>

      {/* Foot shadow strip */}
      <div
        style={{
          width: footW * 0.9,
          height: 3,
          background: "rgba(0,0,0,0.18)",
          borderRadius: "0 0 6px 6px",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   IphoneFrame
   CSS-only iPhone 15 shell with Dynamic Island.
───────────────────────────────────────────────────────────── */
function IphoneFrame({ children, width }) {
  const radius = Math.round(width * 0.145);
  const islandW = Math.round(width * 0.38);
  const islandH = Math.max(6, Math.round(width * 0.072));
  const topBezelH = Math.round(width * 0.135);
  const botBezelH = Math.round(width * 0.1);

  return (
    <div
      style={{
        width,
        background: "#111114",
        borderRadius: radius,
        border: "1.5px solid #3c3c46",
        overflow: "hidden",
        boxShadow:
          "4px 10px 36px rgba(0,0,0,0.42), inset 0 0 0 0.5px rgba(255,255,255,0.04)",
        position: "relative",
      }}
    >
      {/* Side buttons (left) */}
      <div
        style={{
          position: "absolute",
          left: -3,
          top: "22%",
          width: 3,
          height: "8%",
          background: "#2a2a34",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: "32%",
          width: 3,
          height: "10%",
          background: "#2a2a34",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: "44%",
          width: 3,
          height: "10%",
          background: "#2a2a34",
          borderRadius: "2px 0 0 2px",
        }}
      />
      {/* Power button (right) */}
      <div
        style={{
          position: "absolute",
          right: -3,
          top: "28%",
          width: 3,
          height: "14%",
          background: "#2a2a34",
          borderRadius: "0 2px 2px 0",
        }}
      />

      {/* Top bezel — Dynamic Island */}
      <div
        style={{
          height: topBezelH,
          background: "#111114",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: islandW,
            height: islandH,
            background: "#000",
            borderRadius: 99,
            border: "0.5px solid #2a2a34",
          }}
        />
      </div>

      {/* Screen content */}
      <div style={{ overflow: "hidden" }}>{children}</div>

      {/* Bottom bezel — Home indicator */}
      <div
        style={{
          height: botBezelH,
          background: "#111114",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: Math.round(width * 0.34),
            height: 3,
            background: "rgba(255,255,255,0.22)",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ThumbnailSlider
   Inner carousel — renders inside device frame.
   Auto-advances every 3 s, pauses on hover, crossfades.
───────────────────────────────────────────────────────────── */
function ThumbnailSlider({
  slides,
  uid,
  height,
  thumbColors,
  thumbIcon,
  title,
  compact = false,
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const timerRef = useRef(null);

  const hasSlides = slides && slides.length > 0;

  const transition = useCallback(
    (nextIdx) => {
      if (!hasSlides || slides.length <= 1) return;
      setOpacity(0);
      setTimeout(() => {
        setCurrent((nextIdx + slides.length) % slides.length);
        setOpacity(1);
      }, 200);
    },
    [slides, hasSlides]
  );

  const next = useCallback(
    () => transition(current + 1),
    [current, transition]
  );
  const prev = useCallback(
    () => transition(current - 1),
    [current, transition]
  );
  const goTo = useCallback((i) => transition(i), [transition]);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (!hasSlides || slides.length <= 1 || paused) return;
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, [slides, paused, next, hasSlides]);

  /* Placeholder when no thumbnails */
  if (!hasSlides) {
    const colors = thumbColors || ["#1e293b", "#0f172a"];
    const icon = thumbIcon || "🚀";
    return (
      <div
        style={{
          height,
          background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GridPattern id={uid} />
        <span
          style={{
            fontSize: compact ? 18 : 28,
            position: "relative",
            zIndex: 1,
          }}
        >
          {icon}
        </span>
        {!compact && (
          <span
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.35)",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              padding: "0 8px",
            }}
          >
            Add <code style={{ opacity: 0.6 }}>thumbnails.desktop</code> in
            config
          </span>
        )}
      </div>
    );
  }

  /* Single image */
  if (slides.length === 1) {
    return (
      <div style={{ height, overflow: "hidden", position: "relative" }}>
        <img
          src={slides[0]}
          alt={`${title} screenshot`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <BottomGradient />
      </div>
    );
  }

  /* Multi-image carousel */
  return (
    <div
      style={{
        height,
        overflow: "hidden",
        position: "relative",
        cursor: "default",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={slides[current]}
        alt={`${title} screenshot ${current + 1}`}
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity,
          transition: "opacity 0.35s ease",
          display: "block",
        }}
      />

      <BottomGradient />

      {/* Prev / Next — hidden until hover, hidden on compact */}
      {!compact && (
        <>
          <NavArrow
            dir="prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          />
          <NavArrow
            dir="next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          />
        </>
      )}

      {/* Counter badge */}
      {!compact && (
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 20,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(6px)",
            color: "#fff",
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: 99,
          }}
        >
          {current + 1} / {slides.length}
        </div>
      )}

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: compact ? 5 : 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          gap: compact ? 3 : 5,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i);
            }}
            aria-label={`Screenshot ${i + 1}`}
            style={{
              height: compact ? 4 : 5,
              width: i === current ? (compact ? 12 : 18) : compact ? 4 : 5,
              borderRadius: 99,
              background:
                i === current
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition:
                "width 0.3s cubic-bezier(.22,1,.36,1), background 0.2s",
            }}
          />
        ))}
      </div>

      {paused && !compact && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 20,
            background: "rgba(0,0,0,0.4)",
            color: "rgba(255,255,255,0.65)",
            fontSize: 10,
            padding: "1px 7px",
            borderRadius: 99,
          }}
        >
          ⏸
        </div>
      )}
    </div>
  );
}

/* ── Nav arrow button ── */
function NavArrow({ dir, onClick }) {
  const isNext = dir === "next";
  return (
    <button
      onClick={onClick}
      aria-label={isNext ? "Next screenshot" : "Previous screenshot"}
      className="opacity-0 group-hover:opacity-100"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [isNext ? "right" : "left"]: 8,
        zIndex: 20,
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.55)",
        color: "#fff",
        fontSize: 16,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
        lineHeight: 1,
      }}
    >
      {isNext ? "›" : "‹"}
    </button>
  );
}

/* ── Helpers ── */
function BottomGradient() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 55%)",
        pointerEvents: "none",
      }}
    />
  );
}

function GridPattern({ id }) {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.1,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`g${id}`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g${id})`} />
    </svg>
  );
}

/* ── Status badge ── */
function StatusBadge({ status }) {
  const styles = {
    Live: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700",
    Completed:
      "bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600",
  };
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
        styles[status] ?? styles.Completed
      }`}
    >
      {status === "Live" ? "● " : ""}
      {status}
    </span>
  );
}

/* ── Project links ── */
function ProjectLinks({ project }) {
  return (
    <div className="flex gap-2 flex-shrink-0">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-accent-600 dark:text-accent-400 hover:underline flex items-center gap-1"
        >
          Demo ↗
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:underline flex items-center gap-1 transition-colors"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}
