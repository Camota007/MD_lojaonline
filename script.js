const heroTitle = document.querySelector('.hero-title');

if (heroTitle) {
  // Make pseudo-elements echo the text (used in CSS ::before/::after)
  heroTitle.setAttribute('data-text', heroTitle.textContent.trim());

  // Rapid subtle opacity variation to create flicker (kept short rhythm)
  setInterval(() => {
    heroTitle.style.opacity = (0.85 + Math.random() * 0.25).toString();
  }, 100);

  // Occasionally add a short 'glitch' class for a shake/skew effect
  setInterval(() => {
    heroTitle.classList.add('glitch');
    setTimeout(() => heroTitle.classList.remove('glitch'), 180);
  }, 3500 + Math.floor(Math.random() * 1600));
}

// --- Cursor sparkle trail ---
(() => {
  // lightweight 'fairy dust' effect settings
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const maxSparkles = isTouch ? 16 : 40;
  let last = 0;

  function makeSparkle(x, y) {
    const count = document.querySelectorAll('.sparkle').length;
    if (count >= maxSparkles) return;

    const el = document.createElement('div');
    el.className = 'sparkle';

    // fairy-dust: small, subtle particles
    const size = 3 + Math.random() * 6; // 3px - 9px
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;

    if (Math.random() > 0.85) el.classList.add('sparkle-long');

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = `translate(-50%, -50%) rotate(${Math.round(Math.random() * 360)}deg)`;

    document.body.appendChild(el);

    // remove after animation completes
    setTimeout(() => el.remove(), 900 + Math.random() * 600);
  }

  // throttle mousemove; reduce activity on touch devices
  const throttleMs = isTouch ? 120 : 40;
  window.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - last < throttleMs) return;
    last = now;
    makeSparkle(e.clientX, e.clientY);
  });
})();