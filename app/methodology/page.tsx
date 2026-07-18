import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardList,
  Coins,
  FileWarning,
  ShieldCheck,
  Skull,
  Sparkles,
  Trophy
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import {
  confidenceTiers,
  methodologyExamples,
  metricDefinitions,
  valueMethodologySteps
} from "../content/sampleData";

export const metadata: Metadata = {
  title: "Metrics & Methodology | Crypto Graveyard",
  description:
    "How Crypto Graveyard separates peak observed value, burial value, round trip, documentation status, and tax treatment.",
  robots: {
    index: false,
    follow: false
  }
};

const headlineStats = [
  ["Tax-loss verification", "Never", "Outside site scope"],
  ["Peak observed value", "Notional", "Story metric"],
  ["Liquidation value", "Estimated", "Liquidity-aware"],
  ["Documentation", "Tiered", "Evidence labels"]
] as const;

export default function MethodologyPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="methodology" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <ClipboardList size={14} aria-hidden="true" />
            Value language
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Metrics & Methodology
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            The cemetery can be theatrical. The numbers need labels.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page defines how Crypto Graveyard should talk about values once real burials
            exist. The key rule is simple: peak observed value, estimated liquidation value,
            documented cost, and tax loss are different things.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cemetery"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Skull size={18} aria-hidden="true" />
              Coin cemetery
            </Link>
            <Link
              href="/review-process"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Review process
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Methodology terminal</span>
            <span className="text-acid-400">draft policy</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {headlineStats.map(([label, value, note]) => (
              <div key={label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{label}</p>
                <p className="mt-2 font-display text-3xl font-bold text-bone-100">{value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase text-acid-400/80">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Important:</strong>{" "}
            A leaderboard number is not a tax number. A certificate is not an appraisal. A plaque is
            not a deduction. The graveyard is not your accountant wearing a cape.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Metric dictionary"
          title="What each public number should mean"
          copy="The site can be playful in tone while still being disciplined about the difference between observed, estimated, documented, and not-determined values."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {metricDefinitions.map((metric) => (
            <article key={metric.metric} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-acid-400">{metric.publicLabel}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
                    {metric.metric}
                  </h2>
                </div>
                <BadgeCheck className="text-acid-400" size={24} aria-hidden="true" />
              </div>
              <div className="mt-5 border border-bone-200/10 bg-black/20 p-3">
                <p className="font-mono text-[11px] uppercase text-bone-500">Formula / rule</p>
                <p className="mt-1 font-mono text-xs uppercase leading-5 text-bone-100">
                  {metric.formula}
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-bone-500">{metric.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="terminal-border p-6">
          <Sparkles className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
            Value calculation flow
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The real system should reconstruct the wallet story first, then attach market data,
            then label the result. That order prevents spectacular nonsense.
          </p>
        </div>

        <div className="space-y-4">
          {valueMethodologySteps.map((step, index) => (
            <article
              key={step.step}
              className="grid gap-4 border border-bone-200/10 bg-grave-900/75 p-5 shadow-card md:grid-cols-[0.16fr_0.3fr_0.54fr]"
            >
              <p className="font-mono text-xs uppercase text-acid-400">Step {index + 1}</p>
              <h3 className="font-display text-2xl font-bold text-bone-100">{step.step}</h3>
              <p className="text-sm leading-6 text-bone-500">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Confidence tiers"
          title="Labels visitors can understand at a glance"
          copy="A future coin page can show these next to every value so users know whether they are looking at sample data, chain facts, price estimates, private records, or uncertainty."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          {confidenceTiers.map((tier) => (
            <article key={tier.label} className="terminal-border p-5">
              <ShieldCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-bone-100">{tier.label}</h2>
              <p className="mt-2 font-mono text-xs uppercase text-violet-400">{tier.status}</p>
              <p className="mt-3 text-sm leading-6 text-bone-500">{tier.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <FileWarning className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Common ways numbers go feral
          </h2>
          <div className="mt-6 space-y-4">
            {methodologyExamples.map((example) => (
              <article key={example.title} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-xs uppercase text-acid-400">{example.title}</p>
                <p className="mt-3 text-sm leading-6 text-bone-500">
                  <span className="text-blood-500">Bad shortcut:</span> {example.mistake}
                </p>
                <p className="mt-2 text-sm leading-6 text-bone-200/85">
                  <span className="text-acid-400">Better label:</span> {example.correction}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="terminal-border p-6">
          <Trophy className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Leaderboard-safe wording
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The public leaderboard should say “peak observed wallet value,” “round trip,”
            “documented acquisition cost,” or “burial value” depending on what is actually known.
            It should not collapse all of those into “loss.”
          </p>
          <div className="mt-6 grid gap-3">
            {[
              ["Use", "Peak observed notional value"],
              ["Use", "Estimated liquidation value"],
              ["Use", "Documented acquisition cost"],
              ["Avoid", "Verified tax loss"],
              ["Avoid", "Guaranteed write-off"],
              ["Avoid", "Charitable donation receipt"]
            ].map(([label, copy]) => (
              <div key={copy} className="grid gap-3 border border-bone-200/10 bg-black/20 p-3 sm:grid-cols-[0.22fr_0.78fr]">
                <p
                  className={
                    label === "Use"
                      ? "font-mono text-xs uppercase text-acid-400"
                      : "font-mono text-xs uppercase text-blood-500"
                  }
                >
                  {label}
                </p>
                <p className="font-mono text-xs uppercase text-bone-200">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Implementation note</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              These definitions can become tooltips and validation rules later.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              For the sample site, this is public education. For the real product, the same labels
              can drive reviewer checklists, coin profile badges, certificate fields, and award
              eligibility.
            </p>
          </div>
          <Link
            href="/awards"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Coins size={18} aria-hidden="true" />
            Awards layer
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="standard" />
    </main>
  );
}
