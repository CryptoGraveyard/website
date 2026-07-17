import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptograveyard.io"),
  title: "Crypto Graveyard",
  description:
    "A darkly funny memorial dashboard for forgotten cryptocurrencies, sample burials, and the future headstone economy.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Crypto Graveyard",
    description: "Every dead coin deserves a proper funeral.",
    url: "https://cryptograveyard.io",
    siteName: "Crypto Graveyard",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Graveyard",
    description: "Every dead coin deserves a proper funeral."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
