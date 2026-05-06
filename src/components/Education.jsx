import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const items = [
  {
    year: '2023 - Present 🌸',
    title: 'Universitas Pahlawan',
    desc: 'Currently pursuing a Bachelor\'s degree in English Education. Actively involved in campus activities and student organizations. Focused on developing English language skills and soft skills.',
    emoji: '🏫',
  },
  {
    year: '2020 - 2023 📚',
    title: 'Senior High School',
    desc: 'Graduated with outstanding grades. Active in the English Club extracurricular activities and student government.',
    emoji: '📖',
  },
  {
    year: 'Certification 🏆',
    title: 'English Proficiency',
    desc: 'Holds a recognized English proficiency certification and continuously developing linguistic competence.',
    emoji: '🏅',
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="education" id="education" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="section-emoji"
          animate={inView ? { y: [0, -15, 0], rotate: [0, 10, -10, 0] } : {}}
          transition={{ delay: 0.3, duration: 1, type: 'spring' }}
        >
          🎓
        </motion.span>
        <h2>Education</h2>
        <p>My academic journey so far~</p>
      </motion.div>

      <div className="timeline">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="timeline-item"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 300 }}
            >
              <motion.span
                style={{ position: 'absolute', fontSize: '12px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {item.emoji}
              </motion.span>
            </motion.div>
            <motion.div
              className="timeline-card"
              whileHover={{ x: 10, scale: 1.02, boxShadow: '0 12px 40px rgba(255,107,157,0.25)' }}
            >
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
