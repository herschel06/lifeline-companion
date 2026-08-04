"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/spara-logo.png";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why it works", href: "#why-it-works" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 sm:flex sm:justify-between lg:px-10"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <Image
            src={logo}
            alt="Spara"
            width={40}
            height={40}
            priority
            className="size-9 shrink-0 rounded-[11px]"
          />
          <span className="truncate text-lg font-bold tracking-tight">Spara</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button variant="hero" size="pill" asChild>
            <a href="#waitlist">Join waitlist</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
