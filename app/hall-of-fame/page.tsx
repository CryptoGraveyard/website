import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BellRing,
  Crown,
  Flame,
  Medal,
  Sparkles,
  Trophy
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Hall of Fame | Crypto Graveyard",
  description:
    "A fictional demo leaderboard for Crypto Graveyard's biggest buried bags, greatest round trips, and monthly funeral awards."
};

const leaderboard = [
  {
    rank: 1,
    alias: "MoonBagMike",
    coin: "MoonRocket Inu",
    category: "Biggest Round Trip",
    peak: "$412,884",
    burial: "$3.17",
    decline: "$412,880.83",
    epitaph: "Promised orbit. Found basement.",
    badge: "Funeral of the Month"
  },
  {
    rank: 2,
    alias: "VaultWizard",
    coin: "Yield Phantom",
    category: "Most Diamond Hands",
    peak: "$219,050",
    burial: "$12.09",
    decline: "$219,037.91",
    epitaph: "APY was the plot twist.",
    badge: "King Candidate"
  },
  {
    rank: 3,
    alias: "RugHistorian",
    coin: "SafeMars Classic",
    category: "Oldest Bag",
    peak: "$88,210",
    burial: "$0.42",
    decline: "$88,209.58",
    epitaph: "Still waiting on the roadmap.",
    badge: "Vintage Dust"
  },
  {
    rank: 4,
    alias: "ChartMortician",
    coin: "ApeNebula DAO",
    category: "Most Tokens Buried",
    peak: "$64,500",
    burial: "$0.09",
    decline: "$64,499.91",
    epitaph: "Governance arrived after the funeral.",
    badge: "Token Avalanche"
  },
  {
    rank: 5,
    alias: "ExitLiquidity",
    coin: "Diamond Pawz",
    category: "Best Epitaph",
    peak: "$31,404",
    burial: "$0.01",
    decline: "$31,403.99",
    epitaph: "The whitepaper was mostly vibes.",
    badge: "Poet of Pain"
  },
  {
    rank: 6,
    alias: "NeverSoldActually",
    coin: "MetaCoffin",
    category: "Longest Hold",
    peak: "$18,777",
    burial: "$1.08",
    decline: "$18,775.92",
    epitaph: "A metaverse no one logged into.",
    badge: "Four-Year Hold"
  }
];

const awardCards = [
  {
    title: "Funeral of the Month",
    winner: "MoonBagMike",
    value: "$412,880.83",
    note: "Largest fictional round trip in the demo cemetery.",
    icon: Trophy,
    accent: "text-acid-400"
  },
  {
    title: "King of the Graveyard",
    winner: "Pending",
    value: "Annual award",
    note: "Reserved for the most spectacular documented burial once real submissions exist.",
    icon: Crown,
    accent: "text-violet-400"
  },
  {
    title: "Most Diamond Hands",
    winner: "VaultWizard",
    value: "Still held",
    note: "For bags carried bravely past several obvious warning signs.",
    icon: Medal,
    accent: "text-blood-500"
  }
];

const metricCards = [
  {
    label: "Biggest Round Trip",
    copy: "Peak observed wallet value minus burial value. Entertaining, not tax basis."
  },
  {
    label: "Most Tokens Buried",
    copy: "Raw token quantity sent to the cemetery, adjusted later for token decimals."
  },
  {
    label: "Funeral of the Month",
    copy: "A featured burial selected from value, story, rarity, and community reaction."
  },
  {
    label: "Documented Loss",
    copy: "Future private-review tier based on user-submitted acquisition records."
  }
];

function RankMarker({ rank }: { rank: number }) {
  const styles =
    rank === 1
      ? "border-acid-400 bg-acid-400 text-grave-950 shadow-glow"
      : rank === 2
        ? "border-violet-400 bg-violet-400/20 text-violet-400"
        : rank === 3
          ? "border-blood-500 bg-blood-500/20 text-blood-500"
          : "border-bone-200/20 bg-grave-800 text-bone-200";

  return (
    <span className={`grid h-11 w-11 shrink-0 place-items-center border font-mono text-sm font-bold ${styles}`}>
      #{rank}
    </span>
  );
}

