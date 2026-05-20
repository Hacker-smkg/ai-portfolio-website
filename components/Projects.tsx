'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
  visibility?: 'Private repo';
};

const projects: Project[] = [
  {
    title: 'MediShop AI Medicine Store',
    description: 'A modern medicine e-commerce platform with JWT auth, product catalogue, cart and order flows, plus MediBot for symptom-based health assistance through a FastAPI AI service.',
    tags: ['React', 'Node.js', 'MongoDB', 'FastAPI', 'Groq'],
    link: 'https://github.com/Hacker-smkg/Gen-AI-Medicine-shop',
    icon: '💊',
  },
  {
    title: 'Fitlife AI Coach',
    description: 'An AI-native fitness platform with deep onboarding, adaptive workout plans, FitBot guidance, admin workout management, subscriptions, and a deployed React/Node/Mongo production split.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI Plans', 'Render'],
    link: 'https://github.com/Hacker-smkg/Fitlife',
    icon: '🏋️',
  },
  {
    title: 'GMap Lead Engine',
    description: 'A private lead-generation engine for medical, fitness, and business niches with Google Places geo-search, rating and website filters, CSV export, analytics, status tracking, and AI outreach.',
    tags: ['React', 'Vite', 'FastAPI', 'Google Places', 'Claude'],
    link: 'https://github.com/Hacker-smkg/gmap-lead-engine',
    icon: '📍',
    visibility: 'Private repo',
  },
  {
    title: 'LinkVault',
    description: 'A private web-first and mobile-first resource organizer for saving links with categories, descriptions, tags, favorites, search, local-first IndexedDB persistence, and shared monorepo packages.',
    tags: ['Next.js', 'Expo', 'TypeScript', 'IndexedDB', 'Monorepo'],
    link: 'https://github.com/Hacker-smkg/linkvault',
    icon: '🔗',
    visibility: 'Private repo',
  },
  {
    title: 'E-commerce AI Agents',
    description: 'A multi-agent AI system for scaling e-commerce operations through n8n workflows and FastAPI agents for analytics, operations, marketing, and strategy recommendations.',
    tags: ['Python', 'FastAPI', 'n8n', 'LLMs', 'Automation'],
    link: 'https://github.com/Hacker-smkg/ecommerce-ai-agents',
    icon: '🤖',
  },
  {
    title: 'Next-Gen AI Portfolio',
    description: 'A highly interactive, physics-driven Next.js portfolio featuring Framer Motion 3D physics, glassmorphism, and responsive custom cursor integration.',
    tags: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/Hacker-smkg/ai-portfolio-website',
    icon: '✨',
  },
  {
    title: 'SentiOCR',
    description: 'A full-stack AI platform that extracts text from handwritten images with OpenCV-preprocessed OCR, then classifies emotional tone using weighted fuzzy sentiment scoring.',
    tags: ['Python', 'FastAPI', 'OCR', 'OpenCV', 'React'],
    link: 'https://github.com/Hacker-smkg/SentiOCR',
    icon: '🧠',
  },
];

// Interactive 3D Tilt Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Limits the tilt
    setRotateX(yPct * -15);
    setRotateY(xPct * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full w-full transform-style-3d hover-trigger"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow backdrop */}
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-lg transition duration-500 group-hover:opacity-75" />
        
        {/* Card Content */}
        <div className="glass relative flex h-full flex-col rounded-lg border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
          <div className="mb-4 text-5xl" style={{ transform: 'translateZ(30px)' }}>
            {project.icon}
          </div>
          <div
            className="mb-3 flex flex-wrap items-center gap-2"
            style={{ transform: 'translateZ(20px)' }}
          >
            <h3 className="text-2xl font-bold transition-all group-hover:text-cyan-400">
              {project.title}
            </h3>
            {project.visibility && (
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
                {project.visibility}
              </span>
            )}
          </div>
          <p 
            className="mb-6 text-gray-400 leading-relaxed"
            style={{ transform: 'translateZ(10px)' }}
          >
            {project.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2" style={{ transform: 'translateZ(15px)' }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto" style={{ transform: 'translateZ(25px)' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
            >
              <span>View Source</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className="py-20 neural-bg overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-ai-2"></div>
          <p className="mx-auto max-w-2xl text-gray-400">
            A selection of my best architectural work, integrating Generative AI, microservices, and modern frontend tools.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
