# Public Assets — Placeholder Instructions

Add the following files to this `/public` directory before deploying:

## Required files

| File | Description |
|------|-------------|
| `resume.pdf` | Your actual resume PDF — linked from Resume page and Hero section download button |
| `og-image.png` | Open Graph image (1200×630px) for social media previews |
| `favicon.ico` | Browser tab icon |
| `images/project-attendance.png` | Screenshot of your AI Attendance Tracking System |
| `images/project-rag.png` | Screenshot of your RAG PDF QA System |

## How to replace project screenshots

Once you have screenshots, update `src/data/projects.ts`:

```ts
imageUrl: "/images/project-attendance.png",
imageUrl: "/images/project-rag.png",
```

Then use Next.js `<Image>` in the `ProjectCard` and case study pages to render them.

## How to update social/GitHub links

Search for `// PLACEHOLDER` comments across `src/` to find all links that need updating:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/components/ContactSection.tsx`
- `src/data/projects.ts`
- `src/app/layout.tsx`
