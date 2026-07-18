import { PixelHeadstone } from "./PixelHeadstone";

export function GothicScene({
  title = "The Graveyard",
  subtitle = "Sample cemetery view",
  className = ""
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={`gothic-scene pixel-corners relative overflow-hidden border border-bone-200/10 bg-grave-950 shadow-card ${className}`}
    >
      <div className="absolute inset-0 graveyard-grid opacity-40" />
      <div className="pixel-moon absolute right-8 top-8" aria-hidden="true" />
      <div className="pixel-bat left-[18%] top-[18%]" aria-hidden="true" />
      <div className="pixel-bat right-[28%] top-[26%]" aria-hidden="true" />
      <div className="pixel-bat right-[18%] top-[16%]" aria-hidden="true" />

      <div className="castle-silhouette absolute inset-x-0 bottom-20 h-32" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-grave-950 via-grave-950/95 to-transparent" />

      <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-5 sm:p-7">
        <div className="max-w-sm">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-acid-400">
            Crypto Graveyard
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-none text-bone-100">
            {title}
          </h2>
          <p className="mt-3 font-mono text-xs uppercase text-bone-500">{subtitle}</p>
        </div>

        <div className="grid grid-cols-3 items-end gap-2">
          <PixelHeadstone accent="violet" label="SBT" shape="Broken angel" size="sm" />
          <PixelHeadstone accent="acid" label="MRI" shape="Monolith" size="md" />
          <PixelHeadstone accent="blood" label="RUG" shape="Crypt" size="sm" />
        </div>
      </div>
    </div>
  );
}
