import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { icon: '🎓', num: 'S1', label: 'Education Level' },
  { icon: '🇬🇧', num: 'A+', label: 'English Proficiency' },
  { icon: '📚', num: '10+', label: 'Projects Done' },
  { icon: '💖', num: '100%', label: 'Passion!' },
];

const funFacts = [
  { emoji: '🧸', fact: "I love teaching kids!" },
  { emoji: '🎶', fact: "I think in English!" },
  { emoji: '🌈', fact: "Believer in positivity!" },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeFact, setActiveFact] = useState(null);

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="section-emoji"
          animate={inView ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          💝
        </motion.span>
        <h2>About Me</h2>
        <p>Get to know who I really am~</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="glass-card about-card"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3>🌸 Who Am I?</h3>
          <p>
            Hi there! I'm <strong>Mutiara Sophia Ningsih</strong>, an undergraduate student at{' '}
            <strong>Universitas Pahlawan</strong>, majoring in English Education. I have a deep passion for
            the English language and I always strive to grow and develop every single day! 🌈
          </p>
          <p>
            Besides studying, I love exploring creative ideas and collaborating with amazing people.
            My motto: <em>"Be the best version of yourself"</em> ✨
          </p>

          {/* Fun Facts */}
          <div className="fun-facts">
            <h4>🎪 Fun Facts — Click Me!</h4>
            <div className="fun-facts-row">
              {funFacts.map((f, i) => (
                <motion.button
                  key={i}
                  className={`fun-fact-btn ${activeFact === i ? 'active' : ''}`}
                  onClick={() => setActiveFact(activeFact === i ? null : i)}
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, type: 'spring', stiffness: 300 }}
                >
                  {f.emoji}
                </motion.button>
              ))}
            </div>
            {activeFact !== null && (
              <motion.div
                className="fun-fact-reveal"
                initial={{ opacity: 0, y: -10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={activeFact}
              >
                {funFacts[activeFact].emoji} {funFacts[activeFact].fact}
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -6, scale: 1.08, rotate: [0, -3, 3, 0] }}
            >
              <motion.span
                className="stat-icon"
                animate={inView ? { scale: [1, 1.3, 1] } : {}}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
              >
                {stat.icon}
              </motion.span>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
