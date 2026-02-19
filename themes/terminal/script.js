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

// Terminal tab navigation + smooth scroll
const tabs = document.querySelectorAll('.terminal-tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = document.querySelector(tab.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Update active tab on scroll
const sections = document.querySelectorAll('.terminal-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            tabs.forEach(t => {
                t.classList.toggle('active', t.dataset.section === id);
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
  populateTerminal(USER_CONFIG);
});

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function populateTerminal(cfg) {
  if (cfg.name) document.title = `${cfg.name.toLowerCase().replace(/\s+/g,'_')}@academia ~ %`;
  const roleEl = document.getElementById('cfg-role');
  if (roleEl) roleEl.textContent = `${cfg.role} @ ${cfg.university}`;

  const pubCont = document.getElementById('cfg-publications');
  if (pubCont && cfg.publications?.length) {
    const header = pubCont.querySelector('.ls-header');
    const rows = cfg.publications.map(p => `
      <div class="ls-row">
        <span class="ls-col ls-date">${p.year}-01</span>
        <span class="ls-col ls-name">
          <a href="${p.links?.pdf||'#'}" class="file-link">${p.title.toLowerCase().replace(/\s+/g,'_')}.pdf</a>
          <span class="file-meta">
            <span class="file-authors">${boldName(p.authors, cfg.name)}</span>
            <span class="file-venue">${p.venue}</span>
          </span>
          <span class="file-actions">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="action-link">[${k}]</a>`).join('')}</span>
        </span>
      </div>`).join('');
    pubCont.innerHTML = (header ? header.outerHTML : '') + rows;
  }

  const projCont = document.getElementById('cfg-projects');
  if (projCont && cfg.projects?.length) {
    const branches = cfg.projects.map((p, i) => `
      <div class="tree-item">
        <span class="tree-branch">${i < cfg.projects.length-1 ? '├──' : '└──'}</span>
        <span class="tree-folder">📁 ${p.name.toLowerCase().replace(/\s+/g,'-')}/</span>
        <span class="tree-desc">${p.desc}</span>
        <div class="tree-tags">${(p.tags||[]).map(t=>`<span class="tree-tag">${t}</span>`).join('')}</div>
      </div>`).join('');
    projCont.innerHTML = branches;
  }

  const newsCont = document.getElementById('cfg-news');
  if (newsCont && cfg.news?.length) {
    newsCont.innerHTML = cfg.news.map(n => `
      <div class="log-entry">
        <span class="log-level log-${n.badge.toLowerCase()}">${n.badge.toUpperCase()}</span>
        <span class="log-msg">${n.text}</span>
      </div>`).join('');
  }

  const expEl = document.getElementById('cfg-experience');
  if (expEl) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    const lines = [
      'education:',
      ...edu.map(e=>`  - degree: ${e.degree}\n    institution: ${e.institution}\n    period: ${e.period}`),
      'experience:',
      ...exp.map(e=>`  - role: ${e.role}\n    institution: ${e.institution}\n    period: ${e.period}`),
    ];
    expEl.innerHTML = lines.map(l => {
      if (l.endsWith(':')) return `<span class="yaml-key">${l}</span>`;
      return l.replace(/^(\s+- )(\w+:)(.*)$/gm, '$1<span class="yaml-key">$2</span><span class="yaml-val">$3</span>');
    }).join('\n');
  }
}
