import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    emoji: '🌐', bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    title: 'E-Module Website', desc: 'Interactive e-module platform for digital learning at e-module.tiaverse.my.id',
    tags: ['Website', 'E-Learning'], link: 'https://e-module.tiaverse.my.id',
  },
  {
    emoji: '👑', bg: 'linear-gradient(135deg, #ffd1e8, #f8b4d0)',
    title: 'Head of Student Association', desc: 'Led the Student Association for the English Education Department.',
    tags: ['Leadership', 'English Education'], link: null,
  },
  {
    emoji: '🎒', bg: 'linear-gradient(135deg, #a8e6cf, #88d4ab)',
    title: 'Student Exchange — Ibnu Khaldun Bogor', desc: 'Participated in a student exchange program, broadening academic horizons.',
    tags: ['Exchange', 'Networking'], link: null,
  },
  {
    emoji: '👩‍🏫', bg: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    title: 'Teaching at Cozy Language Centre', desc: 'Teaching English to students, making language learning fun and effective.',
    tags: ['Teaching', 'English', 'Kids'], link: null,
  },
];

export default function Portfolio() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [hovered, setHovered] = useState(null);

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <motion.div className="section-header" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <motion.span className="section-emoji" animate={inView ? { rotate: [0, 20, -20, 0] } : {}} transition={{ delay: 0.4, duration: 1 }}>🎨</motion.span>
        <h2>Portfolio</h2>
        <p>Some of my works and achievements~</p>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <motion.div key={project.title} className="portfolio-card" initial={{ opacity: 0, y: 60, rotateY: -10 }} animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}} transition={{ delay: i * 0.15, duration: 0.7, type: 'spring' }} whileHover={{ y: -12, scale: 1.03 }} onHoverStart={() => setHovered(i)} onHoverEnd={() => setHovered(null)}>
            <motion.div className="portfolio-thumb" style={{ background: project.bg }} whileHover={{ scale: 1.05 }}>
              <motion.span animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }} style={{ fontSize: '3.5rem', position: 'relative', zIndex: 2 }}>{project.emoji}</motion.span>
              <AnimatePresence>
                {hovered === i && [...Array(5)].map((_, j) => (
                  <motion.span key={j} style={{ position: 'absolute', fontSize: '14px', zIndex: 3 }} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0], x: [(Math.random() - 0.5) * 100], y: [(Math.random() - 0.5) * 60] }} transition={{ duration: 0.6, delay: j * 0.08 }}>✨</motion.span>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag) => (<motion.span key={tag} className="tag" whileHover={{ scale: 1.1, y: -2 }}>{tag}</motion.span>))}
              </div>
              {project.link && (
                <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link" whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>Visit Project →</motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
