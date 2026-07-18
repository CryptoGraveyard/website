import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Crown, ShieldCheck, Skull, Trophy, UsersRound } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { KeepExploring } from "../components/KeepExploring";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { bagholderProfileNotes, bagholderProfiles } from "../content/sampleData";

export const metadata: Metadata = {
  title: "Bagholders | Crypto Graveyard",
  description:
    "A sample-data directory of Crypto Graveyard participant profiles, badges, fictional burials, and future SBT-style identity concepts."
};

const directoryStats = [
  ["Sample profiles", "6"],
  ["Demo burials", "10"],
  ["Badges assigned", "18"],
  ["Real identities shown", "0"]
] as const;

export default function BagholdersPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="bagholders" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <UsersRound size={14} aria-hidden="true" />
            Sample community directory
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Bagholders
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            The people, pseudonyms, and profile pages behind the legendary losses.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews the future participant layer: pseudonymous profiles, badges,
            burial histories, monthly awards, and eventual non-transferable memorial credit.
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
              href="/headstones"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Crown size={18} aria-hidden="true" />
              Headstones
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Profile index</span>
            <span className="text-acid-400">sample mode</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {directoryStats.map(([label, value]) => (
              <div key={label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{label}</p>
                <p className="mt-2 font-display text-3xl font-bold text-bone-100">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Privacy default:</strong>{" "}
            Pseudonyms first. Masked wallet display only. No legal identity needed for public
            cemetery clout.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Directory"
          title="Sample profiles with fictional badges"
          copy="Later, these profiles can be generated from verified burial records, user display choices, certificates, awards, and SBT-style achievement credits."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {bagholderProfiles.map((profile) => (
            <Link
              key={profile.slug}
              href={`/bagholders/${profile.slug}`}
              className="group border border-bone-200/10 bg-grave-900/75 p-6 shadow-card transition hover:border-acid-400/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-acid-400">{profile.rank}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
                    {profile.alias}
                  </h2>
                  <p className="mt-1 font-mono text-xs uppercase text-bone-500">
                    {profile.title}
                  </p>
                </div>
                <Skull className="text-acid-400" size={26} aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm leading-6 text-bone-500">{profile.bio}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Burials</p>
                  <p className="mt-1 font-display text-xl font-bold text-bone-100">
                    {profile.totalBurials}
                  </p>
                </div>
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Peak</p>
                  <p className="mt-1 font-display text-xl font-bold text-acid-400">
                    {profile.peakBuried}
                  </p>
                </div>
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Value</p>
                  <p className="mt-1 font-display text-xl font-bold text-violet-400">
                    {profile.burialValue}
                  </p>
                </div>
              </div>

              <p className="mt-5 font-mono text-xs uppercase text-acid-400 group-hover:text-bone-100">
                Open profile →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-12 lg:grid-cols-4">
        {bagholderProfileNotes.map((note) => (
          <article key={note.label} className="terminal-border p-5">
            <BadgeCheck className="text-acid-400" size={20} aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-bold text-bone-100">{note.label}</h2>
            <p className="mt-3 text-sm leading-6 text-bone-500">{note.copy}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Future identity layer</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Profiles are where the SBT idea belongs.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              A non-transferable memorial profile can record what someone actually earned, while
              optional headstone NFTs remain separate tradable artwork.
            </p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
          >
            <ShieldCheck size={18} aria-hidden="true" />
            Safety FAQ
          </Link>
        </div>
      </section>

      <KeepExploring current="bagholders" />

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
