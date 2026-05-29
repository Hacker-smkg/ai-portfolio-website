import ProjectFilters from "@/components/ProjectFilters";
import { projects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects | Soumya Ganguly",
  description: "AI, automation, full-stack, product, private, and data projects by Soumya Ganguly.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold text-cyan-200/75">Projects</p>
          <h1 className="mt-2 text-4xl font-black text-white md:text-6xl">Systems worth opening</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Filter the portfolio by AI, automation, full-stack work, private tools, product systems, or data pipelines. Static clinic and gym pages are kept out of this featured set for now.
          </p>
        </div>
        <ProjectFilters projects={projects} />
      </div>
    </main>
  );
}
