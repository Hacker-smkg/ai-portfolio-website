'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'AI Sentiment Analyzer',
      description: 'Advanced NLP model for analyzing sentiment in social media posts and reviews with 95% accuracy.',
      tags: ['Python', 'TensorFlow', 'NLP', 'BERT'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🧠',
    },
    {
      title: 'Computer Vision Platform',
      description: 'Real-time object detection and classification system for autonomous vehicles.',
      tags: ['PyTorch', 'OpenCV', 'YOLO', 'React'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '👁️',
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent conversational AI powered by GPT-4 for customer support automation.',
      tags: ['Node.js', 'OpenAI', 'LangChain', 'TypeScript'],
      gradient: 'from-green-500 to-teal-500',
      icon: '💬',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'ML-powered analytics platform for forecasting business metrics and trends.',
      tags: ['Python', 'Scikit-learn', 'Next.js', 'D3.js'],
      gradient: 'from-orange-500 to-red-500',
      icon: '📊',
    },
    {
      title: 'Neural Art Generator',
      description: 'AI-powered tool that transforms photos into artistic masterpieces using style transfer.',
      tags: ['TensorFlow', 'GAN', 'React', 'FastAPI'],
      gradient: 'from-purple-500 to-blue-500',
      icon: '🎨',
    },
    {
      title: 'Voice Recognition System',
      description: 'Speech-to-text and command recognition system with multi-language support.',
      tags: ['Python', 'Whisper', 'PyTorch', 'Docker'],
      gradient: 'from-pink-500 to-rose-500',
      icon: '🎤',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 neural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-ai-2 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest AI and machine learning projects that showcase innovation and technical excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur group-hover:opacity-100 transition duration-300 rounded-lg"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              ></div>
              <div className="relative glass p-6 rounded-lg h-full">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
