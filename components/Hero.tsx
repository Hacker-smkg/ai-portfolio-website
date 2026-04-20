'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// Glitch Text Component
const GlitchText = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="absolute top-0 left-0 -ml-1 text-cyan-400 opacity-70 mix-blend-screen"
        variants={{
          initial: { clipPath: 'inset(0 0 0 0)', x: 0 },
          hover: {
            clipPath: ['inset(20% 0 80% 0)', 'inset(80% 0 10% 0)', 'inset(10% 0 60% 0)', 'inset(40% 0 20% 0)', 'inset(0% 0 0% 0)'],
            x: [-2, 2, -3, 3, 0],
            transition: { duration: 0.4, repeat: Infinity, repeatType: 'mirror' }
          }
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 ml-1 text-purple-500 opacity-70 mix-blend-screen"
        variants={{
          initial: { clipPath: 'inset(0 0 0 0)', x: 0 },
          hover: {
            clipPath: ['inset(80% 0 20% 0)', 'inset(10% 0 80% 0)', 'inset(60% 0 10% 0)', 'inset(20% 0 40% 0)', 'inset(0% 0 0% 0)'],
            x: [2, -2, 3, -3, 0],
            transition: { duration: 0.4, repeat: Infinity, repeatType: 'mirror' }
          }
        }}
      >
        {text}
      </motion.span>
      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
        {text}
      </span>
    </motion.div>
  );
};

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'AI Engineer & Full Stack Developer';
  const [index, setIndex] = useState(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 70); // Slightly faster typing
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 neural-bg overflow-hidden">
      
      {/* Decorative Floating Elements (Parallax) */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10" />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center flex flex-col items-center">
          
          {/* Animated AI Brain Icon */}
          <motion.div
            initial={{ scale: 0, rotateX: 90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
            className="mb-8 relative hover-trigger"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-32 h-32 mx-auto bg-gradient-ai-2 rounded-full blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.svg
                className="w-32 h-32 mx-auto relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotateZ: 180, scale: 1.1 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                {/* Advanced Brain Vector representation */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: 'easeInOut' }}
                  d="M12 2C8.13401 2 5 5.13401 5 9C5 11.206 6.03606 13.1672 7.64096 14.414C7.86877 14.5909 8 14.8628 8 15.1505V18C8 19.1046 8.89543 20 10 20H14C15.1046 20 16 19.1046 16 18V15.1505C16 14.8628 16.1312 14.5909 16.359 14.414C17.9639 13.1672 19 11.206 19 9C19 5.13401 15.866 2 12 2Z"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                  d="M10 22C10 22.5523 10.4477 23 11 23H13C13.5523 23 14 22.5523 14 22"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                 <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                  d="M9 16H15"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </motion.div>

          {/* Name with Glitch Hover */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Hi, I&apos;m <br className="md:hidden" />
            <GlitchText text="Soumya Ganguly" />
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-gray-300 font-mono mb-8 h-12 flex items-center justify-center gap-1"
          >
            <span className="text-cyan-500">&gt;</span> {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-3 h-8 bg-cyan-400"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            I architect intelligent microservices and deploy generative AI pipelines. Turning complex neural networks into seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="hover-trigger px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold tracking-wide shadow-lg border border-cyan-400/50 transition-all uppercase text-sm"
            >
              Explore Node Network
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="hover-trigger px-8 py-4 glass rounded-full text-white font-bold tracking-wide uppercase text-sm border border-purple-500/30 transition-all"
            >
              Establish Uplink
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

       {/* Scroll Indicator */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
