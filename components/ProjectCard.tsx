"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.28) }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-cyan-300/30 via-violet-400/20 to-emerald-300/20 opacity-35 blur-sm transition-opacity group-hover:opacity-80" />
      <div className="relative flex h-full flex-col rounded-lg border border-white/10 bg-[#070b13]/85 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-100">
            {project.icon}
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${
              project.visibility === "Private repo"
                ? "border-amber-300/35 bg-amber-300/10 text-amber-100"
                : "border-emerald-300/35 bg-emerald-300/10 text-emerald-100"
            }`}
          >
            {project.visibility}
          </span>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase text-cyan-200/70">{project.signal}</p>
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-100">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.category.map((category) => (
            <span key={category} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
              {category}
            </span>
          ))}
        </div>

        <div className="mt-4 grid gap-2">
          {project.proof.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
              className="hover-trigger inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Case study
            <span aria-hidden="true">-&gt;</span>
          </Link>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Source
              <span aria-hidden="true">-&gt;</span>
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100"
            >
              Demo
              <span aria-hidden="true">-&gt;</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
