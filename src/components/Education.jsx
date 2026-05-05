import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const items = [
  {
    year: '2023 - Sekarang 🌸',
    title: 'Universitas Pahlawan',
    desc: 'Sedang menempuh pendidikan S1. Aktif dalam kegiatan kampus dan organisasi. Fokus pada pengembangan kemampuan bahasa Inggris dan soft skills.',
  },
  {
    year: '2020 - 2023 📚',
    title: 'SMA',
    desc: 'Lulus dengan nilai yang membanggakan. Aktif dalam kegiatan ekstrakurikuler English Club dan organisasi sekolah.',
  },
  {
    year: 'Sertifikasi 🏆',
    title: 'English Proficiency',
    desc: 'Memiliki sertifikasi kemampuan bahasa Inggris yang diakui dan terus mengembangkan kompetensi linguistik.',
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
        <span className="section-emoji">🎓</span>
        <h2>Pendidikan</h2>
        <p>Perjalanan akademik saya~</p>
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
            />
            <motion.div
              className="timeline-card"
              whileHover={{ x: 10, scale: 1.02 }}
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
