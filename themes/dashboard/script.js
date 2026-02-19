// Theme Toggle
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

function toggleTheme() {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);

// Sidebar Navigation - active state on scroll
const sidebarLinks = document.querySelectorAll('.sidebar-icon[data-section]');
const sections = document.querySelectorAll('.panel-section');

function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.id;
        }
    });
    sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === current);
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Smooth scroll for sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu toggle
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
let overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeSidebar);

// Close sidebar on nav click (mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Publication sorting
const sortBtns = document.querySelectorAll('.sort-btn');
const pubBody = document.getElementById('cfg-publications');

sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sortBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const rows = [...pubBody.querySelectorAll('.pub-row')];
        const key = btn.dataset.sort;

        rows.sort((a, b) => {
            const av = a.dataset[key] || '';
            const bv = b.dataset[key] || '';
            return key === 'year' ? bv.localeCompare(av) : av.localeCompare(bv);
        });

        rows.forEach(r => pubBody.appendChild(r));
    });
});

// Scroll animations
const animEls = document.querySelectorAll('.panel');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

animEls.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
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
    if (key === 'role_university') el.textContent = `${cfg.role} at ${cfg.university}`;
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Dashboard`;
  if (cfg.photo) {
    const av = document.querySelector('.profile-avatar');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function populateLists(cfg) {
  const pubBody = document.getElementById('cfg-publications');
  if (pubBody && cfg.publications?.length) {
    pubBody.innerHTML = cfg.publications.map(p => `
      <div class="pub-row" data-year="${p.year}" data-title="${p.title}">
        <span class="pub-col-year"><span class="year-badge">${p.year}</span></span>
        <span class="pub-col-title">
          <strong>${p.title}</strong>
          <span class="pub-authors">${boldName(p.authors, cfg.name)}</span>
        </span>
        <span class="pub-col-venue">${p.venue}</span>
        <span class="pub-col-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="link-chip">${k.toUpperCase()}</a>`).join('')}</span>
      </div>`).join('');
  }
  const projGrid = document.getElementById('cfg-projects');
  if (projGrid && cfg.projects?.length) {
    projGrid.innerHTML = cfg.projects.map(p => `
      <div class="panel kanban-card">
        <div class="panel-header"><span class="panel-dot green"></span> Active</div>
        <h3 class="kanban-title">${p.name}</h3>
        <p class="kanban-desc">${p.desc}</p>
        <div class="kanban-tags">${(p.tags||[]).map(t=>`<span class="ktag">${t}</span>`).join('')}</div>
        <div class="kanban-footer">
          <span class="kanban-status status-active">Active</span>
          ${p.url ? `<a href="${p.url}" class="link-chip">GitHub</a>` : ''}
        </div>
      </div>`).join('');
  }
  const feedList = document.getElementById('cfg-news');
  if (feedList && cfg.news?.length) {
    feedList.innerHTML = cfg.news.map(n => `
      <div class="feed-item">
        <div class="feed-dot green"></div>
        <div class="feed-body">
          <span class="feed-time">${n.date}</span>
          <span class="feed-badge badge-new">${n.badge}</span>
          <span class="feed-text">${n.text}</span>
        </div>
      </div>`).join('');
  }
  const expGrid = document.getElementById('cfg-experience');
  if (expGrid) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="panel timeline-panel"><div class="panel-header"><span class="panel-dot purple"></span> Education</div><div class="timeline">${edu.map(e=>`<div class="tl-item"><div class="tl-marker"></div><div class="tl-content"><span class="tl-period">${e.period}</span><h4>${e.degree}</h4><p>${e.institution}</p></div></div>`).join('')}</div></div>`;
    if (exp.length) html += `<div class="panel timeline-panel"><div class="panel-header"><span class="panel-dot orange"></span> Work</div><div class="timeline">${exp.map(e=>`<div class="tl-item"><div class="tl-marker"></div><div class="tl-content"><span class="tl-period">${e.period}</span><h4>${e.role}</h4><p>${e.institution}</p></div></div>`).join('')}</div></div>`;
    if (html) expGrid.innerHTML = html;
  }
}