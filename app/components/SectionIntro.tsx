type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  className?: string;
  compact?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  copy,
  className = "",
  compact = false
}: SectionIntroProps) {
  return (
    <div
      className={`mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end ${className}`}
    >
      <div>
        <p className="font-mono text-xs uppercase text-acid-400">{eyebrow}</p>
        <h2
          className={`mt-2 font-display font-bold text-bone-100 ${
            compact ? "text-3xl" : "text-3xl sm:text-5xl"
          }`}
        >
          {title}
        </h2>
      </div>
      {copy ? <p className="max-w-md text-sm leading-6 text-bone-500">{copy}</p> : null}
    </div>
  );
}
