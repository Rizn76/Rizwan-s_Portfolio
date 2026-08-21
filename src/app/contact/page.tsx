import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohammed Rizwan — AI/ML Engineer open to opportunities in AI/ML Engineering, Generative AI, and LLM-powered application development.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* Page header */}
      <section className="pt-32 pb-4 md:pt-40 md:pb-6" aria-hidden="true">
        <div className="container-portfolio">
          <AnimatedSection>
            <p className="eyebrow">Get in Touch</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reuse the contact section component */}
      <ContactSection />
    </div>
  );
}
