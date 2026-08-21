import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "HackerRank", href: siteConfig.hackerrank },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="container-portfolio py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="Mohammed Rizwan — Home"
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold select-none"
                style={{ fontFamily: "var(--font-manrope)" }}
                aria-hidden="true"
              >
                MR
              </span>
              <span
                className="text-sm font-semibold text-foreground"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Mohammed Rizwan
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted max-w-xs">
              AI/ML Engineer building intelligent systems with Machine Learning and Generative AI.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-5" role="list">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    aria-label={`${s.label} (opens in new tab)`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-subtle">
            &copy; {year} Mohammed Rizwan. All rights reserved.
          </p>
          <p className="text-xs text-subtle">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
