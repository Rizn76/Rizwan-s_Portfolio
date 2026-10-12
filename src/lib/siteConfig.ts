/**
 * Centralized site configuration.
 * Update this file to change links across the entire portfolio.
 */
export const siteConfig = {
  name: "Mohammed Rizwan",
  title: "Mohammed Rizwan | AI/ML Engineer",
  description:
    "AI/ML Engineer building Machine Learning, Generative AI, RAG, LLM-powered applications, semantic search, and intelligent data solutions using Python.",
  url: "https://rizwan-s-portfolio-nine.vercel.app",

  email: "mdrmohammedrizwan@gmail.com",
  phone: "+91 9550000219",

  // ── Social links ──────────────────────────────────────────────────────────
  github: "https://github.com/Rizn76",
  linkedin: "https://www.linkedin.com/in/mdmohammedrizwan/",
  hackerrank: "https://www.hackerrank.com/profile/MDRIZWAN72",

  // ── Resume ────────────────────────────────────────────────────────────────
  // Place your resume PDF at: public/resume.pdf
  // The download filename shown to the user:
  resumeDownloadName: "Mohammed_Rizwan_Resume.pdf",
  resumePath: "/resume.pdf",
} as const;
