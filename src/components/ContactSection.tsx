"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    // NOTE: This is a placeholder submission handler.
    // Replace with your preferred form service (Formspree, Resend, Netlify Forms, etc.)
    // Example with Formspree: POST to https://formspree.io/f/YOUR_FORM_ID
    try {
      await new Promise((res) => setTimeout(res, 1200)); // simulate network
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="section-spacing"
      aria-labelledby="contact-heading"
    >
      <div className="container-portfolio">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <p className="eyebrow mb-5" aria-hidden="true">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="heading-xl text-balance"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Let&apos;s build something intelligent.
              </h2>
              <p className="mt-5 body-lg max-w-sm text-pretty">
                I&apos;m currently exploring opportunities in AI/ML Engineering, Generative AI, Machine Learning, and LLM-powered application development.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  aria-label={`Send email to ${siteConfig.email}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  {siteConfig.email}
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </span>
                  GitHub
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={100}>
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-surface border border-border h-full min-h-[400px]"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                    Message sent!
                  </h3>
                  <p className="text-sm text-muted max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-surface border text-foreground text-sm placeholder:text-subtle focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-200 ${
                        errors.name ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-surface border text-foreground text-sm placeholder:text-subtle focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-200 ${
                        errors.email ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or question you have..."
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-surface border text-foreground text-sm placeholder:text-subtle focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none ${
                        errors.message ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500" role="alert">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    aria-busy={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
