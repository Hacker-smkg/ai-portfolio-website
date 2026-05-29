export type ProjectCategory =
  | "AI"
  | "Automation"
  | "Full Stack"
  | "Private"
  | "Product"
  | "Data";

export type ProjectVisibility = "Public" | "Private repo";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory[];
  tags: string[];
  visibility: ProjectVisibility;
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
  signal: string;
  proof: string[];
  icon: string;
};

export type CaseStudy = {
  slug: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  highlights: string[];
  lessons: string[];
  proofPoints: string[];
};

export type ResumeProfile = {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  resumePath: string;
  portraitPath: string;
  strengths: string[];
  skills: {
    label: string;
    items: string[];
  }[];
  experience: {
    title: string;
    detail: string;
  }[];
};

export type CopilotKnowledge = {
  prompt: string;
  answer: string;
  action?: {
    label: string;
    href: string;
  };
};

export const resumeProfile: ResumeProfile = {
  name: "Soumya Ganguly",
  title: "AI-Native Full Stack Engineer",
  email: "gangulysoumya01@gmail.com",
  location: "Kolkata / Kalyani, India",
  resumePath: "/soumya-ganguly-resume.pdf",
  portraitPath: "/soumya-portrait.jpeg",
  summary:
    "Soumya builds practical AI systems, automation pipelines, and full-stack products across Next.js, React, Node.js, FastAPI, Python, MongoDB, Supabase, and deployed cloud workflows.",
  strengths: [
    "Ships end-to-end products, not just demos",
    "Combines AI features with real product flows",
    "Comfortable across frontend, backend, automation, and deployment",
    "Builds fast static/local experiences when API keys are unnecessary",
  ],
  skills: [
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT Auth"],
    },
    {
      label: "AI And Automation",
      items: ["Agent Workflows", "OCR", "LLM Integration", "n8n", "GitHub Actions"],
    },
    {
      label: "Data And Cloud",
      items: ["MongoDB", "SQLAlchemy", "Supabase", "Vercel", "Render"],
    },
  ],
  experience: [
    {
      title: "AI product builder",
      detail:
        "Built systems for job alerts, OCR sentiment analysis, lead generation, e-commerce agents, and AI-assisted fitness planning.",
    },
    {
      title: "Full-stack deployment",
      detail:
        "Designed React/Next.js interfaces, Node/FastAPI backends, database models, auth flows, and deployable production splits.",
    },
    {
      title: "Freelance web work",
      detail:
        "Static clinic, gym, and business websites are intentionally kept outside the main featured set until they become separate client-work proof pages.",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "soumya-jobbot",
    title: "Soumya JobBot",
    summary:
      "Telegram job-alert automation for SDE, fresher, intern, GenAI, remote-from-India, and Kolkata/Kalyani opportunities.",
    category: ["AI", "Automation", "Data"],
    tags: ["Python", "Telegram Bot", "GitHub Actions", "Jobs API"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/soumya-jobbot",
    featured: true,
    signal: "Scheduled intelligence loop",
    proof: ["Cron workflow", "Telegram delivery", "Search filters"],
    icon: "JB",
  },
  {
    slug: "lookism-combat-archive",
    title: "Lookism Combat Archive",
    summary:
      "Gamified combat and fitness archive with character data, XP progression, quests, profile diagnosis, and optional AI coaching.",
    category: ["AI", "Product", "Full Stack"],
    tags: ["JavaScript", "Vercel", "Supabase", "Gemini", "Gamification"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/lookism-combat-archive",
    featured: true,
    signal: "Gamified product engine",
    proof: ["XP system", "Supabase sync", "AI coaching hooks"],
    icon: "LC",
  },
  {
    slug: "ecommerce-ai-agents",
    title: "E-commerce AI Agents",
    summary:
      "Multi-agent FastAPI backend with analytics, operations, marketing, and strategy agents plus protected workflow chaining.",
    category: ["AI", "Automation", "Full Stack"],
    tags: ["Python", "FastAPI", "SQLAlchemy", "n8n", "Testing"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/ecommerce-ai-agents",
    featured: true,
    signal: "Agentic commerce backend",
    proof: ["Agent modules", "API-key protection", "Tests"],
    icon: "EA",
  },
  {
    slug: "fitlife",
    title: "Fitlife",
    summary:
      "AI-native fitness platform with onboarding, adaptive workout plans, FitBot guidance, admin management, subscriptions, and deployed production split.",
    category: ["AI", "Product", "Full Stack"],
    tags: ["React", "Node.js", "MongoDB", "AI Plans", "Render"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/Fitlife",
    featured: true,
    signal: "Personalized fitness system",
    proof: ["Onboarding engine", "Admin workflows", "FitBot layer"],
    icon: "FL",
  },
  {
    slug: "gmap-lead-engine",
    title: "GMap Lead Engine",
    summary:
      "Private lead-generation engine for medical, fitness, and local business niches using geo-search, filters, CSV export, analytics, and AI outreach.",
    category: ["AI", "Automation", "Private", "Data"],
    tags: ["React", "Vite", "FastAPI", "Google Places", "Claude"],
    visibility: "Private repo",
    repoUrl: "https://github.com/Hacker-smkg/gmap-lead-engine",
    featured: true,
    signal: "Local-business lead intelligence",
    proof: ["Geo filters", "CSV export", "Outreach assistant"],
    icon: "GM",
  },
  {
    slug: "linkvault",
    title: "LinkVault",
    summary:
      "Private web-first and mobile-first resource organizer for saving links with categories, tags, favorites, search, IndexedDB, and shared packages.",
    category: ["Product", "Full Stack", "Private"],
    tags: ["Next.js", "Expo", "TypeScript", "IndexedDB", "Monorepo"],
    visibility: "Private repo",
    repoUrl: "https://github.com/Hacker-smkg/linkvault",
    featured: true,
    signal: "Personal knowledge vault",
    proof: ["Local-first data", "Shared packages", "Mobile path"],
    icon: "LV",
  },
  {
    slug: "medishop",
    title: "MediShop",
    summary:
      "Medicine e-commerce platform with JWT auth, product catalogue, cart and order flows, plus MediBot symptom guidance through FastAPI AI service.",
    category: ["AI", "Full Stack", "Product"],
    tags: ["React", "Node.js", "MongoDB", "FastAPI", "Groq"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/Gen-AI-Medicine-shop",
    featured: true,
    signal: "AI-assisted commerce",
    proof: ["JWT auth", "Cart and orders", "MediBot service"],
    icon: "MS",
  },
  {
    slug: "sentiocr",
    title: "SentiOCR",
    summary:
      "Full-stack AI platform that extracts text from handwritten images with OpenCV-preprocessed OCR and classifies emotional tone with fuzzy scoring.",
    category: ["AI", "Data", "Full Stack"],
    tags: ["Python", "FastAPI", "OCR", "OpenCV", "React"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/SentiOCR",
    featured: true,
    signal: "Vision-to-sentiment pipeline",
    proof: ["Image preprocessing", "OCR flow", "Sentiment scoring"],
    icon: "SO",
  },
  {
    slug: "ai-portfolio-website",
    title: "AI-Native Portfolio",
    summary:
      "The portfolio itself: a multi-page AI engineer site with deterministic local copilot, case studies, resume flow, and motion-driven visual system.",
    category: ["AI", "Product", "Full Stack"],
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    visibility: "Public",
    repoUrl: "https://github.com/Hacker-smkg/ai-portfolio-website",
    featured: true,
    signal: "Personal operating system",
    proof: ["App Router pages", "Local copilot", "Case-study data"],
    icon: "AP",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "soumya-jobbot",
    problem:
      "Manual job searching wastes time because fresh roles are scattered across boards, keywords, locations, and remote filters.",
    solution:
      "A scheduled Telegram automation that scans targeted sources and turns them into concise, relevant alerts.",
    architecture: ["Source scan", "Role filters", "Deduplication", "Telegram delivery", "Scheduled GitHub Action"],
    stack: ["Python", "Telegram Bot API", "GitHub Actions", "Jobs API"],
    highlights: ["Built for real job-search routines", "Filters for India remote and local opportunities", "Low-cost scheduled deployment"],
    lessons: ["Automation is most useful when it matches a daily habit", "Simple alert quality matters more than noisy scraping volume"],
    proofPoints: ["Runnable scheduled workflow", "Telegram-first delivery", "Keyword and location targeting"],
  },
  {
    slug: "lookism-combat-archive",
    problem:
      "Fitness and fan communities often lose motivation because reference data, progression, and routines live in separate places.",
    solution:
      "A gamified archive that connects characters, quests, XP, profile diagnosis, and optional AI coaching into one product loop.",
    architecture: ["Character data", "Profile diagnosis", "Quest engine", "XP progression", "Supabase sync"],
    stack: ["JavaScript", "Supabase", "Vercel", "Gemini"],
    highlights: ["Gamified growth loop", "Cloud persistence", "Optional coaching layer"],
    lessons: ["A product becomes sticky when data and progression reinforce each other", "AI coaching works best as a layer on top of clear rules"],
    proofPoints: ["XP and quest mechanics", "Profile diagnosis flow", "Supabase-backed state"],
  },
  {
    slug: "ecommerce-ai-agents",
    problem:
      "Small commerce teams need analytics, operations, marketing, and strategy support, but isolated scripts do not coordinate well.",
    solution:
      "A modular FastAPI backend where agent responsibilities are separated and can be chained through protected workflows.",
    architecture: ["API gateway", "Agent router", "Analytics agent", "Operations agent", "n8n workflow chain"],
    stack: ["FastAPI", "SQLAlchemy", "Python", "n8n", "Pytest"],
    highlights: ["Clear agent boundaries", "API-key protected endpoints", "Persistence and test coverage"],
    lessons: ["Agent systems need boring backend discipline", "Role separation keeps automation explainable"],
    proofPoints: ["Multiple agent modules", "SQL persistence", "Automated tests"],
  },
  {
    slug: "fitlife",
    problem:
      "Fitness apps often feel generic because onboarding, plans, guidance, and admin content do not adapt to the user.",
    solution:
      "Fitlife uses deep onboarding and AI-assisted plan generation to personalize routines while keeping admin workflows manageable.",
    architecture: ["Onboarding intake", "Plan generation", "FitBot guidance", "Admin workout manager", "Subscription-ready product layer"],
    stack: ["React", "Node.js", "MongoDB", "AI planning", "Render"],
    highlights: ["Replaces the previous static clinic feature in the portfolio", "Better product depth than a normal static site", "Production-style frontend/backend split"],
    lessons: ["Personalization needs structured intake first", "A good admin layer makes user-facing AI sustainable"],
    proofPoints: ["Adaptive workout flow", "FitBot assistant", "Admin management features"],
  },
  {
    slug: "gmap-lead-engine",
    problem:
      "Freelance prospecting becomes slow when leads must be found, filtered, exported, scored, and contacted manually.",
    solution:
      "A private lead engine for niche local markets using Google Places search, business filters, analytics, CSV export, and AI outreach support.",
    architecture: ["Geo-search", "Business filters", "Lead table", "Analytics", "AI outreach draft"],
    stack: ["React", "Vite", "FastAPI", "Google Places", "Claude"],
    highlights: ["Built as an income-support tool", "Targets medical, fitness, and local business niches", "Private because it contains business workflow logic"],
    lessons: ["Automation should preserve human review", "Private tools can still be portfolio-grade when explained through proof points"],
    proofPoints: ["Rating and website filters", "CSV export", "Lead status tracking"],
  },
  {
    slug: "linkvault",
    problem:
      "Useful links become hard to retrieve when they live across chats, bookmarks, notes, and mobile screenshots.",
    solution:
      "A private local-first resource organizer with tags, categories, favorites, search, IndexedDB persistence, and shared web/mobile packages.",
    architecture: ["Capture link", "Normalize metadata", "Local IndexedDB", "Tag search", "Shared monorepo package"],
    stack: ["Next.js", "Expo", "TypeScript", "IndexedDB", "Monorepo"],
    highlights: ["Private repo shown with clear positioning", "Web-first plus mobile-first path", "Local-first storage for speed and privacy"],
    lessons: ["Personal tools are stronger when retrieval is the core interaction", "Shared packages reduce drift between web and mobile"],
    proofPoints: ["IndexedDB persistence", "Search and tags", "Shared monorepo packages"],
  },
  {
    slug: "medishop",
    problem:
      "A medicine shop needs standard commerce flows, but users also benefit from a guided health-assistance layer.",
    solution:
      "A full-stack medicine store with auth, catalogue, cart, order handling, and a FastAPI MediBot service for symptom-style assistance.",
    architecture: ["React storefront", "Node API", "MongoDB data", "Cart and orders", "FastAPI MediBot"],
    stack: ["React", "Node.js", "MongoDB", "FastAPI", "Groq"],
    highlights: ["Medication shop link is attached to the correct project", "Combines commerce with AI assistance", "Clear separation between store and AI service"],
    lessons: ["AI health features must be positioned as assistance, not diagnosis", "Commerce flows still need reliability before AI polish"],
    proofPoints: ["JWT auth", "Product catalog", "MediBot integration"],
  },
  {
    slug: "sentiocr",
    problem:
      "Handwritten notes are difficult to search and analyze, especially when the emotional tone matters.",
    solution:
      "An OCR and sentiment pipeline that preprocesses images, extracts handwritten text, and scores emotional tone with a deterministic fuzzy system.",
    architecture: ["Image upload", "OpenCV preprocessing", "OCR extraction", "Fuzzy sentiment scoring", "React result UI"],
    stack: ["Python", "FastAPI", "OpenCV", "OCR", "React"],
    highlights: ["Vision plus language pipeline", "Deterministic scoring for explainability", "Full-stack result experience"],
    lessons: ["Preprocessing quality controls OCR quality", "Transparent scoring can be more useful than opaque model output"],
    proofPoints: ["OpenCV preprocessing", "OCR stage", "Sentiment classification"],
  },
  {
    slug: "ai-portfolio-website",
    problem:
      "A single-scroll portfolio can show projects, but it does not explain system thinking, proof, or how someone should navigate Soumya's work.",
    solution:
      "A multi-page AI-native portfolio with App Router pages, project case studies, a readable resume page, local copilot, and cinematic visual identity.",
    architecture: ["Shared portfolio data", "App Router pages", "Case-study renderer", "Local copilot", "Static deploy"],
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    highlights: ["No paid API keys required", "Local deterministic copilot", "Resume and contact routes are first-class"],
    lessons: ["A portfolio should prove judgment, not just list repositories", "Static data can still feel intelligent when structured well"],
    proofPoints: ["Typed data source", "Dynamic project pages", "Accessible resume download"],
  },
];

export const copilotKnowledge: CopilotKnowledge[] = [
  {
    prompt: "Show AI projects",
    answer:
      "Soumya's strongest AI projects are Soumya JobBot, E-commerce AI Agents, Fitlife, MediShop, SentiOCR, GMap Lead Engine, Lookism Combat Archive, and this AI-native portfolio. This copilot is local and only reads the portfolio data bundled with the site.",
    action: { label: "Open projects", href: "/projects" },
  },
  {
    prompt: "Why hire Soumya?",
    answer:
      "Hire Soumya for practical AI product execution: he can design interfaces, build APIs, wire databases, add automation, and ship deployable systems without losing sight of the user workflow.",
    action: { label: "View resume", href: "/resume" },
  },
  {
    prompt: "Explain Fitlife architecture",
    answer:
      "Fitlife is structured around onboarding intake, adaptive plan generation, FitBot guidance, admin workout management, and a deployed React/Node/Mongo product split. It replaced the older static clinic feature because it proves deeper product and AI-system thinking.",
    action: { label: "Open Fitlife case", href: "/projects/fitlife" },
  },
  {
    prompt: "Download resume",
    answer:
      "The resume PDF is available as a static file at /soumya-ganguly-resume.pdf and is linked from the navbar, hero, resume page, and contact page.",
    action: { label: "Download resume", href: "/soumya-ganguly-resume.pdf" },
  },
  {
    prompt: "Private projects",
    answer:
      "The private featured projects are GMap Lead Engine and LinkVault. They are shown as private repos with problem, architecture, and proof points, without pretending the code is publicly readable.",
    action: { label: "Filter projects", href: "/projects" },
  },
  {
    prompt: "Contact Soumya",
    answer:
      "Use gangulysoumya01@gmail.com for portfolio, AI automation, full-stack product, or freelance system work discussions.",
    action: { label: "Open contact", href: "/contact" },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
