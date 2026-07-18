import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Boxes, Gem, Hash, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { KeepExploring } from "../components/KeepExploring";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { headstoneSamples, rarityTiers, traitGroups } from "../content/sampleData";

export const metadata: Metadata = {
  title: "Headstones | Crypto Graveyard",
  description:
    "A sample-data preview of Crypto Graveyard's future randomized pixel headstone collectibles, rarity tiers, and provenance model."
};

const accentClasses: Record<string, string> = {
  acid: "bg-acid-400 shadow-[0_0_28px_rgba(166,255,61,0.28)]",
  violet: "bg-violet-400 shadow-[0_0_28px_rgba(181,117,255,0.28)]",
  blood: "bg-blood-500 shadow-[0_0_28px_rgba(220,50,69,0.28)]",
  bone: "bg-bone-100 shadow-[0_0_28px_rgba(244,240,220,0.22)]"
};

const rarityStyles: Record<string, string> = {
  Common: "border-bone-200/20 bg-bone-100/10 text-bone-100",
  Rare: "border-acid-400/30 bg-acid-400/10 text-acid-400",
  Epic: "border-blood-500/35 bg-blood-500/10 text-blood-500",
  Legendary: "border-violet-400/35 bg-violet-400/10 text-violet-400",
  Mythic: "border-acid-400 bg-acid-400 text-grave-950 shadow-glow"
};

function PixelHeadstone({
  accent,
  label,
  shape = "Tablet"
}: {
  accent: string;
  label: string;
  shape?: string;
}) {
  const accentClass = accentClasses[accent] ?? accentClasses.acid;
  const shapeName = shape.toLowerCase();
  const bodyShape = shapeName.includes("crypt")
    ? "left-4 top-14 h-24 w-28 rounded-t-xl"
    : shapeName.includes("door")
      ? "left-6 top-10 h-32 w-24 rounded-t-[52px]"
      : shapeName.includes("angel")
        ? "left-7 top-12 h-28 w-24 rounded-t-[46px]"
        : shapeName.includes("monolith")
          ? "left-6 top-8 h-32 w-24 rounded-sm"
          : "left-5 top-10 h-28 w-24 rounded-t-[48px]";

  return (
    <div className="relative mx-auto h-48 w-36">
      <div className={`absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 ${accentClass}`} />
      {shapeName.includes("angel") ? (
        <>
          <div className="absolute left-2 top-20 h-12 w-8 -skew-y-12 border border-bone-200/20 bg-bone-100/15" />
          <div className="absolute right-2 top-20 h-12 w-8 skew-y-12 border border-bone-200/20 bg-bone-100/15" />
        </>
      ) : null}
      <div className={`absolute ${bodyShape} border border-bone-200/35 bg-gradient-to-b from-bone-200/95 to-bone-500/60 pixel-shadow`} />
      <div className="absolute left-2 top-36 h-8 w-[120px] border border-bone-200/25 bg-grave-700 pixel-shadow" />
      <div className="absolute left-1/2 top-20 w-24 -translate-x-1/2 text-center font-mono text-xs font-semibold uppercase leading-tight text-grave-950">
        RIP
        <span className="mt-1 block text-[10px]">{label}</span>
      </div>
      <div className={`absolute right-6 top-24 h-2 w-2 ${accentClass}`} />
      <div className="absolute left-9 top-28 h-1 w-10 bg-grave-950/35" />
      <div className="absolute left-11 top-32 h-1 w-6 bg-grave-950/35" />
      <div className="absolute bottom-0 left-0 h-6 w-full bg-acid-500/15" />
      <div className="absolute bottom-2 left-4 h-3 w-3 bg-acid-400/50" />
      <div className="absolute bottom-3 right-6 h-3 w-3 bg-violet-400/50" />
    </div>
  );
}

