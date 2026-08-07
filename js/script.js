// ── LANG ──────────────────────────────────────────────
function setLang(lang) {
  const body = document.getElementById('body-root');
  const html = document.getElementById('html-root');
  body.className = 'lang-' + lang;
  html.setAttribute('lang', lang === 'ar' ? 'ar' : lang === 'en' ? 'en' : 'fr');
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.textContent.includes(lang === 'fr' ? 'FR' : lang === 'en' ? 'EN' : 'عربي')) b.classList.add('active');
  });
  // Fix Tajawal font for Arabic
  if (lang === 'ar') {
    document.body.style.fontFamily = "'Tajawal', sans-serif";
  } else if (lang === 'en') {
    document.body.style.fontFamily = "'DM Sans', sans-serif";
  } else {
    document.body.style.fontFamily = "'DM Sans', sans-serif";
  }
}

// ── NAV SCROLL ────────────────────────────────────────
const nav = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) { nav.classList.add('scrolled'); scrollTopBtn.classList.add('show'); }
  else { nav.classList.remove('scrolled'); scrollTopBtn.classList.remove('show'); }
});

// ── REVEAL ────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── SMOOTH SCROLL ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
