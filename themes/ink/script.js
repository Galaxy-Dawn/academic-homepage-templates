// Theme toggle with localStorage
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const saved = localStorage.getItem('ink-theme');
if (saved) html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('ink-theme', next);
});

// Vertical TOC active state via IntersectionObserver
const sections = document.querySelectorAll('section[id], header[id]');
const tocLinks = document.querySelectorAll('.toc-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.toc-link[data-section="${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-20% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// Smooth scroll on TOC link click
tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
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
    if (key === 'role_university') el.textContent = `${cfg.role} in Computer Science, ${cfg.university}`;
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.hero-photo');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function populateLists(cfg) {
  const bibList = document.getElementById('cfg-publications');
  if (bibList && cfg.publications?.length) {
    bibList.innerHTML = cfg.publications.map(p => `
      <li class="bib-entry">
        <span class="bib-authors">${boldName(p.authors, cfg.name)}.</span>
        <span class="bib-title">"${p.title}."</span>
        <span class="bib-venue"><em>${p.venue}</em>, ${p.year}.</span>
        <span class="bib-links">${Object.entries(p.links||{}).map(([k,v])=>`[<a href="${v}">${k.toUpperCase()}</a>]`).join(' ')}</span>
      </li>`).join('');
  }
  const projCont = document.getElementById('cfg-projects');
  if (projCont && cfg.projects?.length) {
    projCont.innerHTML = cfg.projects.map(p => `
      <div class="project-entry">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>`).join('');
  }
  const expCont = document.getElementById('cfg-experience');
  if (expCont) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    const items = [...edu.map(e=>({period:e.period, title:e.degree, sub:e.institution})), ...exp.map(e=>({period:e.period, title:e.role, sub:e.institution}))];
    if (items.length) {
      expCont.innerHTML = `<div class="timeline">${items.map(i=>`
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-period">${i.period}</span>
            <h3>${i.title}</h3>
            <p>${i.sub}</p>
          </div>
        </div>`).join('')}</div>`;
    }
  }
}
