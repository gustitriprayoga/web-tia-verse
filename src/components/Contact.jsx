import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contacts = [
  { icon: '📱', title: 'WhatsApp', value: '+62 822-1588-5362', href: 'https://wa.me/6282215885362' },
  { icon: '📧', title: 'Business Email', value: 'mutiarasophianingsih@tiaverse.my.id', href: 'mailto:mutiarasophianingsih@tiaverse.my.id' },
  { icon: '📸', title: 'Instagram', value: '@mutiasfhh', href: 'https://instagram.com/mutiasfhh' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div className="section-header" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <motion.span className="section-emoji" animate={inView ? { y: [0, -10, 0], rotate: [0, 15, -15, 0] } : {}} transition={{ delay: 0.3, duration: 1 }}>💌</motion.span>
        <h2>Get In Touch</h2>
        <p>Let's connect and collaborate!</p>
      </motion.div>

      <div className="contact-grid">
        {contacts.map((c, i) => (
          <motion.a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card" initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }} whileHover={{ y: -10, scale: 1.08, rotate: [0, -2, 2, 0] }} whileTap={{ scale: 0.95 }}>
            <motion.span className="contact-icon" animate={{ rotate: [0, 15, -15, 10, -10, 0], y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>{c.icon}</motion.span>
            <h4>{c.title}</h4>
            <p>{c.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
