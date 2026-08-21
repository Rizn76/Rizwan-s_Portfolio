import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AI/ML projects by Mohammed Rizwan — including an AI-powered attendance tracking system and a RAG-powered PDF question answering system.",
};

export default function WorkPage() {
  return (
    <div className="page-wrapper">
      {/* ── Header ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" aria-labelledby="work-page-heading">
        <div className="container-portfolio">
          <AnimatedSection>
            <p className="eyebrow mb-5" aria-hidden="true">Selected Work</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <h1
              id="work-page-heading"
              className="heading-display max-w-4xl text-balance"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Projects I&apos;ve built.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={160}>
            <p className="mt-6 body-lg max-w-2xl text-pretty">
              End-to-end AI applications spanning computer vision, Generative AI,
              RAG pipelines, and LLM integration — built with a focus on practical,
              measurable outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Projects list ── */}
      <section aria-label="Projects">
        <div className="container-portfolio pb-24 md:pb-32">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 100}>
              <article
                className="group border-t border-border py-12 md:py-16"
                aria-label={`Project: ${project.title}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left metadata */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-bold tracking-[0.2em] text-subtle uppercase tabular-nums"
                          aria-hidden="true"
                        >
                          {project.number}
                        </span>
                        <span className="w-6 h-px bg-border" aria-hidden="true" />
                        <span className="eyebrow text-[10px]">{project.category}</span>
                      </div>

                      <h2
                        className="heading-md text-balance group-hover:text-accent/90 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm text-muted leading-relaxed text-pretty">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="eyebrow mb-3 text-[10px]">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tag text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center metrics */}
                  <div className="lg:col-span-4">
                    <p className="eyebrow mb-5 text-[10px]">Key Results</p>
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="bg-surface border border-border rounded-xl p-4"
                        >
                          <p
                            className="text-xl font-bold text-foreground"
                            style={{ fontFamily: "var(--font-manrope)" }}
                          >
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted mt-0.5 leading-snug">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA */}
                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-6">
                    <div className="w-full lg:w-auto">
                      <p className="eyebrow mb-3 text-[10px] lg:text-right">Links</p>
                      <div className="flex flex-col items-start lg:items-end gap-3">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group/btn"
                          aria-label={`View case study for ${project.title}`}
                        >
                          View Case Study
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 group-hover/btn:translate-x-1"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>

                        {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-full hover:border-foreground/30 hover:bg-surface transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                              aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              GitHub
                            </a>
                          )}
                      </div>
                    </div>

                    {/* Problem statement preview */}
                    <div className="hidden lg:block text-right max-w-xs">
                      <p className="text-xs text-subtle leading-relaxed line-clamp-3">
                        {project.problem}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}

          {/* Final border */}
          <div className="border-t border-border" />
        </div>
      </section>
    </div>
  );
}
