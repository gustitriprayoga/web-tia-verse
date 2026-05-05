// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));

// ===== CURSOR SPARKLE =====
const sparkleEmojis = ['✨', '💖', '⭐', '🌸', '💫', '🦋'];
let sparkleTimer = 0;
document.addEventListener('mousemove', (e) => {
  if (Date.now() - sparkleTimer < 120) return;
  sparkleTimer = Date.now();
  const sparkle = document.createElement('span');
  sparkle.className = 'sparkle';
  sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});

// ===== TYPING EFFECT =====
const typingEl = document.querySelector('.typing-text');
if (typingEl) {
  const texts = ['English Speaker 🇬🇧', 'University Student 🎓', 'Creative Thinker 💡', 'Hard Worker 💪'];
  let textIdx = 0, charIdx = 0, isDeleting = false;
  function typeEffect() {
    const current = texts[textIdx];
    typingEl.textContent = current.substring(0, charIdx);
    if (!isDeleting) {
      charIdx++;
      if (charIdx > current.length) { isDeleting = true; setTimeout(typeEffect, 1500); return; }
    } else {
      charIdx--;
      if (charIdx === 0) { isDeleting = false; textIdx = (textIdx + 1) % texts.length; }
    }
    setTimeout(typeEffect, isDeleting ? 40 : 80);
  }
  typeEffect();
}

// ===== PARTICLES =====
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const colors = ['var(--pink-light)', 'var(--lavender)', 'var(--mint)', 'var(--peach)', 'var(--yellow)'];
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 12 + 5;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      left:${Math.random() * 100}%; top:${Math.random() * 100}%;
      animation-delay:${Math.random() * 5}s;
      animation-duration:${6 + Math.random() * 6}s;
    `;
    hero.appendChild(p);
  }
}
createParticles();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
