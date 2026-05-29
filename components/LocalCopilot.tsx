"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { copilotKnowledge, projects, resumeProfile } from "@/lib/portfolio-data";

type Message = {
  role: "assistant" | "user";
  text: string;
  action?: {
    label: string;
    href: string;
  };
};

function findAnswer(input: string) {
  const normalized = input.toLowerCase();

  const exact = copilotKnowledge.find((item) => item.prompt.toLowerCase() === normalized);
  if (exact) return exact;

  if (normalized.includes("ai") || normalized.includes("project")) return copilotKnowledge[0];
  if (normalized.includes("hire") || normalized.includes("why")) return copilotKnowledge[1];
  if (normalized.includes("fitlife") || normalized.includes("fitness")) return copilotKnowledge[2];
  if (normalized.includes("resume") || normalized.includes("cv")) return copilotKnowledge[3];
  if (normalized.includes("private") || normalized.includes("linkvault") || normalized.includes("gmap")) return copilotKnowledge[4];
  if (normalized.includes("contact") || normalized.includes("email") || normalized.includes("mail")) return copilotKnowledge[5];

  return {
    prompt: "Local portfolio answer",
    answer:
      "I am a local static copilot, so I do not call a live AI API. I can answer from Soumya's bundled portfolio data about projects, skills, resume, private repos, Fitlife, and contact details.",
    action: { label: "Explore projects", href: "/projects" },
  };
}

export default function LocalCopilot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi, I am Soumya's local portfolio copilot. I answer only from static portfolio data: ${projects.length} projects, resume highlights, and case studies.`,
    },
  ]);

  const suggestedPrompts = useMemo(() => copilotKnowledge.slice(0, 4), []);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    const answer = findAnswer(trimmed);
    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer.answer, action: answer.action },
    ]);
    setInput("");
    setOpen(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="mb-4 w-[min(calc(100vw-2.5rem),390px)] overflow-hidden rounded-lg border border-cyan-300/20 bg-[#06101d]/95 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-sm font-bold text-white">Local Copilot</p>
                <p className="text-xs text-slate-400">Static data only, no live API</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="hover-trigger rounded-md border border-white/10 px-2 py-1 text-sm text-slate-300 hover:bg-white/[0.06]"
                aria-label="Close local copilot"
              >
                X
              </button>
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-lg px-3 py-2 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "border border-cyan-300/15 bg-cyan-300/[0.055] text-cyan-50"
                      : "ml-auto max-w-[86%] border border-white/10 bg-white/[0.075] text-white"
                  }`}
                >
                  <p>{message.text}</p>
                  {message.action ? (
                    <Link href={message.action.href} className="mt-2 inline-flex text-xs font-semibold text-cyan-200 hover:text-cyan-100">
                      {message.action.label} -&gt;
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-4 py-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestedPrompts.map((item) => (
                  <button
                    key={item.prompt}
                    type="button"
                    onClick={() => ask(item.prompt)}
                    className="hover-trigger rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200 hover:border-cyan-300/30"
                  >
                    {item.prompt}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  ask(input);
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={`Ask about ${resumeProfile.name}`}
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300/45"
                />
                <button
                  type="submit"
                  className="hover-trigger rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
                >
                  Ask
                </button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="hover-trigger rounded-lg border border-cyan-300/35 bg-[#07111c]/95 px-4 py-3 text-sm font-bold text-cyan-50 shadow-[0_0_36px_rgba(34,211,238,0.22)] backdrop-blur transition hover:bg-cyan-300/15"
        aria-expanded={open}
        aria-label="Open local portfolio copilot"
      >
        Local Copilot
      </button>
    </div>
  );
}
