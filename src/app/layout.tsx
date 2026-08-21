import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "@/components/providers";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Canonical + Open Graph URLs need an absolute origin. Set NEXT_PUBLIC_SITE_URL
// to the custom domain in Vercel; VERCEL_URL is only the per-deployment hostname.
// A blank or malformed value must never take the whole page down, so this
// tolerates a missing protocol and falls back rather than throwing.
const FALLBACK_ORIGIN = "http://localhost:3000";

function resolveSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost = process.env.VERCEL_URL?.trim();
  const candidate = configured || (vercelHost ? `https://${vercelHost}` : "") || FALLBACK_ORIGIN;
  const withProtocol = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;

  try {
    return new URL(withProtocol);
  } catch {
    console.warn(`[metadata] NEXT_PUBLIC_SITE_URL is not a valid URL: "${candidate}"`);
    return new URL(FALLBACK_ORIGIN);
  }
}

const siteUrl = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Spara — Recovery with someone beside you",
    template: "%s",
  },
  description: "Spara puts another person between you and your impulse.",
  authors: [{ name: "Spara" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Spara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
