import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Flame,
  Ghost,
  QrCode,
  ShieldCheck,
  Share2,
  Sparkles,
  Trophy
} from "lucide-react";
import { DisclaimerFooter } from "../../components/DisclaimerFooter";
import { KeepExploring } from "../../components/KeepExploring";
import { PixelHeadstone } from "../../components/PixelHeadstone";
import { SectionIntro } from "../../components/SectionIntro";
import { SiteNav } from "../../components/SiteNav";

export const metadata: Metadata = {
  title: "Sample Memorial | Crypto Graveyard",
  description:
    "A fictional Crypto Graveyard memorial page prototype showing how a buried token record, eulogy, and confidence labels could look."
};

const valueCards = [
  { label: "Peak observed", value: "$412,884", note: "Fictional sample notional value" },
  { label: "Burial value", value: "$3.17", note: "Fictional sample estimate" },
  { label: "Round trip", value: "$412,880.83", note: "Entertainment metric, not tax basis" },
  { label: "Confidence", value: "Demo", note: "No real wallet or market data used" }
];

const facts = [
  ["Memorial ID", "CG-DEMO-0001"],
  ["Coin", "MoonRocket Inu"],
  ["Ticker", "MRI"],
  ["Chain", "Ethereum sample"],
  ["Amount buried", "12,487,392 MRI"],
  ["Buried by", "MoonBagMike"],
  ["Burial date", "July 17, 2026"],
  ["Masked wallet", "0x91A3...72F8"],
  ["Sample transaction", "0xdead...beef"]
];

const confidenceLabels = [
  {
    label: "Wallet control",
    status: "Future verification",
    copy: "Live submissions should require signed-message proof or a small verification transaction."
  },
  {
    label: "Token transfer",
    status: "Demo only",
    copy: "This prototype does not represent an actual blockchain transfer."
  },
  {
    label: "Peak value",
    status: "Sample calculation",
    copy: "Future versions should separate peak notional value from estimated liquidation value."
  },
  {
    label: "Tax treatment",
    status: "Not determined",
    copy: "Crypto Graveyard should never label a burial as a verified deductible tax loss."
  }
];

const timeline = [
  {
    date: "Nov 8, 2021",
    title: "Peak observed value",
    copy: "The sample wallet allegedly watched MoonRocket Inu reach peak meme altitude."
  },
  {
    date: "Apr 14, 2024",
    title: "Roadmap silence",
    copy: "The project Discord became a museum of pinned promises and unanswered rocket emojis."
  },
  {
    date: "Jul 17, 2026",
    title: "Burial ceremony",
    copy: "MoonBagMike lays the fictional bag to rest in the Crypto Graveyard demo cemetery."
  }
];

const certificateFields = [
  "Public memorial page",
  "AI-generated eulogy",
  "Leaderboard eligibility",
  "Downloadable certificate",
  "Future SBT profile credit",
  "Optional headstone NFT artwork"
];

export default function SampleMemorialPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="memorial" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Ghost size={14} aria-hidden="true" />
            Sample memorial
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            MoonRocket Inu
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Promised orbit. Found basement.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            Here lies MoonRocket Inu, a fictional token that promised passive income, community
            governance, lunar branding, and a roadmap shaped suspiciously like a staircase to
            Valhalla. It is survived by sample bagholders, unread announcements, and one tasteful
            pixel headstone.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cemetery"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Ghost size={18} aria-hidden="true" />
              Explore cemetery
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
          <PixelHeadstone accent="acid" label="MoonRocket" shape="Monolith" size="lg" />
          <div className="mt-6 border border-bone-200/10 bg-black/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase text-bone-500">Share URL</p>
              <Share2 className="text-acid-400" size={18} aria-hidden="true" />
            </div>
            <p className="mt-2 break-all font-mono text-sm text-bone-100">
              cryptograveyard.io/memorial/sample
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-8 lg:grid-cols-4">
        {valueCards.map((card) => (
          <article key={card.label} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
            <p className="font-mono text-xs uppercase text-bone-500">{card.label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-bone-100">{card.value}</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <FileText className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">Burial record</h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            This prototype shows the type of public record a real burial could create after wallet
            proof, transfer confirmation, and display consent.
          </p>
          <div className="mt-6 space-y-3">
            {facts.map(([label, value]) => (
              <div key={label} className="grid gap-2 border border-bone-200/10 bg-black/20 p-3 sm:grid-cols-[0.42fr_0.58fr]">
                <p className="font-mono text-xs uppercase text-bone-500">{label}</p>
                <p className="font-mono text-sm text-bone-100">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-violet-400/20 bg-violet-400/10 p-6 shadow-card">
          <Sparkles className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">Eulogy</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-bone-200/85">
            <p>
              MoonRocket Inu entered the world carrying a whitepaper, a meme, and the type of
              confidence usually reserved for weather apps during tornado season.
            </p>
            <p>
              It promised orbit. It delivered turbulence. It promised a community treasury. It
              delivered screenshots, cope, and a chart that looked like it found an open elevator
              shaft.
            </p>
            <p>
              Today, we lower this fictional bag into the demo soil. May its candles be short, its
              slippage remembered, and its holders finally close that tab.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Confidence labels"
          title="Label the evidence, not the fantasy."
          copy="Memorial pages should make it obvious which claims are on-chain, estimated, privately documented, or unknown."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {confidenceLabels.map((item) => (
            <article key={item.label} className="terminal-border p-5">
              <ShieldCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-bone-100">{item.label}</h3>
              <p className="mt-2 font-mono text-xs uppercase text-violet-400">{item.status}</p>
              <p className="mt-3 text-sm leading-6 text-bone-500">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <Flame className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">Burial timeline</h2>
          <div className="mt-6 space-y-4">
            {timeline.map((event) => (
              <div key={event.title} className="grid gap-3 border-l border-acid-400/30 pl-4 sm:grid-cols-[0.24fr_0.76fr]">
                <p className="font-mono text-xs uppercase text-acid-400">{event.date}</p>
                <div>
                  <h3 className="font-display text-xl font-bold text-bone-100">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone-500">{event.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-border p-6">
          <QrCode className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">Certificate preview</h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            A burial can become a printable/shareable certificate first, then later connect to SBT
            profile credit or optional randomized headstone NFTs.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {certificateFields.map((field) => (
              <div key={field} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-300">
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-blood-500">Demo disclaimer</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              This memorial is fictional.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              It does not prove ownership, wallet control, token value, cost basis, tax treatment,
              charitable deduction status, or investment outcome. It is a product prototype for the
              memorial experience.
            </p>
          </div>
          <Link
            href="/awards"
            className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
          >
            <Trophy size={18} aria-hidden="true" />
            Award previews
          </Link>
        </div>
      </section>

      <KeepExploring current="memorial" />

      <DisclaimerFooter variant="sample" />
    </main>
  );
}
