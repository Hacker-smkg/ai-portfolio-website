"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/lib/portfolio-data";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "AI", "Automation", "Full Stack", "Private", "Product", "Data"];

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`hover-trigger rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,0.16)]"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="project-constellation grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.div layout key={project.slug}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
