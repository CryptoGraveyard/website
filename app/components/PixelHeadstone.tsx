type HeadstoneAccent = "acid" | "violet" | "blood" | "bone";
type HeadstoneSize = "sm" | "md" | "lg";

const accentClasses: Record<HeadstoneAccent, string> = {
  acid: "bg-acid-400 shadow-[0_0_28px_rgba(166,255,61,0.32)]",
  violet: "bg-violet-400 shadow-[0_0_28px_rgba(181,117,255,0.32)]",
  blood: "bg-blood-500 shadow-[0_0_28px_rgba(220,50,69,0.32)]",
  bone: "bg-bone-100 shadow-[0_0_28px_rgba(244,240,220,0.24)]"
};

const sizeClasses: Record<
  HeadstoneSize,
  {
    frame: string;
    cap: string;
    base: string;
    label: string;
    rune: string;
  }
> = {
  sm: {
    frame: "h-40 w-32",
    cap: "h-3 w-3",
    base: "left-3 top-28 h-7 w-[104px]",
    label: "top-16 w-20 text-[11px]",
    rune: "text-[9px]"
  },
  md: {
    frame: "h-48 w-36",
    cap: "h-4 w-4",
    base: "left-2 top-36 h-8 w-[120px]",
    label: "top-20 w-24 text-xs",
    rune: "text-[10px]"
  },
  lg: {
    frame: "h-64 w-48",
    cap: "h-5 w-5",
    base: "left-4 top-44 h-10 w-40",
    label: "top-24 w-28 text-sm",
    rune: "text-[11px]"
  }
};

function getBodyShape(shape: string, size: HeadstoneSize) {
  const shapeName = shape.toLowerCase();

  if (size === "sm") {
    if (shapeName.includes("crypt")) return "left-4 top-10 h-24 w-24 rounded-t-xl";
    if (shapeName.includes("door")) return "left-5 top-8 h-28 w-[88px] rounded-t-[44px]";
    if (shapeName.includes("angel")) return "left-5 top-9 h-24 w-[88px] rounded-t-[42px]";
    if (shapeName.includes("monolith")) return "left-5 top-7 h-28 w-[88px] rounded-sm";
    return "left-5 top-8 h-24 w-[88px] rounded-t-[42px]";
  }

  if (size === "lg") {
    if (shapeName.includes("crypt")) return "left-7 top-16 h-28 w-36 rounded-t-xl";
    if (shapeName.includes("door")) return "left-8 top-12 h-40 w-32 rounded-t-[66px]";
    if (shapeName.includes("angel")) return "left-8 top-14 h-36 w-32 rounded-t-[60px]";
    if (shapeName.includes("monolith")) return "left-8 top-10 h-40 w-32 rounded-sm";
    return "left-8 top-12 h-36 w-32 rounded-t-[60px]";
  }

  if (shapeName.includes("crypt")) return "left-4 top-14 h-24 w-28 rounded-t-xl";
  if (shapeName.includes("door")) return "left-6 top-10 h-32 w-24 rounded-t-[52px]";
  if (shapeName.includes("angel")) return "left-7 top-12 h-28 w-24 rounded-t-[46px]";
  if (shapeName.includes("monolith")) return "left-6 top-8 h-32 w-24 rounded-sm";
  return "left-5 top-10 h-28 w-24 rounded-t-[48px]";
}

export function PixelHeadstone({
  accent = "acid",
  label,
  shape = "Tablet",
  size = "md",
  className = ""
}: {
  accent?: HeadstoneAccent | string;
  label: string;
  shape?: string;
  size?: HeadstoneSize;
  className?: string;
}) {
  const safeAccent = (accent in accentClasses ? accent : "acid") as HeadstoneAccent;
  const accentClass = accentClasses[safeAccent];
  const sizing = sizeClasses[size];
  const shapeName = shape.toLowerCase();
  const bodyShape = getBodyShape(shape, size);

  return (
    <div className={`relative mx-auto ${sizing.frame} ${className}`}>
      <div
        className={`absolute left-1/2 top-2 -translate-x-1/2 ${sizing.cap} ${accentClass}`}
      />

      {shapeName.includes("angel") ? (
        <>
          <div className="absolute left-2 top-20 h-12 w-8 -skew-y-12 border border-bone-200/20 bg-bone-100/15" />
          <div className="absolute right-2 top-20 h-12 w-8 skew-y-12 border border-bone-200/20 bg-bone-100/15" />
        </>
      ) : null}

      <div
        className={`absolute ${bodyShape} border border-bone-200/35 bg-gradient-to-b from-bone-100 via-bone-200 to-bone-500 pixel-shadow`}
      />
      <div
        className={`absolute ${sizing.base} border border-bone-200/25 bg-grave-700 pixel-shadow`}
      />
      <div
        className={`absolute left-1/2 -translate-x-1/2 text-center font-mono font-semibold uppercase leading-tight text-grave-950 ${sizing.label}`}
      >
        RIP
        <span className={`mt-1 block ${sizing.rune}`}>{label}</span>
      </div>

      <div className={`absolute right-6 top-24 h-2 w-2 ${accentClass}`} />
      <div className="absolute left-9 top-28 h-1 w-10 bg-grave-950/35" />
      <div className="absolute left-11 top-32 h-1 w-6 bg-grave-950/35" />
      <div className="absolute bottom-0 left-0 h-6 w-full bg-acid-500/15" />
      <div className="absolute bottom-2 left-4 h-3 w-3 bg-acid-400/50" />
      <div className="absolute bottom-3 right-6 h-3 w-3 bg-violet-400/50" />
      <div className="absolute bottom-1 right-12 h-2 w-2 bg-blood-500/50" />
    </div>
  );
}
