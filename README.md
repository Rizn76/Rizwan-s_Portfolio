# Mohammed Rizwan — AI/ML Engineer Portfolio

A production-quality personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### 1. Install Node.js

Download and install from: https://nodejs.org/en/download

After installing, open a new terminal and verify:
```
node --version
npm --version
```

### 2. Install dependencies

Open a terminal in this folder (`rizwan-portfolio/`) and run:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
rizwan-portfolio/
├── public/
│   ├── resume.pdf          ← ADD YOUR RESUME PDF HERE
│   ├── og-image.png        ← ADD OG IMAGE HERE
│   └── images/             ← ADD PROJECT SCREENSHOTS HERE
│
├── src/
│   ├── app/                ← Next.js App Router pages
│   │   ├── layout.tsx      ← Root layout, SEO metadata, fonts
│   │   ├── page.tsx        ← Home page
│   │   ├── about/          ← About page
│   │   ├── work/           ← Work listing + case study pages
│   │   │   └── [slug]/     ← Dynamic case study route
│   │   ├── resume/         ← Resume page
│   │   └── contact/        ← Contact page
│   │
│   ├── components/         ← Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationCertifications.tsx
│   │   ├── ContactSection.tsx
│   │   ├── SectionHeading.tsx
│   │   └── AnimatedSection.tsx
│   │
│   ├── data/               ← All portfolio content (edit here)
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── certifications.ts
│   │
│   ├── hooks/
│   │   └── useInView.ts    ← Intersection Observer hook for animations
│   │
│   └── lib/
│       └── utils.ts        ← cn() class utility
```

---

## Personalizing the Portfolio

### Update your links (required before deploying)

Search for `// PLACEHOLDER` across the `src/` folder. You need to update:

| File | What to update |
|------|----------------|
| `src/components/Navbar.tsx` | LinkedIn, GitHub URLs |
| `src/components/Hero.tsx` | LinkedIn, GitHub, HackerRank URLs |
| `src/components/Footer.tsx` | LinkedIn, GitHub, HackerRank URLs |
| `src/components/ContactSection.tsx` | LinkedIn, GitHub URLs |
| `src/data/projects.ts` | GitHub repo URLs for both projects |
| `src/app/layout.tsx` | Your domain, LinkedIn, GitHub for JSON-LD |

### Update project GitHub URLs

In `src/data/projects.ts`, replace:
```ts
githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/ai-attendance-system",
githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/rag-pdf-qa",
```

### Add your resume PDF

Copy your resume PDF to: `public/resume.pdf`

### Add project screenshots

Copy screenshots to `public/images/`:
- `public/images/project-attendance.png`
- `public/images/project-rag.png`

### Add a contact form backend

The contact form in `src/components/ContactSection.tsx` has a simulated submission.
Replace the `handleSubmit` function body with your preferred service:

**Option 1 — Formspree (free tier, easiest):**
1. Create an account at https://formspree.io
2. Create a form and get your form ID
3. Replace the setTimeout simulation with:
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error();
```

**Option 2 — Resend + Next.js Route Handler**

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Deploy

### Vercel (recommended — free, zero config)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com and import the repository
3. Vercel auto-detects Next.js — click Deploy
4. Set your custom domain in Vercel settings

### Netlify

1. Run `npm run build` locally
2. Deploy the `.next` output via Netlify CLI or drag-and-drop

### Other platforms

This is a standard Next.js 14 app and deploys to any platform that supports Node.js.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter + Manrope (Google Fonts)
- **Animations:** Custom CSS + Intersection Observer
- **Icons:** Inline SVG (zero icon library dependency)

---

## License

Personal portfolio — all content belongs to Mohammed Rizwan.
