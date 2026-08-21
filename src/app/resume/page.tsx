import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Mohammed Rizwan — AI/ML Engineer with experience in Machine Learning, Generative AI, RAG, LLM applications, and Python-based AI development.",
};

export default function ResumePage() {
  return (
    <div className="page-wrapper">
      {/* ── Header ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border" aria-labelledby="resume-heading">
        <div className="container-portfolio">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <AnimatedSection>
                <p className="eyebrow mb-4" aria-hidden="true">Resume</p>
              </AnimatedSection>
              <AnimatedSection delay={80}>
                <h1
                  id="resume-heading"
                  className="heading-xl"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Mohammed Rizwan
                </h1>
                <p className="mt-2 text-base text-muted">
                  AI/ML Engineer &nbsp;·&nbsp; Python &nbsp;·&nbsp; Machine Learning &nbsp;·&nbsp; Generative AI
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={120}>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeDownloadName}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex-shrink-0"
                aria-label="Download Mohammed Rizwan's resume as PDF"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container-portfolio py-16 md:py-20 space-y-16">

        {/* ── Professional Summary ── */}
        <AnimatedSection>
          <section aria-labelledby="resume-summary">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  id="resume-summary"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-foreground pt-1"
                >
                  Summary
                </h2>
              </div>
              <div className="lg:col-span-9">
                <p className="text-base text-muted leading-relaxed text-pretty">
                  AI/ML Engineer with hands-on experience developing Machine Learning models, Retrieval-Augmented
                  Generation (RAG) applications, LLM-powered intelligent systems, and AI analytics solutions using
                  Python, Scikit-learn, LangChain, FAISS, SQL, and AWS. Built end-to-end AI applications involving
                  data preprocessing, feature engineering, semantic search, vector databases, and application
                  deployment using Streamlit. Strong foundation in Generative AI, Machine Learning, Data Analytics,
                  and backend AI workflows with experience delivering scalable, business-oriented AI solutions.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {siteConfig.email}
                  </a>
                  <span className="text-border" aria-hidden="true">·</span>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="divider" />

        {/* ── Experience ── */}
        <AnimatedSection>
          <section aria-labelledby="resume-experience">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  id="resume-experience"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-foreground pt-1"
                >
                  Experience
                </h2>
              </div>
              <div className="lg:col-span-9 space-y-10">
                {experience.map((job) => (
                  <div key={job.id}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                      <div>
                        <h3
                          className="text-base font-bold text-foreground"
                          style={{ fontFamily: "var(--font-manrope)" }}
                        >
                          {job.role}
                        </h3>
                        <p className="text-sm text-muted">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {job.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                            Current
                          </span>
                        )}
                        <span className="text-xs text-subtle tabular-nums">{job.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2" role="list">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-muted" aria-hidden="true" />
                          <span className="text-sm text-muted leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="divider" />

        {/* ── Technical Skills ── */}
        <AnimatedSection>
          <section aria-labelledby="resume-skills">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  id="resume-skills"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-foreground pt-1"
                >
                  Technical Skills
                </h2>
              </div>
              <div className="lg:col-span-9">
                <div className="space-y-4">
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                      <p className="sm:col-span-3 text-xs font-semibold text-foreground tracking-wide">
                        {cat.title}
                      </p>
                      <p className="sm:col-span-9 text-sm text-muted">
                        {cat.skills.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="divider" />

        {/* ── Projects ── */}
        <AnimatedSection>
          <section aria-labelledby="resume-projects">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  id="resume-projects"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-foreground pt-1"
                >
                  Projects
                </h2>
              </div>
              <div className="lg:col-span-9 space-y-8">
                {projects.map((project) => (
                  <div key={project.slug}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <Link
                          href={`/work/${project.slug}`}
                          className="text-base font-bold text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                          style={{ fontFamily: "var(--font-manrope)" }}
                        >
                          {project.title}
                        </Link>
                        <p className="text-xs text-subtle mt-0.5">{project.category}</p>
                      </div>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted hover:text-foreground transition-colors duration-200 flex-shrink-0"
                          aria-label={`GitHub for ${project.title} (opens in new tab)`}
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-muted mb-3 leading-relaxed">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tag text-[10px]">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="divider" />

        {/* ── Education ── */}
        <AnimatedSection>
          <section aria-labelledby="resume-education">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  id="resume-education"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-foreground pt-1"
                >
                  Education
                </h2>
              </div>
              <div className="lg:col-span-9 space-y-6">
                {education.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3
                        className="text-base font-bold text-foreground"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-sm text-muted">{item.institution}{item.location && `, ${item.location}`}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs text-subtle">{item.period}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5" aria-label={`CGPA ${item.cgpa}`}>
                        CGPA: {item.cgpa}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="divider" />

        {/* ── Certifications ── */}
        <AnimatedSection>
          <section aria-labelledby="resume-certs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  id="resume-certs"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-foreground pt-1"
                >
                  Certifications
                </h2>
              </div>
              <div className="lg:col-span-9">
                <ul className="space-y-3" role="list">
                  {certifications.map((cert) => (
                    <li key={cert.id} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-muted" aria-hidden="true" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{cert.title}</span>
                        <span className="text-sm text-muted"> — {cert.issuer}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ── Download CTA ── */}
        <AnimatedSection>
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border">
            <p className="text-sm text-muted">
              Prefer a formatted PDF version?
            </p>
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeDownloadName}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
              aria-label="Download Mohammed Rizwan's resume as PDF"
            >
              Download Resume PDF
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
