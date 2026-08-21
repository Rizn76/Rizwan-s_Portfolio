"use client";

import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function EducationCertifications() {
  return (
    <section
      id="education"
      className="section-spacing bg-surface/30"
      aria-labelledby="education-heading"
    >
      <div className="container-portfolio">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education */}
          <div>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Education"
                title="Academic Background"
                id="education-heading"
              />
            </AnimatedSection>

            <div className="space-y-0" role="list">
              {education.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 80}>
                  <div
                    role="listitem"
                    className="border-t border-border py-8"
                  >
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
              <SectionHeading
                eyebrow="Certifications"
                title="Credentials"
                id="certifications-heading"
              />
            </AnimatedSection>

            <div className="space-y-0" role="list" aria-labelledby="certifications-heading">
              {certifications.map((cert, index) => (
                <AnimatedSection key={cert.id} delay={index * 60}>
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
                      <span
                        className="inline-block mt-2 text-[10px] font-medium tracking-wide text-subtle uppercase"
                      >
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
  );
}
