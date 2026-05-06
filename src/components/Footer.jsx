import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const hearts = ['💖', '🌸', '✨', '🌸', '💖'];
  return (
    <footer>
      <motion.div className="footer-decor" animate={{ scale: [1, 1.15, 1], y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        {hearts.map((h, i) => (
          <motion.span key={i} style={{ display: 'inline-block', margin: '0 4px' }} animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>{h}</motion.span>
        ))}
      </motion.div>
      <p>© 2026 Mutiara Sophia Ningsih — Made with 💕</p>
    </footer>
  );
}
