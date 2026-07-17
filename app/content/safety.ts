export const neverAskItems = [
  "Seed phrases",
  "Private keys",
  "Wallet recovery words",
  "Wallet passwords",
  "Exchange logins",
  "Remote device access",
  "Guaranteed tax outcomes"
] as const;

export const footerDisclaimers = {
  home: {
    label: "No wallets shown in v0",
    copy:
      "Crypto Graveyard is an entertainment, memorial, and analytics project. Sample data is fictional. Nothing here verifies tax losses, charitable deductions, cost basis, token value, legal ownership, or investment outcomes."
  },
  standard: {
    label: "Project disclaimer",
    copy:
      "Crypto Graveyard is an entertainment, memorial, and analytics project. It does not verify tax losses, charitable deductions, cost basis, legal ownership, token value, or investment outcomes."
  },
  demo: {
    label: "Demo data only",
    copy:
      "Demo data is fictional. Crypto Graveyard is not a tax advisor, broker, exchange, charity, valuation authority, or wallet recovery service."
  },
  burial: {
    label: "Burial flow closed",
    copy:
      "The burial flow is not live. Crypto Graveyard does not request private keys, seed phrases, wallet recovery words, exchange credentials, or tax-loss representations."
  },
  sample: {
    label: "Sample prototype",
    copy:
      "This sample page is not a tax document, appraisal, receipt, charitable substantiation, blockchain proof, or ownership verification."
  },
  wallet: {
    label: "Wallets not published",
    copy:
      "This page is a product plan, not live deposit instructions. Crypto Graveyard has not published public receiving wallets and does not verify tax losses, charitable deductions, cost basis, token value, or legal ownership."
  },
  beta: {
    label: "Beta not open",
    copy:
      "This beta request page is a non-submitting prototype. Crypto Graveyard is not accepting real transfers through this page and does not request private keys, seed phrases, wallet recovery words, exchange credentials, or tax-loss representations."
  },
  review: {
    label: "Review blueprint",
    copy:
      "This review process is a planning page. Crypto Graveyard is not accepting real requests or token transfers through it, and does not verify tax losses, charitable deductions, cost basis, token value, or legal ownership."
  },
  roadmap: {
    label: "Roadmap planning",
    copy:
      "This roadmap is a planning artifact. It does not publish receiving wallets, accept token transfers, verify tax losses, or promise implementation timelines."
  }
} as const;

export type DisclaimerVariant = keyof typeof footerDisclaimers;
