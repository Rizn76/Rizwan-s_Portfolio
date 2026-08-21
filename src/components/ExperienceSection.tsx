"use client";

import { experience } from "@/data/experience";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>("datavalley");

  return (
    <section
      id="experience"
      className="section-spacing bg-surface/50"
      aria-labelledby="experience-heading"
    >
      <div className="container-portfolio">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked."
            id="experience-heading"
          />
        </AnimatedSection>

        <div className="space-y-0" role="list">
          {experience.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <div
                role="listitem"
                className="border-t border-border"
              >
                {/* Header row — always visible */}
                <button
                  onClick={() =>
                    setExpanded(expanded === item.id ? null : item.id)
                  }
                  className="w-full text-left py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                  aria-expanded={expanded === item.id}
                  aria-controls={`experience-detail-${item.id}`}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Role + company */}
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3
                          className="text-lg font-bold text-foreground group-hover:text-accent/90 transition-colors duration-200"
                          style={{ fontFamily: "var(--font-manrope)" }}
                        >
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wide uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted mt-0.5">
                        {item.company} &nbsp;·&nbsp; {item.period}
                      </p>
                    </div>
                  </div>

                  {/* Expand icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-foreground/30 transition-all duration-200 ${
                      expanded === item.id ? "rotate-45 bg-surface" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Expanded detail */}
                <div
                  id={`experience-detail-${item.id}`}
                  role="region"
                  aria-label={`${item.role} at ${item.company} details`}
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expanded === item.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-10 space-y-8">
                    {/* Metrics grid */}
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                      aria-label="Key metrics"
                    >
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="bg-background rounded-xl border border-border p-4"
                        >
                          <p
                            className="text-2xl md:text-3xl font-bold text-foreground tracking-tight"
                            style={{ fontFamily: "var(--font-manrope)" }}
                          >
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted mt-1 leading-snug">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="eyebrow mb-4">Key Highlights</p>
                      <ul className="space-y-3" role="list">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-muted leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2" aria-label="Skills used">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Last border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
