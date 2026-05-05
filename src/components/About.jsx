import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { icon: '🎓', num: 'S1', label: 'Jenjang Pendidikan' },
  { icon: '🇬🇧', num: 'A+', label: 'English Proficiency' },
  { icon: '📚', num: '10+', label: 'Proyek Selesai' },
  { icon: '💖', num: '100%', label: 'Semangat!' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-emoji">💝</span>
        <h2>Tentang Saya</h2>
        <p>Kenali lebih dekat siapa saya~</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="glass-card about-card"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3>🌸 Siapa Saya?</h3>
          <p>
            Hai! Saya <strong>Mutiara Sophia Ningsih</strong>, seorang mahasiswa S1 di{' '}
            <strong>Universitas Pahlawan</strong>. Saya memiliki passion yang besar dalam
            bahasa Inggris dan selalu berusaha mengembangkan kemampuan diri. Saya percaya
            bahwa setiap hari adalah kesempatan untuk belajar sesuatu yang baru! 🌈
          </p>
          <p>
            Selain belajar, saya juga suka mengeksplorasi hal-hal kreatif dan berkolaborasi
            dengan orang lain. Motto saya: <em>"Be the best version of yourself"</em> ✨
          </p>
        </motion.div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -6, scale: 1.08 }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
