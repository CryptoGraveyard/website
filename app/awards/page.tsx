import type { Metadata } from "next";
import Link from "next/link";
import { Award, BadgeCheck, Crown, Gem, Medal, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { awardGuardrails, awardPrograms } from "../content/sampleData";

export const metadata: Metadata = {
  title: "Awards & Plaques | Crypto Graveyard",
  description:
    "A sample-data preview of Crypto Graveyard monthly awards, annual titles, physical plaque concepts, and headstone eligibility guardrails."
};

const accentStyles: Record<string, { border: string; text: string; bg: string }> = {
  acid: {
    border: "border-acid-400/35",
    text: "text-acid-400",
    bg: "bg-acid-400/10"
  },
  violet: {
    border: "border-violet-400/35",
    text: "text-violet-400",
    bg: "bg-violet-400/10"
  },
  blood: {
    border: "border-blood-500/35",
    text: "text-blood-500",
    bg: "bg-blood-500/10"
  },
  bone: {
    border: "border-bone-200/20",
    text: "text-bone-100",
    bg: "bg-bone-100/10"
  }
};

const awardStats = [
  ["Sample programs", awardPrograms.length.toString(), "Demo rules"],
  ["Physical plaques", "Concept", "Opt-in later"],
  ["Headstone tie-in", "Yes", "Future collectible"],
  ["Tax conclusions", "0", "Never the award"]
] as const;

function PlaquePreview() {
  return (
    <div className="border border-bone-200/15 bg-bone-100/10 p-5 shadow-card">
      <div className="border border-acid-400/30 bg-grave-950 p-6 text-center pixel-shadow">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-acid-400">
          Crypto Graveyard
        </p>
        <h2 className="mt-4 font-display text-4xl font-black uppercase text-bone-100">
          Funeral of the Month
        </h2>
        <div className="mx-auto mt-5 h-1 w-28 bg-acid-400" />
        <p className="mt-6 font-display text-2xl font-bold text-bone-100">MoonBagMike</p>
        <p className="mt-3 font-mono text-sm uppercase text-bone-500">
          Peak observed round trip: $412,880.83
        </p>
        <p className="mx-auto mt-6 max-w-sm text-xl leading-8 text-acid-400">
          “Never sold. Barely slept.”
        </p>
        <p className="mt-6 font-mono text-xs uppercase text-bone-500">
          May the chart finally rest.
        </p>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="awards" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Award size={14} aria-hidden="true" />
            Award layer preview
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Awards & Plaques
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Monthly trophies for legendary bags, annual crowns for historic financial oofs.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews the recognition layer: physical plaque concepts, public award pages,
            profile badges, and future headstone eligibility. It is sample data only, and the award
            never means Crypto Graveyard verified a tax result.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/headstones"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Gem size={18} aria-hidden="true" />
              Headstone preview
            </Link>
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Trophy size={18} aria-hidden="true" />
              Hall of Fame
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Award terminal</span>
            <span className="text-acid-400">sample mode</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {awardStats.map(([label, value, note]) => (
              <div key={label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{label}</p>
                <p className="mt-2 font-display text-3xl font-bold text-bone-100">{value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase text-acid-400/80">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Bright line:</strong>{" "}
            Awards are community recognition. They are not appraisals, charitable receipts,
            broker records, or tax documents.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Award programs"
          title="A sample trophy case with rules attached"
          copy="Each award page defines cadence, mock winner, public fields, plaque language, and the safety line before real submissions exist."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {awardPrograms.map((award) => {
            const styles = accentStyles[award.accent] ?? accentStyles.acid;

            return (
              <Link
                key={award.slug}
                href={`/awards/${award.slug}`}
                className={`group border ${styles.border} ${styles.bg} p-6 shadow-card transition hover:border-acid-400/70`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`font-mono text-xs uppercase ${styles.text}`}>{award.cadence}</p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
                      {award.title}
                    </h2>
                  </div>
                  {award.slug === "king-of-the-graveyard" ? (
                    <Crown className={styles.text} size={28} aria-hidden="true" />
                  ) : award.slug === "most-diamond-hands" ? (
                    <Medal className={styles.text} size={28} aria-hidden="true" />
                  ) : (
                    <Trophy className={styles.text} size={28} aria-hidden="true" />
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-bone-500">{award.headline}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="border border-bone-200/10 bg-black/20 p-3">
                    <p className="font-mono text-[11px] uppercase text-bone-500">Winner</p>
                    <p className="mt-1 font-display text-xl font-bold text-bone-100">
                      {award.winner}
                    </p>
                  </div>
                  <div className="border border-bone-200/10 bg-black/20 p-3">
                    <p className="font-mono text-[11px] uppercase text-bone-500">Metric</p>
                    <p className={`mt-1 font-display text-xl font-bold ${styles.text}`}>
                      {award.awardValue}
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-mono text-xs uppercase text-acid-400 group-hover:text-bone-100">
                  Open award profile →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            eyebrow="Plaque concept"
            title="Physical awards can be funny without being legally weird"
            copy="The plaque should celebrate the public story and opt-in display name. It should never say the winner received a deduction or that Crypto Graveyard certified a loss."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Plaque ships privately", "Shipping details stay off the public site and should be collected only from confirmed winners."],
              ["Winner controls display", "Public pages can use pseudonyms, masked wallets, and opt-in links by default."],
              ["Metric labels matter", "Use peak observed, round trip, burial value, and documentation status instead of tax-loss language."],
              ["NFTs stay separate", "Future tradable headstones can be collectible artwork without rewriting who earned the award."]
            ].map(([title, copy]) => (
              <article key={title} className="terminal-border p-5">
                <BadgeCheck className="text-acid-400" size={20} aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold text-bone-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-bone-500">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <PlaquePreview />
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-12 lg:grid-cols-4">
        {awardGuardrails.map((guardrail) => (
          <article key={guardrail.label} className="terminal-border p-5">
            <ShieldCheck className="text-acid-400" size={20} aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-bold text-bone-100">
              {guardrail.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-bone-500">{guardrail.copy}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Future loop</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Awards connect profiles, plaques, certificates, and headstones.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              This route gives us the public trophy case now. Later, real award winners can be
              generated from reviewed burial records and community moderation.
            </p>
          </div>
          <Link
            href="/bury-a-coin"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Sparkles size={18} aria-hidden="true" />
            Future burial flow
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
