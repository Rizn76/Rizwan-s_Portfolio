"use client";

import { skillCategories } from "@/data/skills";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-spacing"
      aria-labelledby="skills-heading"
    >
      <div className="container-portfolio">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Technical Expertise"
            title="What I work with."
            description="A focused stack built around practical AI/ML engineering — from data processing and model development to LLM integration and deployment."
            id="skills-heading"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 60}>
              <div
                className="bg-background p-6 h-full group hover:bg-surface transition-colors duration-200"
                role="region"
                aria-labelledby={`skill-category-${category.id}`}
              >
                <h3
                  id={`skill-category-${category.id}`}
                  className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-4 flex items-center gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  {category.title}
                </h3>
                <ul className="space-y-2" role="list" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted group-hover:text-foreground/80 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span
                        className="w-px h-3 bg-border"
                        aria-hidden="true"
                      />
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
  );
}
