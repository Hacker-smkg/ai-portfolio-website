'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Real Data
const projects = [
  {
    title: 'Medicine_shop (GenAI Pharmacy)',
    description: 'A full-stack MERN & FastAPI microservice application featuring a LangChain + GPT-3.5 symptom-checking chatbot, Docker orchestration, and CI/CD pipelines.',
    tags: ['React', 'Node.js', 'FastAPI', 'OpenAI', 'Docker'],
    link: 'https://github.com/Hacker-smkg/Medicine_shop',
    icon: '💊',
  },
  {
    title: 'AI Multi-Agent Swarm E-Commerce',
    description: 'A scalable automation pipeline deploying autonomous agents for marketing, inventory, and strategy analysis using n8n and Python.',
    tags: ['Python', 'n8n', 'LLMs', 'Agentic Workflow'],
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
    title: 'Sentiment Analyzer NLP',
    description: 'A machine learning repository focused on testing and benchmarking NLP models for sentiment analysis on real-world text data.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Data Science'],
    link: 'https://github.com/Hacker-smkg/Test-Ai-repo',
    icon: '🧠',
  },
  {
    title: 'Dr. H Ganguly Digital Platform',
    description: 'A bespoke platform developed for a medical professional, focusing on smooth UX and fast client load times.',
    tags: ['Web Development', 'UI/UX', 'Frontend'],
    link: 'https://github.com/Hacker-smkg/Dr.-H-Ganguly',
    icon: '🩺',
  },
];

// Interactive 3D Tilt Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
          <h3 
            className="mb-3 text-2xl font-bold transition-all group-hover:text-cyan-400"
            style={{ transform: 'translateZ(20px)' }}
          >
            {project.title}
          </h3>
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
