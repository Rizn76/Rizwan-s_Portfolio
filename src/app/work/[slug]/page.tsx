import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  // Next/prev navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[currentIndex + 1] ?? projects[0];

  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border"
        aria-labelledby="case-study-heading"
      >
        <div className="container-portfolio">
          {/* Back */}
          <AnimatedSection>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200 mb-10 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="Back to all projects"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:-translate-x-1"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8">
              <AnimatedSection delay={60}>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] text-subtle uppercase tabular-nums"
                    aria-hidden="true"
                  >
                    {project.number}
                  </span>
                  <span className="w-6 h-px bg-border" aria-hidden="true" />
                  <span className="eyebrow text-[10px]">{project.category}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1
                  id="case-study-heading"
                  className="heading-display text-balance"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {project.title}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={160}>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl text-pretty">
                  {project.shortDescription}
                </p>
              </AnimatedSection>

              {/* Action buttons */}
              <AnimatedSection delay={220}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={`View GitHub repository for ${project.title} (opens in new tab)`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-semibold rounded-full hover:border-foreground/30 hover:bg-surface transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label="View live demo (opens in new tab)"
                    >
                      Live Demo
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Metrics sidebar */}
            <div className="lg:col-span-4">
              <AnimatedSection delay={180}>
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-surface border border-border rounded-xl p-4"
                    >
                      <p
                        className="text-2xl font-bold text-foreground"
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
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project visual placeholder ── */}
      <section aria-label="Project preview" className="bg-surface">
        <div className="container-portfolio py-16 md:py-20">
          <AnimatedSection>
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-border bg-background"
              aria-label={`${project.title} — screenshot placeholder`}
            >
              {/* Visual placeholder — replace with <Image> once you have screenshots */}
              <div className="w-full aspect-[16/8] flex flex-col items-center justify-center gap-6 p-8 md:p-12">
                {project.slug === "rag-powered-pdf-question-answering-system" ? (
                  /* RAG Architecture diagram */
                  <div className="w-full max-w-2xl" role="img" aria-label="RAG pipeline architecture diagram">
                    <p className="text-center eyebrow mb-8">RAG Pipeline Architecture</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                      {[
                        { label: "PDF Documents", icon: "📄" },
                        { label: "Chunking", icon: "✂️" },
                        { label: "Embeddings", icon: "🔢" },
                        { label: "FAISS Index", icon: "🗂️" },
                        { label: "Retrieval", icon: "🔍" },
                        { label: "Gemini LLM", icon: "🤖" },
                        { label: "Answer", icon: "💬" },
                      ].map((step, i, arr) => (
                        <div key={step.label} className="flex md:flex-row flex-col items-center">
                          <div className="flex flex-col items-center p-3 rounded-xl bg-surface border border-border min-w-[90px] text-center">
                            <span className="text-xl mb-1" role="img" aria-label={step.label}>{step.icon}</span>
                            <span className="text-[10px] font-medium text-foreground leading-tight">{step.label}</span>
                          </div>
                          {i < arr.length - 1 && (
                            <div className="flex md:flex-row flex-col items-center my-1 md:my-0 md:mx-1">
                              <svg className="md:block hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                              <svg className="md:hidden block" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Attendance system architecture */
                  <div className="w-full max-w-2xl" role="img" aria-label="AI Smart Attendance System architecture diagram">
                    <p className="text-center eyebrow mb-8">System Architecture</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { label: "Webcam Feed", icon: "📷", desc: "OpenCV capture" },
                        { label: "Face Detection", icon: "🎯", desc: "Real-time recognition" },
                        { label: "SQLite DB", icon: "🗄️", desc: "Attendance records" },
                        { label: "Teacher View", icon: "📊", desc: "Class analytics" },
                        { label: "LLM Reports", icon: "🤖", desc: "Auto-generated summaries" },
                        { label: "CSV Export", icon: "📁", desc: "Data portability" },
                      ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center p-4 rounded-xl bg-surface border border-border text-center">
                          <span className="text-2xl mb-2" role="img" aria-label={item.label}>{item.icon}</span>
                          <span className="text-xs font-semibold text-foreground">{item.label}</span>
                          <span className="text-[10px] text-muted mt-0.5">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <p className="text-xs text-subtle/60 mt-4">
                  Replace this placeholder with your actual project screenshot
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Main case study content ── */}
      <section className="section-spacing" aria-label="Case study details">
        <div className="container-portfolio">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main content */}
            <div className="lg:col-span-8 space-y-16">

              {/* Problem */}
              <AnimatedSection>
                <div>
                  <p className="eyebrow mb-4">The Problem</p>
                  <h2
                    className="heading-md mb-5"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    What needed solving
                  </h2>
                  <p className="text-base text-muted leading-relaxed text-pretty">
                    {project.problem}
                  </p>
                </div>
              </AnimatedSection>

              {/* Solution */}
              <AnimatedSection>
                <div>
                  <p className="eyebrow mb-4">The Solution</p>
                  <h2
                    className="heading-md mb-5"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    How I approached it
                  </h2>
                  <p className="text-base text-muted leading-relaxed text-pretty">
                    {project.solution}
                  </p>
                </div>
              </AnimatedSection>

              {/* Architecture */}
              <AnimatedSection>
                <div>
                  <p className="eyebrow mb-4">Architecture</p>
                  <h2
                    className="heading-md mb-6"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    System design
                  </h2>
                  <ol className="space-y-4" aria-label="Architecture steps">
                    {project.architecture.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-[10px] font-bold text-foreground tabular-nums mt-0.5"
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-muted leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection>
                <div>
                  <p className="eyebrow mb-4">Features</p>
                  <h2
                    className="heading-md mb-6"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Key capabilities
                  </h2>
                  <ul className="space-y-3" aria-label="Project features">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-muted leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Challenges */}
              <AnimatedSection>
                <div>
                  <p className="eyebrow mb-4">Challenges & Solutions</p>
                  <h2
                    className="heading-md mb-6"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    What I learned
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        <div className="p-5 rounded-xl bg-surface border border-border">
                          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-subtle mb-2">
                            Challenge
                          </p>
                          <p className="text-sm text-foreground font-medium leading-snug">
                            {item.challenge}
                          </p>
                        </div>
                        <div className="p-5 rounded-xl bg-accent/5 border border-accent/15">
                          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent/70 mb-2">
                            Solution
                          </p>
                          <p className="text-sm text-foreground/80 leading-snug">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Results */}
              <AnimatedSection>
                <div>
                  <p className="eyebrow mb-4">Results</p>
                  <h2
                    className="heading-md mb-6"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Outcomes &amp; impact
                  </h2>
                  <ul className="space-y-3" aria-label="Project results">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-sm text-muted leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar — tech stack */}
            <div className="lg:col-span-4">
              <AnimatedSection delay={100}>
                <div className="sticky top-24 space-y-8">
                  {/* Tech stack */}
                  <div className="p-6 rounded-2xl bg-surface border border-border">
                    <p className="eyebrow mb-5">Tech Stack</p>
                    <ul className="space-y-2.5" role="list" aria-label="Technologies used">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="flex items-center gap-3">
                          <span
                            className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-foreground">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* GitHub link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 rounded-xl border border-border hover:border-foreground/30 hover:bg-surface transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                    >
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground" aria-hidden="true">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <span className="text-sm font-medium text-foreground">View Repository</span>
                      </div>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}

                  {/* Update src/data/projects.ts to point githubUrl to your exact repository */}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next project ── */}
      <section className="border-t border-border" aria-label="Next project">
        <div className="container-portfolio py-16">
          <AnimatedSection>
            <p className="eyebrow mb-4">Next Project</p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label={`View next project: ${nextProject.title}`}
            >
              <div>
                <p className="text-xs text-muted mb-1">{nextProject.category}</p>
                <h2
                  className="heading-lg text-balance"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {nextProject.title}
                </h2>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-foreground group-hover:border-foreground group-hover:scale-110 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
