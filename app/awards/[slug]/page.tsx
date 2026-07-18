import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  BadgeCheck,
  BellRing,
  Crown,
  Gem,
  ShieldCheck,
  Trophy
} from "lucide-react";
import { DisclaimerFooter } from "../../components/DisclaimerFooter";
import { SectionIntro } from "../../components/SectionIntro";
import { SiteNav } from "../../components/SiteNav";
import { awardGuardrails, awardPrograms, getAwardBySlug } from "../../content/sampleData";

type AwardPageProps = {
  params: Promise<{ slug: string }>;
};

const accentStyles: Record<string, { border: string; text: string; bg: string; bar: string }> = {
  acid: {
    border: "border-acid-400/35",
    text: "text-acid-400",
    bg: "bg-acid-400/10",
    bar: "bg-acid-400"
  },
  violet: {
    border: "border-violet-400/35",
    text: "text-violet-400",
    bg: "bg-violet-400/10",
    bar: "bg-violet-400"
  },
  blood: {
    border: "border-blood-500/35",
    text: "text-blood-500",
    bg: "bg-blood-500/10",
    bar: "bg-blood-500"
  },
  bone: {
    border: "border-bone-200/20",
    text: "text-bone-100",
    bg: "bg-bone-100/10",
    bar: "bg-bone-100"
  }
};

export function generateStaticParams() {
  return awardPrograms.map((award) => ({
    slug: award.slug
  }));
}

export async function generateMetadata({ params }: AwardPageProps): Promise<Metadata> {
  const { slug } = await params;
  const award = getAwardBySlug(slug);

  if (!award) {
    return {
      title: "Award Not Found | Crypto Graveyard"
    };
  }

  return {
    title: `${award.title} | Crypto Graveyard`,
    description: `${award.title} sample award page for Crypto Graveyard. Demo recognition only; not tax, appraisal, or ownership evidence.`
  };
}

function PlaquePreview({
  title,
  subtitle,
  winner,
  metric,
  line,
  footer,
  accent
}: {
  title: string;
  subtitle: string;
  winner: string;
  metric: string;
  line: string;
  footer: string;
  accent: keyof typeof accentStyles;
}) {
  const styles = accentStyles[accent] ?? accentStyles.acid;

  return (
    <div className="border border-bone-200/15 bg-bone-100/10 p-5 shadow-card">
      <div className={`border ${styles.border} bg-grave-950 p-6 text-center pixel-shadow`}>
        <p className={`font-mono text-xs uppercase tracking-[0.24em] ${styles.text}`}>
          Crypto Graveyard
        </p>
        <h2 className="mt-4 font-display text-4xl font-black uppercase text-bone-100">
          {title}
        </h2>
        <p className="mt-2 font-mono text-xs uppercase text-bone-500">{subtitle}</p>
        <div className={`mx-auto mt-5 h-1 w-28 ${styles.bar}`} />
        <p className="mt-6 font-display text-2xl font-bold text-bone-100">{winner}</p>
        <p className="mt-3 font-mono text-sm uppercase text-bone-500">{metric}</p>
        <p className={`mx-auto mt-6 max-w-sm text-xl leading-8 ${styles.text}`}>“{line}”</p>
        <p className="mt-6 font-mono text-xs uppercase text-bone-500">{footer}</p>
      </div>
    </div>
  );
}

