import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, resumeProfile } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-cyan-200/75">Featured work</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">Project constellation</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Static client pages are intentionally excluded from the featured system set. This view focuses on AI, automation, product, and full-stack proof.
              </p>
            </div>
            <Link href="/projects" className="hover-trigger w-fit rounded-lg border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white">
              View all projects
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.055] p-7">
            <p className="text-sm font-semibold text-cyan-100">AI Lab</p>
            <h2 className="mt-3 text-3xl font-black text-white">Non-API intelligence layer</h2>
            <p className="mt-4 leading-7 text-slate-300">
              The portfolio copilot, recommender, and skill graph are deterministic and grounded in local static data. Fast, private, deploy-safe.
            </p>
            <Link href="/ai-lab" className="hover-trigger mt-6 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50">
              Explore AI Lab
            </Link>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-7">
            <p className="text-sm font-semibold text-emerald-100">Resume and contact</p>
            <h2 className="mt-3 text-3xl font-black text-white">Ready for AI product work</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Download the latest resume or reach Soumya directly at {resumeProfile.email}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={resumeProfile.resumePath} download="Soumya-Ganguly-Resume.pdf" className="hover-trigger rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-50">
                Download resume
              </a>
              <Link href="/contact" className="hover-trigger rounded-lg border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
