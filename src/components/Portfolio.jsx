import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    emoji: '📖',
    bg: 'linear-gradient(135deg, #ffd1e8, #f8b4d0)',
    title: 'English Essay Competition',
    desc: 'Menulis essay bahasa Inggris tentang topik pendidikan dan budaya untuk kompetisi tingkat universitas.',
    tags: ['English', 'Writing', 'Competition'],
  },
  {
    emoji: '🎭',
    bg: 'linear-gradient(135deg, #d1c4f9, #b8a8e8)',
    title: 'Presentasi Akademik',
    desc: 'Mempresentasikan makalah penelitian dalam bahasa Inggris di seminar kampus.',
    tags: ['Presentation', 'Research', 'Academic'],
  },
  {
    emoji: '🌍',
    bg: 'linear-gradient(135deg, #a8e6cf, #88d4ab)',
    title: 'Translation Project',
    desc: 'Proyek penerjemahan dokumen akademik dari bahasa Indonesia ke bahasa Inggris.',
    tags: ['Translation', 'Bilingual', 'Project'],
  },
];

export default function Portfolio() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-emoji">🎨</span>
        <h2>Portfolio</h2>
        <p>Beberapa karya dan pencapaian saya~</p>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="portfolio-card"
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.7, type: 'spring' }}
            whileHover={{ y: -12, scale: 1.03 }}
          >
            <motion.div
              className="portfolio-thumb"
              style={{ background: project.bg }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {project.emoji}
              </motion.span>
            </motion.div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
