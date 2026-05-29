"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { resumeProfile } from "@/lib/portfolio-data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.location.href = `mailto:${resumeProfile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold text-cyan-200/75">Contact</p>
        <h1 className="mt-2 text-4xl font-black text-white md:text-6xl">Build something serious with Soumya</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Reach out for AI automation, full-stack product builds, portfolio-grade systems, or freelance technical work.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4"
        >
          <a
            href={`mailto:${resumeProfile.email}`}
            className="hover-trigger rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] p-5 transition hover:bg-cyan-300/[0.1]"
          >
            <p className="text-sm font-semibold text-slate-400">Email</p>
            <p className="mt-1 text-lg font-bold text-white">{resumeProfile.email}</p>
          </a>

          <a
            href={resumeProfile.resumePath}
            download="Soumya-Ganguly-Resume.pdf"
            className="hover-trigger rounded-lg border border-emerald-300/20 bg-emerald-300/[0.07] p-5 transition hover:bg-emerald-300/[0.1]"
          >
            <p className="text-sm font-semibold text-slate-400">Resume</p>
            <p className="mt-1 text-lg font-bold text-white">Download PDF with AI and full-stack details</p>
          </a>

          <a
            href="https://github.com/Hacker-smkg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-trigger rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.07]"
          >
            <p className="text-sm font-semibold text-slate-400">GitHub</p>
            <p className="mt-1 text-lg font-bold text-white">@Hacker-smkg</p>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-lg border border-white/10 bg-[#070b13]/80 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-300">
              Name
              <input
                type="text"
                value={formState.name}
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/45"
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-300">
              Email
              <input
                type="email"
                value={formState.email}
                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/45"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-300">
              Message
              <textarea
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                className="min-h-36 resize-y rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/45"
                placeholder="Tell me about your project..."
                required
              />
            </label>

            <button
              type="submit"
              className="hover-trigger rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50"
            >
              Send message
            </button>
          </div>
        </motion.form>
      </div>

      <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-slate-500">
        &copy; 2026 Soumya Ganguly. Built with Next.js, TypeScript, Framer Motion, and local static data.
      </footer>
    </section>
  );
}
