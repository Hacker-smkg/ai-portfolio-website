"use client";

import { motion } from "framer-motion";

export default function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="relative rounded-lg border border-cyan-300/20 bg-cyan-300/[0.055] p-4"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-semibold uppercase text-cyan-200/75">
              Step {index + 1}
            </span>
            <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
          </div>
          <p className="text-sm font-semibold leading-6 text-white">{step}</p>
          {index < steps.length - 1 ? (
            <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-cyan-300/35 md:block" />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
