import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammedrizwan.dev"), // PLACEHOLDER — replace with your actual domain
  title: {
    default: "Mohammed Rizwan | AI/ML Engineer",
    template: "%s | Mohammed Rizwan",
  },
  description:
    "AI/ML Engineer building Machine Learning, Generative AI, RAG, LLM-powered applications, semantic search, and intelligent data solutions using Python.",
  keywords: [
    "AI/ML Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "LLM",
    "Python",
    "LangChain",
    "FAISS",
    "Retrieval-Augmented Generation",
    "Mohammed Rizwan",
    "Portfolio",
  ],
  authors: [{ name: "Mohammed Rizwan", url: "https://mohammedrizwan.dev" }],
  creator: "Mohammed Rizwan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedrizwan.dev",
    siteName: "Mohammed Rizwan",
    title: "Mohammed Rizwan | AI/ML Engineer",
    description:
      "AI/ML Engineer building Machine Learning, Generative AI, RAG, LLM-powered applications, semantic search, and intelligent data solutions.",
    images: [
      {
        url: "/og-image.png", // PLACEHOLDER — add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Mohammed Rizwan — AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rizwan | AI/ML Engineer",
    description:
      "AI/ML Engineer building Machine Learning, Generative AI, RAG, LLM-powered applications and intelligent data solutions.",
    images: ["/og-image.png"], // PLACEHOLDER
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Structured data — Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Rizwan",
              jobTitle: "AI/ML Engineer",
              description:
                "AI/ML Engineer building Machine Learning, Generative AI, RAG, and LLM-powered applications.",
              url: siteConfig.url,
              email: siteConfig.email,
              sameAs: [
                siteConfig.linkedin,
                siteConfig.github,
              ],
              knowsAbout: [
                "Machine Learning",
                "Generative AI",
                "Retrieval-Augmented Generation",
                "Python",
                "LangChain",
                "FAISS",
                "LLMs",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
