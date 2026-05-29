"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { resumeProfile } from "@/lib/portfolio-data";

export default function PortraitHologram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      <div className="absolute -inset-7 rounded-full border border-cyan-300/10 bg-cyan-400/5 blur-3xl" />
      <div className="hologram-ring absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25" />
      <div className="hologram-ring hologram-ring-delay absolute left-1/2 top-1/2 h-[128%] w-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/15" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-3 shadow-[0_0_70px_rgba(34,211,238,0.18)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-slate-900">
          <Image
            src={resumeProfile.portraitPath}
            alt="Portrait of Soumya Ganguly"
            fill
            sizes="(max-width: 768px) 82vw, 420px"
            priority
            className="object-cover object-center saturate-[1.08] contrast-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-cyan-300/10" />
          <div className="absolute inset-0 scanline-overlay opacity-55" />
          <motion.div
            aria-hidden="true"
            animate={{ y: ["-120%", "120%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent"
          />
        </div>
      </div>

      <div className="absolute -bottom-5 left-1/2 w-[82%] -translate-x-1/2 rounded-xl border border-cyan-300/20 bg-[#07111c]/90 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex items-center justify-between gap-3 text-xs uppercase text-cyan-100/80">
          <span>Live build mode</span>
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.85)]" />
        </div>
        <p className="mt-1 text-sm font-semibold text-white">AI systems, automation, full-stack products</p>
      </div>
    </motion.div>
  );
}
