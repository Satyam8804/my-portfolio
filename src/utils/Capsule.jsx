import { stringToColorPair } from "./StringToColor";

const Capsule = ({ skill, isSkill }) => {
  const { background, color } = stringToColorPair(skill);

  return (
    <div className="relative w-fit">
      {/* Glow */}
      {!isSkill && (
        <div
          className="absolute -inset-1 rounded-full blur-xl opacity-60"
          style={{
            background: `linear-gradient(135deg, ${background}80, transparent)`,
          }}
        />
      )}

      {/* Glass Capsule */}
      <div
        className={`
          relative z-10
          rounded-full
          text-sm font-semibold
          border
          overflow-hidden
          ${isSkill ? "px-1 py-0.5" : "px-4 py-1.5"}
        `}
        style={{
          color,

          background: isSkill
            ? "transparent"
            : `
              linear-gradient(
                135deg,
                rgba(255,255,255,0.12),
                rgba(255,255,255,0.04)
              )
            `,

          borderColor: `${color}40`,

          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",

          boxShadow: isSkill
            ? "none"
            : `
              inset 0 1px 1px rgba(255,255,255,0.18),
              inset 0 -1px 1px rgba(255,255,255,0.05),
              0 4px 20px ${color}20
            `,
        }}
      >
        {/* Top shine */}
        {!isSkill && (
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.18),
                  rgba(255,255,255,0.02)
                )
              `,
            }}
          />
        )}

        <span className="relative z-10">{skill}</span>
      </div>
    </div>
  );
};

export default Capsule;
