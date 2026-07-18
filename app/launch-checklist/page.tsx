import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  ClipboardCheck,
  ClipboardList,
  FileWarning,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Skull,
  Sparkles
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import {
  launchChecklistGroups,
  launchGates,
  launchPrinciples,
  launchReadinessStats
} from "../content/sampleData";

export const metadata: Metadata = {
  title: "Launch Checklist | Crypto Graveyard",
  description:
    "A launch-readiness checklist for Crypto Graveyard's public prototype, controlled beta, wallet operations, memorial records, awards, and collectibles."
};

const itemStyles: Record<string, string> = {
  Done: "border-acid-400/35 bg-acid-400/12 text-acid-400",
  Prototype: "border-violet-400/35 bg-violet-400/12 text-violet-400",
  Next: "border-bone-200/20 bg-bone-100/10 text-bone-100",
  Later: "border-blood-500/35 bg-blood-500/12 text-blood-500"
};

const decisionStyles: Record<string, string> = {
  Ready: "border-acid-400/35 bg-acid-400/12 text-acid-400",
  "Not ready": "border-blood-500/35 bg-blood-500/12 text-blood-500"
};

export default function LaunchChecklistPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="launch" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <ClipboardCheck size={14} aria-hidden="true" />
            Readiness map
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Launch Checklist
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            The cemetery can look alive before the gates are open.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page separates the shareable concept launch from the operational launch. The public
            site can be explored now with sample data, while real beta requests, wallets, burials,
            plaques, and collectibles stay behind clear readiness gates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ClipboardList size={18} aria-hidden="true" />
              Roadmap
            </Link>
            <Link
              href="/wallet-policy"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <LockKeyhole size={18} aria-hidden="true" />
              Wallet plan
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Launch terminal</span>
            <span className="text-acid-400">safe prototype</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {launchReadinessStats.map((stat) => (
              <div key={stat.label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{stat.label}</p>
                <p className="mt-2 font-display text-3xl font-bold text-bone-100">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase text-acid-400/80">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Current state:</strong>{" "}
            Shareable concept, yes. Real burial platform, not yet. The gates creak theatrically,
            but they remain locked.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Readiness gates"
          title="What can launch now, what must wait"
          copy="Each gate answers a practical question: is this part safe to expose to the public, or does it need backend, review, wallet, consent, or legal-language work first?"
        />

        <div className="space-y-4">
          {launchGates.map((gate) => (
            <article
              key={gate.gate}
              className="grid gap-4 border border-bone-200/10 bg-grave-900/75 p-5 shadow-card lg:grid-cols-[0.28fr_0.52fr_0.2fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase text-acid-400">Gate</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-bone-100">
                  {gate.gate}
                </h2>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-bone-500">Requirement</p>
                <p className="mt-2 text-sm leading-6 text-bone-500">{gate.requirement}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-bone-500">Decision</p>
                <p
                  className={`mt-2 inline-flex border px-2 py-1 font-mono text-[11px] uppercase ${
                    decisionStyles[gate.decision]
                  }`}
                >
                  {gate.decision}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Checklist groups"
          title="The operational map"
          copy="The current prototype already has many public-facing pages. The next real work is the storage, review, wallet, and moderation machinery behind them."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {launchChecklistGroups.map((group) => (
            <article key={group.group} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-acid-400">{group.status}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
                    {group.group}
                  </h2>
                </div>
                {group.group === "Wallet operations" ? (
                  <LockKeyhole className="text-blood-500" size={26} aria-hidden="true" />
                ) : group.group === "Media and collectibles" ? (
                  <Radio className="text-violet-400" size={26} aria-hidden="true" />
                ) : (
                  <BadgeCheck className="text-acid-400" size={26} aria-hidden="true" />
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-bone-500">{group.summary}</p>

              <div className="mt-6 space-y-3">
                {group.items.map(([item, status]) => (
                  <div
                    key={item}
                    className="grid gap-3 border border-bone-200/10 bg-black/20 p-3 sm:grid-cols-[0.72fr_0.28fr]"
                  >
                    <p className="text-sm leading-6 text-bone-200/85">{item}</p>
                    <p
                      className={`inline-flex w-fit border px-2 py-1 font-mono text-[11px] uppercase ${
                        itemStyles[status]
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <ShieldCheck className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
            Launch principles
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            These are the rules that keep the project moving forward without opening the parts that
            need operational maturity first.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {launchPrinciples.map((principle) => (
            <article key={principle.label} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
              <Sparkles className="text-acid-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-bone-100">
                {principle.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <FileWarning className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Do not launch these accidentally
          </h2>
          <div className="mt-6 space-y-3">
            {[
              "Do not publish receiving wallets before the review and watcher plan is ready.",
              "Do not accept private keys, seed phrases, exchange logins, or remote access.",
              "Do not advertise tax-loss harvesting, charitable deductions, or investment value.",
              "Do not ship plaques without explicit winner consent and private fulfillment handling.",
              "Do not mint NFTs/SBTs before metadata, provenance, and no-value-promise language are settled."
            ].map((warning) => (
              <div key={warning} className="flex gap-3 border border-bone-200/10 bg-black/20 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-blood-500" />
                <p className="text-sm leading-6 text-bone-200/85">{warning}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-border p-6">
          <Skull className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            What “launch” means right now
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Right now, launch means the public can understand Crypto Graveyard and follow the
            project. It does not mean users can bury tokens yet. That distinction is a feature, not
            a delay.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              ["Can share the domain", "Yes"],
              ["Can browse sample data", "Yes"],
              ["Can submit real beta requests", "No"],
              ["Can send real tokens", "No"],
              ["Can receive awards", "No"]
            ].map(([label, value]) => (
              <div key={label} className="grid gap-3 border border-bone-200/10 bg-black/20 p-3 sm:grid-cols-[0.72fr_0.28fr]">
                <p className="font-mono text-xs uppercase text-bone-300">{label}</p>
                <p className="font-mono text-xs uppercase text-acid-400">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Next best build</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              After this, the practical next step is the real beta-request backend.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              The public prototype is broad enough now. The next major shift is moving from sample
              pages to stored requests, admin review, and controlled instructions.
            </p>
          </div>
          <Link
            href="/beta-request"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <BellRing size={18} aria-hidden="true" />
            Beta request preview
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="standard" />
    </main>
  );
}