export default function HallOfFamePage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="hall" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Sparkles size={14} aria-hidden="true" />
            Demo leaderboard
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Hall of Fame
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            The leaderboard for legendary bags and historic financial oofs.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews how Crypto Graveyard can celebrate spectacular round trips,
            month-end winners, and future headstone awards. Every value here is fictional sample
            data until wallet tracking and verification are live.
          </p>
          <Link
            href="/memorial/sample"
            className="mt-8 inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Trophy size={18} aria-hidden="true" />
            View sample memorial
          </Link>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Cemetery status</span>
            <span className="text-acid-400">sample mode</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between border border-bone-200/10 bg-black/20 p-4">
              <span className="font-mono text-xs uppercase text-bone-500">Entries displayed</span>
              <span className="font-display text-3xl font-bold text-bone-100">6</span>
            </div>
            <div className="flex items-center justify-between border border-bone-200/10 bg-black/20 p-4">
              <span className="font-mono text-xs uppercase text-bone-500">Sample peak buried</span>
              <span className="font-display text-3xl font-bold text-bone-100">$835K</span>
            </div>
            <div className="border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
              <strong className="font-mono text-xs uppercase text-blood-500">Important:</strong>{" "}
              Demo rankings are entertainment metrics. They do not verify cost basis, tax losses,
              charitable deductions, or actual ownership.
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-8 lg:grid-cols-3">
        {awardCards.map((award) => {
          const Icon = award.icon;
          return (
            <article key={award.title} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-bone-500">{award.title}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">{award.winner}</h2>
                </div>
                <Icon className={award.accent} size={26} aria-hidden="true" />
              </div>
              <p className={`mt-5 font-display text-2xl font-bold ${award.accent}`}>{award.value}</p>
              <p className="mt-3 text-sm leading-6 text-bone-500">{award.note}</p>
            </article>
          );
        })}
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Leaderboard</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
              Biggest demo burials
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-bone-500">
            Later, each row can link to a permanent burial page with wallet evidence, value method,
            eulogy, and optional certificate.
          </p>
        </div>

        <div className="space-y-4">
          {leaderboard.map((entry) => (
            <article
              key={entry.rank}
              className="grid gap-5 border border-bone-200/10 bg-grave-900/75 p-5 shadow-card lg:grid-cols-[auto_1fr_auto]"
            >
              <div className="flex items-start gap-4">
                <RankMarker rank={entry.rank} />
                <div>
                  <p className="font-mono text-xs uppercase text-bone-500">{entry.alias}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-bone-100">{entry.coin}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone-500">{entry.epitaph}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Peak observed</p>
                  <p className="mt-1 font-display text-xl font-bold text-bone-100">{entry.peak}</p>
                </div>
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Burial value</p>
                  <p className="mt-1 font-display text-xl font-bold text-acid-400">{entry.burial}</p>
                </div>
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Round trip</p>
                  <p className="mt-1 font-display text-xl font-bold text-blood-500">{entry.decline}</p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-3 lg:items-end">
                <span className="border border-violet-400/30 bg-violet-400/10 px-2 py-1 font-mono text-[11px] uppercase text-violet-400">
                  {entry.badge}
                </span>
                <span className="border border-bone-200/15 bg-bone-100/10 px-2 py-1 font-mono text-[11px] uppercase text-bone-300">
                  {entry.category}
                </span>
                {entry.rank === 1 ? (
                  <Link
                    href="/memorial/sample"
                    className="font-mono text-[11px] uppercase text-acid-400 hover:text-bone-100"
                  >
                    Sample memorial →
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-12 lg:grid-cols-4">
        {metricCards.map((metric) => (
          <article key={metric.label} className="terminal-border p-5">
            <BadgeCheck className="text-acid-400" size={20} aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-bold text-bone-100">{metric.label}</h3>
            <p className="mt-3 text-sm leading-6 text-bone-500">{metric.copy}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Coming soon</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Real burials, certificates, and monthly awards.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-bone-500">
              The future flow will collect wallet proof, chain-of-custody details, display consent,
              and then generate a public memorial page.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back home
            </Link>
            <Link
              href="/bury-a-coin"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow"
            >
              <BellRing size={18} aria-hidden="true" />
              Bury a coin soon
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
