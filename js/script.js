// ════════════════════════════════════════════════════════
//  NAVBAR SCROLL
// ════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
});

// ════════════════════════════════════════════════════════
//  MOBILE MENU
// ════════════════════════════════════════════════════════
function openMobileMenu()  { document.getElementById('mobileMenu').classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

// ════════════════════════════════════════════════════════
//  SCROLL REVEAL
// ════════════════════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ════════════════════════════════════════════════════════
//  RDV FORM
// ════════════════════════════════════════════════════════
function handleRDV(btn) {
  btn.textContent = '✓ Demande envoyée !';
  btn.style.background = '#4caf7d';
  setTimeout(() => {
    btn.textContent = 'Envoyer ma demande →';
    btn.style.background = '';
  }, 3000);
}

// ════════════════════════════════════════════════════════
//  DÉMO FILE D'ATTENTE (animation)
// ════════════════════════════════════════════════════════
let pos = 3;
setInterval(() => {
  if (pos > 1) {
    pos--;
    const el = document.getElementById('demoPos');
    if (!el) return;
    el.textContent = pos === 1 ? '🔔 Prochain !' : `⏳ ${pos}ème dans la file`;
    if (pos === 1) {
      el.style.background = '#fef3e2';
      el.style.color = '#d4832a';
    }
  } else {
    pos = 4;
    const el = document.getElementById('demoPos');
    if (!el) return;
    el.style.background = '';
    el.style.color = '';
    el.textContent = `⏳ ${pos}ème dans la file`;
  }
}, 3000);
