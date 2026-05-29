import Link from "next/link";
import { copilotKnowledge, projects } from "@/lib/portfolio-data";

export const metadata = {
  title: "AI Lab | Soumya Ganguly",
  description: "Local AI-native portfolio demos that run without paid API keys.",
};

const demos = [
  {
    title: "Portfolio Copilot",
    detail: "Floating assistant grounded only in local portfolio data. It gives deterministic answers and never calls a live AI API.",
  },
  {
    title: "Project Recommender",
    detail: "Projects are grouped by categories and proof points so visitors can quickly find AI, automation, product, private, and data work.",
  },
  {
    title: "Skill Graph",
    detail: "A compact map of frontend, backend, AI automation, data, and deployment capabilities connected to real projects.",
  },
  {
    title: "Ask About Soumya",
    detail: "Suggested prompts answer hiring, resume, Fitlife architecture, AI project, and private repo questions from static data.",
  },
];

export default function AiLabPage() {
  const aiProjects = projects.filter((project) => project.category.includes("AI"));

  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-cyan-200/75">AI Lab</p>
            <h1 className="mt-2 text-4xl font-black text-white md:text-6xl">AI-native without API fragility</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              V1 keeps the intelligence layer deterministic, local, private, and deploy-safe. The experience feels conversational without requiring paid keys or server secrets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="hover-trigger rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50">
                Browse AI projects
              </Link>
              <Link href="/resume" className="hover-trigger rounded-lg border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white">
                View resume
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white">Suggested prompt bank</h2>
            <div className="mt-5 grid gap-3">
              {copilotKnowledge.map((item) => (
                <div key={item.prompt} className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.055] p-4">
                  <p className="font-semibold text-cyan-50">{item.prompt}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {demos.map((demo) => (
            <div key={demo.title} className="rounded-lg border border-white/10 bg-[#070b13]/80 p-5 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white">{demo.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{demo.detail}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-emerald-200/80">Skill graph</p>
              <h2 className="mt-2 text-3xl font-black text-white">Capabilities connected to shipped work</h2>
            </div>
            <p className="text-sm text-slate-400">{aiProjects.length} AI-tagged systems in the featured dataset</p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {["Frontend", "Backend", "AI Automation", "Data", "Deployment", "Product UX"].map((node) => (
              <div key={node} className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.055] p-4">
                <p className="font-bold text-cyan-50">{node}</p>
                <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
