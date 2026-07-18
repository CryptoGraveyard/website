import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  BellRing,
  Crown,
  FileText,
  ShieldCheck,
  Skull,
  Trophy
} from "lucide-react";
import { DisclaimerFooter } from "../../components/DisclaimerFooter";
import { SectionIntro } from "../../components/SectionIntro";
import { SiteNav } from "../../components/SiteNav";
import {
  bagholderProfileNotes,
  bagholderProfiles,
  getBagholderBySlug
} from "../../content/sampleData";

type BagholderPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return bagholderProfiles.map((profile) => ({
    slug: profile.slug
  }));
}

export async function generateMetadata({ params }: BagholderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getBagholderBySlug(slug);

  if (!profile) {
    return {
      title: "Bagholder Not Found | Crypto Graveyard"
    };
  }

  return {
    title: `${profile.alias} | Crypto Graveyard`,
    description: `${profile.alias} sample bagholder profile: ${profile.title}. Fictional demo data only.`
  };
}

function ProfileBadgeStack({ badges }: { badges: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="border border-violet-400/30 bg-violet-400/10 px-2 py-1 font-mono text-[11px] uppercase text-violet-400"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export default async function BagholderProfilePage({ params }: BagholderPageProps) {
  const { slug } = await params;
  const profile = getBagholderBySlug(slug);

  if (!profile) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="bagholders" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.88fr] lg:pt-24">
        <div>
          <Link
            href="/bagholders"
            className="mb-5 inline-flex items-center gap-2 border border-bone-200/10 bg-grave-900/70 px-3 py-2 font-mono text-xs uppercase text-bone-400 hover:border-acid-400/50 hover:text-acid-400"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to bagholders
          </Link>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Skull size={14} aria-hidden="true" />
            Sample bagholder profile
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            {profile.alias}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            {profile.motto}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Trophy size={18} aria-hidden="true" />
              Hall of Fame
            </Link>
            <Link
              href="/certificates"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <FileText size={18} aria-hidden="true" />
              Certificate preview
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Profile terminal</span>
            <span className="text-acid-400">{profile.profileStatus}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Rank", profile.rank],
              ["Title", profile.title],
              ["Joined", profile.joined],
              ["Masked wallet", profile.displayWallet]
            ].map(([label, value]) => (
              <div key={label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{label}</p>
                <p className="mt-2 font-mono text-sm uppercase text-bone-100">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <ProfileBadgeStack badges={profile.badges} />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-8 lg:grid-cols-4">
        {[
          ["Total burials", profile.totalBurials, "Sample count"],
          ["Peak buried", profile.peakBuried, "Sample notional"],
          ["Burial value", profile.burialValue, "Sample estimate"],
          ["Favorite cause", profile.favoriteCause, "Demo theme"]
        ].map(([label, value, note]) => (
          <article key={label} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
            <p className="font-mono text-xs uppercase text-bone-500">{label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-bone-100">{value}</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">{note}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <Crown className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Burial history
          </h2>
          <div className="mt-6 space-y-3">
            {profile.burials.map(([coin, peak, value]) => (
              <div key={coin} className="grid gap-3 border border-bone-200/10 bg-black/20 p-4 sm:grid-cols-[0.44fr_0.28fr_0.28fr]">
                <p className="font-display text-xl font-bold text-bone-100">{coin}</p>
                <p className="font-mono text-xs uppercase text-bone-300">Peak {peak}</p>
                <p className="font-mono text-xs uppercase text-acid-400">Burial {value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-border p-6">
          <BadgeCheck className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Profile artifact concept
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            This is where a future non-transferable memorial profile can live: awards earned,
            burials credited, certificates issued, and display preferences. Tradable headstone art
            can point back here without replacing the original participant.
          </p>
          <div className="mt-6 border border-acid-400/20 bg-acid-400/10 p-4">
            <p className="font-mono text-xs uppercase text-acid-400">SBT-style profile</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">
              Non-transferable credit belongs to the original wallet or account. The collectible
              layer remains separate.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Profile guardrails"
          title="Recognize the story without over-claiming the facts"
          copy="Participant pages should celebrate the community layer while still making it obvious what is sample, verified, private, masked, or unknown."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {bagholderProfileNotes.map((note) => (
            <article key={note.label} className="terminal-border p-5">
              <ShieldCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-bone-100">{note.label}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{note.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Future loop</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Profiles become more valuable when burials, certificates, and awards connect.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              This profile is fictional, but the structure gives the real product a place for
              repeat participation, yearly awards, and long-term identity.
            </p>
          </div>
          <Link
            href="/bury-a-coin"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <BellRing size={18} aria-hidden="true" />
            Future burial flow
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
