import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const floatingIcons = [
  { emoji: '📚', x: '5%', y: '8%', delay: 0 },
  { emoji: '🌟', x: '85%', y: '5%', delay: 0.5 },
  { emoji: '🇬🇧', x: '95%', y: '40%', delay: 1 },
  { emoji: '💖', x: '88%', y: '80%', delay: 1.5 },
  { emoji: '🎓', x: '15%', y: '85%', delay: 2 },
  { emoji: '🦋', x: '-2%', y: '45%', delay: 2.5 },
  { emoji: '✨', x: '30%', y: '2%', delay: 0.8 },
  { emoji: '🌸', x: '70%', y: '90%', delay: 1.8 },
  { emoji: '💡', x: '50%', y: '-2%', delay: 1.2 },
  { emoji: '🎀', x: '-5%', y: '70%', delay: 2.2 },
];

const typingTexts = ['English Speaker 🇬🇧', 'University Student 🎓', 'Creative Thinker 💡', 'Hard Worker 💪', 'Fast Learner 🚀'];

function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1500) {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
        if (charIdx + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplay(current.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setTextIdx((textIdx + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, textIdx, texts, typingSpeed, deletingSpeed, pauseTime]);

  return display;
}

// Background particles
function Particles() {
  const colors = ['#ffa0c4', '#c9a0dc', '#a8e6cf', '#ffd3b6', '#fff1a8', '#a8d8ea'];
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 14 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 4,
  }));

  return particles.map((p) => (
    <motion.div
      key={p.id}
      style={{
        position: 'absolute',
        width: p.size,
        height: p.size,
        borderRadius: '50%',
        background: p.color,
        left: `${p.x}%`,
        top: `${p.y}%`,
        opacity: 0.4,
        zIndex: 0,
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 15, -10, 20, 0],
        scale: [1, 1.3, 0.8, 1.1, 1],
        opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  ));
}

export default function Hero() {
  const typedText = useTypingEffect(typingTexts);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-gradient" />
      <Particles />

      <div className="hero-content">
        {/* Text Side */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            🌸 Halo, Perkenalkan saya
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Mutiara Sophia Ningsih
          </motion.h1>

          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {typedText}
            <span className="cursor" />
          </motion.p>

          <motion.p
            className="desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Mahasiswa S1 Universitas Pahlawan yang passionate dalam bahasa Inggris dan pengembangan diri ✨
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#about"
              className="btn btn-primary"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Kenali Saya 💖
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Hubungi 💌
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <div className="hero-image-ring" />
          <motion.div
            className="hero-image-circle"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={profileImg} alt="Mutiara Sophia Ningsih" />
          </motion.div>

          {/* Floating Icons */}
          {floatingIcons.map((icon, i) => (
            <motion.span
              key={i}
              className="floating-icon"
              style={{ left: icon.x, top: icon.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -14, 4, -10, 0],
                rotate: [0, 8, -5, 6, 0],
              }}
              transition={{
                opacity: { delay: icon.delay + 0.5, duration: 0.4 },
                scale: { delay: icon.delay + 0.5, duration: 0.5, type: 'spring' },
                y: { delay: icon.delay + 1, duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
                rotate: { delay: icon.delay + 1, duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {icon.emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
