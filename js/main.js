// ── MOBILE MENU TOGGLE ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.style.color = '#1D9E75';
    link.style.fontWeight = '500';
  }
});

// ── FADE IN ON SCROLL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ── NAVBAR SHADOW ON SCROLL ──
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ── TYPING EFFECT ON HERO ──
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
  heroTitle.style.opacity = '1';
  heroTitle.style.animation = 'fadeSlideUp 0.8s ease forwards';
}

// ── PROJECT CARD TILT EFFECT ──
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * 3;
    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    card.style.transition = 'transform 0.4s ease';
  });
});

// ── SCROLL TO TOP BUTTON ──
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = '1';
    scrollBtn.style.pointerEvents = 'auto';
  } else {
    scrollBtn.style.opacity = '0';
    scrollBtn.style.pointerEvents = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});