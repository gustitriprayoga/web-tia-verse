import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About', icon: '💝' },
  { href: '#skills', label: 'Skills', icon: '🌟' },
  { href: '#education', label: 'Education', icon: '🎓' },
  { href: '#portfolio', label: 'Portfolio', icon: '🎨' },
  { href: '#contact', label: 'Contact', icon: '💌' },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <motion.a
        href="#"
        className="nav-logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ✨ Mutiara
      </motion.a>

      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        {links.map((link, i) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              {link.icon} {link.label}
            </motion.a>
          </li>
        ))}
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}
