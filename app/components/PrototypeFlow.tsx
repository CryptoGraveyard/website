import Link from "next/link";
import { BadgeCheck, Coins, FileText, Gem, Ghost, Radio, ShieldCheck, Trophy } from "lucide-react";
import { SectionIntro } from "./SectionIntro";

const flowSteps = [
  {
    title: "Browse the cemetery",
    eyebrow: "Step 01",
    copy: "Start with fictional dead-coin profiles, causes of death, confidence labels, and peak-value storytelling.",
    href: "/cemetery",
    cta: "Open cemetery",
    icon: Coins
  },
  {
    title: "Open a memorial",
    eyebrow: "Step 02",
    copy: "See how one burial can become a public record with an epitaph, timeline, eulogy, and safety labels.",
    href: "/memorial/sample",
    cta: "View memorial",
    icon: Ghost
  },
  {
    title: "Compare the legends",
    eyebrow: "Step 03",
    copy: "Leaderboards turn spectacular round trips into entertainment while keeping tax claims out of the story.",
    href: "/hall-of-fame",
    cta: "View rankings",
    icon: Trophy
  },
  {
    title: "Preview the artifacts",
    eyebrow: "Step 04",
    copy: "Certificates, plaques, and headstones show how the graveyard becomes shareable without promising value.",
    href: "/certificates",
    cta: "View certificates",
    icon: FileText
  }
] as const;

const statusItems = [
  {
    label: "What is live now",
    value: "Sample site",
    copy: "Visitors can explore the concept, pages, language, and fictional records before any real wallet flow exists.",
    icon: BadgeCheck
  },
  {
    label: "What is closed",
    value: "Real burials",
    copy: "No public receiving wallets, no live token submissions, no beta form storage, and no automated watcher yet.",
    icon: ShieldCheck
  },
  {
    label: "What comes later",
    value: "Media loop",
    copy: "Approved burials can eventually trigger memorial pages, stream alerts, certificates, awards, and headstones.",
    icon: Radio
  }
] as const;

export function PrototypeFlow({ className = "" }: { className?: string }) {
  return (
    <section className={`px-5 py-14 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How the prototype works"
          title="A simple visitor path before real wallets open"
          copy="The public site should be understandable in one lap: cemetery, memorial, leaderboard, artifacts, then the future livestream."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {flowSteps.map((step) => {
            const Icon = step.icon;

            return (
              <Link
                key={step.title}
                href={step.href}
                className="gothic-card group p-6 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase text-acid-400">{step.eyebrow}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-bone-100">
                      {step.title}
                    </h3>
                  </div>
                  <Icon className="text-acid-400" size={24} aria-hidden="true" />
                </div>
                <p className="mt-4 min-h-24 text-sm leading-6 text-bone-500">{step.copy}</p>
                <p className="mt-5 font-mono text-xs uppercase text-acid-400 group-hover:text-bone-100">
                  {step.cta} →
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {statusItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label} className="terminal-border p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase text-bone-500">{item.label}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-bone-100">
                      {item.value}
                    </h3>
                  </div>
                  <Icon className="text-acid-400" size={22} aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm leading-6 text-bone-500">{item.copy}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-5 border border-violet-400/25 bg-violet-400/10 p-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase text-violet-400">Collectible split</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-bone-100">
                Memorial credit stays earned. Headstone art can become collectible later.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
                The future non-transferable profile can record who actually performed a burial,
                while optional pixel headstones can carry artwork, rarity, and provenance.
              </p>
            </div>
            <Link
              href="/headstones"
              className="inline-flex items-center justify-center gap-2 border border-violet-400 bg-violet-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 transition hover:bg-bone-100"
            >
              <Gem size={18} aria-hidden="true" />
              View headstones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
