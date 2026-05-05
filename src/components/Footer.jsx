import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <motion.div
        className="footer-decor"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💖 🌸 ✨ 🌸 💖
      </motion.div>
      <p>© 2026 Mutiara Sophia Ningsih — Made with 💕</p>
    </footer>
  );
}
