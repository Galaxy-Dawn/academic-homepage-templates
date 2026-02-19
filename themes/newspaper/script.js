// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateBtn();

function updateBtn() {
    if (themeToggle) {
        themeToggle.textContent = html.getAttribute('data-theme') === 'dark' ? 'Morning Ed.' : 'Evening Ed.';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateBtn();
    });
}

// Dynamic date
const dateline = document.getElementById('dateline');
if (dateline) {
    dateline.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Smooth scroll for section nav
document.querySelectorAll('.section-nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

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
    if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | The Academic Gazette`;
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function populateLists(cfg) {
  const artCols = document.getElementById('cfg-publications');
  if (artCols && cfg.publications?.length) {
    artCols.innerHTML = cfg.publications.map(p => `
      <article class="news-article">
        <h4 class="article-headline">${p.title}</h4>
        <p class="article-byline">${boldName(p.authors, cfg.name)}</p>
        <p class="article-source">${p.venue}</p>
        ${p.abstract ? `<p class="article-body">${p.abstract}</p>` : ''}
        <div class="article-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}">[${k.toUpperCase()}]</a>`).join(' ')}</div>
      </article>`).join('');
  }
  const classifieds = document.getElementById('cfg-projects');
  if (classifieds && cfg.projects?.length) {
    classifieds.innerHTML = cfg.projects.map(p => `
      <div class="classified-ad">
        <h5 class="ad-title">★ ${p.name}</h5>
        <p class="ad-body">${p.desc}</p>
        <p class="ad-tags">${(p.tags||[]).join(' · ')}</p>
      </div>`).join('');
  }
  const bulletin = document.getElementById('cfg-news');
  if (bulletin && cfg.news?.length) {
    bulletin.innerHTML = cfg.news.map(n => `
      <div class="bulletin-item">
        <span class="bulletin-date">${n.date}</span>
        <span class="bulletin-badge">${n.badge.toUpperCase()}</span>
        <span class="bulletin-text">${n.text}</span>
      </div>`).join('');
  }
  const career = document.getElementById('cfg-experience');
  if (career) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="career-block"><h5 class="career-cat">EDUCATION</h5>${edu.map(e=>`<div class="career-entry"><span class="career-period">${e.period}</span><strong>${e.degree}</strong><span class="career-place">${e.institution}</span></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="career-block"><h5 class="career-cat">EXPERIENCE</h5>${exp.map(e=>`<div class="career-entry"><span class="career-period">${e.period}</span><strong>${e.role}</strong><span class="career-place">${e.institution}</span></div>`).join('')}</div>`;
    if (html) career.innerHTML = html;
  }
}
