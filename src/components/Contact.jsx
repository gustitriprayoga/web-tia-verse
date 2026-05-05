import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contacts = [
  { icon: '📧', title: 'Email', value: 'mutiara@email.com', href: 'mailto:mutiara@email.com' },
  { icon: '📱', title: 'WhatsApp', value: '+62 xxx-xxxx-xxxx', href: '#' },
  { icon: '📸', title: 'Instagram', value: '@mutiara.sophia', href: '#' },
  { icon: '💼', title: 'LinkedIn', value: 'Mutiara Sophia N.', href: '#' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-emoji">💌</span>
        <h2>Hubungi Saya</h2>
        <p>Yuk terhubung dengan saya~</p>
      </motion.div>

      <div className="contact-grid">
        {contacts.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            className="contact-card"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="contact-icon"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              {c.icon}
            </motion.span>
            <h4>{c.title}</h4>
            <p>{c.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
