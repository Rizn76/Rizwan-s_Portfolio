import type { Metadata } from "next";
import Link from "next/link";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mohammed Rizwan — an AI/ML Engineer focused on Machine Learning, Generative AI, RAG systems, LLM applications, and practical AI product development.",
};

const interests = [
  "Machine Learning",
  "Generative AI",
  "RAG Systems",
  "LLM Applications",
  "AI Agents",
  "Semantic Search",
  "Computer Vision",
  "Building practical AI products",
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 md:pt-40 md:pb-28"
        aria-labelledby="about-page-heading"
      >
        <div className="container-portfolio">
          <AnimatedSection>
            <p className="eyebrow mb-5" aria-hidden="true">
              About Me
            </p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <h1
              id="about-page-heading"
              className="heading-display max-w-4xl text-balance"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Turning data and AI concepts into practical applications.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={160}>
            <p className="mt-7 body-lg max-w-2xl text-pretty">
              I&apos;m an AI/ML Engineer focused on building intelligent systems
              that solve real problems — from raw data to deployed solution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container-portfolio">
        <div className="divider" />
      </div>

      {/* ── Story ── */}
      <section className="section-spacing" aria-label="My story">
        <div className="container-portfolio">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 space-y-6 text-base text-muted leading-relaxed">
              <AnimatedSection>
                <p>
                  I&apos;m Mohammed Rizwan, an AI/ML Engineer with hands-on
                  experience building Machine Learning models, Retrieval-Augmented
                  Generation pipelines, LLM-powered intelligent systems, and AI
                  analytics solutions using Python, Scikit-learn, LangChain,
                  FAISS, SQL, and AWS.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={60}>
                <p>
                  My experience spans the full AI/ML development lifecycle —
                  data preprocessing, feature engineering, model development,
                  semantic search, vector databases, prompt engineering, LLM
                  integration, and Streamlit-based application deployment.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={120}>
                <p>
                  At Datavalley, I work as an AI/ML Engineer Intern building
                  classification models, evaluating zero-shot and few-shot prompt
                  templates, automating Python-based ML workflows integrated with
                  LLM APIs, and delivering AI-driven solutions in an Agile team
                  environment.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={180}>
                <p>
                  Before moving into AI/ML, I worked as a Content Compliance
                  Analyst at Wipro, where I developed strong habits around data
                  accuracy, structured analysis, performance metrics, and
                  operating effectively in high-volume, quality-focused
                  environments — skills that directly carry over into building
                  reliable AI systems.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={240}>
                <p>
                  I hold a B.Tech in Computer Science and Engineering from KL
                  University, Hyderabad (CGPA 8.3), and I&apos;m continuously
                  deepening my expertise in Generative AI, RAG architectures, AI
                  agents, and LLM application development.
                </p>
              </AnimatedSection>
            </div>

            {/* Right sidebar — quick facts */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={100}>
                <div className="sticky top-24 space-y-8">
                  {/* Interests */}
                  <div>
                    <p className="eyebrow mb-5" aria-hidden="true">
                      Areas of Interest
                    </p>
                    <ul className="space-y-0" role="list" aria-label="Areas of interest">
                      {interests.map((item, i) => (
                        <li
                          key={item}
                          className="flex items-center gap-4 py-3 border-b border-border last:border-0"
                        >
                          <span
                            className="text-xs text-subtle tabular-nums w-5"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact CTA */}
                  <div className="p-6 rounded-2xl bg-surface border border-border">
                    <p className="text-sm font-semibold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-manrope)" }}>
                      Open to opportunities
                    </p>
                    <p className="text-sm text-muted mb-4">
                      Looking for AI/ML Engineer, Generative AI, and LLM-focused
                      roles.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm group"
                    >
                      Get in touch
                      <svg
                        width="13"
                        height="13"
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
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills grid ── */}
      <section className="section-spacing bg-surface/40" aria-labelledby="about-skills-heading">
        <div className="container-portfolio">
          <AnimatedSection>
            <div className="mb-12">
              <p className="eyebrow mb-4" aria-hidden="true">Technical Skills</p>
              <h2
                id="about-skills-heading"
                className="heading-xl"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                What I work with.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 50}>
                <div
                  className="bg-background p-6 h-full group hover:bg-surface transition-colors duration-200"
                  role="region"
                  aria-labelledby={`about-skill-${category.id}`}
                >
                  <h3
                    id={`about-skill-${category.id}`}
                    className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-4 flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-200"
                      aria-hidden="true"
                    />
                    {category.title}
                  </h3>
                  <ul className="space-y-2" role="list">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted flex items-center gap-2"
                      >
                        <span className="w-px h-3 bg-border" aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section className="section-spacing" aria-labelledby="about-edu-heading">
        <div className="container-portfolio">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Education */}
            <div>
              <AnimatedSection>
                <div className="mb-10">
                  <p className="eyebrow mb-4" aria-hidden="true">Education</p>
                  <h2
                    id="about-edu-heading"
                    className="heading-xl"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Academic Background
                  </h2>
                </div>
              </AnimatedSection>
              <div role="list">
                {education.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 80}>
                    <div role="listitem" className="border-t border-border py-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3
                            className="text-base font-bold text-foreground"
                            style={{ fontFamily: "var(--font-manrope)" }}
                          >
                            {item.degree}
                          </h3>
                          <p className="text-sm text-muted mt-1">
                            {item.institution}
                            {item.location && `, ${item.location}`}
                          </p>
                          <p className="text-xs text-subtle mt-2">{item.period}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p
                            className="text-2xl font-bold text-foreground"
                            style={{ fontFamily: "var(--font-manrope)" }}
                            aria-label={`CGPA: ${item.cgpa}`}
                          >
                            {item.cgpa}
                          </p>
                          <p className="text-xs text-muted">CGPA</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>

            {/* Certifications */}
            <div>
              <AnimatedSection>
                <div className="mb-10">
                  <p className="eyebrow mb-4" aria-hidden="true">Certifications</p>
                  <h2
                    id="about-certs-heading"
                    className="heading-xl"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Credentials
                  </h2>
                </div>
              </AnimatedSection>
              <div role="list" aria-labelledby="about-certs-heading">
                {certifications.map((cert, i) => (
                  <AnimatedSection key={cert.id} delay={i * 60}>
                    <div
                      role="listitem"
                      className="border-t border-border py-6 flex items-start gap-4 group"
                    >
                      <div
                        className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors duration-200"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {cert.title}
                        </p>
                        <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                        <span className="inline-block mt-2 text-[10px] font-medium tracking-wide text-subtle uppercase">
                          {cert.category}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-spacing border-t border-border" aria-label="Call to action">
        <div className="container-portfolio text-center">
          <AnimatedSection>
            <h2
              className="heading-xl max-w-2xl mx-auto text-balance"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Want to work together?
            </h2>
            <p className="mt-4 body-lg max-w-lg mx-auto">
              I&apos;m open to AI/ML, Generative AI, and LLM-focused engineering
              roles. Let&apos;s connect.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-foreground text-sm font-semibold rounded-full hover:border-foreground/30 hover:bg-surface transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                View my projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
