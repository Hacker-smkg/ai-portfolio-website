"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { resumeProfile } from "@/lib/portfolio-data";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "AI Lab", href: "/ai-lab" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed left-0 right-0 top-0 z-40 transition ${
        scrolled ? "border-b border-white/10 bg-[#05070d]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="hover-trigger flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 font-mono text-xs font-bold text-cyan-100">
              SG
            </span>
            <span className="hidden text-sm font-bold text-white sm:inline">Soumya Ganguly</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover-trigger rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    active ? "bg-cyan-300/10 text-cyan-100" : "text-slate-300 hover:bg-white/[0.055] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={resumeProfile.resumePath}
              download="Soumya-Ganguly-Resume.pdf"
              className="hover-trigger rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-50"
            >
              Download CV
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="hover-trigger rounded-lg border border-white/10 bg-white/[0.05] p-2 text-slate-200 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#05070d]/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]">
                {item.name}
              </Link>
            ))}
            <a
              href={resumeProfile.resumePath}
              download="Soumya-Ganguly-Resume.pdf"
              className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-3 text-sm font-bold text-cyan-50"
            >
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
}
