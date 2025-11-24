'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'AI Models Deployed', value: '15+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-ai-2 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-ai-2 rounded-lg opacity-20 blur-2xl"></div>
              <div className="relative glass p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Passionate AI Engineer</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I&apos;m a dedicated AI engineer and full-stack developer with a passion for creating
                  intelligent solutions that make a difference. My journey in technology has been driven
                  by curiosity and a desire to push the boundaries of what&apos;s possible with AI.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Specializing in machine learning, natural language processing, and computer vision,
                  I bring ideas to life through clean code and innovative algorithms. I believe in the
                  power of AI to transform industries and improve lives.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring the latest AI research papers,
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-lg text-center hover-card"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
