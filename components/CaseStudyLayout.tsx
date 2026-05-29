"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import type { CaseStudy, Project } from "@/lib/portfolio-data";

export default function CaseStudyLayout({ project, caseStudy }: { project: Project; caseStudy: CaseStudy }) {
  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/projects" className="hover-trigger text-sm font-semibold text-cyan-200 hover:text-cyan-100">
          &lt;- Back to projects
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-cyan-200/75">
              {project.signal}
            </p>
            <h1 className="text-4xl font-black text-white md:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-mono font-bold text-cyan-100">
                {project.icon}
              </div>
              <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold uppercase text-slate-200">
                {project.visibility}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">Technical proof</h2>
            <div className="mt-4 grid gap-3">
              {caseStudy.proofPoints.map((point) => (
                <div key={point} className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.055] px-4 py-3 text-sm text-cyan-50">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-trigger rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                >
                  Open source
                </a>
              ) : null}
              <Link href="/contact" className="hover-trigger rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white">
                Discuss this style
              </Link>
            </div>
          </div>
        </motion.section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-[#070b13]/80 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase text-amber-200/75">Problem</p>
            <p className="mt-3 leading-7 text-slate-300">{caseStudy.problem}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#070b13]/80 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase text-emerald-200/75">Solution</p>
            <p className="mt-3 leading-7 text-slate-300">{caseStudy.solution}</p>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase text-cyan-200/75">Architecture</p>
              <h2 className="mt-2 text-3xl font-bold text-white">System flow</h2>
            </div>
          </div>
          <ArchitectureFlow steps={caseStudy.architecture} />
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          <InfoPanel title="Stack" items={caseStudy.stack} accent="cyan" />
          <InfoPanel title="Highlights" items={caseStudy.highlights} accent="violet" />
          <InfoPanel title="Lessons" items={caseStudy.lessons} accent="emerald" />
        </section>
      </div>
    </main>
  );
}

function InfoPanel({ title, items, accent }: { title: string; items: string[]; accent: "cyan" | "violet" | "emerald" }) {
  const accentClass =
    accent === "cyan" ? "text-cyan-200" : accent === "violet" ? "text-violet-200" : "text-emerald-200";

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
      <h2 className={`text-xl font-bold ${accentClass}`}>{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-80" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
