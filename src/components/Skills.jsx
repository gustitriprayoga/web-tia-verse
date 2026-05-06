import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { icon: '🇬🇧', title: 'English Speaking', desc: 'Fluent in spoken English with high confidence and natural delivery', pct: 95 },
  { icon: '🎤', title: 'Public Speaking', desc: 'Confidently presenting ideas and engaging audiences on stage', pct: 90 },
  { icon: '🤝', title: 'Team Work', desc: 'Effective team collaboration with strong communication skills', pct: 92 },
  { icon: '💡', title: 'Creative Thinking', desc: 'Innovative problem-solving with out-of-the-box ideas', pct: 88 },
  { icon: '👧', title: 'Teaching English for Kids', desc: 'Making English fun and engaging for young learners', pct: 93 },
];

// Confetti burst effect
function ConfettiBurst({ active }) {
  if (!active) return null;
  const confetti = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    emoji: ['🎉', '⭐', '💫', '🌟', '✨', '🎊'][i % 6],
    angle: (i * 30) * (Math.PI / 180),
  }));

  return confetti.map((c) => (
    <motion.span
      key={c.id}
      style={{
        position: 'absolute',
        fontSize: '14px',
        pointerEvents: 'none',
        zIndex: 10,
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(c.angle) * 80,
        y: Math.sin(c.angle) * 80,
        opacity: 0,
        scale: 0.3,
      }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {c.emoji}
    </motion.span>
  ));
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [confettiCard, setConfettiCard] = useState(null);

  const handleCardClick = (i) => {
    setConfettiCard(i);
    setTimeout(() => setConfettiCard(null), 900);
  };

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="section-emoji"
          animate={inView ? { scale: [1, 1.5, 1], rotate: [0, 360] } : {}}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        >
          🌟
        </motion.span>
        <h2>My Skills</h2>
        <p>Tap a skill card for a surprise! 🎉</p>
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
            onClick={() => handleCardClick(i)}
            style={{ cursor: 'pointer', position: 'relative', overflow: 'visible' }}
          >
            <motion.div
              className="skill-icon-wrap"
              whileHover={{ rotate: [0, -15, 15, -10, 10, 0], transition: { duration: 0.5 } }}
            >
              {skill.icon}
            </motion.div>
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
            <motion.span
              className="skill-pct"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 + i * 0.1 }}
            >
              {skill.pct}%
            </motion.span>
            <ConfettiBurst active={confettiCard === i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
