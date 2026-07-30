import { createFileRoute } from "@tanstack/react-router";

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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Spara",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS",
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
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
