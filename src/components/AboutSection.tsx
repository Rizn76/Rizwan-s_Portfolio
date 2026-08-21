"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const interests = [
  "Machine Learning",
  "Generative AI",
  "RAG Systems",
  "LLM Applications",
  "AI Agents",
  "Semantic Search",
  "Computer Vision",
  "AI Product Building",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-spacing bg-foreground text-background"
      aria-labelledby="about-heading"
    >
      <div className="container-portfolio">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <p
                className="text-[10px] font-semibold tracking-[0.2em] uppercase text-background/50 mb-6"
                aria-hidden="true"
              >
                About
              </p>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <h2
                id="about-heading"
                className="heading-xl text-background text-balance mb-8"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Turning data and AI concepts into practical applications.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <div className="space-y-5 text-background/70 text-base leading-relaxed">
                <p>
                  I&apos;m Mohammed Rizwan, an AI/ML Engineer focused on building practical intelligent systems. My work spans Machine Learning, Generative AI, Retrieval-Augmented Generation, LLM-powered applications, semantic search, and data-driven solutions.
                </p>
                <p>
                  I enjoy taking a problem all the way — from raw data or unstructured information through preprocessing, feature engineering, modeling, retrieval, and application development — to create a usable, end-to-end solution.
                </p>
                <p>
                  My background includes professional experience in high-volume, quality-focused operations at Wipro and hands-on AI/ML engineering work at Datavalley, where I&apos;ve worked on classification models, LLM prompt evaluation, automated ML workflows, and RAG pipelines.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-background text-foreground text-sm font-semibold rounded-full hover:bg-background/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 group"
                >
                  See my work
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-transparent text-background text-sm font-semibold rounded-full border border-background/20 hover:border-background/50 hover:bg-background/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
                >
                  Get in touch
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — interests */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={200}>
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase text-background/40 mb-6"
                  aria-hidden="true"
                >
                  Areas of Interest
                </p>
                <ul className="space-y-0" role="list" aria-label="Areas of interest">
                  {interests.map((interest, i) => (
                    <li
                      key={interest}
                      className="flex items-center gap-4 py-3.5 border-b border-background/10 group/item"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <span
                        className="text-xs font-medium text-background/30 tabular-nums w-5"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-background/80 group-hover/item:text-background transition-colors duration-150">
                        {interest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
