import { footerDisclaimers, type DisclaimerVariant } from "../content/safety";

type DisclaimerFooterProps = {
  variant?: DisclaimerVariant;
  id?: string;
  mode?: "contained" | "full";
};

export function DisclaimerFooter({
  variant = "standard",
  id,
  mode = "contained"
}: DisclaimerFooterProps) {
  const disclaimer = footerDisclaimers[variant];
  const content = (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
      <p className="max-w-3xl">{disclaimer.copy}</p>
      <p className="font-mono uppercase text-bone-500">{disclaimer.label}</p>
    </div>
  );

  if (mode === "full") {
    return (
      <footer id={id} className="border-t border-bone-200/10 px-5 py-8 text-xs leading-6 text-bone-500 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">{content}</div>
      </footer>
    );
  }

  return (
    <footer id={id} className="relative z-10 mx-auto max-w-7xl border-t border-bone-200/10 py-8 text-xs leading-6 text-bone-500">
      {content}
    </footer>
  );
}