export default async function AwardDetailPage({ params }: AwardPageProps) {
  const { slug } = await params;
  const award = getAwardBySlug(slug);

  if (!award) {
    notFound();
  }

  const styles = accentStyles[award.accent] ?? accentStyles.acid;

  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="awards" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <Link
            href="/awards"
            className="mb-5 inline-flex items-center gap-2 border border-bone-200/10 bg-grave-900/70 px-3 py-2 font-mono text-xs uppercase text-bone-400 hover:border-acid-400/50 hover:text-acid-400"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to awards
          </Link>
          <div className={`mb-5 inline-flex items-center gap-2 border ${styles.border} ${styles.bg} px-3 py-2 font-mono text-xs uppercase ${styles.text}`}>
            <Award size={14} aria-hidden="true" />
            {award.status}
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            {award.title}
          </h1>
          <p className={`mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight ${styles.text} sm:text-3xl`}>
            {award.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This award profile shows how Crypto Graveyard can package community recognition,
            plaque language, eligibility rules, and evidence labels around a burial without
            claiming a tax result or investment value.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={award.winnerHref}
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Crown size={18} aria-hidden="true" />
              Winner profile
            </Link>
            <Link
              href={award.coinHref}
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Trophy size={18} aria-hidden="true" />
              Featured coin
            </Link>
          </div>
        </div>

        <div className={`terminal-border pixel-corners p-5 shadow-card ${styles.bg}`}>
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Award file</span>
            <span className={styles.text}>{award.cadence}</span>
          </div>
          <div className="space-y-3">
            {award.publicFields.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border border-bone-200/10 bg-black/25 p-3 sm:grid-cols-[0.38fr_0.62fr]"
              >
                <p className="font-mono text-xs uppercase text-bone-500">{label}</p>
                <p className="font-mono text-sm text-bone-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            eyebrow="Selection rules"
            title="What would make this award credible?"
            copy="The useful version should be transparent enough that the community understands why a winner was chosen."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {award.criteria.map((criterion) => (
              <article key={criterion} className="terminal-border p-5">
                <BadgeCheck className={styles.text} size={20} aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl font-bold text-bone-100">{criterion}</h2>
                <p className="mt-3 text-sm leading-6 text-bone-500">
                  Future award logic can point to reviewed burial records, confidence labels, and
                  moderation notes while keeping sensitive evidence private.
                </p>
              </article>
            ))}
          </div>
        </div>

        <PlaquePreview
          title={award.plaqueTitle}
          subtitle={award.plaqueSubtitle}
          winner={award.winner}
          metric={`${award.prize} · ${award.awardValue}`}
          line={award.plaqueLine}
          footer={award.plaqueFooter}
          accent={award.accent}
        />
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <BellRing className={styles.text} size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Fulfillment flow
          </h2>
          <div className="mt-6 space-y-3">
            {award.fulfillment.map((step, index) => (
              <div
                key={step}
                className="grid gap-3 border border-bone-200/10 bg-black/20 p-4 sm:grid-cols-[0.16fr_0.84fr]"
              >
                <p className={`font-mono text-xs uppercase ${styles.text}`}>
                  Step {index + 1}
                </p>
                <p className="text-sm leading-6 text-bone-500">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-border p-6">
          <Gem className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Headstone connection
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Awards can unlock better headstone eligibility later, but the headstone collectible
            should remain separate from the non-transferable record that says who earned the award.
          </p>
          <div className="mt-6 border border-violet-400/25 bg-violet-400/10 p-4">
            <p className="font-mono text-xs uppercase text-violet-400">Prize concept</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">{award.prize}</p>
          </div>
          <Link
            href="/headstones"
            className="mt-5 inline-flex font-mono text-xs uppercase text-acid-400 hover:text-bone-100"
          >
            Explore headstones →
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Guardrails"
          title="The trophy case still needs rails"
          copy="These award pages should stay playful, opt-in, and evidence-aware before any real transfer or shipment happens."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {awardGuardrails.map((guardrail) => (
            <article key={guardrail.label} className="terminal-border p-5">
              <ShieldCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-bone-100">
                {guardrail.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{guardrail.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Award record</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              This profile can eventually be generated from real reviewed burials.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              For now, it is a fictional template showing how awards, plaques, profiles,
              certificates, and collectible headstones can fit together safely.
            </p>
          </div>
          <Link
            href="/certificates"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <BadgeCheck size={18} aria-hidden="true" />
            Certificate layer
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
