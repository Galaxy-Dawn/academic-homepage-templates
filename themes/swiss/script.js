// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Sidebar active link tracking
const sideLinks = document.querySelectorAll('.side-link');
const sections = document.querySelectorAll('.swiss-section');

sideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sideLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Update active link on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            sideLinks.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === '#' + id);
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

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
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.about-photo, .hero-photo');
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
      <div class="pub-row">
        <span class="pub-year-col">${p.year}</span>
        <div class="pub-info">
          <h3>${p.title}</h3>
          <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
          <p class="pub-venue">${p.venue}</p>
        </div>
        <div class="pub-actions">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}">${k.toUpperCase()}</a>`).join('')}</div>
      </div>`).join('');
  }
  const projCont = document.getElementById('cfg-projects');
  if (projCont && cfg.projects?.length) {
    projCont.innerHTML = cfg.projects.map(p => `
      <div class="project-row">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="tag-row">${(p.tags||[]).map(t=>`<span class="swiss-tag">${t}</span>`).join('')}</div>
      </div>`).join('');
  }
  const newsCont = document.getElementById('cfg-news');
  if (newsCont && cfg.news?.length) {
    newsCont.innerHTML = cfg.news.map(n => `
      <div class="news-row">
        <span class="news-date-col">${n.date}</span>
        <span class="news-badge-col">${n.badge.toUpperCase()}</span>
        <span>${n.text}</span>
      </div>`).join('');
  }
  const expCont = document.getElementById('cfg-experience');
  if (expCont) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="exp-block"><h4 class="exp-cat">Education</h4>${edu.map(e=>`<div class="exp-row"><span class="exp-period-col">${e.period}</span><div><strong>${e.degree}</strong><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="exp-block"><h4 class="exp-cat">Experience</h4>${exp.map(e=>`<div class="exp-row"><span class="exp-period-col">${e.period}</span><div><strong>${e.role}</strong><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (html) expCont.innerHTML = html;
  }
}
