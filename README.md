# AI-Native Portfolio Premium V1

A futuristic multi-page portfolio for Soumya Ganguly, built to present AI-native product work, full-stack systems, automation projects, resume details, and local portfolio intelligence without requiring paid API keys.

Live site: [https://ai-portfolio-website-eight.vercel.app](https://ai-portfolio-website-eight.vercel.app)

## What Changed

- Converted the portfolio from a single-scroll showcase into real Next.js App Router pages.
- Added a shared typed data source for projects, case studies, resume content, skills, and local copilot answers.
- Replaced the old particle-heavy background with a calmer neural grid, cursor-reactive canvas nodes, scan-line shimmer, and accessible reduced-motion support.
- Added a cinematic hologram portrait treatment using `public/soumya-portrait.jpeg`.
- Added a downloadable resume at `public/soumya-ganguly-resume.pdf`.
- Updated contact email to `gangulysoumya01@gmail.com`.
- Added project filters, stronger project positioning, and detailed case-study pages.
- Added a deterministic local copilot that answers only from bundled static portfolio data.

## Routes

- `/` - Home hero, portrait, AI systems dashboard, featured work, AI Lab and resume/contact CTAs
- `/projects` - Filterable project constellation
- `/projects/[slug]` - Detailed case studies for each featured project
- `/ai-lab` - Local non-API demos, prompt bank, recommender framing, and skill graph
- `/resume` - Readable resume profile and PDF download
- `/contact` - Contact links, resume download, GitHub link, and mailto form

## Featured Projects

- Soumya JobBot
- Lookism Combat Archive
- E-commerce AI Agents
- Fitlife
- GMap Lead Engine
- LinkVault
- MediShop
- SentiOCR
- AI-Native Portfolio

Static clinic, gym, and client brochure sites are intentionally kept out of the main featured project section for now. They can be added later as a separate client/static web work page.

## Local Copilot

The floating copilot is deterministic and local-first. It does not call OpenAI, Gemini, Groq, Claude, or any other live AI API in V1.

Supported prompt examples:

- Show AI projects
- Why hire Soumya?
- Explain Fitlife architecture
- Download resume
- Private projects
- Contact Soumya

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Canvas and CSS visual effects
- Vercel deployment

## Data Model

Primary content lives in `lib/portfolio-data.ts`:

- `projects`
- `caseStudies`
- `resumeProfile`
- `copilotKnowledge`

This keeps the project cards, case-study pages, resume content, contact details, and copilot answers consistent.

## Assets

- Portrait: `public/soumya-portrait.jpeg`
- Resume: `public/soumya-ganguly-resume.pdf`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

If Turbopack hits local sandbox port restrictions, rerun the build with unrestricted local permissions.

## QA Completed

- Production build passed.
- Home page loaded and was not blank.
- Portrait rendered on desktop and mobile.
- Resume PDF resolved from CTA links.
- Project filters updated visible cards.
- All 9 featured projects opened their case-study pages.
- Local copilot opened, answered suggested prompts, and stayed local/static.
- `/resume` showed `gangulysoumya01@gmail.com`.
- Old placeholder email was not present.
- Desktop viewport checked at `1280x720`.
- Mobile viewport checked at `390x844`.
- No relevant console errors were found during browser QA.

## Deployment

Production is deployed on Vercel:

[https://ai-portfolio-website-eight.vercel.app](https://ai-portfolio-website-eight.vercel.app)
