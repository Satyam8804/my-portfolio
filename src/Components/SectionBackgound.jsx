export default function SectionBackground({ variant = "dots" }) {
  if (variant === "dots") {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.25] animate-drift text-gray-500 dark:text-accent-500"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,theme(colors.gray.50)_90%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_30%,theme(colors.gray.950)_90%)]" />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute inset-0 opacity-[0.2] dark:opacity-[0.2] text-gray-500 dark:text-accent-500"
          style={{
            backgroundImage: `
              linear-gradient(currentColor 1px, transparent 1px),
              linear-gradient(90deg, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          }}
        />
      </div>
    );
  }

  return null;
}
