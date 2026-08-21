"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so animation runs after first paint
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-portfolio relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <p className="eyebrow mb-6 md:mb-8" aria-label="Role tags">
              AI/ML ENGINEER &nbsp;·&nbsp; GENERATIVE AI &nbsp;·&nbsp; MACHINE LEARNING
            </p>
          </div>

          {/* Main headline */}
          <div
            className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <h1
              className="heading-display text-balance leading-[1.02]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Building intelligent systems with Machine Learning and Generative AI.
            </h1>
          </div>

          {/* Supporting text */}
          <div
            className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl text-pretty">
              I design and build practical AI applications using Python, Machine Learning, RAG pipelines, LLMs, semantic search, and vector databases — from raw data to deployed solution.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className={`mt-10 md:mt-12 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
            >
              View My Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeDownloadName}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-foreground text-sm font-semibold rounded-full border border-border hover:border-foreground/40 hover:bg-surface transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label="Download Mohammed Rizwan's resume"
            >
              Download Resume
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div
            className={`mt-8 flex items-center gap-6 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <a
              href={siteConfig.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="HackerRank profile (opens in new tab)"
            >
              HackerRank
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ease-out ${mounted ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "600ms" }}
        aria-hidden="true"
      >
        <span className="text-xs text-subtle tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