export default function HeadstonesPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="headstones" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Gem size={14} aria-hidden="true" />
            Collectibles preview
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Headstones
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Pixel grave markers for legendary bags, not investment promises.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews the future collectible layer: randomized tradable headstone artwork
            separate from the non-transferable memorial profile that proves who actually earned the
            burial.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/certificates"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Certificate preview
            </Link>
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Trophy size={18} aria-hidden="true" />
              Award system
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <PixelHeadstone accent="acid" label="Mythic" shape="Monolith" />
          <div className="mt-5 border border-bone-200/10 bg-black/20 p-4">
            <p className="font-mono text-xs uppercase text-acid-400">Design split</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">
              The memorial profile records achievement. The headstone collectible carries artwork,
              rarity, and provenance. Buying the headstone later should not rewrite who earned it.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Sample mints"
          title="Randomized traits, visible provenance"
          copy="These sample cards show how a future collectible can carry rarity and artwork while still pointing back to the original burial event."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {headstoneSamples.map((stone) => (
            <article key={stone.id} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
              <PixelHeadstone accent={stone.accent} label={stone.rarity} shape={stone.shape} />
              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[11px] uppercase text-bone-500">{stone.id}</p>
                  <span
                    className={`border px-2 py-1 font-mono text-[11px] uppercase ${
                      rarityStyles[stone.rarity] ?? rarityStyles.Common
                    }`}
                  >
                    {stone.rarity}
                  </span>
                </div>
                <h2 className="mt-1 font-display text-2xl font-bold text-bone-100">
                  {stone.title}
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase text-violet-400">
                  {stone.series}
                </p>
              </div>
              <div className="mt-5 grid gap-2 text-sm leading-6 text-bone-500">
                {[
                  ["Stone", stone.stone],
                  ["Shape", stone.shape],
                  ["Weather", stone.weather],
                  ["Engraving", stone.engraving],
                  ["Flame", stone.flame],
                  ["Flowers", stone.flowers]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-3 border border-bone-200/10 bg-black/20 px-3 py-2">
                    <span className="font-mono text-[11px] uppercase text-bone-300">{label}</span>
                    <span className="text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-bone-200/10 pt-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">Origin</p>
                <p className="mt-1 text-sm leading-6 text-bone-200/85">{stone.origin}</p>
                <p className="mt-2 font-mono text-[11px] uppercase text-acid-400">
                  {stone.seed}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
          <Hash className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Mint receipt anatomy
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Even if headstones become tradable, the card should always expose where it came from:
            award, burial ID, original earner, trait seed, and no-value-promise language.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Original earner", "The wallet or profile that earned the headstone remains visible after resale."],
            ["Burial link", "The collectible points back to a memorial record or award page."],
            ["Trait seed", "A published seed makes rare trait generation feel transparent."],
            ["No value promise", "Rarity is flavor and collectibility, not an investment claim."]
          ].map(([title, copy]) => (
            <article key={title} className="terminal-border p-5">
              <BadgeCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-bone-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-bone-500">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="terminal-border p-6">
          <Sparkles className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Trait language
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The fun comes from visible variety, not a hidden slot machine. Traits should be
            transparent, understandable, and tied to achievements where possible.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {traitGroups.map((group) => (
              <div key={group.group} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-xs uppercase text-acid-400">{group.group}</p>
                <p className="mt-2 text-sm leading-6 text-bone-500">
                  {group.examples.join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <Boxes className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Rarity tiers
          </h2>
          <div className="mt-6 space-y-3">
            {rarityTiers.map((tier) => (
              <div key={tier.tier} className="grid gap-3 border border-bone-200/10 bg-black/20 p-4 sm:grid-cols-[0.24fr_0.24fr_0.52fr]">
                <p className="font-mono text-xs uppercase text-acid-400">{tier.tier}</p>
                <p className="font-mono text-xs uppercase text-bone-300">{tier.supply}</p>
                <p className="text-sm leading-6 text-bone-500">{tier.treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-blood-500">Collectible warning</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Rarity can be fun without becoming the point.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              The site should never promise that headstones will gain value. Collectibility should
              come from art, history, provenance, and community recognition.
            </p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
          >
            <ShieldCheck size={18} aria-hidden="true" />
            Read FAQ
          </Link>
        </div>
      </section>

      <KeepExploring current="headstones" />

      <DisclaimerFooter variant="standard" />
    </main>
  );
}
