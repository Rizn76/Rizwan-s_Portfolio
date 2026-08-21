import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group border-t border-border pt-10 pb-12"
      aria-label={`Project: ${project.title}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left — project info */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-[10px] font-bold tracking-[0.2em] text-subtle uppercase"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="w-8 h-px bg-border" aria-hidden="true" />
            <span className="eyebrow text-[10px]">{project.category}</span>
          </div>

          <h3
            className="heading-md mb-4 text-balance group-hover:text-accent/90 transition-colors duration-200"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {project.title}
          </h3>

          <p className="text-muted text-base leading-relaxed mb-6 text-pretty">
            {project.shortDescription}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.metrics.slice(0, 4).map((metric) => (
              <div key={metric.label} className="bg-surface rounded-xl p-4">
                <p
                  className="text-2xl font-bold tracking-tight text-foreground mb-0.5"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {metric.value}
                </p>
                <p className="text-xs text-muted leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.slice(0, 6).map((tech) => (
              <span key={tech} className="tag text-[11px]">
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="tag text-[11px] text-subtle">
                +{project.techStack.length - 6} more
              </span>
            )}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-4">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm group/link"
              aria-label={`View case study for ${project.title}`}
            >
              View Case Study
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            {project.githubUrl && (
              <>
                <span className="w-px h-4 bg-border" aria-hidden="true" />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </>
            )}
          </div>
        </div>

        {/* Right — project visual */}
        <div className="lg:col-span-7 xl:col-span-8">
          <Link
            href={`/work/${project.slug}`}
            className="block relative overflow-hidden rounded-2xl bg-surface border border-border group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View ${project.title} case study`}
            tabIndex={-1}
          >
            {/* Placeholder image area — replace with actual screenshots */}
            <div
              className="relative w-full aspect-[16/10] overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-surface via-background to-surface/80 p-8">
                {/* Project number watermark */}
                <span
                  className="absolute top-6 right-8 text-[120px] font-black text-border/40 leading-none select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {project.number}
                </span>

                {/* Architecture diagram for RAG project */}
                {project.slug === "rag-powered-pdf-question-answering-system" ? (
                  <div className="relative z-10 flex flex-col items-center gap-1.5 text-xs font-medium text-muted w-full max-w-xs">
                    {[
                      "PDF Documents",
                      "Document Chunking",
                      "Embeddings",
                      "FAISS Vector Store",
                      "Similarity Search",
                      "Gemini LLM",
                      "Context-Aware Answer",
                    ].map((step, i, arr) => (
                      <div key={step} className="flex flex-col items-center w-full">
                        <div className="w-full px-4 py-2 rounded-lg bg-background border border-border text-center text-xs font-medium text-foreground">
                          {step}
                        </div>
                        {i < arr.length - 1 && (
                          <div className="flex flex-col items-center gap-0.5 my-0.5">
                            <div className="w-px h-2 bg-border" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Attendance system visual */
                  <div className="relative z-10 grid grid-cols-3 gap-3 w-full max-w-md">
                    {[
                      { label: "Face Registration", icon: "👤" },
                      { label: "Recognition Engine", icon: "🎯" },
                      { label: "Attendance DB", icon: "🗄️" },
                      { label: "Teacher Dashboard", icon: "📊" },
                      { label: "LLM Reports", icon: "🤖" },
                      { label: "CSV Export", icon: "📁" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-background border border-border"
                      >
                        <span className="text-xl" role="img" aria-label={item.label}>{item.icon}</span>
                        <span className="text-[10px] font-medium text-muted text-center leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover/img:bg-foreground/[0.03] transition-colors duration-300" />
            </div>

            {/* Image replacement notice — visible in dev */}
            <div className="absolute bottom-3 right-3 text-[10px] text-subtle/60 bg-background/80 px-2 py-0.5 rounded-full">
              Replace with screenshot
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
