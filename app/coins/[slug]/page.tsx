import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  FileText,
  Ghost,
  ShieldCheck,
  Skull,
  Trophy
} from "lucide-react";
import { DisclaimerFooter } from "../../components/DisclaimerFooter";
import { SectionIntro } from "../../components/SectionIntro";
import { SiteNav } from "../../components/SiteNav";
import {
  cemeteryCoins,
  coinConfidenceLabels,
  coinProfileTimeline,
  getCoinBySlug,
  getCoinSlug
} from "../../content/sampleData";

type CoinPageProps = {
  params: Promise<{ slug: string }>;
};

const statusStyles: Record<string, string> = {
  Buried: "border-acid-400/35 bg-acid-400/12 text-acid-400",
  Haunting: "border-violet-400/35 bg-violet-400/12 text-violet-400",
  Forgotten: "border-bone-200/20 bg-bone-100/10 text-bone-100",
  Dust: "border-bone-200/15 bg-black/25 text-bone-500",
  Cursed: "border-blood-500/35 bg-blood-500/12 text-blood-500"
};

export function generateStaticParams() {
  return cemeteryCoins.map((coin) => ({
    slug: getCoinSlug(coin)
  }));
}

export async function generateMetadata({ params }: CoinPageProps): Promise<Metadata> {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);

  if (!coin) {
    return {
      title: "Coin Not Found | Crypto Graveyard"
    };
  }

  return {
    title: `${coin.coin} | Crypto Graveyard`,
    description: `${coin.coin} sample profile: ${coin.epitaph} Demo values only; not tax, ownership, or valuation evidence.`
  };
}

function ProfileHeadstone({ label }: { label: string }) {
  return (
    <div className="relative mx-auto h-64 w-48">
      <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 bg-acid-400 shadow-[0_0_28px_rgba(166,255,61,0.32)]" />
      <div className="absolute left-8 top-12 h-36 w-32 rounded-t-[60px] border border-bone-200/35 bg-gradient-to-b from-bone-200/95 to-bone-500/60 pixel-shadow" />
      <div className="absolute left-4 top-44 h-10 w-40 border border-bone-200/25 bg-grave-700 pixel-shadow" />
      <div className="absolute left-1/2 top-24 w-28 -translate-x-1/2 text-center font-mono text-sm font-semibold uppercase leading-tight text-grave-950">
        RIP
        <span className="mt-2 block text-[11px]">{label}</span>
      </div>
      <div className="absolute bottom-0 left-0 h-7 w-full bg-acid-500/15" />
      <div className="absolute bottom-2 left-6 h-3 w-3 bg-acid-400/60" />
      <div className="absolute bottom-4 right-9 h-3 w-3 bg-violet-400/60" />
      <div className="absolute right-7 top-28 h-16 w-1 bg-grave-950/40" />
      <div className="absolute right-4 top-34 h-1 w-7 bg-grave-950/40" />
    </div>
  );
}

