import type { Metadata } from "next";
import Link from "next/link";
import { CircleHelp, FileWarning, ShieldCheck, Skull } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { neverAskItems } from "../content/safety";
import { faqItems } from "../content/sampleData";

export const metadata: Metadata = {
  title: "FAQ | Crypto Graveyard",
  description:
    "Frequently asked questions for Crypto Graveyard's sample-data prototype, wallet safety rules, and future burial process."
};

const visitorPromises = [
  "The site will label sample, estimated, observed, documented, and unknown values clearly.",
  "The site will not ask for private keys, seed phrases, passwords, or remote access.",
  "The site will not call a memorial a verified tax loss or charitable deduction.",
  "The site will not publish real receiving wallets until the process is ready.",
  "The site will default to pseudonyms and masked wallet display where possible."
] as const;

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="faq" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.86fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <CircleHelp size={14} aria-hidden="true" />
            Visitor guidance
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            FAQ
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            The cemetery has jokes. The safety rules are serious.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page answers the obvious questions before real burials, wallets, certificates, or
            collectibles go live. It is intentionally blunt because crypto weirdness rewards
            ambiguity, and we are not feeding that raccoon.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              About & safety
            </Link>
            <Link
              href="/cemetery"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Skull size={18} aria-hidden="true" />
              Coin cemetery
            </Link>
          </div>
        </div>

        <div className="border border-blood-500/25 bg-blood-500/10 p-5 shadow-card">
          <FileWarning className="text-blood-500" size={28} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Never share these
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Crypto Graveyard will never need secrets. If someone asks, treat it as an impersonation
            attempt.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {neverAskItems.map((item) => (
              <div key={item} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Questions"
          title="The pre-launch answers"
          copy="The current site is a complete sample-data prototype. These answers should evolve as each real system comes online."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.question} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-bone-100">{item.question}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <Skull className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Plain-English positioning
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Crypto Graveyard should be easy to describe: a memorial and media site for dead crypto
            stories. Not a tax service. Not a charity. Not a broker. Not a wallet recovery tool.
          </p>
        </div>

        <div className="grid gap-3">
          {visitorPromises.map((promise) => (
            <div key={promise} className="flex gap-3 border border-bone-200/10 bg-grave-900/75 p-4">
              <span className="mt-2 h-2 w-2 shrink-0 bg-acid-400" />
              <p className="text-sm leading-6 text-bone-200/85">{promise}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Ready to explore</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The sample cemetery is open. The real gates are not.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              Visitors can explore the full product direction now, while all real transfers remain
              closed until the backend, review model, and wallet policy are ready.
            </p>
          </div>
          <Link
            href="/cemetery"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Skull size={18} aria-hidden="true" />
            Coin cemetery
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="standard" />
    </main>
  );
}
