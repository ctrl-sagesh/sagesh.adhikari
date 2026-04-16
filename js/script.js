// ── MATRIX RAIN ──────────────────────────────
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
const chars = '01アイウエオカキクケコサシスセソ<>{}[]|/\\#$%&@!?';
const fontSize = 13;
const cols = Math.floor(canvas.width / fontSize);
const drops = Array(cols).fill(1);
function drawMatrix() {
  ctx.fillStyle = 'rgba(10,14,23,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00d4ff';
  ctx.font = fontSize + 'px Fira Code';
  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 45);

// ── NAVBAR SCROLL ────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ── HAMBURGER ────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// ── TYPING EFFECT (HERO CMD) ─────────────────
const cmd = 'whoami';
let ci = 0;
const el = document.getElementById('typed-cmd');
function typeCmd() {
  if (ci < cmd.length) {
    el.textContent += cmd[ci++];
    setTimeout(typeCmd, 120);
  }
}
setTimeout(typeCmd, 600);

// ── ROLE ROTATOR ─────────────────────────────
const roles = [
  'Ethical Hacker',
  'Penetration Tester',
  'Security Researcher',
  'Bug Hunter',
  'CTF Player',
];
let ri = 0, rc = 0, deleting = false;
const roleEl = document.getElementById('role-text');
function typeRole() {
  const current = roles[ri];
  if (!deleting) {
    roleEl.textContent = current.slice(0, ++rc);
    if (rc === current.length) { deleting = true; setTimeout(typeRole, 2000); return; }
  } else {
    roleEl.textContent = current.slice(0, --rc);
    if (rc === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(typeRole, deleting ? 60 : 100);
}
setTimeout(typeRole, 1500);

// ── SCROLL REVEAL ─────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.skill-card, .project-card, .writeup-card, .about-text, .about-terminal, .contact-left, .contact-form'
).forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// ── ACTIVE NAV LINK ───────────────────────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// ── CONTACT FORM ──────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
  btn.style.background = 'var(--accent2)';
  btn.style.color = '#0a0e17';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}
