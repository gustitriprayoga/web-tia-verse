import React, { useEffect, useRef } from 'react';

const emojis = ['✨', '💖', '⭐', '🌸', '💫', '🦋', '💕', '🌟'];

export default function CursorSparkle() {
  const lastTime = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      if (Date.now() - lastTime.current < 100) return;
      lastTime.current = Date.now();

      const sparkle = document.createElement('span');
      sparkle.className = 'sparkle';
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 700);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}
