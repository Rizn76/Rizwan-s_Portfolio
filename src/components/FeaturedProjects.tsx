"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="work"
      className="section-spacing"
      aria-labelledby="projects-heading"
    >
      <div className="container-portfolio">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects I've built."
            description="End-to-end AI applications — from data processing and model training to deployment and intelligent reporting."
            id="projects-heading"
          />
        </AnimatedSection>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 80}>
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={200}>
          <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
            <p className="text-sm text-muted">
              {projects.length} featured projects
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm group"
            >
              View all work
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
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
