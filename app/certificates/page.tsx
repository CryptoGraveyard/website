import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, FileText, Ghost, QrCode, ShieldCheck, Sparkles } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { KeepExploring } from "../components/KeepExploring";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { certificateFields } from "../content/sampleData";

export const metadata: Metadata = {
  title: "Certificates | Crypto Graveyard",
  description:
    "A sample-data preview of Crypto Graveyard burial certificates, QR-linked memorial pages, and future on-chain certificate options."
};

const certificateSteps = [
  {
    title: "Burial confirmed",
    copy: "A future wallet watcher or manual reviewer confirms that a controlled burial transfer happened."
  },
  {
    title: "Memorial drafted",
    copy: "The system prepares coin details, confidence labels, eulogy text, value notes, and display choices."
  },
  {
    title: "Certificate issued",
    copy: "The participant receives a shareable certificate with a unique ID and QR link to the memorial page."
  },
  {
    title: "Optional on-chain layer",
    copy: "Later, the same certificate can connect to an SBT profile credit or collectible headstone NFT."
  }
];

const certificateTypes = [
  {
    title: "Printable PDF",
    status: "Best first version",
    copy: "Simple, shareable, printable, and easy to understand before any NFT plumbing exists."
  },
  {
    title: "Soulbound credit",
    status: "Identity layer",
    copy: "Non-transferable recognition tied to the wallet that originally performed the burial."
  },
  {
    title: "Headstone collectible",
    status: "Optional artwork",
    copy: "Tradable art connected to the burial, without changing who originally earned the record."
  }
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="certificates" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <FileText size={14} aria-hidden="true" />
            Certificate preview
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Burial Certificates
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            A ridiculous loss deserves tasteful paperwork.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            Certificates are the shareable artifact layer: proof of participation in the memorial
            experience, not proof of cost basis, tax loss, legal ownership, or market value.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/memorial/sample"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Ghost size={18} aria-hidden="true" />
              Sample memorial
            </Link>
            <Link
              href="/headstones"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Sparkles size={18} aria-hidden="true" />
              Headstone preview
            </Link>
          </div>
        </div>

        <div className="border border-bone-200/15 bg-bone-100/10 p-5 shadow-card">
          <div className="border border-bone-200/25 bg-grave-950 p-6">
            <div className="flex items-start justify-between gap-4 border-b border-bone-200/15 pb-5">
              <div>
                <p className="font-mono text-xs uppercase text-acid-400">Crypto Graveyard</p>
                <h2 className="mt-2 font-display text-3xl font-black text-bone-100">
                  Official Burial Certificate
                </h2>
              </div>
              <div className="grid h-16 w-16 place-items-center border border-acid-400/40 bg-acid-400/10">
                <QrCode className="text-acid-400" size={30} aria-hidden="true" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {certificateFields.map(([label, value]) => (
                <div key={label} className="grid gap-2 border border-bone-200/10 bg-black/20 p-3 sm:grid-cols-[0.38fr_0.62fr]">
                  <p className="font-mono text-xs uppercase text-bone-500">{label}</p>
                  <p className="font-mono text-sm text-bone-100">{value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-bone-200/15 pt-5 text-center font-display text-xl font-bold text-acid-400">
              May these tokens finally rest in peace.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Certificate flow"
          title="Start with PDF, graduate to on-chain"
          copy="A beautiful certificate is useful before the NFT/SBT layer exists. The on-chain version can reference the same certificate ID later."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {certificateSteps.map((step, index) => (
            <article key={step.title} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
              <p className="font-mono text-xs uppercase text-acid-400">Step {index + 1}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-bone-100">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-3">
        {certificateTypes.map((type) => (
          <article key={type.title} className="terminal-border p-6">
            <BadgeCheck className="text-acid-400" size={24} aria-hidden="true" />
            <p className="mt-4 font-mono text-xs uppercase text-acid-400">{type.status}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">{type.title}</h2>
            <p className="mt-3 text-sm leading-6 text-bone-500">{type.copy}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-blood-500">Important label</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The certificate memorializes a site event, not a tax conclusion.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              It should never be framed as an appraisal, charitable receipt, tax document, broker
              record, or verified loss statement.
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

      <KeepExploring current="certificates" />

      <DisclaimerFooter variant="sample" />
    </main>
  );
}
