import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

// Load fonts via next/font — correct App Router pattern, no ESLint warnings
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <head>
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
              sameAs: [siteConfig.linkedin, siteConfig.github],
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
