import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { icon: '🇬🇧', title: 'English Speaking', desc: 'Fasih berbicara bahasa Inggris dengan kepercayaan diri tinggi', pct: 95 },
  { icon: '✍️', title: 'English Writing', desc: 'Menulis essay, artikel, dan konten dalam bahasa Inggris', pct: 90 },
  { icon: '🎤', title: 'Public Speaking', desc: 'Presentasi dan berbicara di depan umum dengan percaya diri', pct: 88 },
  { icon: '📝', title: 'Academic Writing', desc: 'Penulisan karya ilmiah dan tugas akademik berkualitas', pct: 85 },
  { icon: '🤝', title: 'Teamwork', desc: 'Kolaborasi tim yang efektif dan komunikatif', pct: 92 },
  { icon: '💡', title: 'Creative Thinking', desc: 'Berpikir kreatif untuk solusi inovatif', pct: 87 },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-emoji">🌟</span>
        <h2>Keahlian Saya</h2>
        <p>Kemampuan yang terus saya kembangkan~</p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
            whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
          >
            <div className="skill-icon-wrap">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.pct}%` } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
