// Theme Toggle
const html = document.documentElement;
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);

function toggleTheme() {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.querySelectorAll('.theme-label').forEach(el => {
        el.textContent = next === 'dark' ? 'Light' : 'Dark';
    });
}

// Update labels on load
document.querySelectorAll('.theme-label').forEach(el => {
    el.textContent = saved === 'dark' ? 'Light' : 'Dark';
});

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('mobileThemeToggle')?.addEventListener('click', toggleTheme);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active nav tracking on scroll
const sections = document.querySelectorAll('.hero-composition, .bh-section');
const navItems = document.querySelectorAll('.geo-nav-item[data-section]');

function updateActiveNav() {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === current);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

// Back to top
const btt = document.querySelector('.back-to-top');
if (btt) {
    window.addEventListener('scroll', () => {
        btt.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

// ── Config Population ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
});

function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (key === 'role_university') el.textContent = `${cfg.role} at ${cfg.university}`;
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.image-placeholder, .hero-photo');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function populateLists(cfg) {
  const pubList = document.getElementById('cfg-publications');
  if (pubList && cfg.publications?.length) {
    pubList.innerHTML = cfg.publications.map(p => `
      <article class="pub-card scroll-animate" data-year="${p.year}">
        <div class="pub-year">${p.year}</div>
        <div class="pub-content">
          <div class="pub-header">
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k.toUpperCase()}</a>`).join('')}</div>
          </div>
          <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
          <p class="pub-venue">${p.venue}</p>
        </div>
      </article>`).join('');
  }
  const projGrid = document.getElementById('cfg-projects');
  if (projGrid && cfg.projects?.length) {
    projGrid.innerHTML = cfg.projects.map(p => `
      <article class="project-card scroll-animate">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </article>`).join('');
  }
  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item scroll-animate">
        <span class="news-date">${n.date}</span>
        <div class="news-content">
          <span class="news-badge">${n.badge}</span>
          <span class="news-text">${n.text}</span>
        </div>
      </div>`).join('');
  }
  const expGrid = document.getElementById('cfg-experience');
  if (expGrid) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="exp-category"><h3>Education</h3>${edu.map(e=>`<div class="exp-item scroll-animate"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.degree}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="exp-category"><h3>Experience</h3>${exp.map(e=>`<div class="exp-item scroll-animate"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.role}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (html) expGrid.innerHTML = html;
  }
}
