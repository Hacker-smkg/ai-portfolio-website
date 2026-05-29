"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PortraitHologram from "@/components/PortraitHologram";
import { featuredProjects, resumeProfile } from "@/lib/portfolio-data";

const stackLabels = ["Next.js", "FastAPI", "AI Agents", "MongoDB", "Automation", "Framer Motion"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="mb-4 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
            AI-native full-stack engineer
          </p>
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-7xl">
            Soumya Ganguly builds AI-native product systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Full-stack engineering, automation, agent workflows, and deployable product thinking in one portfolio system.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="hover-trigger rounded-lg border border-cyan-300/35 bg-cyan-300/15 px-5 py-3 text-sm font-bold text-cyan-50 shadow-[0_0_34px_rgba(34,211,238,0.2)]"
            >
              Explore projects
            </Link>
            <Link href="/ai-lab" className="hover-trigger rounded-lg border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white">
              Open AI Lab
            </Link>
            <a
              href={resumeProfile.resumePath}
              download="Soumya-Ganguly-Resume.pdf"
              className="hover-trigger rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-50"
            >
              Download resume
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["09", "featured systems"],
              ["02", "private product tools"],
              ["00", "API keys required"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="order-1 grid gap-8 lg:order-2 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PortraitHologram />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative rounded-lg border border-white/10 bg-[#070b13]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">AI systems dashboard</p>
                <p className="text-xs text-slate-400">Local static telemetry</p>
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                Deploy-safe
              </span>
            </div>

            <div className="grid gap-3">
              {featuredProjects.slice(0, 5).map((project, index) => (
                <motion.div
                  key={project.slug}
                  animate={{ opacity: [0.72, 1, 0.72] }}
                  transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.3 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-3"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-mono text-xs font-bold text-cyan-100">
                    {project.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{project.title}</p>
                    <p className="truncate text-xs text-slate-400">{project.signal}</p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.78)]" />
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {stackLabels.map((label, index) => (
                <motion.span
                  key={label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.12 }}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs text-slate-200"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
