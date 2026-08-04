import type { Metadata } from "next";

import { Nav } from "@/components/spara/Nav";
import { Hero } from "@/components/spara/Hero";
import { Problem } from "@/components/spara/Problem";
import { HowItWorks } from "@/components/spara/HowItWorks";
import { WhyItWorks } from "@/components/spara/WhyItWorks";
import { Features } from "@/components/spara/Features";
import { About } from "@/components/spara/About";
import { Waitlist } from "@/components/spara/Waitlist";
import { Footer } from "@/components/spara/Footer";

const title = "Spara — Bet on Yourself | Gambling App Blocker";
const description =
  "Spara puts another person between you and your impulse. Accountability-first recovery from gambling addiction, built for the moments that matter.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Spara",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS",
  description,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <WhyItWorks />
        <About />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
