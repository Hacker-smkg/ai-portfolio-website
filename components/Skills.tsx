'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'AI/ML',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenCV', level: 80 },
      ],
    },
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Go', level: 75 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'FastAPI', level: 85 },
      ],
    },
    {
      category: 'Tools & Cloud',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-ai-2 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills honed through years of experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-ai-2 rounded-full relative"
                      >
                        <motion.div
                          animate={{
                            x: [0, 100, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I <span className="gradient-text">Work With</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '🐍 Python',
              '⚛️ React',
              '🔥 TensorFlow',
              '🎯 PyTorch',
              '🚀 Next.js',
              '📦 Docker',
              '☁️ AWS',
              '🎨 Tailwind',
              '📊 Pandas',
              '🤖 OpenAI',
              '🔷 TypeScript',
              '💾 PostgreSQL',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-500/20 transition-colors cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