export default async function CoinProfilePage({ params }: CoinPageProps) {
  const { slug } = await params;
  const coin = getCoinBySlug(slug);

  if (!coin) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="cemetery" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.88fr] lg:pt-24">
        <div>
          <Link
            href="/cemetery"
            className="mb-5 inline-flex items-center gap-2 border border-bone-200/10 bg-grave-900/70 px-3 py-2 font-mono text-xs uppercase text-bone-400 hover:border-acid-400/50 hover:text-acid-400"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to cemetery
          </Link>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Skull size={14} aria-hidden="true" />
            Sample coin profile
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            {coin.coin}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            {coin.epitaph}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This is a fictional profile showing how a real buried token page could combine chain
            details, confidence labels, timeline, award eligibility, certificate links, and future
            memorial artifacts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/certificates"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <FileText size={18} aria-hidden="true" />
              Certificate preview
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
          <ProfileHeadstone label={coin.symbol} />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="border border-bone-200/10 bg-black/20 p-4">
              <p className="font-mono text-[11px] uppercase text-bone-500">Status</p>
              <p className={`mt-2 inline-flex border px-2 py-1 font-mono text-xs uppercase ${statusStyles[coin.status]}`}>
                {coin.status}
              </p>
            </div>
            <div className="border border-bone-200/10 bg-black/20 p-4">
              <p className="font-mono text-[11px] uppercase text-bone-500">Cause</p>
              <p className="mt-2 font-mono text-xs uppercase text-bone-100">{coin.cause}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-8 lg:grid-cols-4">
        {[
          ["Peak observed", coin.peak, "Sample notional"],
          ["Burial value", coin.burialValue, "Sample estimate"],
          ["Round trip", coin.roundTrip, "Entertainment metric"],
          ["Observed age", coin.age, "Sample period"]
        ].map(([label, value, note]) => (
          <article key={label} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
            <p className="font-mono text-xs uppercase text-bone-500">{label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-bone-100">{value}</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">{note}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <Ghost className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Sample obituary
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-bone-200/85">
            <p>
              Here lies {coin.coin}, known on-chain as {coin.symbol}, a fictional project on{" "}
              {coin.chain} whose candle briefly convinced observers that gravity was optional.
            </p>
            <p>
              Its final chart diagnosis: {coin.cause.toLowerCase()}. Its surviving assets include
              screenshots, Discord archaeology, a suspiciously optimistic roadmap, and one tasteful
              demo headstone.
            </p>
            <p>
              This profile is sample data only. May the real version be equally dramatic and much
              more carefully verified.
            </p>
          </div>
        </div>

        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <BadgeCheck className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Public record fields
          </h2>
          <div className="mt-6 space-y-3">
            {[
              ["Coin", coin.coin],
              ["Ticker", coin.symbol],
              ["Chain", coin.chain],
              ["Cause of death", coin.cause],
              ["Confidence", coin.confidence],
              ["Profile URL", `cryptograveyard.io/coins/${getCoinSlug(coin)}`]
            ].map(([label, value]) => (
              <div key={label} className="grid gap-2 border border-bone-200/10 bg-black/20 p-3 sm:grid-cols-[0.34fr_0.66fr]">
                <p className="font-mono text-xs uppercase text-bone-500">{label}</p>
                <p className="font-mono text-sm text-bone-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Confidence labels"
          title="A profile should show what is known, guessed, and theatrical"
          copy="The real version can replace these sample labels with on-chain proof, price methodology, documentation status, and reviewer notes."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {coinConfidenceLabels.map((item) => (
            <article key={item.label} className="terminal-border p-5">
              <ShieldCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-bone-100">{item.label}</h2>
              <p className="mt-2 font-mono text-xs uppercase text-violet-400">{item.status}</p>
              <p className="mt-3 text-sm leading-6 text-bone-500">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Timeline"
          title="The future story arc"
          copy="Each real coin page can become an evidence-backed timeline rather than a single leaderboard row."
        />

        <div className="space-y-4">
          {coinProfileTimeline.map((event, index) => (
            <article key={event.label} className="grid gap-4 border border-bone-200/10 bg-grave-900/75 p-5 shadow-card md:grid-cols-[0.16fr_0.26fr_0.58fr]">
              <p className="font-mono text-xs uppercase text-acid-400">Event {index + 1}</p>
              <h2 className="font-display text-2xl font-bold text-bone-100">{event.label}</h2>
              <p className="text-sm leading-6 text-bone-500">{event.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Archive pattern</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Later, this page can be generated from a real burial record.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              The profile route is now in place. Real data can eventually replace the sample coin
              object with database fields, watcher events, value methodology, and verified display
              consent.
            </p>
          </div>
          <Link
            href="/cemetery"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Skull size={18} aria-hidden="true" />
            Back to cemetery
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="sample" />
    </main>
  );
}
